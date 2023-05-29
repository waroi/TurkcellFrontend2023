import { Product } from "./product.js";
import { elements } from "./selectors.js";
import { Cart } from "./cart.js";
const product = new Product();
const cart = new Cart();

// Dom content loaded
document.addEventListener("DOMContentLoaded", domContentLoaded);

// Event Listeners
elements.productForm.addEventListener("submit", submitProductForm);
elements.categoryAll.addEventListener("click", async (e) => {
  e.preventDefault();
  elements.productList.innerHTML = (await product.getAllProducts()) || "";
});
elements.categoryCake.addEventListener("click", async (e) => {
  e.preventDefault();
  elements.productList.innerHTML =
    (await product.filterByCategory("cake")) || "";
});
elements.categoryCupcake.addEventListener("click", async (e) => {
  e.preventDefault();
  elements.productList.innerHTML =
    (await product.filterByCategory("cupcake")) || "";
});
elements.categoryCookie.addEventListener("click", async (e) => {
  e.preventDefault();
  elements.productList.innerHTML =
    (await product.filterByCategory("cookie")) || "";
});

elements.sortPriceAsc.addEventListener("click", async (e) => {
  e.preventDefault();
  elements.productList.innerHTML = (await product.sort("price asc")) || "";
});
elements.sortPriceDesc.addEventListener("click", async (e) => {
  e.preventDefault();
  elements.productList.innerHTML = (await product.sort("price desc")) || "";
});
elements.sortNameAsc.addEventListener("click", async (e) => {
  e.preventDefault();
  elements.productList.innerHTML = (await product.sort("name asc")) || "";
});
elements.sortNameDesc.addEventListener("click", async (e) => {
  e.preventDefault();
  elements.productList.innerHTML = (await product.sort("name desc")) || "";
});
elements.searchFilter.addEventListener("keyup", async (e) => {
  e.preventDefault();
  elements.productList.innerHTML =
    (await product.search(elements.searchFilter.value)) || "";
});

elements.order.addEventListener("click", async (e) => {
  e.preventDefault();
  cart.deleteAllProductsFromCart();
});

// Add product to cart

// Functions

async function domContentLoaded() {
  elements.productList.innerHTML = (await product.getAllProducts()) || "";
  elements.cartList.innerHTML = (await cart.getCartList()) || "";

  //  await fetchCategoryOptions();
}

async function submitProductForm(e) {
  const product = new Product(
    Date.now(),
    elements.productName.value,
    elements.productContent.value,
    elements.productPrice.value,
    elements.productImgUrl.value,
    elements.productCategory.value,
    elements.productStock.value
  );

  // check if product name is exist
  const products = await product.getAllProductList();
  const isExist = products.find((p) => p.name === elements.productName.value);
  if (isExist) {
    isExist.stock =
      parseInt(isExist.stock) + parseInt(elements.productStock.value);

    const newProduct = new Product(
      isExist.id,
      isExist.name,
      isExist.content,

      isExist.price,
      isExist.imgUrl,
      isExist.category,
      isExist.stock
    );

    await newProduct.updateProduct(newProduct);
    elements.productList.innerHTML = (await product.getAllProducts()) || "";
    hideModal(elements.newModal);
    return;
  }

  product.addProduct();
  e.preventDefault();

  // fetch options for filters
  // await fetchCategoryOptions();

  // Close modal
  hideModal(elements.newModal);
}

function hideModal(modal) {
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}
