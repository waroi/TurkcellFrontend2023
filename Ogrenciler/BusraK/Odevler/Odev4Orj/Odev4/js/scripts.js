const request = new Request("http://localhost:3000/products");
const basketRequest = new Request("http://localhost:3000/baskets");
const ui = new UI();

addEventListeners();
getAllProducts();
getAllBasketItems();
function getAllProducts() {
  request
    .get()
    .then((products) => {
      productList.innerHTML = "";
      ui.addAllProductsToUI(products);
    })
    .catch((err) => console.log(err));
}

function showToast(msg) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveShow);
  toastBody.textContent = msg;
  toastBootstrap.show();
  toastBootstrap.timeout = 500;
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

const addOptionButton = document.getElementById("addOptionButton");
const newOptionInput = document.getElementById("newOptionInput");

function populateOptions() {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      const types = new Set(products.map((product) => product.type));
      categoryFilter.innerHTML = "";
      const defaultButton = document.createElement("button");
      defaultButton.id = "all";
      defaultButton.type = "button";
      defaultButton.textContent = "All";
      defaultButton.className =
        "actived btn col-md-3 col-5 text-center mt-2 me-2 p-1 text-white bg-dark";
      categoryFilter.appendChild(defaultButton);
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.text = "no option selected";
      defaultOption.disabled = false;
      productType.appendChild(defaultOption);

      types.forEach((type) => {
        const existingOption = Array.from(productType.options).find(
          (option) => option.value === type
        );

        if (!existingOption) {
          const option = document.createElement("option");
          option.value = type;
          option.text = type;
          productType.appendChild(option);
        }

        const button = document.createElement("button");

        button.id = type.toLowerCase();
        button.type = "button";
        button.textContent = type;

        button.innerText = type;

        button.addEventListener("click", () => {
          filterAndSortProducts;
        });

        button.className =
          "actived btn col-md-3 col-5 text-center mt-2 me-2 p-1 text-white bg-dark";

        categoryFilter.appendChild(button);
      });
    })
    .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", populateOptions);

productType.addEventListener("change", function (e) {
  const selectedOption = e.target.value;
  const optionExists = Array.from(productType.options).some(
    (option) => option.value === selectedOption
  );

  if (!optionExists) {
    const newOption = document.createElement("option");
    newOption.value = selectedOption;
    newOption.text = selectedOption;
    productType.add(newOption);
  }
});

productType.addEventListener("change", function (e) {
  if (productType.value !== "") {
    newOptionInput.disabled = true;
  }

  if (productType.value.trim() === "") {
    productType.disabled = true;
    newOptionInput.disabled = false;
  }
});
newOptionInput.addEventListener("input", function (e) {
  if (newOptionInput.value) {
    newOptionInput.disabled = false;
    productType.disabled = true;
  } else if (newOptionInput.value === "" && productType.value.trim() === "") {
    productType.disabled = false;
    newOptionInput.disabled = true;
  }
});
newOptionInput.addEventListener("input", function (e) {
  newOptionInput.disabled = Boolean(!newOptionInput.value);
  productType.disabled = !newOptionInput.disabled;
});

function showProduct(e) {
  if (e.target.className === "btn showButton btn-primary mt-2 w-50 mb-2") {
    const id = e.target.closest(".card-group").id;

    request
      .get()
      .then((products) => {
        products.forEach(function (product) {
          if (product.id == id) {
            productShowUrl.src = product.url;

            productShowName.textContent = product.title;
            productShowPrice.textContent = product.price;
            productShowType.textContent = product.type;
            productShowStock.textContent = product.stock;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  }
}

let selectedCategory = "all";

function filterAndSortProducts(e) {
  const categoryItemss = document.querySelectorAll("button.actived");
  const option = productSort.value;
  const filterValue = productSearch.value.toLowerCase();
  const clickedButton = e.target;

  categoryItemss.forEach((item) => {
    item.classList.add(item.innerText.toLowerCase());
    if (item.contains(clickedButton)) {
      if (item.classList.contains(item.innerText.toLowerCase())) {
        selectedCategory = item.innerText.toLowerCase();
        categoryItemss.forEach((button) => {
          button.classList.remove("bg-warning");
        });

        clickedButton.classList.add("bg-success");

        clickedButton.classList.add("text-white");

        return selectedCategory;
      } else {
        return (selectedCategory = "all");
      }
    }
  });

  request.get().then((products) => {
    const filteredproducts = products.filter((product) => {
      const productName = product.title.toLowerCase();
      const productCategory = product.type.toLowerCase();

      const isMatchingCategory =
        selectedCategory.includes("all") ||
        selectedCategory.includes(productCategory);
      const isMatchingSearch = productName.includes(filterValue);

      return isMatchingCategory && isMatchingSearch;
    });

    const sortedproducts = filteredproducts.sort((a, b) => {
      if (option === "exp-cheap") {
        return b.price - a.price;
      } else if (option === "cheap-exp") {
        return a.price - b.price;
      } else if (option === "asc-title") {
        return a.title.localeCompare(b.title);
      } else if (option === "desc-title") {
        return b.title.localeCompare(a.title);
      } else {
        return 0;
      }
    });

    productList.innerHTML = "";
    sortedproducts.forEach((product) => {
      ui.addProductUI(product);
    });
  });
}

function addToCart(e) {
  if (
    e.target.className ===
    "btn addCartButton mt-4 w-100 add-button btn-primary "
  ) {
    const id = e.target.closest(".card-group").id;
    // Carta ekleme

    request.get().then((products) => {
      products.forEach(function (product) {
        if (product.id == id) {
          // Stock azaltma
          if (product.stock > 0) {
            //eğer product.id si baskets json server ı içinde varsa o baskestin stockunu 1 arttırıyoruz
            basketRequest.get().then((baskets) => {
              const basket = baskets.find((basket) => basket.basketId == id);

              if (basket) {
                if (product.stock > basket.basketStock) {
                  basketRequest
                    .put(basket.id, {
                      basketStock: basket.basketStock + 1,
                      basketTitle: basket.basketTitle,
                      basketUrl: basket.basketUrl,
                      basketPrice: basket.basketPrice,
                      basketType: basket.basketType,
                      basketId: basket.basketId,
                      mainStock: product.stock,
                    })
                    .then((updatedBasket) => {
                      console.log(updatedBasket);
                      getAllBasketItems();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              } else {
                basketRequest
                  .post({
                    basketStock: 1,
                    basketTitle: product.title,
                    basketUrl: product.url,
                    basketPrice: product.price,
                    basketType: product.type,
                    basketId: product.id,
                    mainStock: product.stock,
                  })
                  .then((basket) => {
                    ui.addCartUI(basket);
                    getAllBasketItems();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
          }
        }
      });
    });
  }
}

//sepetten ürün silme ürün silindiğinde json-server product içindeki stock artsın, sepetten silinen baskets'in stocku 1 azalsın
function deleteFromCart(e) {
  if (e.target.className === "btn btn-primary decreaseButton px-3 me-2") {
    const id = e.target.closest(".row").id;
    basketRequest.get().then((baskets) => {
      const basket = baskets.find((basket) => basket.basketId == id);

      console.log(basket);
      if (basket) {
        if (basket.basketStock > 0) {
          basketRequest
            .put(basket.id, {
              basketStock: basket.basketStock - 1,
              basketTitle: basket.basketTitle,
              basketUrl: basket.basketUrl,
              basketPrice: basket.basketPrice,
              basketType: basket.basketType,
              basketId: basket.basketId,
              mainStock: basket.mainStock,
            })
            .then((updatedBasket) => {
              getAllBasketItems();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    });
  }
}

// //sepetten ürün silme ürün eklendiğinde json-server product içindeki stock azalsın, sepetten silinen baskets'in stocku 1 artsın
function addBasketFromCart(e) {
  if (e.target.className === "btn btn-primary increaseButton px-3 ms-2") {
    const id = e.target.closest(".row").id;

    basketRequest.get().then((baskets) => {
      const basket = baskets.find((basket) => basket.basketId == id);

      console.log(basket);
      if (basket) {
        if (basket.basketStock <= basket.mainStock) {
          basketRequest
            .put(basket.id, {
              basketStock: basket.basketStock + 1,
              basketTitle: basket.basketTitle,
              basketUrl: basket.basketUrl,
              basketPrice: basket.basketPrice,
              basketType: basket.basketType,
              basketId: basket.basketId,
              mainStock: basket.mainStock,
            })
            .then((updatedBasket) => {
              getAllBasketItems();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    });
  }
}

//ödeme yaptıktan sonra sepeti boşalt ve json-server product içindeki stock azalsın quantity kadar
function paymentCart(e) {
  console.log(e.target.className);

  if (e.target.className === "paymentButton btn btn-primary btn-lg btn-block") {
    basketRequest.get().then((baskets) => {
      baskets.forEach((basket) => {
        request
          .put(basket.basketId, {
            stock: basket.mainStock - basket.basketStock,
            title: basket.basketTitle,
            url: basket.basketUrl,
            price: basket.basketPrice,
            type: basket.basketType,
            id: basket.basketId,
          })
          .then((updatedProduct) => {
            getAllProducts();
            getAllBasketItems();
          })
          .catch((err) => {
            console.log(err);
          });
        basketRequest.delete(basket.id);

        getAllBasketItems();
      });
    });
  }

  closeBasketBtn.click();
}
function getAllBasketItems() {
  basketCartsList.innerHTML = "";
  basketRequest
    .get()
    .then((basketItems) => {
      categorys = [...new Set(basketItems.map((item) => item.basketId))];
      badgeCart.innerHTML = basketItems.length;

      ui.addAllCartsToUI(basketItems);
    })
    .catch((err) => console.log(err));
}
