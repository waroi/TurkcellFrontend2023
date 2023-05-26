class Products {
  constructor(id, name, category, imageUrl, price, stok, productDetail) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.imageUrl = imageUrl;
    this.price = price;
    this.stok = stok;
    this.productDetail = productDetail;
  }

  static addProduct = function(e) {
    const id = Date.now();
    const name = modalProductName.value;
    const category = modalProductCategory.value;
    const imageUrl = modalProductImageUrl.value;
    const price = Number(modalProductPrice.value);
    const stok = Number(modalProductStok.value);
    const productDetail = modalProductDetail.value;
    if (modalProductForm.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {
      const product = new Products(id, name, category, imageUrl, price, stok, productDetail);
      RequestProducts.addNewProductToRequest(product);
    }
    modalProductForm.classList.add("was-validated");
    e.preventDefault();
  }

  static detailProduct = function(e) {
    if(e.target.classList.contains('fa-eye')) {
      const detailProductId = e.target.parentElement.parentElement.parentElement.id;
      RequestProducts.getProductDetailFromRequest(detailProductId);
    }
    e.preventDefault();
  }

  static updateProduct = function(e) {
    if(e.target.classList.contains('fa-edit')) {
      const updateProductId = e.target.parentElement.parentElement.parentElement.id;
      RequestProducts.getUpdateProductDetailFromRequest(updateProductId);
    }
    e.preventDefault();
  }

  static deleteProduct = function(e) {
    if(e.target.classList.contains('fa-trash')) {
      const deleteProduct = e.target.parentElement.parentElement.parentElement;
      if(confirm('Blogu silmek istediğinize emin misiniz?')) {
        UI.deleteProductFromUI(deleteProduct);
        RequestProducts.deleteProductFromRequest(deleteProduct.id);
        UI.toastMessage('Blog Başarılı Bir Şekilde Silindi.');
      }
    }
    e.preventDefault();
  }

  static showAllProducts4Button = function(e) {
    UI.clearAllFilters();
    UI.showAllProductsFromUI();
    e.preventDefault();
  }
}