class Vehicle {
  constructor(name, category, price, stock, url) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
    this.url = url;
  }
  createCard = function () {
    let cardBox = document.createElement("div");
    cardBox.className = "col-lg-3 col-sm-6 px-3";
    let card = `<div class="box text-start my-5">
        <img
          src="${this.url}"
        />
        <h3 class="ps-3 pt-3">${this.name}</h3>
        <p class="rate ps-3">Category: ${this.category}</p>
        <span class="ms-3 p-1 px-3 bg-secondary text-white"
          >For You</span
        >
        <div class="d-flex align-items-center">
          <p class="price ps-3 font-weight-bold fs-4 mt-1">${this.price} $</p>
        </div>
        <p class="rate ps-3">Stock: ${this.stock}</p>

        <button type="button" class="btn btn-primary text-white">
          Add to Basket
        </button>
        <button type="button" class="btn btn-warning">
          Edit
        </button>
        <button type="button" class="btn btn-secondary">
          Delete
        </button>
      </div>`;
    cardBox.innerHTML = card;
    return cardBox;
  }
  createBasketItem = function () {
    let itemBox = document.createElement("li")
    itemBox.style = "width:300px"
    let item = `<div
    class="dropdown-item"
    style="color: rgba(168, 33, 21, 0.821)"
  >
    <span>${this.name}</span>
    <span>
      <input type="number" class="float-end" style="width: 80px" />
    </span>
  </div>`;
    itemBox.innerHTML = item;
    return itemBox;
  }

}