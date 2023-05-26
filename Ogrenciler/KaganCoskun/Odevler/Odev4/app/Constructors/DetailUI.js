class DetailUI {
  loadCategoriesToUi() {
    modalCategory.innerHTML =
      "<option selected disabled>Kategori Seçiniz...</option>";

    categoryRequest.getAll().then((data) => {
      data.map((category) => {
        let ctg = new Category(category.id, category.name);
        modalCategory.appendChild(ctg.addCategoryToCreateProductModal());
      });
    });
  }

  getFormData(dataId){
    let name = document.querySelector('#productName').value;
    let category = document.querySelector('#category').value;
    let price = document.querySelector('#price').value;
    let stock = document.querySelector('#stockNumber').value;
    let discount = document.querySelector('#discount').value;
    let img1 = document.querySelector('#img1').value;
    let img2 = document.querySelector('#img2').value;
    let id = dataId
    name = name.toLowerCase();
    price = this.removeLeadZero(price);
    stock = this.removeLeadZero(stock);
    discount = this.removeLeadZero(discount);

    let totalPrice = price*(100-discount)/100;
            
    return {name,price,category,stock,discount,totalPrice,img1,img2,id};
}

removeLeadZero(number){
    if (typeof number !== 'string') {
        number = number.toString();
      }
    
      if (number.startsWith('0')) {
        return number.slice(1);
      }
    
      return Number(number);

}

  async editProduct(id, data) {
    console.log(data);
    let productData = await productRequest.put(id, data);
    return productData;
  }
}
