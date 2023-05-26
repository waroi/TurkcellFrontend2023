import { UI } from "./ui.js";
import Request from "./requests.js";

const request = new Request();

class Product {
  constructor(id, name, content, price, imgUrl, category, stock) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.price = price;
    this.imgUrl = imgUrl;
    this.category = category;
    this.stock = stock;
  }
  async addProduct() {
    request
      .post(this)
      .then((product) => {
        UI.showAlert("Product başarıyla eklendi", "success");
        UI.addProductToUI(product);
        UI.clearInputs();
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async deleteProduct(e) {
    request
      .delete(this.id)
      .then((message) => {
        UI.deleteProductFromUI(e);
        UI.showAlert("Product başarıyla silindi", "success");
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }
  async updateProduct() {
    request
      .put(this)
      .then(async (product) => {
        UI.showAlert("Product başarıyla güncellendi", "success");
        await UI.updateProductToUI(product);
        UI.clearInputs();
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }
  async getProduct() {
    request
      .get(this.id)
      .then((product) => {
        UI.fillInputs(product);
        UI.getProductToUI(product);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async getProductById() {
    const product = await request.get(this.id);

    return product;
  }

  async getAllCategories() {
    const categories = [];
    try {
      const products = await request.getAll();
      products.map((product) => {
        if (!categories.includes(product.category.toLowerCase())) {
          categories.push(product.category.toLowerCase());
        }
      });
    } catch (err) {
      UI.showAlert(err, "danger");
    }
    return categories;
  }

  async getAllProducts() {
    request
      .getAll()
      .then((products) => {
        UI.loadAllProductsToUI(products);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async getAllProductList() {
    const products = await request.getAll();
    return products;
  }

  filterByCategory(category) {
    request
      .getAll()
      .then((products) => {
        const filteredProducts = products.filter(
          (product) => product.category === category
        );
        console.log(filteredProducts);
        UI.loadAllProductsToUI(filteredProducts);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async sort(sortType) {
    const products = await request.getAll();

    const sortedProducts = products.sort((a, b) => {
      // sortType = price asc, desc, name asc, desc
      if (sortType === "price asc") {
        return a.price - b.price;
      }
      if (sortType === "price desc") {
        return b.price - a.price;
      }
      if (sortType === "name asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortType === "name desc") {
        return b.name.localeCompare(a.name);
      }
    });
    console.log(sortedProducts);
    UI.loadAllProductsToUI(sortedProducts);
  }

  async search(searchText) {
    request
      .getAll()
      .then((products) => {
        const filteredProducts = products.filter((product) => {
          return product.name.toLowerCase().includes(searchText.toLowerCase());
        });
        console.log(filteredProducts);
        UI.loadAllProductsToUI(filteredProducts);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }
}

export { Product };
