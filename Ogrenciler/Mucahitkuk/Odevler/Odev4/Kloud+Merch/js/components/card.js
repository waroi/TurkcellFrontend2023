function createCard(product) {
  return `<div class="card" style="width: 18rem;" data-id="${product.id}">
  <img class="card-img-top" id="product-image"
    src="${product.productImage}"
    alt="Card image cap">
  <div class="card-header position-absolute bg-transparent border-0">
    <button id="remove-product-button" class="btn btn-danger">Remove</button>
    <button id="update-product-button" class="btn btn-warning">Update</button>
  </div>
  <div class="card-body">
    <h5 class="product-title" id="title-text">${product.title}</h5>
    <p>Category: <span id="category-text">${product.category}</span></p>
    <p>In Stock: <span id="stock-text" class="in-stock">${product.stock}</span></p>
    <p>Cost: <span id="cost-text" class="cost">${product.price}</span><span>$</span></p>
    <button id="add-to-cart-button" class="btn btn-primary">Add To Cart</button>
  </div>
</div>`
}

export default createCard