import singleProduct from '../components/singleProduct.js';
import Store from '../model/Store.js';
const newStore = new Store();
newStore.getProducts();
newStore.getCart().then((cart) => {
 document.querySelectorAll('.badge').forEach((badge) => {
  badge.innerHTML = cart.length;
 });
});
const SELECTED_PRODUCT = localStorage.getItem('selectedProduct');
newStore.getSProduct(SELECTED_PRODUCT).then((product) => {
 renderProduct(product);
});

function renderProduct(product) {
 productDIV.innerHTML = singleProduct(product);
 breadCrumbBrand.innerHTML = product.brand;
 breadCrumbSubTitle.innerHTML = product.subTitle;
}

//Window dan almamın sebebi product dinamik olarak geliyor yani html elementleri burası yüklenirken yoklar.
window.addEventListener('click', async (e) => {
 if (e.target.id == 'addCart') {
  const { product, cartBadge } = await newStore.addCart(SELECTED_PRODUCT);
  document.querySelectorAll('.badge').forEach((badge) => {
   badge.innerHTML = cartBadge.length;
  });
  setTimeout(() => {
   renderProduct(product);
  }, 200);
 }
});
