class UI {
  constructor() {
    this.post = document.querySelector("#main");
    this.cart = document.querySelector("#cart");
    this.imageUrlInput = document.querySelector("#image");
    this.categoryInput = document.querySelector("#category");
    this.nameInput = document.querySelector("#name");
    this.priceInput = document.querySelector("#price");
    this.textContentArea = document.querySelector("#text");
    this.stock = document.querySelector("#stock");
    this.idInput = document.getElementById("id");
    this.addPostSubmit = document.querySelector(".addSubmit");
  }

  showBlogs(blogs) {
    main.innerHTML = "";
    blogs.forEach((blog) => {
      const { category, name, price, stock, imageUrl, text, id } = blog;

      const blogEl = document.createElement("div");
      blogEl.classList.add("blog");
      blogEl.classList.add("col-lg-2");
      blogEl.classList.add("position-relative");
      blogEl.classList.add("p-0");
      blogEl.classList.add("m-5");
      blogEl.innerHTML = `
      <div class="images d-flex justify-content-center">
        <img
          src="./src/assets/prudct-frame.png"
          class="position-absolute w-100"
        />
        <img
          src="${imageUrl}"
          alt="${name}"
          class="image"
        />
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal${id}"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-secondary">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close me-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-6">
                  <img
                    src="${imageUrl}"
                    alt=""
                    class="w-100"
                  />
                </div>
                <div class="col-lg-6">
                  <h3 class="text-center text-warning pb-5 fs-1">
                    ${name}
                  </h3>
                  <h3 class="col-lg-12 pb-3 price">${price}</h3>
                  <div>
                    <input
                      type="number"
                      id="quantity"
                      class="form-control"
                    />
                    <button
                      class="col-lg-4 bg-warning rounded-2 text-white fs-5 my-3 add-to-cart" data-id="${id}"
                    >
                      Add to Cart
                      <i
                        class="fa-solid fa-cart-shopping text-light fs-5"
                      ></i>
                    </button>
                  </div>
                  <p class="textArea">${text}</p>
                  <p class="stock d-none">${stock}</p>
                  <p class="category text-primary">${category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-info row px-2">
        <div class="name col-9">
          <h3 class="text-white">${name}</h3>
        </div>
        <div class="buttons row col-3">
          <button
            type="button"
            class="btn btn-sm edit col-6 text-warning"
            data-id="${id}"
            id="edit-post"
          >
            <i class="fa-solid fa-pen"></i>
          </button>
          <button
            type="button"
            class="btn btn-sm delete col-6 text-danger"
            id="delete-post"
            data-id="${id}"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <button
        type="button"
        class="btn text-white col preview"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal${id}"
        data-id="${id}"
      >
        <i class="fa-solid fa-eye"></i>
      </button>
      `;
      main.appendChild(blogEl);
    });
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className} position-absolute`;
    div.appendChild(document.createTextNode(message));

    document.querySelector("body").appendChild(div);

    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }

  updateBlogFields(blog) {
    blog.name = document.querySelector("#name").value;
    blog.price = document.querySelector("#price").value;
    blog.stock = document.querySelector("#stock").value;
    blog.category = document.querySelector("#category").value;
    blog.imageUrl = document.querySelector("#image").value;
    document.querySelector("#blog-form").dataset.id = blog.id;
    blog.text = document.querySelector("#text").value;
  }

  fillForm(blog) {
    this.stock.value = blog.stock;
    this.imageUrlInput.value = blog.imageUrl;
    this.categoryInput.value = blog.category;
    this.nameInput.value = blog.name;
    this.priceInput.value = blog.price;
    this.textContentArea.value = blog.textContent;
    this.idInput.value = blog.id;
  }

  clearFields() {
    document.querySelector("#name").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#stock").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#text").value = "";
    document.querySelector("#image").value = "";
  }

  showCartItems(products) {
    cart.innerHTML = `
    <div class="bg-secondary rounded-4">
      <h3 class="text-warning ms-4">Your Cart</h3>
    </div>
    <hr />
    `;
    products.forEach((product) => {
      const { name, price, imageUrl, quantity, id, stock, text, category } =
        product;

      const productEl = document.createElement("div");
      productEl.classList.add("product");
      productEl.classList.add("row");

      productEl.innerHTML = `
        <div class="col-lg-3 d-flex justify-content-center">
          <div class="cart-image">
            <img
              src="${imageUrl}"
              alt=""
              class="w-100"
            />
          </div>
        </div>
        <div class="col-lg-9 d-flex flex-column justify-content-center">
          <div class="name">
            <h3>${name}</h3>
          </div>
          <div>
            <label class="price">${price}</label>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <label> Quantity </label>
              <div class="quantityHandler d-flex w-50 bg-success rounded-3 text-white justify-content-center">
                <div class="minus mx-3 fs-3 quantityBtn">-</div>
                <div class="quantity fs-3">${quantity}</div>
                <div class="plus mx-3 fs-3 quantityBtn">+</div>
              </div>
            </div>
            <div class="col-lg-6"><h3>£${(
              Number(price.slice(1)) * Number(quantity)
            ).toFixed(2)}</h3></div>
          </div>
          <div class="d-flex justify-content-end">
            <button class="deleteBtn btn btn-danger" id="delete-post" data-id="${id}"><i class="fa-solid fa-trash"></i>Remove</button>
          </div>
          <input type="text" id="${id}" hidden >
          <input type="text" value="${stock}" class="stock" hidden>
          <input type="text" value="${text}" class="text" hidden>
          <input type="text" value="${category}" class="category" hidden>
        </div>
        <hr>
      `;
      cart.appendChild(productEl);
    });
  }
}

export const ui = new UI();
