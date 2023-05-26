import Product from "./product.js";
import Request from "./request.js";
import UI from "./ui.js";
const productsUrl = "http://localhost:3000/products";
const cartUrl = "http://localhost:3000/cart";

const addBtn = document.getElementById("add-submit");
const submitEditBtn = document.getElementById("edit-submit");
const categorySelect = document.getElementById("categories");

let currentProduct;

class Process {
  static addProduct(postData, form) {
    Request.get(productsUrl).then((products) => {
      if (
        products.filter(
          (product) => product.name.toLowerCase() == postData.name.toLowerCase()
        ).length >= 1
      ) {
        console.log("There is an item with the same name");
        const product = products.find(
          (product) => product.name.toLowerCase() == postData.name.toLowerCase()
        );
        console.log(product, product.stock, postData.stock);
        const updatedData = {
          id: product.id,
          name: product.name,
          image: product.image,
          desc: product.desc,
          price: product.price,
          category: product.category,
          stock: Number(product.stock) + Number(postData.stock),
        };
        Request.put(productsUrl, updatedData, product.id).then((response) =>
          UI.updateDisplay()
        );
      } else {
        Request.post(productsUrl, postData)
          .then((response) => {
            console.log(response);
            form.reset();
            UI.updateDisplay();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }

  static deleteProduct(id) {
    Request.delete(productsUrl, id)
      .then((response) => {
        console.log("Response:", response);
        UI.updateDisplay();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  static editProduct(
    id,
    nameInp,
    imgInp,
    descInp,
    priceInp,
    categoryInp,
    stockInp,
    form
  ) {
    if (!addBtn.classList.contains("d-none")) {
      submitEditBtn.classList.toggle("d-none");
      addBtn.classList.toggle("d-none");
    }
    Request.get(`${productsUrl}/${id}`).then((product) => {
      nameInp.value = product.name;
      imgInp.value = product.image;
      descInp.value = product.desc;
      priceInp.value = product.price;
      categoryInp.value = product.category;
      stockInp.value = product.stock;
      currentProduct = product;
      submitEditBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (UI.isEmpty()) {
          alert("Please fill the entire form.");
        } else {
          if (!isNaN(priceInp.value) && !isNaN(stockInp.value)) {
            if (UI.isUrl()) {
              this.submitEdit(
                currentProduct,
                nameInp,
                imgInp,
                descInp,
                priceInp,
                categoryInp,
                stockInp,
                form
              );
            } else
              alert("Please enter a valid URL in image URL section in form.");
          } else
            alert("Please enter valid numbers in price and/or count sections.");
        }
      });
    });
  }

  static submitEdit(
    product,
    nameInp,
    imgInp,
    descInp,
    priceInp,
    categoryInp,
    stockInp,
    form
  ) {
    submitEditBtn.classList.toggle("d-none");
    addBtn.classList.toggle("d-none");

    const editedData = {
      name: nameInp.value,
      image: imgInp.value,
      desc: descInp.value,
      price: priceInp.value,
      category: categoryInp.value,
      stock: stockInp.value,
    };

    Request.put(productsUrl, editedData, product.id)
      .then((response) => {
        console.log(response);
        form.reset();
        UI.updateDisplay();
      })
      .catch((err) => console.log(err));
  }

  static addToCart(id) {
    Request.get(`${productsUrl}/${id}`)
      .then((product) => {
        if (product.stock > 0) {
          console.log("Added to cart");
          Request.get(cartUrl).then((cartProducts) => {
            const inCart = cartProducts.find(
              (cartProduct) => cartProduct.id == id
            );
            if (inCart) {
              console.log("There is an item with the same id in the cart");
              if (inCart.count < product.stock) {
                const cartData = {
                  id: inCart.id,
                  name: inCart.name,
                  image: inCart.image,
                  price: inCart.price,
                  count: inCart.count + 1,
                };
                Request.put(cartUrl, cartData, id).then((response) =>
                  UI.updateDisplay()
                );
              } else {
                console.log("You have hit the stock limit");
              }
            } else {
              const cartData = {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                count: 1,
              };
              Request.post(cartUrl, cartData)
                .then((response) => UI.updateDisplay())
                .catch((err) => console.log(err));
            }
          });
        } else {
          console.log("There is no item in the stock");
        }
      })
      .catch((err) => console.log(err));
  }

  static deleteFromCart(id) {
    Request.delete(cartUrl, id)
      .then((response) => {
        console.log("Response:", response);
        UI.updateDisplay();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  static removeAllFromCart() {
    Request.get(cartUrl).then((cartProducts) => {
      cartProducts.map((cartProduct) => {
        this.deleteFromCart(cartProduct.id);
      });
    });
  }

  static subtractFromCart(id) {
    Request.get(cartUrl).then((cartProducts) => {
      const cartItem = cartProducts.find((cartProduct) => cartProduct.id == id);
      if (cartItem.count > 1) {
        Request.put(
          cartUrl,
          { ...cartItem, count: cartItem.count - 1 },
          id
        ).then((response) => UI.updateDisplay());
      } else {
        this.deleteFromCart(id);
      }
    });
  }

  static purchase() {
    setTimeout(() => {
      Request.get(cartUrl).then((cartProducts) => {
        cartProducts.map((cartProduct) => {
          Request.get(`${productsUrl}/${cartProduct.id}`).then((product) => {
            Request.put(
              productsUrl,
              { ...product, stock: product.stock - cartProduct.count },
              cartProduct.id
            ).then((response) => {
              UI.updateDisplay();
            });
          });
        });
      });
    }, 200);
    // this.removeAllFromCart();
  }

  static filterByCategory(selectedCategory) {
    Request.get(productsUrl).then((products) => {
      products.map((product) => {
        const productCard = document.querySelector(`#${product.id}`);
        if (productCard) {
          if (
            product.category.toLowerCase() != selectedCategory.toLowerCase()
          ) {
            productCard.classList.add("d-none");
          } else {
            productCard.classList.remove("d-none");
          }
        }
      });
    });
  }

  static search(searchValue) {
    Request.get(productsUrl)
      .then((products) => {
        UI.addProductsToUI(
          products.filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      })
      .catch((err) => console.log(err));
    if (categorySelect.value != "") this.filterByCategory(categorySelect.value);
  }

  static sort(sortType) {
    Request.get(productsUrl).then((products) => {
      if (sortType == "a-z")
        UI.addProductsToUI([...products].sort(compareNames));
      else if (sortType == "z-a")
        UI.addProductsToUI([...products].sort(compareNames).reverse());
      else if (sortType == "ascend")
        UI.addProductsToUI([...products].sort(comparePrices));
      else if (sortType == "descend")
        UI.addProductsToUI([...products].sort(comparePrices).reverse());
      else UI.addProductsToUI([...products]);
    });

    if (categorySelect.value != "") this.filterByCategory(categorySelect.value);
  }
}

function compareNames(a, b) {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  return 0;
}

function comparePrices(a, b) {
  if (Number(a.price) > Number(b.price)) return 1;
  if (Number(a.price) < Number(b.price)) return -1;
  return 0;
}

export default Process;
