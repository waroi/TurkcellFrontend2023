function addEventListeners() {
  myModal.addEventListener("show.bs.modal", function (event) {
    ui.clearForm();
    if (event.relatedTarget.id === "editButton") {
      addOrEditButton.style.display = "none";
      editButton.style.display = "block";
    } else {
      addOrEditButton.style.display = "block";
      editButton.style.display = "none";
    }
  });

  productSearch.addEventListener("keyup", filterAndSortProducts);
  productSort.addEventListener("change", filterAndSortProducts);
  categories.addEventListener("click", filterAndSortProducts);

  addOrEditButton.addEventListener("click", addProduct);
  productList.addEventListener("click", deleteProduct);
  productList.addEventListener("click", editProduct);
  productList.addEventListener("click", showProduct);

  productList.addEventListener("click", addToCart);
  basketCartsList.addEventListener("click", deleteFromCart);
  basketCartsList.addEventListener("click", addBasketFromCart);
  paymentButton.addEventListener("click", paymentCart);
  closeBasketBtn.addEventListener("click", getAllProducts);
  basketCart.addEventListener("click", getAllBasketItems);
}
