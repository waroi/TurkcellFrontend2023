import { Request } from "../functions/request.js";
import createCard from "../components/card.js";
import createCategory from "../components/category.js";
import { Validation } from "../functions/validation.js";
import sortProducts from "../functions/sort.js";
import createCartProduct from "../components/cart.js";

const productTitle = document.getElementById("product-title-input");
const productCategory = document.getElementById("product-category-input");
const productUrl = document.getElementById("product-url-input");
const productPrice = document.getElementById("product-price-input");
const productStock = document.getElementById("product-stock-input");
const addProductBtn = document.getElementById("add-product-button");
const addBtn = document.getElementById("add-button");
const clearProductBtn = document.getElementById("clear-product-button");
const addProductLabel = document.getElementById("addProductLabel");
const loadingIcon = document.getElementById("loading");
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const categoryList = document.getElementById("category-list");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const modalEditButton = document.getElementById("modal-edit-button");
const itemCountSpan = document.getElementById("item-count");
const itemCountNav = document.getElementById("item-count-navbar");
const purchaseButton = document.getElementById("purchase-btn");

let currentId;
let cart = [];

class Ui {
  constructor() {
    this.selectedCategory = "all";
    this.debouncedSort = null;
  }
  createProductCard(e) {
    e.preventDefault();
    const title = productTitle.value;
    const category = productCategory.value;
    const productImage = productUrl.value;
    const price = productPrice.value;
    const stock = productStock.value;

    if (!validation.inputCheck(productTitle) ||
      !validation.inputCheck(productCategory) ||
      !validation.inputCheck(productPrice) ||
      !validation.inputCheck(productStock)) {
        productTitle.value = "Please fill in all the fields";
        productTitle.classList.add("is-invalid");
        productCategory.classList.add("is-invalid");
        productPrice.classList.add("is-invalid");
        productStock.classList.add("is-invalid");
    setTimeout(() => {
      productTitle.value = "";
        productTitle.classList.remove("is-invalid");
        productCategory.classList.remove("is-invalid");
        productPrice.classList.remove("is-invalid");
        productStock.classList.remove("is-invalid");
    }, 2000)
    return;
  }

    if (!validation.urlCheck(productUrl)) {
      productUrl.classList.add("is-invalid");
      productUrl.value = "Please enter a valid URL";
      return;
    }

    productUrl.classList.remove("is-invalid");
    loadingIcon.classList.add("d-block");
    loadingIcon.classList.remove("d-none");

    setTimeout(() => {
      loadingIcon.classList.add("d-none");
    }, 3000);
    const newData = {
      title: title,
      price: price,
      category: category,
      productImage: productImage,
      stock: stock,
    };
    request
      .get("products")
      .then((products) => {
        const existingProduct = products.find(
          (product) => product.title === title
        );
        if (existingProduct) {
          const updatedStock =
            parseInt(existingProduct.stock) + parseInt(stock);
          newData.stock = updatedStock.toString();

          request
            .put("products", existingProduct.id, newData)
            .then((data) => {
              request.get("products").then((products) => {
                ui.renderProducts(products);
              });
            })
            .catch((err) => console.log(err));
        } else {
          request
            .post("products", newData)
            .then((data) => {
              request.get("products").then((products) => {
                ui.renderProducts(products);
                const categories = [
                  ...new Set(products.map((product) => product.category)),
                ];
                ui.renderCategories(categories);
              })
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
    ui.clearInputs();
  }
  clearInputs() {
    const form = document.getElementById("product-form");
    form.reset();
  }
  renderCartProduct(cart) {
    cartList.innerHTML = "";
    cart.forEach((cartItem) => {
      const cartItemHTML = createCartProduct(cartItem);
      cartList.innerHTML += cartItemHTML;
    });
    const carts = cartList.querySelectorAll(".cart-item");
    carts.forEach((cart) => {
      const quantityText = cart.querySelector("#cart-in-quantity");
      const plusQuantity = cart.querySelector("#product-quantity-plus");
      const minusQuantity = cart.querySelector("#product-quantity-minus");
      const deleteCartProduct = cart.querySelector("#product-delete");

      plusQuantity.addEventListener("click", () => {
        const currentQuantity = parseInt(quantityText.textContent);
        const updatedQuantity = currentQuantity + 1;
        const stock = cart.querySelector("#cart-in-stock");
        minusQuantity.classList.add("btn-primary");
        minusQuantity.classList.remove("disabled", "btn-warning");
        if (updatedQuantity <= parseInt(stock.textContent)) {
          quantityText.textContent = updatedQuantity.toString();
          const productId = cart.getAttribute("data-id");

          const currentCartData = {
            title: cart.querySelector("#cart-product-text").textContent,
            category: cart.querySelector("#cart-product-category").textContent,
            price: parseFloat(
              cart.querySelector("#card-product-cost").textContent
            ),
            productImage: cart
              .querySelector("#cart-product-image")
              .getAttribute("src"),
            stock: parseInt(cart.querySelector("#cart-in-stock").textContent),
          };

          const updatedCart = {
            ...currentCartData,
            quantity: updatedQuantity,
          };

          request
            .put(`cart`, productId, updatedCart)
            .then((response) => {
              request;
              request.get("cart").then((cart) => {
              });
            })
            .catch((error) => {
              console.log("Error updating cart item:", error);
            });
        } else {
          plusQuantity.classList.remove("btn-warning");
          plusQuantity.classList.add("disabled", "btn-primary");
        }
      });

      minusQuantity.addEventListener("click", () => {
        const currentQuantity = parseInt(quantityText.textContent);
        const updatedQuantity = currentQuantity - 1;
        plusQuantity.classList.add("btn-warning");
        plusQuantity.classList.remove("disabled", "btn-primary");
        if (updatedQuantity >= 1) {
          quantityText.textContent = updatedQuantity.toString();

          const productId = cart.getAttribute("data-id");

          const currentCartData = {
            title: cart.querySelector("#cart-product-text").textContent,
            category: cart.querySelector("#cart-product-category").textContent,
            price: parseFloat(
              cart.querySelector("#card-product-cost").textContent
            ),
            productImage: cart
              .querySelector("#cart-product-image")
              .getAttribute("src"),
            stock: parseInt(cart.querySelector("#cart-in-stock").textContent),
          };

          const updatedCart = {
            ...currentCartData,
            quantity: updatedQuantity,
          };

          request
            .put(`cart`, productId, updatedCart)
            .then((response) => {
              request.get("cart").then((cart) => {
              });
            })
            .catch((error) => {
              throw new error();
            });
        } else {
          minusQuantity.classList.remove("btn-primary");
          minusQuantity.classList.add("disabled", "btn-warning");
        }
      });

      deleteCartProduct.addEventListener("click", () => {
        const productId = cart.getAttribute("data-id");

        request
          .delete(`cart`, productId)
          .then((response) => {
            const cards = productList.querySelectorAll(".card");
            cards.forEach((card) => {
              const addToCartButton = card.querySelector("#add-to-cart-button");
              addToCartButton.classList.remove("disabled");
              cart.remove();
              ui.itemCount();
            });
          })
          .catch((error) => {
            throw new error();
          });
      });
    });
  }
  renderProducts(products) {
    productList.innerHTML = "";
    products.forEach((product) => {
      const productCardHTML = createCard(product);
      productList.innerHTML += productCardHTML;
    });
    const cards = productList.querySelectorAll(".card");
    cards.forEach((card) => {
      const addToCartButton = card.querySelector("#add-to-cart-button");
      const removeButton = card.querySelector("#remove-product-button");
      const stockCheck = card.querySelector("#stock-text");
      const editButton = card.querySelector("#update-product-button");
      
      addToCartButton.addEventListener("click", () => {
        addToCartButton.classList.add("disabled");
        const productStock = card.querySelector("#stock-text");
        const stock = productStock.textContent;
        const productId = card.getAttribute("data-id");
        const productCategory = card.querySelector("#category-text");
        const category = productCategory.textContent;
        const productPrice = card.querySelector("#cost-text");
        const price = productPrice.textContent;
        const productImage = card
          .querySelector("#product-image")
          .getAttribute("src");
        const productTitle = card.querySelector("#title-text");
        const title = productTitle.textContent;
        const cartItem = {
          id: productId,
          title: title,
          category: category,
          price: price,
          productImage: productImage,
          stock: stock,
          quantity: 1,
        };

        const toastTrigger = document.getElementById("liveToastBtn");
        const toastLiveExample = document.getElementById("liveToast");

        if (toastTrigger) {
          const toastBootstrap = new bootstrap.Toast(toastLiveExample);
          toastTrigger.addEventListener("click", () => {
            toastBootstrap.show();
          });
        }
        request
          .post("cart", cartItem)
          .then((data) => {
            request.get("cart").then((cart) => {
              ui.renderCartProduct(cart);
              ui.itemCount();
            });
          })
          .catch((err) => {
            ui.toastTriggerFnc();
          });
      });

      if (stockCheck.textContent === "0") {
        addToCartButton.classList.add("disabled");
        addToCartButton.textContent = "Out of Stock";
      }

      removeButton.addEventListener("click", (e) => {
        ui.deleteProduct(card);
      });

      editButton.addEventListener("click", (e) => {
        ui.openUpdateModal(card);
      });
    });
  }
  deleteProduct(cardElement) {
    const card = cardElement.closest(".card");
    const id = card.getAttribute("data-id");
    request
      .delete("products", id)
      .then((data) => {
        card.remove();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }
  openUpdateModal(cardElement) {
    const card = cardElement.closest(".card");
    const id = card.getAttribute("data-id");
    const title = card.querySelector("#title-text").textContent;
    const category = card.querySelector("#category-text").textContent;
    const stock = card.querySelector("#stock-text").textContent;
    const cost = card.querySelector("#cost-text").textContent;
    const url = card.querySelector("#product-image").getAttribute("src");

    productUrl.value = url;

    addProductLabel.textContent = "Edit Product";

    currentId = id;
    productUrl.value = url;
    productTitle.value = title;
    productCategory.value = category;
    productPrice.value = cost;
    productStock.value = stock;
    modalEditButton.classList.remove("d-none");
    addProductBtn.classList.add("d-none");
    const addProduct = new bootstrap.Modal(
      document.getElementById("addProduct")
    );
    addProduct.show();
  }
  updateCard() {
    const updatedTitle = productTitle.value;
    const updatedCategory = productCategory.value;
    const updatedUrl = productUrl.value;
    const updatedPrice = productPrice.value;
    const updatedStock = productStock.value;

    if (!validation.inputCheck(productTitle) ||
    !validation.inputCheck(productCategory) ||
    !validation.inputCheck(productPrice) ||
    !validation.inputCheck(productStock)) {
      productTitle.value = "Please fill in all the fields";
      productTitle.classList.add("is-invalid");
      productCategory.classList.add("is-invalid");
      productPrice.classList.add("is-invalid");
      productStock.classList.add("is-invalid");
  setTimeout(() => {
    productTitle.value = "";
      productTitle.classList.remove("is-invalid");
      productCategory.classList.remove("is-invalid");
      productPrice.classList.remove("is-invalid");
      productStock.classList.remove("is-invalid");
  }, 2000)
  return;
}

  if (!validation.urlCheck(productUrl)) {
    productUrl.classList.add("is-invalid");
    productUrl.value = "Please enter a valid URL";
    return;
  }

    const id = currentId;
    loadingIcon.classList.add("d-block");
    loadingIcon.classList.remove("d-none");
    setTimeout(() => {
      loadingIcon.classList.add("d-none");
    }, 3000);
    ui.clearInputs();
    const updatedData = {
      title: updatedTitle,
      category: updatedCategory,
      productImage: updatedUrl,
      price: updatedPrice,
      stock: updatedStock,
    };

    request
      .put(`products`, id, updatedData)
      .then((data) => {
        request.get("products").then((products) => {
          ui.renderProducts(products);
        });
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  }

  setSelectedCategory(category) {
    this.selectedCategory = category;
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }

  renderCategories(categories) {
    categoryList.innerHTML = "";
    const allButton = document.createElement("button");
    allButton.setAttribute("data-category", "all");
    allButton.classList.add("btn", "btn-primary", "w-100");
    allButton.textContent = "All";
    allButton.addEventListener("click", () => {
      this.setSelectedCategory("all");
      this.displayCategoryProducts();
    });

    categoryList.appendChild(allButton);

    categories.forEach((category) => {
      const categoryHTML = createCategory(category);
      const tempElement = document.createElement("div");
      tempElement.innerHTML = categoryHTML;
      categoryList.appendChild(tempElement.firstChild);
      const categoryButton = categoryList.querySelector(
        `[data-category="${category}"]`
      );
      categoryButton.addEventListener("click", () => {
        this.setSelectedCategory(category);
        this.displayCategoryProducts();
      });
    });
  }

  async displayCategoryProducts() {
    try {
      const products = await request.get("products");
      const selectedCategory = this.getSelectedCategory();
      const searchTerm = searchInput.value.toLowerCase();

      let categoryProducts;

      if (selectedCategory === "all") {
        categoryProducts = products;
      } else {
        categoryProducts = products.filter(
          (product) => product.category === selectedCategory
        );
      }

      if (searchTerm) {
        categoryProducts = categoryProducts.filter((product) =>
          product.title.toLowerCase().includes(searchTerm)
        );
      }

      this.renderProducts(categoryProducts);
    } catch (error) {
      console.log(error);
    }
  }

  handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = this.getSelectedCategory();

    request
      .get("products")
      .then((products) => {
        let filteredProducts;
        if (selectedCategory === "all") {
          filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
          );
        } else {
          filteredProducts = products.filter(
            (product) =>
              product.category === selectedCategory &&
              product.title.toLowerCase().includes(searchTerm)
          );
        }
        this.renderProducts(filteredProducts);
      })
      .catch((err) => console.log(err));
  }
  handleSort() {
    const sortBy = sortSelect.value;
    const selectedCategory = this.getSelectedCategory();
    const searchTerm = searchInput.value.toLowerCase().trim();
    request
      .get("products")
      .then((products) => {
        let sortedProducts = products;
        if (selectedCategory !== "all") {
          sortedProducts = sortedProducts.filter(
            (product) => product.category === selectedCategory
          );
        }
        if (searchTerm) {
          sortedProducts = sortedProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
          );
        }
        sortedProducts = sortProducts(sortedProducts, sortBy);
        this.renderProducts(sortedProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  debouncedSortProducts() {
    clearTimeout(this.debouncedSort);
    this.debouncedSort = setTimeout(() => {
      this.handleSort();
    }, 300);
  }
  toastTriggerFnc() {
    const toastLiveExample = document.getElementById("liveToast");
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastBootstrap.show();
  }
  async itemCount() {
    await request.get("cart").then((cart) => {
      itemCountSpan.textContent = cart.length;
      itemCountNav.textContent = cart.length;
      if (itemCountSpan.textContent === "0") {
        purchaseButton.disabled = true;
        purchaseButton.innerText = "Please Add Items to Purchase"
        return;
      }  else {
        purchaseButton.disabled = false;
        purchaseButton.innerText = "Purchase"
      }
    });
  }
  purchaseItems() {
    request.get("cart").then((cart) => {
      const updatePromises = [];

      cart.forEach((cartItem) => {
        const productId = cartItem.id;
        const quantity = cartItem.quantity;
        const stock = cartItem.stock;
        const category = cartItem.category;
        const title = cartItem.title;
        const price = cartItem.price;
        const url = cartItem.productImage;

        const updatedStock = stock - quantity;

        const updatedData = {
          stock: updatedStock.toString(),
          category: category,
          title: title,
          price: price,
          productImage: url,
        };

        const updateStockPromise = request.put(
          "products",
          productId,
          updatedData
        );

        updatePromises.push(updateStockPromise);

        const updatedCartItem = {
          ...cartItem,
          stock: updatedStock.toString(),
        };

        const updateCartItemPromise = request.put(
          "cart",
          productId,
          updatedCartItem
        );

        updatePromises.push(updateCartItemPromise);
      });
      purchaseButton.textContent = "Purchase Successful";
      purchaseButton.classList.remove("btn-warning");
      purchaseButton.classList.add("btn-success");
      setTimeout(() => {
        purchaseButton.textContent = "Purchase";
        purchaseButton.classList.remove("btn-success");
        purchaseButton.classList.add("btn-warning");
      }, 3000)

      Promise.all(updatePromises).then((responses) => {

        const removeCartItemPromises = [];

        cart.forEach((cartItem) => {
          const productId = cartItem.id;
          const removeCartItemPromise = request.delete("cart", productId);
          removeCartItemPromises.push(removeCartItemPromise);
        });

        Promise.all(removeCartItemPromises).then((responses) => {
          ui.renderCartProduct([]);
          ui.itemCount();
          request.get("products").then((products) => {
            ui.renderProducts(products);
          });
        });
      });
    });
  }
}

const baseUrl = "http://localhost:3000";
const request = new Request(baseUrl);
const ui = new Ui();
const validation = new Validation();

addProductBtn.addEventListener("click", ui.createProductCard.bind(ui));
clearProductBtn.addEventListener("click", ui.clearInputs.bind(ui));
searchInput.addEventListener("input", ui.handleSearch.bind(ui));
sortSelect.addEventListener("change", ui.debouncedSortProducts.bind(ui));
addBtn.addEventListener("click", () => {
  addProductBtn.classList.remove("d-none");
  addProductLabel.textContent = "Add Product";
  modalEditButton.classList.add("d-none");
});
modalEditButton.addEventListener("click", ui.updateCard.bind(ui));
purchaseButton.addEventListener("click", ui.purchaseItems.bind(ui));

request
  .get("products")
  .then((products) => {
    ui.renderProducts(products);
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    ui.renderCategories(categories);
  })
  .catch((err) => console.log(err));

request.get("cart").then((cart) => {
  ui.renderCartProduct(cart);
});

ui.itemCount();
