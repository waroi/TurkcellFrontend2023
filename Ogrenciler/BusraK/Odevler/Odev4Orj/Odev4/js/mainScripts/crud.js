// class Product {
//   constructor(title, url, type, stock, price) {
//     this.title = title;
//     this.url = url;
//     this.type = type;
//     this.stock = stock;
//     this.price = price;
//   }

// }
function addProduct(e) {
  const title = productTitle.value.trim();
  const url = productUrl.value.trim();
  const stock = productStock.value.trim();
  const price = productPrice.value.trim();

  const optionValue = newOptionInput.value.trim().toLowerCase();
  const optionText = newOptionInput.value.trim();
  const selectedOption = productType.value.trim();

  let type = "";

  if (selectedOption !== "") {
    type = selectedOption;
  } else if (optionValue !== "" && optionText !== "") {
    const existingOption = Array.from(productType.options).find(
      (option) => option.value === optionValue
    );
    console.log(optionValue, existingOption);

    if (existingOption) {
      return showToast("This option already exists");
    } else {
      const option = document.createElement("option");
      option.value = optionValue;
      option.text = optionText;
      productType.appendChild(option);
      type = option.text;
    }
  }

  if (
    title === "" ||
    stock === "" ||
    price === "" ||
    url === "" ||
    type === ""
  ) {
    return showToast("Please fill in all fields");
  }
  if (!isValidUrl(productUrl.value.trim())) {
    return showToast("url is not valid");
  }

  const newproduct = {
    title,
    url,
    type,
    stock,
    price,
  };

  request
    .post(newproduct)
    .then((product) => {
      populateOptions();
      getAllProducts();
      ui.addProductUI(product);
    })
    .catch((err) => console.log(err));

  ui.clearForm();
}

function deleteProduct(e) {
  if (e.target.className === "btn deleteButton") {
    const id = e.target.closest(".card-group").id;

    request
      .delete(id)
      .then((message) => {
        populateOptions();
        getAllProducts();
      })

      .catch((err) => console.log(err));
  }
}

function editProduct(e) {
  if (e.target.className === "btn editBtn") {
    const id = e.target.closest(".card-group").id;

    request
      .get()
      .then((products) => {
        products.forEach(function (product) {
          if (product.id == id) {
            productUrl.value = product.url;
            newOptionInput.value = product.type;
            productTitle.value = product.title;
            productStock.value = product.stock;
            productPrice.value = product.price;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    productForm.addEventListener("submit", function (e) {
      if (
        productUrl.value.trim() === "" ||
        productStock.value.trim() === "" ||
        productPrice.value.trim() === "" ||
        (productType.value.trim() === "" &&
          newOptionInput.value.trim() === "") ||
        productTitle.value.trim() === ""
      ) {
        return showToast("Please fill in all fields");
      }
      if (!isValidUrl(productUrl.value.trim())) {
        return showToast("url is not valid");
      }
      if (productType.value === "" && newOptionInput.value === "") {
        return showToast("Please fill in all fields");
      }

      if (productType.value !== "" && newOptionInput.value == "") {
        newOptionInput.value = productType.value;
      }

      if (productType.value !== "" && newOptionInput.value !== "") {
        newOptionInput.value = productType.value;
      }

      request
        .put(id, {
          title: productTitle.value,
          url: productUrl.value,
          type: newOptionInput.value,
          stock: productStock.value,
          price: productPrice.value,
        })

        .then((product) => {
          console.log(product);
          populateOptions();
          getAllProducts();
        })
        .catch((err) => console.log(err));
    });
  }
}

const categoryItemsss = document.querySelectorAll(".actived");
