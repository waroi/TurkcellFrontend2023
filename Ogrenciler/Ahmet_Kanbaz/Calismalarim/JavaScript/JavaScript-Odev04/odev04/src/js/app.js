const crudProducts = new Crud('http://localhost:3000/products');
const crudCart = new Crud('http://localhost:3000/cart');

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

//Get Detail Modal Elements
const detailProductModal = document.getElementById('detailProductModal');
const detailModalTitle = document.getElementById('detailModalLabel');
const detailModalImage = document.getElementById('detailModalResim');
const detailModalCategory = document.getElementById('detailModalKategoriAdi');
const detailModalProductContent = document.getElementById('detailModalProductDetay');
const detailModalStok = document.getElementById('detailModalStok');
const detailModalPrice = document.getElementById('detailModalFiyat');

const addProductButton = document.getElementById('addProductButton');
const createNewProductButton = document.getElementById('createNewProductButton');
const updateProductButton = document.getElementById('updateProductButton');

const productList = document.getElementById('productList');

const toast = document.getElementById("toastMessage");

//Get Filter Elements
const dropDownItem4Sort = document.querySelectorAll('.dropSort');
const dropDown4CategoriesFilter = document.querySelector('.categoriesFilterDropDown');
const searchInput = document.getElementById('searchInput');
let selectedDropDown = [];
let search = "";
let sort = "";

const allProductsButton = document.getElementById('allProductsButton');

const cartButton = document.querySelector('.cartButton');
const cartBody = document.querySelector('.cartBody');
const cartItemCount = document.getElementById('cartItemCount');


addEventListeners();

function addEventListeners() {
  document.addEventListener('DOMContentLoaded', RequestProducts.showAllProductsFromRequest);
  addProductButton.addEventListener('click', UI.clearForm);
  createNewProductButton.addEventListener('click', Products.addProduct);
  productList.addEventListener('click', Products.detailProduct);
  productList.addEventListener('click', Products.updateProduct);
  productList.addEventListener('click', Products.deleteProduct);
  dropDown4CategoriesFilter.addEventListener('change', Filter.getCheckedCategoryFromDropDown);
  dropDownItem4Sort.forEach(function(item) {
    item.addEventListener('click', Filter.getSortDropDown);
  });
  searchInput.addEventListener('keyup', Filter.getSearchInput);
  allProductsButton.addEventListener('click', Products.showAllProducts4Button);
  cartButton.addEventListener('click', RequestCart.showAllCartFromRequest);
  cartBody.addEventListener('click', UICart.increaseStok4Cart);
  cartBody.addEventListener('click', UICart.decreaseStok4Cart);
  productList.addEventListener('click', Carts.addNewProduct4Cart)
}
