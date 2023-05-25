//Get Create and Update Modal Elements
const addAndUpdateProductModal  = document.getElementById('addAndUpdateProductModal');
const modalProductTitle = document.getElementById('addAndUpdateProductModalBaslik');
const modalProductForm = document.getElementById('modalProductForm');
const modalProductName = document.getElementById('modalProductAdi');
const modalProductCategory = document.getElementById('modalProductKategori');
const modalProductImageUrl = document.getElementById('modalProductResimUrl');
const modalProductPrice = document.getElementById('modalProductFiyat');
const modalProductStok = document.getElementById('modalProductStokSayisi');
const modalProductDetail = document.getElementById('modalProductDetay');

const addProductButton = document.getElementById('addProductButton');
const createNewProductButton = document.getElementById('createNewProductButton');

addEventListeners();

function addEventListeners() {
  addProductButton.addEventListener('click', UI.clearForm);
  createNewProductButton.addEventListener('click', Products.addProduct);
}
