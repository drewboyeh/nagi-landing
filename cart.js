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

function cartRenderCount() {
  const el = document.getElementById('navCartCount');
  if (!el) return;
  const count = cartCount();
  el.textContent = count;
  el.hidden = count === 0;
}

document.addEventListener('DOMContentLoaded', cartRenderCount);
