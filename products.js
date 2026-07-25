// Single source of truth for product names/copy — product pages, the quiz,
// and the cart all read from this instead of hardcoding names anywhere.
//
// price and ingredients are intentionally left blank/TBD — real pricing and
// exact formulas need to come from you rather than being invented here.
const PRODUCTS = {
  kome: {
    id: 'kome',
    name: 'KOMÉ',
    japanese: 'コメ',
    role: 'Wash',
    step: 'Step 1 · Cleanse',
    tagline: 'The purifying rice-water wash.',
    url: 'product-kome.html',
    price: null,
    descriptions: {
      default: 'A lightweight first cleanse that lifts everyday oil and residue, prepping the scalp for what comes next — the ritual foundation everyone starts with.',
      gentle: 'A soft, rice-water cleanse that lifts residue without stripping — built for a scalp that needs less roughing up, not more.',
      clarifying: 'A thorough first pass that breaks down buildup and excess oil at the root, so nothing gets trapped under the next step.'
    },
    ingredients: []
  },
  tsubaki: {
    id: 'tsubaki',
    name: 'TSUBAKI',
    japanese: '椿',
    role: 'Conditioner',
    step: 'Step 2 · Condition',
    tagline: 'The camellia rice cream conditioner.',
    url: 'product-tsubaki.html',
    price: null,
    descriptions: {
      default: 'A rice-cream conditioner that seals in moisture and smooths the cuticle — the second half of the ritual reset.',
      gentle: 'A rich, camellia-oil-forward conditioner that nourishes a dry or flaky scalp without the heavy, weighed-down feeling of mass-market formulas.',
      clarifying: 'A light-weight conditioner that softens without re-coating the scalp in the residue you just cleansed away.'
    },
    ingredients: []
  },
  yuzu: {
    id: 'yuzu',
    name: 'YUZU',
    japanese: '柚子',
    role: 'Leave-in Curl Cream',
    step: 'Step 3 · Define',
    tagline: 'The leave-in curl cream.',
    url: 'product-yuzu.html',
    price: null,
    descriptions: {
      default: 'A leave-in yuzu cream that defines curl pattern and knocks down frizz, without weighing texture down.',
      humid: 'Built for humidity — a leave-in yuzu cream that holds curl definition and blocks frizz even when the air outside won’t cooperate.',
      dryCold: 'A protective leave-in for dry or cold air, sealing in moisture so curls stay defined instead of static and brittle.'
    },
    ingredients: []
  }
};
