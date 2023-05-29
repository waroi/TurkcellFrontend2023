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
    cartItems.then((items) => {
      if (items.length > 0) {
        const confirmation = confirm(
          "Sepetinizde bulunan tüm ürünleri satın almak istediğinize emin misiniz?"
        );
        if (confirmation) {
          items.forEach((item) => {
            const cartDeleteProduct = document.getElementById(item.id);
            UICart.deleteProductFromUI(cartDeleteProduct);
            RequestCart.deleteProductFromRequestCart(item.id);

            const product = crudProducts.getSingleProduct(item.id);
            product.then((response) => {
              const newStok = response.stok - item.quantity;
              const patchStok4Products = crudProducts.patch(item.id, newStok);
              patchStok4Products.then(() => {
                UI.toastMessage(
                  "Tüm ürünler başarılı bir şekilde satın alındı. Stoklar güncellendi."
                );
                location.reload();
              });
            });
          });
        }
      } else {
        UI.alertMessage(
          "Sepetinizde ürün bulunmamaktadır. İşlemlerinize devam edebilmek için lütfen sepetinize ürün ekleyiniz..."
        );
      }
    });
  };

  static deleteAllProductsInCart = function (e) {
    const cartItems = crudCart.get();
    cartItems
      .then((item) => {
        if (item.length > 0) {
          if (
            confirm(
              "Sepetinizde Bulunana Tüm Ürünleri Silmek İstediğinize Emin Misiniz?"
            )
          ) {
            item.forEach((deleteItem) => {
              const cartDeleteProduct = document.getElementById(deleteItem.id);
              UICart.deleteProductFromUI(cartDeleteProduct);
              RequestCart.deleteProductFromRequest(cartDeleteProduct.id);
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
