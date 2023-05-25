function productCard(product) {
  return `
  <div class="col-lg-4" id="${product.id}">
  <div class="card h-100">
    <img src="${
      product.image
    }" class="card-img-top img-fluid" alt="${product.name.toLowerCase()}">
    <div class="card-body">
      <h5 class="card-title product-name">${product.name}</h5>
      <p class="card-text product-price">$${product.price}</p>
      <p class="card-text product-category">${product.category}</p>
      <p class="card-text product-stock text-danger">${product.stock} left</p>
      <p class="card-text product-desc">${product.desc}</p>
      <div class="card-buttons d-flex justify-content-between">
      <button class="btn btn-success add-cart ${
        product.stock == 0 ? "disabled" : ""
      }">Add to cart</button>
      <button data-bs-toggle="modal"
      data-bs-target="#addModal" class="btn btn-warning edit-product">Edit product</button>
      <button class="btn btn-danger delete-product">Delete product</button>
    </div>
    </div>
    </div>
  </div>`;
}

export default productCard;
