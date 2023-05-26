class Carts {
  static addNewProduct4Cart = function (e) {
    if (e.target.id === "addCart") {
      const cartProductId =
        e.target.parentElement.parentElement.parentElement.id;
      const cartItems = crudCart.get();
      cartItems.then((item) => {
        RequestCart.addNewProductToCartRequest(cartProductId);
      });
    }
    e.preventDefault();
  };

  static deleteProduct4Cart = function (e) {
    if (e.target.classList.contains("fa-trash")) {
      const cartDeleteProduct =
        e.target.parentElement.parentElement.parentElement;
      if (confirm("Ürünü silmek istediğinize emin misiniz?")) {
        UICart.deleteProductFromUI(cartDeleteProduct);
        RequestCart.deleteProductFromRequest(cartDeleteProduct.id);
        UI.toastMessage("Ürün Başarılı Bir Şekilde Silindi.");
      }
    }
    e.preventDefault();
  };

  static buyAllProductsInCart = function (e) {
    const cartItems = crudCart.get();
    cartItems
      .then((item) => {
        if (item.length > 0) {
          if (
            confirm(
              "Sepetinizde Bulunana Tüm Ürünleri Satın Almak İstediğinize Emin Misiniz?"
            )
          ) {
            item.forEach((deleteItem) => {
              const cartDeleteProduct = document.getElementById(deleteItem.id);
              UICart.deleteProductFromUI(cartDeleteProduct);
              RequestCart.deleteProductFromRequest(cartDeleteProduct.id);
              const product = crudProducts.getSingleProduct(deleteItem.id);
              product.then((response) => {
                const newStok = response.stok - deleteItem.quantity;
                const patchStok4Products = crudProducts.patch(
                  deleteItem.id,
                  newStok
                );
                patchStok4Products.then((response) => {
                  UI.toastMessage("Tüm Ürünler Başarılı Bir Şekilde Satın Alındı. Stoklar Güncellendi.");
                });
              }
              );
            });
          }
        } else {
          UI.alertMessage(
            "Sepetinizde ürün bulunmamaktadır. İşlemlerinize devam edebilmek için lütfen sepetinize ürün ekleyiniz..."
          );
        }
      })
      .catch((error) => UI.alertMessage(error));
    e.preventDefault();
  };
}
