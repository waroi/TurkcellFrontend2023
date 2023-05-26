import BrandCard from '../components/BrandCard.js';
import productCard from '../components/ProductCard.js';
import Store from '../model/Store.js';
const newStore = new Store();
newStore.getProducts().then((products) => {
 categoryLaptopsDIV.innerHTML = products
  .map((product) => productCard(product))
  .join('');

 let brands = ['Tümü', ...new Set(products.map((p) => p.brand))];

 const brandFilters =
  '<h3>Markalar</h3>' + brands.map((brand) => BrandCard(brand)).join('');

 document.querySelectorAll('#brandFilter').forEach((brandFilter) => {
  brandFilter.innerHTML = brandFilters;
  brandFilter.addEventListener('click', (e) => {
   if (e.target.id && e.target.id != 'brandFilter') {
    if (e.target.id == 'Tümü') {
     newStore.filterBrand = '';
    } else {
     newStore.filterBrand = e.target.id;
    }
    categoryLaptopsDIV.innerHTML = newStore
     .getFilterProducts()
     .map((products) => productCard(products))
     .join('');
   }
  });
 });
});

newStore.getCart().then((cart) => {
 document.querySelectorAll('.badge').forEach((badge) => {
  badge.innerHTML = cart.length;
 });
});
SelectFilter.addEventListener('change', async (e) => {
 newStore.filterSort = e.target.value;
 categoryLaptopsDIV.innerHTML = newStore
  .getFilterProducts()
  .map((products) => productCard(products))
  .join('');
});
document.querySelectorAll('#SearchInput').forEach((search) => {
 search.addEventListener('input', (e) => {
  newStore.filterTitle = e.target.value;
  categoryLaptopsDIV.innerHTML = newStore
   .getFilterProducts()
   .map((products) => productCard(products))
   .join('');
 });
});

//Window dan almamın sebebi productlar dinamik olarak geliyor yani html elementleri burası yüklenirken yoklar.
window.addEventListener('click', (e) => {
 const product = e.target.parentElement.parentElement;
 if (product.classList.contains('product-card')) {
  localStorage.setItem('selectedProduct', product.id);
  window.location.href = './product.html';
 }
});
