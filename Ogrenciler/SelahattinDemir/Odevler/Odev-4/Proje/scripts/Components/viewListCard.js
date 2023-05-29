const viewList = document.getElementById("viewList");

class ViewListCard {
  static addProductFromViewListCard(product) {
    viewList.innerHTML += `
    <div class="card card-product-list mt-3 productList-card" id="${product.id}">
                  <div class="row">
                    <div class="col-xl-4 col-md-4">
                      <a
                        href="#"
                        class="d-block pt-2 grid text-center overflow-hidden"
                      >
                        <img
                          class="img-fluid"
                          src=${product.imageUrl}
                        />
                      </a>
                    </div>
                    <!-- col.// -->
                    <div class="col-xl-5 col-md-5 col-sm-7">
                      <div class="card-body mt-3">
                        <a href="#" class="title text-dark fs-5 fw-bold"
                          >${product.name}
                        </a>
                        <div class="rating-wrap my-4">
                          <ul class="list-group list-group-horizontal title">
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
                        <!-- rating-wrap.// -->
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nostrum ducimus assumenda voluptas eligendi sed
                          quaerat laudantium nisi ipsa optio maxime suscipit
                          repellendus, quia numquam ad, est veritatis tenetur,
                          sequi deserunt!
                        </p>
                      </div>
                      <!-- card-body.// -->
                    </div>
                    <!-- col.// -->
                    <div class="col-xl-3 col-md-3 col-sm-5">
                      <div class="p-4 h-100 info-aside">
                        <div class="price-wrap mb-2">
                          <span class="price fs-5 fw-bold">$${product.price}</span>
                          <del class="price-old text-decoration-line-through">
                          $${product.oldPrice}</del
                          >
                        </div>
                        <!-- info-price-detail // -->
                        <p class="text-success">Ücretsiz kargo</p>
                        <div
                          class="position-absolute d-none position-absolute stock"
                        >
                          <span class="badge bg-success fs-5">Stok: ${product.stock}</span>
                        </div>
                        <div class="mb-3">
                          <a type="button" class="btn btn-outline-dark basketBtn" id="viewList-basket-button-${product.id}">
                            Sepete Ekle
                          </a>
                          <a
                            href="detail.html"
                            type="button"
                            class="btn btn-outline-dark mt-3 product-delete-button"
                          >
                            Ürünü Sil
                          </a>
                          <a
                            href="detail1.html"
                            type="button"
                            class="btn btn-outline-dark mt-3 product-edit-button"
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                          >
                            Ürünü Düzenle
                          </a>
                        </div>
                      </div>
                      <!-- info.// -->
                    </div>
                    <!-- col.// -->
                  </div>
                </div>
`;
  }
}

export default ViewListCard;
