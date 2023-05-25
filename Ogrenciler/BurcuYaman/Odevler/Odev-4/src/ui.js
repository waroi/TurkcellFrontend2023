class UI {
    loadAllProductsToUI(products) {
        products.forEach(function (product) {
            ui.addProductToUI(product);
        });
    }
    addProductToUI(product) {
        const productList = document.getElementById("productList");
        productList.innerHTML += ` <div class="col-md-2">
        <div class="card my-3">
          <img
            src="${product.url}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">
            ${product.name}
            </h5>
            <div class="stars d-flex justify-content-center mt-4 text-info">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="card-text text-center fs-5 my-4">479,90 TL</p>
            <div class="buttons d-flex justify-content-around">
              <a
                href="#"
                class="btn btn-danger text-light rounded-circle"
                id="delete"
                ><i class="fa-solid fa-trash"></i
              ></a>
              <a
                href="#"
                class="btn btn-secondary text-light rounded-circle"
                id="update"
                ><i class="fa-solid fa-pen-to-square"></i
              ></a>
              <a
                href="#"
                class="btn btn-dark text-light rounded-circle"
                id="detail"
              >
                <i class="fa-solid fa-cart-plus"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
            `;

    }
}