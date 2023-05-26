
let request = new Request();


class Operation {
  static async getAllProducts() {
    try {
      let data = await request.getRequest("http://localhost:3000/product");
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  static async saveProduct(newProduct) {
    if (await Operation.isProductExist(newProduct)) {
      let existingProduct = await Operation.getProductByName(newProduct.name);
      existingProduct.map(element => {
        let updatedProduct = new Product(newProduct.name, newProduct.explanation, newProduct.image, newProduct.category, newProduct.price, parseInt(element.stock) + parseInt(newProduct.stock));
        Operation.updateProduct(element.id, updatedProduct);
      });
    } else {
      try {
        await request.postRequest("http://localhost:3000/product", newProduct);
        UI.addProductToUI();
      } catch (err) {
        console.log(err);
      }
    }
  }


  static async getProductByName(productName) {
    try {
      let data = await request.getRequest(`http://localhost:3000/product?name=${productName}`);
      return data;
    } catch (err) {
      console.log(err);
      return null; // Hata durumunda null değeri döndürülüyor
    }
  }

  static async deleteProduct(productId) {
    try {
      await request.deleteRequest(`http://localhost:3000/product/${productId}`);
      UI.addProductToUI();
    } catch (err) {
      console.log(err);
    }
  }

  static async updateProduct(productId, product) {
    try {
      await request.putRequest(`http://localhost:3000/product/${productId}`, product)
        .then(() => {
          UI.addProductToUI()
        });
    } catch (err) {
      console.log(err);
    }
  }

  static async isProductExist(product) {
    let products = await Operation.getAllProducts();
    let isAvailable = products.some(element => element.name === product.name);
    return isAvailable;
  }


  static async getProductById(productId) {
    try {
      let data = await request.getRequest(`http://localhost:3000/product/${productId}`);
      return data;
    } catch (err) {
      console.log(err);
      return null; // Hata durumunda null değeri döndürülüyor
    }
  }

  static async setStock(productId, quantity) {
    try {
      let product = await Operation.getProductById(productId);
      let updatedStock = parseInt(product.stock) + parseInt(quantity);
      let updatedProduct = { ...product, stock: updatedStock };
      await Operation.updateProduct(productId, updatedProduct);
    } catch (err) {
      console.log(err);
    }
  }


  //basket operations

  static async addToBasket(productId, quantity) {
    let product = await Operation.getProductById(productId);
    if (await Operation.isProductExistInBasket(productId)) {
      let existItem = await Operation.getBasketItemByProductId(productId);
      existItem.map(async element => {
        let lastQuantity = parseInt(element.quantity) + parseInt(quantity)
        if (lastQuantity > parseInt(product.stock)) {
          alert("Ürün stoğu yetersiz!");
        } else {
          if (lastQuantity == 0) {
            await Operation.deleteBasketItem(element.id)
          }
          else {
            let updatedBasket = new Basket(productId, lastQuantity);
            await Operation.updateBasket(element.id, updatedBasket)
          }
        }
      });
    } else {
      if (product.stock < quantity) {
        alert("Ürün stoğu yetersiz!");
      } else {
        let basket = new Basket(productId, quantity);
        await request.postRequest("http://localhost:3000/basket", basket).then(() => {
          UI.showOrderInBasket();
          Operation.getUnicProductInBasket();
        })
          .catch(err => console.log(err));
      }
    }
  }

  static async complateOrder() {
    let basketItems = await Operation.getAllBasket();
    basketItems.map(async element => {
      let product = await Operation.getProductById(element.productId);
      let lastStock = parseInt(product.stock) - parseInt(element.quantity);
      let updatedProduct = new Product(product.name, product.explanation, product.image, product.category, product.price, lastStock);
      Operation.updateProduct(element.productId, updatedProduct);
      Operation.deleteBasketItem(element.id);
      UI.addProductToUI();
    });
    UI.showOrderInBasket();
    Operation.getUnicProductInBasket();

  }

  static async updateBasket(basketId, basket) {
    request.putRequest("http://localhost:3000/basket/" + basketId, basket).then(() => {
      UI.showOrderInBasket();
      Operation.getUnicProductInBasket();
    })
      .catch(err => console.log(err))
  }

  static async deleteBasketItem(basketId) {
    request.deleteRequest("http://localhost:3000/basket/" + basketId)
      .then(() => {
        UI.showOrderInBasket();
        UI.addProductToUI();
        Operation.getUnicProductInBasket();
      })
      .catch(err => console.log(err))

  }

  static async getBasketItemByProductId(productId) {
    try {
      let data = await request.getRequest("http://localhost:3000/basket?productId=" + productId);
      return data;
    } catch (err) {
      console.log(err);
      return null; // Hata durumunda null değeri döndürülüyor
    }
  }

  static async isProductExistInBasket(productId) {
    let basketItems = await Operation.getAllBasket();
    let isExist = basketItems.find(item => item.productId === productId);
    return isExist;
  }

  static async getAllBasket() {
    try {
      let data = await request.getRequest("http://localhost:3000/basket");
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  static async getUnicProductInBasket() {
    let basketItems = await Operation.getAllBasket();
    let unicProducts = [];
    basketItems.map(element => {
      if (!unicProducts.includes(element.productId)) {
        unicProducts.push(element.productId);
      }
    });
    if (unicProducts.length == 0) {
      basketNotification.classList.add("d-none");
    } else {
      basketNotification.classList.remove("d-none");
      basketNotification.innerText = unicProducts.length;
    }
  }
}




