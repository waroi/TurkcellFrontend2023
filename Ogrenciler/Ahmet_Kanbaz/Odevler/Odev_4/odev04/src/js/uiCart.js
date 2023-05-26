class UICart {
  static updateDisplayForCart = function (products) {
    cartBody.innerHTML = "";
    products.forEach((item) => {
      this.addProduct4CartFromUICart(item);
    });
  };

  static addProduct4CartFromUICart(product) {
    const newCartRow = document.createElement("row");
    newCartRow.className = "row mb-3 align-items-center border-bottom pb-2";
    newCartRow.id = product.id;
    newCartRow.innerHTML = `
    <div class="col-3 p-1">
      <img src="${product.imageUrl}" alt="${product.name}" class="img-fluid rounded">
    </div>
    <div class="col-9">
      <div class="d-flex justify-content-between">
        <h6>${product.name}</h6>
        <span class="fa-solid fa-trash px-3 pb-2 rounded cartSpanButton"></span>
      </div>
      <div>
        <p class="fs-6">${product.category}</p>
      </div>
      <div class="d-flex gap-3">
          <span class="bg-danger px-2 py-1 rounded fa-solid fa-minus cartSpanButton"></span>
          <span class="fs-6">${product.quantity}</span>
          <span class="bg-secondary px-2 py-1 rounded fa-solid fa-plus cartSpanButton"></span>
      </div>
      <div>
        <p class="fs-6 text-center mt-2">${product.price} ₺</p>
      </div>
    </div>
    `;
    cartBody.appendChild(newCartRow);
  }

  static increaseStok4Cart = function (e) {
    const cartStok = e.target.parentElement.children[1];
    const cartId = e.target.parentElement.parentElement.parentElement.id;
    const product = crudProducts.getSingleProduct(cartId);
    if (e.target.classList.contains("fa-plus")) {
      product.then((item) => {
        if (cartStok.innerHTML < item.stok) {
          cartStok.innerHTML++;
          const newQuantity = Number(cartStok.innerHTML);
          const patchQuantity = crudCart.patchQuantity(cartId, newQuantity);
          patchQuantity
            .then((item) => {
              UI.toastMessage("Ürünün Adet Sayısı Başarılı Bir Şekilde Güncellendi.");
            })
            .catch((error) => UI.alertMessage(error));
        } else {
          UI.alertMessage("Stokta yeterli ürün yok.");
        }
      });
    }
  };

  static decreaseStok4Cart = function (e) {
    const cartStok = e.target.parentElement.children[1];
    const cartDeleteProduct = e.target.parentElement.parentElement.parentElement;
    if (e.target.classList.contains("fa-minus")) {
      if (cartStok.innerHTML > 0) {
        cartStok.innerHTML--;
        const newQuantity = Number(cartStok.innerHTML);
        const patchQuantity = crudCart.patchQuantity(cartDeleteProduct.id, newQuantity);
        patchQuantity
          .then((item) => {
            UI.toastMessage("Ürünün Adet Sayısı Başarılı Bir Şekilde Güncellendi.");
          })
          .catch((error) => UI.alertMessage(error));
      } 
      else {
        if(confirm('Ürünü silmek istediğinize emin misiniz?')) {
          UICart.deleteProductFromUI(cartDeleteProduct);
          RequestCart.deleteProductFromRequest(cartDeleteProduct.id);
          UI.toastMessage('Ürün Başarılı Bir Şekilde Silindi.');
        }
      }
    }
  };

  static updateCartCount = function () {
    cartItemCount.innerHTML = "";
    const cartItems = crudCart.get();
    cartItems
      .then((item) => {
        cartItemCount.innerHTML = item.length;
      })
      .catch((error) => UI.alertMessage(error));
  };

  static deleteProductFromUI = function (deleteProduct) {
    deleteProduct.remove();
  };
}
