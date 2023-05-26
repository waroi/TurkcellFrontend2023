import ViewGridCard from "./Components/viewGridCard.js";
import ViewListCard from "./Components/viewListCard.js";
import Checkbox from "./Components/checkbox.js";
import BasketOffCanvas from "./Components/basketOffcanvas.js";
import Fetch from "./fetch.js";
import UI from "./ui.js";
import Filter from "./filter.js";

const request = new Fetch("http://localhost:3000/posts");
const basketRequest = new Fetch("http://localhost:3000/basket");

const viewGridList = document.getElementById("viewGrid");
const viewList = document.getElementById("viewList");
const productTitle = document.getElementById("product-title");
const basketTotal = document.getElementById("basket-total");
const addProductBtn = document.getElementById("addOrEditButton");
const buyButton = document.getElementById("buyButton");
const searchInput = document.getElementById("search-input");
const sort = document.getElementById("sort");
const brandsList = document.getElementById("brandList");
const brandsForm = document.getElementById("collapse_aside_brands");
const categoryForm = document.getElementById("collapse_aside1");
const form = document.getElementById("product-form");
const basketContainer = document.getElementById("basketList");

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", showProducts);
  document.addEventListener("DOMContentLoaded", showBrands);
  document.addEventListener("DOMContentLoaded", showProductstoBasket);
  addProductBtn.addEventListener("click", formListenSubmitEvent);
  buyButton.addEventListener("click", buyProducts);
  viewGridList.addEventListener("click", UI.deleteProductFromUI);
  viewList.addEventListener("click", UI.deleteProductFromUI);
  viewGridList.addEventListener("click", UI.editProductFromUI);
  viewList.addEventListener("click", UI.editProductFromUI);
  viewGridList.addEventListener("click", UI.addProductToBasketFromUI);
  viewList.addEventListener("click", UI.addProductToBasketFromUI);
  basketContainer.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("quantity-increase")) {
      increaseQuantity(e.target);
    } else if (e.target.classList.contains("quantity-decrease")) {
      decreaseQuantity(e.target);
    } else if (e.target.classList.contains("remove-from-basket")) {
      deleteProductFromBasket(e.target);
    }
  });

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
      let productCount = data.length;

      data.forEach((product) => {
        ViewGridCard.addProductFromViewGridCard(product);
        ViewListCard.addProductFromViewListCard(product);

        const viewListToBasketButton = document.getElementById(
          `viewList-basket-button-${product.id}`
        );
        const viewGridToBasketButton = document.getElementById(
          `viewGrid-basket-button-${product.id}`
        );

        if (product.stock === "0") {
          // Ürünün stoku sıfırsa, sepete ekle butonunu devre dışı bırak
          viewListToBasketButton.disabled = true;
          viewListToBasketButton.classList.add("disabled");
          viewGridToBasketButton.disabled = true;
          viewGridToBasketButton.classList.add("disabled");
        }
      });

      // Ürün sayısını sadece bir kez ekle
      productTitle.innerHTML += `${productCount} Ürün Bulundu`;
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

async function showProductstoBasket() {
  await basketRequest
    .get()
    .then((data) => {
      let basketCount = data.length;
      if (data.length === 0) {
        basketContainer.innerHTML = `<h1 class="text-center">Sepetinizde ürün bulunmamaktadır.</h1>`;
      } else {
        data.forEach((product) => {
          BasketOffCanvas.basketProductFromBasketOffCanvas(product);
        });
      }
      basketTotal.innerHTML = `${basketCount}`;
    })
    .catch((err) => console.log(err));
}

async function increaseQuantity(target) {
  const productCard = target.closest(".offcanvas-card");
  const productId = productCard.id;

  const productsBasket = await basketRequest
    .get()
    .then((data) => data.find((product) => product.id == productId))
    .catch((err) => console.log(err));

  console.log(productsBasket);

  const newQuantity = Number(productsBasket.stock) + 1;
  console.log(newQuantity);

  const productStock = await request
    .get()
    .then((data) => data.find((product) => product.id == productId))
    .catch((err) => console.log(err));

  console.log(productStock);

  if (newQuantity <= Number(productStock.stock)) {
    // Fiyatı güncelle
    const price = Number(productStock.price) * newQuantity;

    const updatedProduct = {
      ...productsBasket,
      stock: String(newQuantity),
      price: String(price),
    };

    await basketRequest.put(productId, updatedProduct);

    productCard.querySelector(".quantity").value = newQuantity;
  } else {
    alert("Stokta yeterli ürün yok!");
  }
}

async function decreaseQuantity(target) {
  const productCard = target.closest(".offcanvas-card");
  const productId = productCard.id;

  const productsBasket = await basketRequest
    .get()
    .then((data) => data.find((product) => product.id == productId))
    .catch((err) => console.log(err));

  const newQuantity = Number(productsBasket.stock) - 1;

  // Fiyatı güncelle
  const productStock = await request
    .get()
    .then((data) => data.find((product) => product.id == productId))
    .catch((err) => console.log(err));

  const price = Number(productStock.price) * newQuantity;

  if (newQuantity >= 0) {
    const updatedProduct = {
      ...productsBasket,
      stock: String(newQuantity),
      price: String(price),
    };

    if (newQuantity === 0) {
      await basketRequest.delete(productId);
      productCard.remove();
    } else {
      await basketRequest.put(productId, updatedProduct);
      productCard.querySelector(".quantity").value = newQuantity;
    }
  }
}

async function deleteProductFromBasket(target) {
  const productCard = target.closest(".offcanvas-card");
  const productId = productCard.id;

  await basketRequest.delete(productId);
  productCard.remove();
}

async function buyProducts() {
  const basketItems = await basketRequest.get();

  if (basketItems.length > 0) {
    for (const product of basketItems) {
      const productId = product.id;

      const productStock = await request
        .get()
        .then((data) => data.find((product) => product.id == productId))
        .catch((err) => console.log(err));

      const newStock = Number(productStock.stock) - Number(product.stock);

      if (newStock >= 0) {
        await request.put(productId, {
          ...productStock,
          stock: String(newStock),
        });
        await basketRequest.delete(productId);
      }
    }
    basketContainer.innerHTML = "";
    alert("Satın alma işlemi tamamlandı. Sepetiniz boşaltıldı.");
  } else {
    alert("Sepetiniz boş. Lütfen ürün ekleyin.");
  }
}
