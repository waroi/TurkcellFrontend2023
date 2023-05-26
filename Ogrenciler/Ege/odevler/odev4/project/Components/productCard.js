function productCard(product) {
  return `
  <div class="col-lg-4 mb-5" id="${product.id}">
  <div class="card h-100">
    <img src="${
      product.image
    }" class="card-img-top img-fluid" alt="${product.name.toLowerCase()}">
    <div class="card-body">
      <h5 class="card-title product-name text-center">${product.name}</h5>
      <p class="card-text mb-2 product-price "><i class="fa-solid fa-dollar-sign me-3"></i>${
        product.price
      }</p>
      <p class="card-text mb-2 product-category "><i class="fa-solid fa-filter me-3"></i>${
        product.category
      }</p>
      <p class="card-text mb-2 product-stock  "><i class="fa-solid fa-warehouse me-3"></i>${
        product.stock
      } left</p>
      <p class="card-text mb-5 product-desc"><i class="fa-regular fa-message me-3"></i>${
        product.desc
      }</p>
      <div class="card-buttons d-flex justify-content-between gap-3">
      <button class="btn btn-success add-cart ${
        product.stock == 0 ? "disabled" : ""
      }"><i class="fa-solid fa-cart-plus"></i></button>
      <button data-bs-toggle="modal"
      data-bs-target="#addModal" class="btn btn-warning edit-product"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="btn btn-danger delete-product"><i class="fa-solid fa-trash"></i></button>
    </div>
    </div>
    </div>
  </div>`;
}

export default productCard;
