1)homepage'de yapılanlar
-product slider var
-wand shop a basılınca ürünlere idiyor
-kullanıcı yorumları kısmında animasyon ve fixed bg-image var
-contact us kısmında form mevcut
-sol kısımda asadan yapılmış bir scroll to up var

2)product-1-2
-slider mevcutfotoğrafın üstündeki çerçeve bir img


3)product-3)
-indirimli ürün mevcut

  <div class="blog-info">
        <h3>${title}</h3>
      </div>
      <div class="overview">
        <h3 class="title">${title}</h3>
        <p>${text}</p>
        <p class="author">${author}</p>
        <div class="row">
          <div class="col-6 date">
            <p>${date}</p>
          </div>
          <div class="col-6 category">
            <p>${category}</p>
          </div>
          <div class="d-flex space-between justify-content-between mt-2">
            <button
              type="button"
              class="btn btn-sm btn-outline-primary fs-6 py-1 px-4 edit"
              data-id="${id}"
              id="edit-post"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-danger fs-6 py-1 px-4 delete"
              id="delete-post"
              data-id="${id}"
            >
              Delete
            </button>
          </div>
        </div>
      </div>



      <img src="./src/assets/prudct-frame.png" class="position-absolute w-100 h-100">
       <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary text-white position-relative"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-id="${id}"
          id="edit-post"
        >
        Quick Wiev
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-secondary">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">DETAILS</h1>
                <button
                  type="button"
                  class="btn-close"
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
                    <h3 class="col-lg-12 pb-3 ">${price}</h3>
                    <div>
                      <input type="number" id="stock" class="form-control"/>
                      <button
                        class="col-lg-4 bg-warning rounded-2 text-white fs-5 my-3"
                      >
                        Add to Cart
                        <i
                          class="fa-solid fa-cart-shopping text-light fs-5"
                        ></i>
                      </button>
                    </div>
                    <p>
                     ${text}
                    </p>
                    <p class="category text-primary">
                     ${category}
                    </p>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
         <button
              type="button"
              class="btn btn-sm btn-outline-primary fs-6 py-1 px-4 edit position-relative"
              data-id="${id}"
              id="edit-post"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-danger fs-6 py-1 px-4 delete position-relative"
              id="delete-post"
              data-id="${id}"
            >
              Delete
            </button>
        <img src="${imageUrl}" alt="${name} class="image">
        <h3>${name}</h3>