class UI {
  addAllProductsToUI(products) {
    products.forEach((product) => ui.addProductUI(product));
  }

  addProductUI(product) {
    var cardDiv = document.createElement("div");
    cardDiv.className = "card pt-3 card-group";
    cardDiv.style.width = "18rem";

    cardDiv.id = product.id;

    var heartIcon = document.createElement("i");
    heartIcon.className = "bi bi-balloon-heart-fill";

    var cardImage = document.createElement("img");
    cardImage.className = "card-img-top pt-3 px-4 img-fluid";
    cardImage.setAttribute("src", product.url);

    var cardTitle = document.createElement("div");
    cardTitle.className = "card-title ps-1 mt-3 mb-3 mx-auto ";
    cardTitle.textContent = product.title;

    const showButton = document.createElement("button");
    showButton.className = "btn showButton btn-primary mt-2 w-50 mb-2";
    showButton.textContent = "🧾";
    showButton.id = "showButton";

    var cardText = document.createElement("p");
    cardText.className = "card-text text-center";

    cardText.textContent = product.type;

    var moneyDiv = document.createElement("div");
    moneyDiv.className =
      "d-flex justify-content-around align-items-start me-4 product-item-money row ";

    var moneyLink = document.createElement("a");
    moneyLink.className = "p-2 rounded-2";
    moneyLink.textContent = "$  " + product.price;

    var starsIcon = document.createElement("i");
    starsIcon.className = "bi bi-stars";
    starsIcon.textContent = "    4.9 Reviews";

    var stockIcon = document.createElement("i");
    stockIcon.className = "bi bi-box-seam";
    stockIcon.textContent = " " + product.stock + " in stock";

    var buttonDiv = document.createElement("div");
    buttonDiv.className = "d-flex add-button-div mx-auto mb-3";

    var addCartButton = document.createElement("button");
    addCartButton.className =
      "btn addCartButton mt-4 w-100 add-button btn-primary ";
    addCartButton.textContent = "Add to cart";
    addCartButton.id = "addCartButton";
    if (product.stock == 0) {
      addCartButton.disabled = true;
      cardDiv.style.opacity = "0.5";
    }

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "d-flex mt-3 ";
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn deleteButton";
    deleteButton.textContent = "❌";
    deleteButton.id = "deleteButton";

    const editButton = document.createElement("button");
    editButton.className = "btn editBtn";
    editButton.id = "editButton";

    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#myModal");

    editButton.textContent = "✏️";
    showButton.setAttribute("data-bs-toggle", "modal");
    showButton.setAttribute("data-bs-target", "#showModal");

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(showButton);

    cardDiv.appendChild(heartIcon);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardTitle);

    cardTitle.appendChild(buttonContainer);
    cardTitle.appendChild(cardText);
    cardDiv.appendChild(moneyDiv);
    moneyDiv.appendChild(moneyLink);
    moneyDiv.appendChild(starsIcon);
    moneyDiv.appendChild(stockIcon);
    cardDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(addCartButton);

    productList.appendChild(cardDiv);
  }

  alertMessage(message) {
    alert(message);
    e.preventDefault();
  }
  deletepostFromUI(e) {
    e.remove();
  }
  clearForm(e) {
    productUrl.value = "";
    productType.value = "";
    productTitle.value = "";
    productStock.value = "";
    productPrice.value = "";
  }

  addAllCartsToUI(basketItems) {
    let itemMap = new Map();

    basketItems.forEach((basketItem) => {
      ui.addCartUI(basketItem);

      if (basketItem.basketStock === 0) {
        return;
      }

      const itemKey = basketItem.basketTitle;
      const itemPrice = basketItem.basketStock * basketItem.basketPrice;

      if (itemMap.has(itemKey)) {
        const existingItem = itemMap.get(itemKey);
        existingItem.quantity += basketItem.basketStock;
        existingItem.totalPrice += itemPrice;
      } else {
        itemMap.set(itemKey, {
          title: basketItem.basketTitle,
          totalPrice: itemPrice,
          quantity: basketItem.basketStock,
        });
      }
    });

    let total = 0;

    listGroup.innerHTML = "";

    itemMap.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.className = "list-group-item d-flex justify-content-between";
      cartItem.innerHTML = `
        <div>
          <h6 class="my-0">${item.title}</h6>
          <small class="text-muted">Quantity: ${item.quantity}</small>
        </div>
        <span class="text-muted">$${item.totalPrice.toFixed(2)}</span>
      `;
      listGroup.appendChild(cartItem);

      total += item.totalPrice;
    });

    totalAmount.innerHTML = total.toFixed(2);
  }

  addCartUI(basketItem) {
    var cardDiv = document.createElement("div");

    cardDiv.className = "card pt-3 cart-group mx-auto";
    cardDiv.style.width = "18rem";

    const row = document.createElement("div");
    row.id = basketItem.basketId;
    row.classList.add("row");

    const col1 = document.createElement("div");
    col1.classList.add("col-lg-3", "col-md-12", "mb-4", "mb-lg-0");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add(
      "bg-image",
      "hover-overlay",
      "hover-zoom",
      "ripple",
      "rounded"
    );
    imageContainer.setAttribute("data-mdb-ripple-color", "light");

    const image = document.createElement("img");
    image.src = basketItem.basketUrl;
    image.classList.add("w-100");

    const link = document.createElement("a");
    link.href = "#";

    const mask = document.createElement("div");
    mask.classList.add("mask");
    mask.style.backgroundColor = "rgba(251, 251, 251, 0.2)";

    link.appendChild(mask);
    imageContainer.appendChild(image);
    imageContainer.appendChild(link);
    col1.appendChild(imageContainer);

    const col2 = document.createElement("div");
    col2.classList.add("col-lg-5", "col-md-6", "mb-4", "mb-lg-0");

    const strong = document.createElement("strong");
    strong.classList.add("basket-title");
    strong.textContent = basketItem.basketTitle;

    col2.appendChild(strong);

    const col3 = document.createElement("div");
    col3.classList.add("col-lg-4", "col-md-6", "mb-4", "mb-lg-0");

    const quantityContainer = document.createElement("div");
    quantityContainer.classList.add("d-flex", "mb-4");
    quantityContainer.style.maxWidth = "300px";

    const decreaseButton = document.createElement("button");
    decreaseButton.classList.add(
      "btn",
      "btn-primary",
      "decreaseButton",
      "px-3",
      "me-2"
    );
    decreaseButton.setAttribute(
      "onclick",
      "this.parentNode.querySelector('input[type=number]').stepDown()"
    );
    decreaseButton.textContent = "-";

    decreaseButton.setAttribute("id", "decreaseButton");
    const decreaseIcon = document.createElement("i");
    decreaseIcon.classList.add("fas", "fa-minus");
    decreaseButton.appendChild(decreaseIcon);

    const formOutline = document.createElement("div");
    formOutline.classList.add("form-outline");

    const quantityInput = document.createElement("input");
    quantityInput.id = " quantityInput";
    quantityInput.setAttribute("min", "0");

    quantityInput.setAttribute("max", basketItem.mainStock);
    quantityInput.setAttribute("name", "quantity");
    quantityInput.value = basketItem.basketStock;
    quantityInput.setAttribute("type", "number");
    quantityInput.classList.add("form-control");

    const quantityLabel = document.createElement("label");
    quantityLabel.classList.add("form-label");
    quantityLabel.setAttribute("for", "form1");
    quantityLabel.textContent = "Quantity";

    formOutline.appendChild(quantityInput);
    formOutline.appendChild(quantityLabel);

    const increaseButton = document.createElement("button");
    increaseButton.classList.add(
      "btn",
      "btn-primary",
      "increaseButton",
      "px-3",
      "ms-2"
    );
    increaseButton.setAttribute(
      "onclick",
      "this.parentNode.querySelector('input[type=number]').stepUp()"
    );

    increaseButton.textContent = "+";
    const increaseIcon = document.createElement("i");
    increaseIcon.classList.add("fas", "fa-plus");
    increaseButton.appendChild(increaseIcon);

    quantityContainer.appendChild(decreaseButton);
    quantityContainer.appendChild(formOutline);
    quantityContainer.appendChild(increaseButton);

    const priceParagraph = document.createElement("p");
    priceParagraph.classList.add("text-start", "text-md-center");
    const priceStrong = document.createElement("strong");
    priceStrong.textContent =
      "$" + `${basketItem.basketPrice * basketItem.basketStock}`;
    priceParagraph.appendChild(priceStrong);

    col3.appendChild(quantityContainer);
    col3.appendChild(priceParagraph);

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    basketCartsList.appendChild(row);
  }
}
