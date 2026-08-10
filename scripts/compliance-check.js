#!/usr/bin/env node
'use strict';

/*
 * Yuuki compliance linter.
 *
 * Scans shippable copy for language that would move a SKU out of the cosmetic
 * category (Tier 1) or that carries substantiation risk (Tier 2).
 *
 * Exit codes:
 *   0  clean
 *   1  one or more Tier 1 hits, or Tier 2 hits with no substantiation record
 *   2  the checker itself could not run (missing/!invalid config)
 *
 * Flags:
 *   --fix-suggest   print the Tier 3 replacement inline. Never edits files.
 *   --json          machine-readable output
 *   --quiet         findings only, no summary chrome
 *
 * Plain Node, no dependencies. This file is excluded from its own scan.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TERMS_PATH = path.join(ROOT, 'compliance', 'terms.json');
const SUBSTANTIATION_PATH = path.join(ROOT, 'compliance', 'substantiation.json');

const argv = process.argv.slice(2);
const OPT = {
  fixSuggest: argv.includes('--fix-suggest'),
  json: argv.includes('--json'),
  quiet: argv.includes('--quiet')
};

/* ------------------------------------------------------------------ *
 * What gets scanned
 *
 * Directories and files listed here are excluded because they legitimately
 * contain the blocked vocabulary (the term lists themselves, the policy docs
 * that quote them) or are not shippable copy (git internals, binaries).
 * ------------------------------------------------------------------ */

const EXCLUDED_DIRS = new Set(['.git', 'node_modules', 'compliance', '.github']);

const EXCLUDED_FILES = new Set([
  'COMPLIANCE.md',
  path.join('scripts', 'compliance-check.js')
]);

// Surfaces that carry consumer-facing claims. Extend as the repo grows:
// email/, sms/, reviews/, briefs/, blog/ all land here automatically by extension.
const SCANNED_EXTENSIONS = new Set([
  '.html', '.htm', '.js', '.mjs', '.cjs', '.json',
  '.md', '.txt', '.svg', '.css',
  '.yml', '.yaml', '.csv'
]);

// Filenames are checked too — an image called "anti-dandruff-before.jpg" ships
// its claim in the URL.
const FILENAME_SCAN_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.pdf', '.mp4', '.mov'
]);

/* ------------------------------------------------------------------ *
 * Config loading
 * ------------------------------------------------------------------ */

function die(message) {
  process.stderr.write('compliance-check: ' + message + '\n');
  process.exit(2);
}

function loadJson(file, label) {
  if (!fs.existsSync(file)) die('missing ' + label + ' at ' + path.relative(ROOT, file));
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    die('could not parse ' + label + ': ' + err.message);
  }
}

const config = loadJson(TERMS_PATH, 'terms.json');
const substantiation = loadJson(SUBSTANTIATION_PATH, 'substantiation.json');

const substantiatedTerms = new Set(
  (substantiation.substantiated || [])
    .filter(function (entry) { return entry && entry.term && entry.record; })
    .map(function (entry) { return entry.term.toLowerCase(); })
);

/* ------------------------------------------------------------------ *
 * Matching
 *
 * Word-boundary aware and case-insensitive. Hyphens, apostrophes and
 * possessives are non-word characters, so \b already catches "anti-dandruff"
 * and "dandruff's". Multi-word terms tolerate any run of whitespace so a
 * phrase broken across two lines of HTML still matches.
 * ------------------------------------------------------------------ */

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildMatcher(term) {
  const parts = term.trim().split(/\s+/).map(escapeRegex);
  // Separator tolerates hyphens and line breaks as well as spaces, so
  // "hair-loss" and a phrase split across two lines of HTML both match.
  const body = parts.join('[\\s\\-\\u2010-\\u2015]+');
  // \b fails against a leading/trailing non-word char (e.g. "100% natural"),
  // so only apply the boundary where the edge character is a word character.
  const left = /^\w/.test(term) ? '\\b' : '';
  const right = /\w$/.test(term) ? '\\b' : '';
  return new RegExp(left + body + right, 'gi');
}

const tier1 = [];
const tier2 = [];
const tier3 = [];

(config.terms || []).forEach(function (entry) {
  const record = {
    term: entry.term,
    tier: entry.tier,
    reason: entry.reason || '',
    replacement: entry.replacement || '',
    scope: entry.scope || null,
    regex: entry.pattern
      ? new RegExp(entry.pattern, 'gi')
      : buildMatcher(entry.term)
  };
  if (entry.tier === 1) tier1.push(record);
  else if (entry.tier === 2) tier2.push(record);
  else if (entry.tier === 3) tier3.push(record);
});

// Approved phrases that legitimately contain a blocked word, e.g.
// "leaves the scalp feeling clean" contains Tier 2 "clean".
const allowMatchers = []
  .concat(config.allowPhrases || [])
  .concat(tier3.map(function (t) { return t.term; }))
  .map(function (phrase) {
    return { phrase: phrase, regex: buildMatcher(phrase) };
  });

function allowedSpans(line) {
  const spans = [];
  allowMatchers.forEach(function (matcher) {
    matcher.regex.lastIndex = 0;
    let m;
    while ((m = matcher.regex.exec(line)) !== null) {
      spans.push([m.index, m.index + m[0].length]);
      if (m.index === matcher.regex.lastIndex) matcher.regex.lastIndex++;
    }
  });
  return spans;
}

function insideAllowed(spans, start, end) {
  return spans.some(function (span) { return start >= span[0] && end <= span[1]; });
}

/* ------------------------------------------------------------------ *
 * Walking the tree
 * ------------------------------------------------------------------ */

function walk(dir, out) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    return out;
  }
  entries.forEach(function (entry) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(ROOT, full);
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) return;
      walk(full, out);
    } else if (entry.isFile()) {
      if (EXCLUDED_FILES.has(rel) || EXCLUDED_FILES.has(entry.name)) return;
      out.push(full);
    }
  });
  return out;
}

/* ------------------------------------------------------------------ *
 * Scanning
 * ------------------------------------------------------------------ */

const findings = [];

function record(file, lineNo, column, context, entry, kind) {
  findings.push({
    file: path.relative(ROOT, file),
    line: lineNo,
    column: column,
    term: entry.term,
    tier: entry.tier,
    reason: entry.reason,
    replacement: entry.replacement,
    context: context.trim().slice(0, 160),
    kind: kind
  });
}

function scanLine(file, lineNo, line) {
  const allowed = allowedSpans(line);

  [].concat(tier1, tier2).forEach(function (entry) {
    entry.regex.lastIndex = 0;
    let m;
    while ((m = entry.regex.exec(line)) !== null) {
      const start = m.index;
      const end = start + m[0].length;

      if (m[0].length === 0) { entry.regex.lastIndex++; continue; }

      // Tier 2 terms are permitted inside explicitly approved phrases.
      if (entry.tier === 2 && insideAllowed(allowed, start, end)) continue;

      // Tier 2 terms with a registered substantiation record pass.
      if (entry.tier === 2 && substantiatedTerms.has(entry.term.toLowerCase())) continue;

      record(file, lineNo, start + 1, line, entry, 'content');

      if (m.index === entry.regex.lastIndex) entry.regex.lastIndex++;
    }
  });
}

function scanFilename(file) {
  const rel = path.relative(ROOT, file);
  const base = path.basename(file);
  // Filenames use hyphens as word separators; \b handles that already.
  [].concat(tier1, tier2).forEach(function (entry) {
    entry.regex.lastIndex = 0;
    const m = entry.regex.exec(base);
    if (m && (entry.tier === 1 || !substantiatedTerms.has(entry.term.toLowerCase()))) {
      findings.push({
        file: rel,
        line: 0,
        column: 0,
        term: entry.term,
        tier: entry.tier,
        reason: entry.reason,
        replacement: entry.replacement,
        context: base,
        kind: 'filename'
      });
    }
  });
}

const files = walk(ROOT, []);

files.forEach(function (file) {
  const ext = path.extname(file).toLowerCase();

  scanFilename(file);

  if (!SCANNED_EXTENSIONS.has(ext)) {
    if (!FILENAME_SCAN_EXTENSIONS.has(ext)) return;
    return; // binary: filename already checked above
  }

  let text;
  try {
    text = fs.readFileSync(file, 'utf8');
  } catch (err) {
    return;
  }

  text.split(/\r?\n/).forEach(function (line, i) {
    scanLine(file, i + 1, line);
  });
});

/* ------------------------------------------------------------------ *
 * Reporting
 * ------------------------------------------------------------------ */

findings.sort(function (a, b) {
  if (a.tier !== b.tier) return a.tier - b.tier;
  if (a.file !== b.file) return a.file < b.file ? -1 : 1;
  return a.line - b.line;
});

const tier1Hits = findings.filter(function (f) { return f.tier === 1; });
const tier2Hits = findings.filter(function (f) { return f.tier === 2; });
const failed = tier1Hits.length > 0 || tier2Hits.length > 0;

if (OPT.json) {
  process.stdout.write(JSON.stringify({
    ok: !failed,
    tier1: tier1Hits.length,
    tier2: tier2Hits.length,
    filesScanned: files.length,
    findings: findings
  }, null, 2) + '\n');
  process.exit(failed ? 1 : 0);
}

const BOLD = '[1m';
const RED = '[31m';
const YELLOW = '[33m';
const GREEN = '[32m';
const DIM = '[2m';
const RESET = '[0m';
const color = process.stdout.isTTY;
function c(code, s) { return color ? code + s + RESET : s; }

if (!failed) {
  if (!OPT.quiet) {
    process.stdout.write(c(GREEN, '✓ compliance: clean') + ' ' + c(DIM, '(' + files.length + ' files scanned)') + '\n');
  }
  process.exit(0);
}

const groupLabel = {
  1: c(RED + BOLD, 'TIER 1 — DRUG TRIGGER') + c(DIM, '  (blocks the commit; converts the SKU to an unapproved drug)'),
  2: c(YELLOW + BOLD, 'TIER 2 — SUBSTANTIATION RISK') + c(DIM, '  (register evidence in compliance/substantiation.json to clear)')
};

[1, 2].forEach(function (tier) {
  const hits = findings.filter(function (f) { return f.tier === tier; });
  if (!hits.length) return;
  process.stdout.write('\n' + groupLabel[tier] + '\n\n');
  hits.forEach(function (f) {
    const loc = f.kind === 'filename'
      ? f.file + c(DIM, '  (filename)')
      : f.file + ':' + f.line + ':' + f.column;
    process.stdout.write('  ' + c(BOLD, loc) + '\n');
    process.stdout.write('    ' + c(tier === 1 ? RED : YELLOW, '"' + f.term + '"') + '  ' + c(DIM, f.reason) + '\n');
    if (f.context) process.stdout.write('    ' + c(DIM, '› ' + f.context) + '\n');
    if (OPT.fixSuggest && f.replacement) {
      process.stdout.write('    ' + c(GREEN, 'suggest: ' + f.replacement) + '\n');
    }
    process.stdout.write('\n');
  });
});

if (!OPT.quiet) {
  process.stdout.write(
    c(BOLD, 'compliance: ') +
    c(RED, tier1Hits.length + ' Tier 1') + ', ' +
    c(YELLOW, tier2Hits.length + ' Tier 2') +
    c(DIM, '  across ' + files.length + ' files scanned') + '\n'
  );
  if (!OPT.fixSuggest) {
    process.stdout.write(c(DIM, 'run with --fix-suggest to see approved replacements\n'));
  }
}

process.exit(1);
