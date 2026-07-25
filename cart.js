// Shared cart used by product pages, quiz results, and cart.html.
// Client-side only (localStorage) — there is no payment/checkout backend yet,
// this just tracks picks so a real checkout can be wired in later.
const YUUKI_CART_KEY = 'yuuki_cart';

function cartGet() {
  try {
    return JSON.parse(localStorage.getItem(YUUKI_CART_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function cartSave(cart) {
  localStorage.setItem(YUUKI_CART_KEY, JSON.stringify(cart));
  cartRenderCount();
}

function cartAdd(productId, qty) {
  const cart = cartGet();
  cart[productId] = (cart[productId] || 0) + (qty || 1);
  cartSave(cart);
}

function cartAddMany(productIds) {
  const cart = cartGet();
  productIds.forEach(function (id) {
    cart[id] = (cart[id] || 0) + 1;
  });
  cartSave(cart);
}

function cartSetQty(productId, qty) {
  const cart = cartGet();
  if (qty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = qty;
  }
  cartSave(cart);
}

function cartRemove(productId) {
  const cart = cartGet();
  delete cart[productId];
  cartSave(cart);
}

function cartCount() {
  const cart = cartGet();
  return Object.values(cart).reduce(function (sum, qty) { return sum + qty; }, 0);
}

function formatPrice(n) {
  return '$' + n.toFixed(0);
}

// Auto-applies Ritual Set pricing for every matched KOMÉ+TSUBAKI+YUZU trio in
// the cart (the exact combo "Add All to Cart" produces), pricing anything
// beyond that at each product's individual rate.
function cartPricing() {
  const cart = cartGet();
  const bundleIds = ['kome', 'tsubaki', 'yuzu'];
  const bundleQty = bundleIds.every(function (id) { return cart[id] > 0; })
    ? Math.min.apply(null, bundleIds.map(function (id) { return cart[id]; }))
    : 0;

  const lines = [];
  if (bundleQty > 0) {
    lines.push({ label: 'Ritual Set (KOMÉ + TSUBAKI + YUZU)', qty: bundleQty, unitPrice: RITUAL_SET_PRICE, total: bundleQty * RITUAL_SET_PRICE });
  }
  Object.keys(cart).forEach(function (id) {
    const product = PRODUCTS[id];
    if (!product) return;
    const remaining = cart[id] - (bundleIds.indexOf(id) !== -1 ? bundleQty : 0);
    if (remaining > 0) {
      lines.push({ label: product.name, qty: remaining, unitPrice: product.price, total: remaining * product.price });
    }
  });

  const subtotal = lines.reduce(function (sum, l) { return sum + l.total; }, 0);
  const fullPriceTotal = Object.keys(cart).reduce(function (sum, id) {
    const product = PRODUCTS[id];
    return product ? sum + (product.price * cart[id]) : sum;
  }, 0);

  return { lines: lines, subtotal: subtotal, savings: fullPriceTotal - subtotal };
}

function cartRenderCount() {
  const el = document.getElementById('navCartCount');
  if (!el) return;
  const count = cartCount();
  el.textContent = count;
  el.hidden = count === 0;
}

document.addEventListener('DOMContentLoaded', cartRenderCount);
