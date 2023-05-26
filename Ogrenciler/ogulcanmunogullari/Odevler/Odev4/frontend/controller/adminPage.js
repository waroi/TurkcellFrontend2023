import productCard from '../components/ProductCard.js';
import MyAlert from '../model/MyAlert.js';
import Product from '../model/Product.js';
import Store from '../model/Store.js';
import checkForm from '../utils/checkForm.js';
const newStore = new Store();
let productsForModal = [];
newStore.getProducts().then((products) => {
 productsForModal = products;
 categoryLaptopsDIV.innerHTML = products
  .map((product) => productCard(product))
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

//Burası da html olmadığı için window ile alındı
window.addEventListener('click', (e) => {
 const product = e.target.parentElement.parentElement;
 if (product && product.classList.contains('product-card')) {
  const selectedProduct = productsForModal.find(
   (prod) => prod.id == product.id,
  );
  idInput.innerHTML = selectedProduct.id;
  brandInput.value = selectedProduct.brand;
  logoInput.value = selectedProduct.logo;
  image1Input.value = selectedProduct.image1;
  image2Input.value = selectedProduct.image2;
  image3Input.value = selectedProduct.image3;
  titleInput.value = selectedProduct.title;
  subTitleInput.value = selectedProduct.subTitle;
  priceInput.value = selectedProduct.price;
  stockInput.value = selectedProduct.stock;
  addProduct.disabled = true;
  changeProduct.disabled = false;
  deleteProduct.disabled = false;
  openModalButton.click();
 }
});
deleteProduct.addEventListener('click', async () => {
 const id = idInput.innerHTML;
 await newStore.deleteProduct(id);
 await newStore.getProducts().then((products) => {
  productsForModal = products;
  categoryLaptopsDIV.innerHTML = products
   .map((product) => productCard(product))
   .join('');
 });
});
changeProduct.addEventListener('click', async () => {
 const id = idInput.innerHTML;
 if (checkForm()) {
  MyAlert.Start('alertDIV', 'Lütfen Tüm Alanları Doldurunuz', 'danger');
 } else {
  const newProduct = new Product(
   brandInput.value,
   logoInput.value,
   image1Input.value,
   image2Input.value,
   image3Input.value,
   titleInput.value,
   subTitleInput.value,
   Number(priceInput.value),
   Number(stockInput.value),
   Number(id),
  );
  await newStore.changeProduct(newProduct);
  await newStore.getProducts().then((products) => {
   productsForModal = products;
   categoryLaptopsDIV.innerHTML = products
    .map((product) => productCard(product))
    .join('');
  });
  addProduct.disabled = true;
  MyAlert.Start('alertDIV', 'Ürün Başarıyla Değiştirildi', 'success');
 }
});
document.querySelectorAll('#addNewProduct').forEach((addNew) => {
 addNew.addEventListener('click', () => {
  addProduct.disabled = false;
  changeProduct.disabled = true;
  deleteProduct.disabled = true;
  modalForm.reset();
 });
});

addProduct.addEventListener('click', async () => {
 if (checkForm()) {
  MyAlert.Start('alertDIV', 'Lütfen Tüm Alanları Doldurunuz', 'danger');
 } else {
  const newProduct = new Product(
   brandInput.value,
   logoInput.value,
   image1Input.value,
   image2Input.value,
   image3Input.value,
   titleInput.value,
   subTitleInput.value,
   Number(priceInput.value),
   Number(stockInput.value),
  );
  const check = productsForModal.some((product) => {
   return (
    product.title == newProduct.title || product.subTitle == newProduct.subTitle
   );
  });
  if (check) {
   MyAlert.Start('alertDIV', 'Bu Ürün Zaten Var', 'danger');
  } else {
   await newStore.addProduct(newProduct);
   await newStore.getProducts().then((products) => {
    productsForModal = products;
    categoryLaptopsDIV.innerHTML = products
     .map((product) => productCard(product))
     .join('');
   });
   MyAlert.Start('alertDIV', 'Ürün Başarıyla Eklendi', 'success');
  }
 }
});
