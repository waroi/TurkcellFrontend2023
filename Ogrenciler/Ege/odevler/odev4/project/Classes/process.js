import Product from "./product.js";
import Request from "./request.js";
import UI from "./ui.js";
const productsUrl = "http://localhost:3000/products";

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
          stock: product.stock + Number(postData.stock),
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
}

export default Process;
