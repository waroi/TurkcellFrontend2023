import CartCard from '../components/CartCard.js';
import Store from '../model/Store.js';
const newStore = new Store();
renderCart();
function renderCart() {
 newStore.getCart();
 newStore.getProducts();
 setTimeout(() => {
  let count = 0;
  cartListDIV.innerHTML =
   newStore.cart
    .map((cart) => {
     const prod = newStore.findProductInStore(cart.id);
     count += prod.price * cart.quantity;
     return CartCard(prod, cart.quantity);
    })
    .join('') +
   `<div class="border border-1 p-16 mt-16 rounded-2 bg-light text-end fs-3">Toplam ${
    count > 0 ? count.toFixed(3) : count
   } TL </div>`;
 }, 200);
}
window.addEventListener('click', async (e) => {
 if (e.target.innerText == 'Ekle') {
  await newStore.addCart(e.target.id);
  renderCart();
 }
 if (e.target.innerText == 'Çıkar') {
  await newStore.removeCart(e.target.id);
  renderCart();
 }
});
purchaseCart.addEventListener('click', async () => {
 await newStore.deleteAllSCart();
 setTimeout(() => {
  renderCart();
 }, 500);
});
