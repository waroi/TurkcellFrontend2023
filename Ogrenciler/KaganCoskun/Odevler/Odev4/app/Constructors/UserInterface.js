class UserInterface{
    getFormData(){
        let name = document.querySelector('#productName').value;
        let category = document.querySelector('#category').value;
        let price = document.querySelector('#price').value;
        let stock = document.querySelector('#stockNumber').value;
        let discount = document.querySelector('#discount').value;
        let img1 = document.querySelector('#img1').value;
        let img2 = document.querySelector('#img2').value;
        let id = isEdit?editProduct.id:self.crypto.randomUUID();
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

    


    async addNewProduct(newProduct){
        let haveData =await ui.checkData(newProduct);
        if(haveData?.length>0){
            productRequest.patch(haveData[0].id,{stock:haveData[0].stock+newProduct.stock})
            //Bu ürün zaten olduğu için stokları arttırıldı tostyfy ile bildir
        }
        else{
        productRequest.post(newProduct)
        .then(()=>{ui.loadUi();})
        .catch(err=>console.log(err));

    ui.resetFormDatas();
    toasty("success","Ürün Başarıyla Eklendi");

    const modal = bootstrap.Modal.getInstance(document.getElementById("productModal"));
    modal?.hide();
    }
    }
    
    resetFormDatas(){
        document.querySelector('#productName').value="";
        document.querySelector('#category').value="";
        document.querySelector('#price').value="";
        document.querySelector('#stockNumber').value="";
        document.querySelector('#discount').value="";
        document.querySelector('#img1').value="";
        document.querySelector('#img2').value="";
    }


    async addProductToUI(product){
        product = new Product(product.name,product.price,product.category,product.stock,product.discount,product.totalPrice,product.img1,product.img2,product.id);
        let productCard = await product.createProductCard()
        await productsWrap.appendChild(productCard);   
        
        
    }


    async checkData(newProduct){
        let isDataThere = await productRequest.getByQuery(`name=${newProduct.name}`);
        return isDataThere;
    }

    loadCategoriesToUi(){
    categoryList.innerHTML='';
    modalCategory.innerHTML='<option selected disabled>Kategori Seçiniz...</option>';

        categoryRequest.getAll()
        .then(data=>{
            data.map(category => {
                let ctg = new Category(category.id,category.name);
                categoryList.appendChild(ctg.addCategoryToFilterUi());
                modalCategory.appendChild(ctg.addCategoryToCreateProductModal());

                        }
            );
        }
        )
    }

  async filterData(){
    let searchInput = document.querySelector('#searchInput').value.toLowerCase();
    let queryString = Filter.categoryFilter();
    let filteredProductData =await productRequest.getByQuery(queryString);
    searchInput ? filteredProductData = Filter.search(searchInput,filteredProductData):null;
    sortProducts.value !=="none" ? filteredProductData =await Filter.sort(filteredProductData,sortProducts.value):null;
    return filteredProductData;
   }

   async loadUi(){
    let filterData = await ui.filterData();
        productsWrap.innerHTML='';

        console.log(filterData)
         if(filterData?.length > 0){
            filterData.map(data => ui.addProductToUI(data));
        }
        else if(filterData !== []){
            productsWrap.innerHTML='<h4>Sonuç Bulunamadı</h4>';
        }
    }

    async orderProduct(){
        let result = await basketUi.order();  
        toasty("success","Siparişiniz Alındı.");      
    }
}