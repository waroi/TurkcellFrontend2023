const basketList = document.getElementById("basketList");

class BasketOffCanvas {
  static basketProductFromBasketOffCanvas(product) {
    basketList.innerHTML += `
    <div class="row align-items-center offcanvas-card" id="${product.id}">
          <div class="col-lg-3 offcanvas-card-img position-relative">
            <img
              class="img-fluid"
              src=${product.imageUrl}
              alt="Product Image"
            />
              <ul
                class="list-group list-group-horizontal d-none position-absolute"
              >
                <li class="list-group-item">
                  <i class="bi bi-star-fill text-warning"></i>
                </li>
                <li class="list-group-item">
                  <i class="bi bi-star-fill text-warning"></i>
                </li>
                <li class="list-group-item">
                  <i class="bi bi-star-fill text-warning"></i>
                </li>
                <li class="list-group-item">
                  <i class="bi bi-star text-warning"></i>
                </li>
                <li class="list-group-item">
                  <i class="bi bi-star text-warning"></i>
                </li>
              </ul>
          </div>
          <div class="col-lg-5 ms-lg-3">
            <h4 >${product.name}</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              ducimus assumenda voluptas eligendi sed quaerat laudantium nisi
              ipsa optio maxime suscipit repellendus, quia numquam ad, est
              veritatis tenetur, sequi deserunt!
            </p>
            <p class="text-success mt-3">Ücretsiz kargo</p>
            <div class="input-group quantity-input">
              <button
                class="btn btn-outline-dark quantity-decrease"
                type="button"
                data-product-id="${product.id}"
              >
                -
              </button>
              <input
                type="number"
                class="form-control quantity"
                value=${product.stock}
                min="0"
                data-product-id="${product.id}"
              />
              <button
                class="btn btn-outline-dark quantity-increase"
                type="button"
                data-product-id="${product.id}"
              >
                +
              </button>
            </div>
          </div>
          <div class="col-lg-2">
            <button class="btn btn-outline-danger px-lg-5 ms-lg-3 remove-from-basket">Sil</button>
          </div>
          <div class="col-lg-1">
            <div class="d-flex flex-column align-items-center">
              <span class="price fs-2 fw-bold">$${product.price}</span>
            </div>
          </div>
        </div>
`;
  }
}

export default BasketOffCanvas;
