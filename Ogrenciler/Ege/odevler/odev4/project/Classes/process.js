import Product from "./product.js";
import Request from "./request.js";
import UI from "./ui.js";
const productsUrl = "http://localhost:3000/products";
const cartUrl = "http://localhost:3000/cart";

const addBtn = document.getElementById("add-submit");
const submitEditBtn = document.getElementById("edit-submit");

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
        Request.put(productsUrl, updatedData, product.id);
      } else {
        Request.post(productsUrl, postData)
          .then((response) => {
            console.log(response);
            form.reset();
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
                Request.put(cartUrl, cartData, id);
                // const updatedData = { ...product, stock: product.stock - 1 };ö
                // Request.put(productsUrl, updatedData, id);
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
                .then((response) => console.log(response))
                .catch((err) => console.log(err));
            }
          });
        } else {
          console.log("There is no item in the stock");
        }
      })
      .catch((err) => console.log(err));
  }
}

export default Process;
