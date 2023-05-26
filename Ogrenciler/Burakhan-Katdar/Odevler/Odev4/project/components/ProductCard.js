const ProductCard = (product, degis) => {

  
  return ` <li class="col-12 col-lg-4 col-sm-5">
    
  <div class="card">
  <img id="productInfoImage" src=${product.productImage} class="card-img-top" alt="...">
  <div id="productInfo" class="card-body ">
    <h5 id="productInfoName" class="card-title">${product.productName}</h5>
    <h6 id="productInfoPrice" class="card-title">${product.productPrice} ₺ / kg</h6>
    <p id="productInfoCategory" class="card-text">${product.productCategory}</p>
    <p id="productInfoStock" class="card-text">Stokta: ${product.productStock} kg</p>
    
    <a id="addCart" class="btn btn-success"><i class="bi bi-cart-fill"></i></a>
    <a id="editProduct" class="btn btn-warning"><i class="bi bi-pencil-fill"></i></a>
    <a id="deleteProduct" class="btn btn-danger"><i class="bi bi-trash-fill"></i></a>

  </div>
  </div>
      
    
  </li>`;
};

export default ProductCard;
