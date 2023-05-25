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
    console.log('Naberrr')
    const id = Date.now();
    const name = modalProductName.value;
    const category = modalProductCategory.value;
    const imageUrl = modalProductImageUrl.value;
    const price = modalProductPrice.value;
    const stok = modalProductStok.value;
    const productDetail = modalProductDetail.value;
    if (modalProductForm.checkValidity() === false) {
      console.log('Hello')
      e.preventDefault();
      e.stopPropagation();
    }
      console.log('Naber')
      // const product = new Products(id, name, category, imageUrl, price, stok, productDetail);
      // console.log(product);
    // modalProductForm.classList.add("was-validated");
    e.preventDefault();
  }
}