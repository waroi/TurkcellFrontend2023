import ViewGridCard from "./Components/viewGridCard.js";
import ViewListCard from "./Components/viewListCard.js";
import Checkbox from "./Components/checkbox.js";
import Fetch from "./fetch.js";
import UI from "./ui.js";
import Filter from "./filter.js";
// import Detail from "./Components/detailModal.js";

const request = new Fetch("http://localhost:3000/posts");

const viewGridList = document.getElementById("viewGrid");
const viewList = document.getElementById("viewList");
const addProductBtn = document.getElementById("addOrEditButton");
const searchInput = document.getElementById("search-input");
const sort = document.getElementById("sort");
const brandsList = document.getElementById("brandList");
const brandsForm = document.getElementById("collapse_aside_brands");
const categoryForm = document.getElementById("collapse_aside1");
const form = document.getElementById("product-form");

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", showProducts);
  document.addEventListener("DOMContentLoaded", showBrands);
  addProductBtn.addEventListener("click", formListenSubmitEvent);
  viewGridList.addEventListener("click", UI.deleteProductFromUI);
  viewList.addEventListener("click", UI.deleteProductFromUI);
  viewGridList.addEventListener("click", UI.editProductFromUI);
  viewList.addEventListener("click", UI.editProductFromUI);

  sort.addEventListener("change", function () {
    Filter.sortProductsFromFilter(this.value);
  });

  searchInput.addEventListener("keyup", function () {
    Filter.searchProductsFromFilter(this.value);
  });

  categoryForm.addEventListener("change", function () {
    Filter.filterProductsFromFilter();
  });

  brandsForm.addEventListener("change", function () {
    Filter.filterProductsFromFilter();
  });
}

async function formListenSubmitEvent(e) {
  e.preventDefault();
  viewGridList.innerHTML = "";
  viewList.innerHTML = "";
  UI.formListenSubmitFromUI(e);
  showProducts();
  form.reset();
  brandsForm.reset();
  searchInput.value = "";
}

function showProducts() {
  request
    .get()
    .then((data) => {
      data.forEach((product) => {
        ViewGridCard.addProductFromViewGridCard(product);
        ViewListCard.addProductFromViewListCard(product);
      });
    })
    .catch((err) => console.log(err));
}

async function showBrands() {
  const products = await request.get();
  const brandsSet = new Set();

  products.forEach((product) => {
    const brand = product.brand.toLowerCase();
    brandsSet.add(brand);
  });

  brandsList.innerHTML = "";
  Array.from(brandsSet).forEach((brand) => {
    const formattedBrand = brand.split(",").join("");
    const checkbox = Checkbox.addCheckboxFromCheckbox(formattedBrand);
    brandsList.innerHTML += checkbox;
  });
}
