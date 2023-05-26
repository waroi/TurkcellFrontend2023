class RequestCart {
  static showAllCartFromRequest = function () {
    const cartItems = crudCart.get();
    cartItems
      .then((item) => {
        UICart.updateDisplayForCart(item);
        cartItemCount.innerHTML = item.length;
        const totalPriceSum = item.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
        totalPrice.innerHTML = totalPriceSum;
      })
      .catch((error) => UI.alertMessage(error));
  };

  static addNewProductToCartRequest = function (cartProductId) {
    const cartProduct = crudProducts.getSingleProduct(cartProductId);
    cartProduct
      .then((response) => {
        if (response.stok == 0) {
          UI.alertMessage(
            "Seçtiğiniz ürün stokta bulunmamaktadır. Lütfen başka bir ürün seçiniz..."
          );
        } else {
          const data = {
            id: response.id,
            name: response.name,
            category: response.category,
            imageUrl: response.imageUrl,
            price: response.price,
            quantity: 1,
          };
          const addNewProduct2Cart = crudCart.post(data);
          addNewProduct2Cart
            .then((success) => {
              UI.toastMessage("Ürün Başarılı Bir Şekilde Sepete Eklendi.");
              UICart.updateCartCount();
            })
            .catch((error) => {
              UI.toastMessage(
                "Ürün sepetinizde zaten var. Ürün adedi sayısı arttırıldı."
              );
              const cartItems = crudCart.get();
              cartItems.then((item) => {
                const cartItem = item.find((item) => item.id == cartProductId);
                if (cartItem.quantity < response.stok) {
                  const newQuantity = cartItem.quantity + 1;
                  const patchQuantity = crudCart.patchQuantity(
                    cartProductId,
                    newQuantity
                  );
                  patchQuantity
                    .then((response) => {
                      UICart.updateCartCount();
                    })
                    .catch((error) => UI.alertMessage(error));
                } else {
                  UI.alertMessage("Stokta yeterli ürün yok.");
                }
              });
            });
        }
      })
      .catch((error) => UI.alertMessage(error));
  };

  static deleteProductFromRequest = function (deleteProductId) {
    const deleteProduct = crudCart.delete(deleteProductId);
    deleteProduct
      .then((response) => {
        UICart.updateCartCount();
      })
      .catch((error) => UI.alertMessage(error));
  };
}
