class Product {
  addProduct(e) {
    const name = nameInput.value.toUpperCase().trim();
    const price = priceInput.value;
    const category = categoryInput.value.toUpperCase().trim();
    const image = imageInput.value;
    const stock = stockInput.value;

    const validationResult = validation();
    if (validationResult.error) {
      return ui.showAlert(validationResult.message, "danger");
    }

    const newProduct = {
      name,
      price,
      category,
      image,
      stock,
    };

    request.get().then((data) => {
      const product = data.find((product) => product.name === name);
      if (product) {
        const newStock = parseInt(product.stock) + parseInt(stock);
        const updatedProduct = {
          name,
          price,
          category,
          image,
          stock: newStock,
        };
        request
          .put(product.id, updatedProduct)
          .then((data) => {
            ui.addProductsFromDB();
            ui.clearInputs();
          })
          .catch((err) => console.log(err));
        return;
      }
      request
        .post(newProduct)
        .then((data) => {
          ui.addProductToUI(data);
        })
        .catch((err) => console.log(err));
    });
  }
  deleteProduct(id) {
    request
      .delete(id)
      .then((data) => {
        ui.deleteProductFromUI(id);
      })
      .catch((err) => console.log(err));
  }
  editProduct(id) {
    ui.fillInputs(id);
    updateBtn.classList.remove("d-none");
    updateBtn.classList.add("d-inline-block");
    createBtn.classList.add("d-none");
    createBtn.classList.remove("d-inline-block");
    updateBtn.setAttribute("data-id", id);
  }
  updateProduct() {
    const id = updateBtn.getAttribute("data-id");
    const name = nameInput.value;
    const price = priceInput.value;
    const category = categoryInput.value;
    const image = imageInput.value;
    const stock = stockInput.value;

    const validationResult = validation();
    if (validationResult.error) {
      return ui.showAlert(validationResult.message, "danger");
    }

    const updatedProduct = {
      name,
      price,
      category,
      image,
      stock,
    };

    request
      .put(id, updatedProduct)
      .then((data) => {
        ui.addProductsFromDB();
        ui.clearInputs();
      })
      .catch((err) => console.log(err));
  }
}
