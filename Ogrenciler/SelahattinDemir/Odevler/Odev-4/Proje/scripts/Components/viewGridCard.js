const viewGridList = document.getElementById("viewGrid");

class ViewGridCard {
  static addProductFromViewGridCard(product) {
    viewGridList.innerHTML += `
    <div class="col-lg-4 col-md-6" id="${product.id}">
      <figure class="card card-product-grid">
        <div
          class="position-relative overflow-hidden d-block pt-2 text-center img-wrap"
        >
          <img
            class="img-fluid"
            src=${product.imageUrl}
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
          <div class="position-absolute d-none position-absolute stock">
            <span class="badge bg-success fs-5">Stok: ${product.stock}</span>
          </div>
        </div>
        <figcaption class="overflow-hidden p-3 border-top">
          <div class="d-flex justify-content-between">
            <div class="price-wrap">
              <strong class="price fs-5 fw-bold">$${product.price}</strong>
              <del class="text-decoration-line-through ms-2"
              >$${product.oldPrice}</del
              >
              </div>
                <p class="text-success">Ücretsiz kargo</p>
              </div>
              <!-- price-wrap.// -->
              <a href="#" class="text-dark fs-5"
                >${product.name}</a
              >
              <p class="grid-title my-2 overflow-hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Repudiandae, sequi.
              </p>
              <div class="text-center">
                <a type="button" class="btn btn-outline-dark">
                  Sepete Ekle
                </a>
                <a
                  href="detail1.html"
                  type="button"
                  class="btn btn-outline-dark ms-0 ms-md-3 mt-2 mt-md-0 product-delete-button"
                >
                  Ürünü Sil
                </a>
                <a
                  href="detail1.html"
                  type="button"
                  class="btn btn-outline-dark ms-0 ms-md-3 mt-2 product-edit-button"
                  data-bs-toggle="modal"
                  data-bs-target="#productModal"
                >
                  Ürünü Düzenle
                </a>
          </div>
        </figcaption>
      </figure>
    </div>
`;
  }
}

export default ViewGridCard;
