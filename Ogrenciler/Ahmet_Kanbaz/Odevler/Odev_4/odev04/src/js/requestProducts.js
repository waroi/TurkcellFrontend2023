class RequestProducts {
  static showAllProductsFromRequest = function() {
    const products = crudProducts.get();
    products.then((response) => {
      response.map((product) => UI.createNewProductFromUI(product));
    })
    .catch((error) => UI.alertMessage(error));
    UI.showFilterCategories();
    UICart.updateCartCount();
  }

  static addNewProductToRequest = function(product) {
    const productTitle = crudProducts.getProductTitle(product.name);
    productTitle.then((response) => {
      if (response.length > 0) {
        const newStok = response[0].stok + product.stok;
        const updateProduct = crudProducts.patch(response[0].id, newStok);
        updateProduct.then((response) => {
          UI.toastMessage('Bu başlıkta bir ürün zaten mevcut. Stok Sayısı Güncellendi.');
          location.reload();
        }
        ).catch((error) => UI.alertMessage(error));

      } else {
        const products = crudProducts.post(product);
        products.then((response) => UI.createNewProductFromUI(response))
        .catch((error) => UI.alertMessage(error));
        UI.showFilterCategories();
        createNewProductButton.setAttribute("data-bs-dismiss", "modal");
      }
    })
  }

  static getProductDetailFromRequest = function(productId) {
    const product = crudProducts.getSingleProduct(productId);
    product.then((response) => UI.detailProductFromUI(response))
    .catch((error) => UI.alertMessage(error));
  }

  static getUpdateProductDetailFromRequest = function(productId) {
    const product = crudProducts.getSingleProduct(productId);
    product.then((response) => UI.updateProductFromUI(response))
    .catch((error) => UI.alertMessage(error));
  }

  static updateProductFromRequest = function(updateProductId, updateProduct) {
    const updateProductRequest = crudProducts.put(updateProductId, updateProduct);
    updateProductRequest
      .then((response) => {
        UI.toastMessage('Blog Başarılı Bir Şekilde Güncellendi.');
        location.reload();
      })
      .catch((error) => UI.alertMessage(error));
  }

  static deleteProductFromRequest = function(deleteProductId) {
    crudProducts.delete(deleteProductId);
    UI.showFilterCategories();
  }
}