function productCard(product) {
  return `
  <div class="col-lg-4" id="${product.id}">
  
  <div class="card">
    <img src="${
      product.image
    }" class="card-img-top" alt="${product.name.toLowerCase()}">
    <div class="card-body">
      <h5 class="card-title product-name">${product.name}</h5>
      <p class="card-text product-desc">${product.desc}</p>
      <button class="btn btn-success add-cart">Add to cart</button>
      <button class="btn btn-warning edit-product">Edit product</button>
      <button class="btn btn-danger remove-product">Delete product</button>
    </div>
  </div>
  </div>`;
}

export default productCard;
