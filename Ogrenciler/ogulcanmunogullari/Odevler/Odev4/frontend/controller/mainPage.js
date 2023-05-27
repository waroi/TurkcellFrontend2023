import productCard from '../components/ProductCard.js';
import Store from '../model/Store.js';
const newStore = new Store();

newStore.getProducts().then((products) => {
 const slicedProducts = products.slice(0, 4);
 laptopsDIV.innerHTML = slicedProducts
  .map((product) => productCard(product))
  .join('');
 const EVENT = document.querySelectorAll('.product-card');
 EVENT.forEach((product) => {
  product.addEventListener('click', () => {
   localStorage.setItem('selectedProduct', product.id);
   window.location.href = 'view/product.html';
  });
 });
});
newStore.getCart().then((cart) => {
 document.querySelectorAll('.badge').forEach((badge) => {
  badge.innerHTML = cart.length;
 });
});
