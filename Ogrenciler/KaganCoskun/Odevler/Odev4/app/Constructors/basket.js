class Basket{
    constructor(id,name,quantity ,price,category,stock,discount,totalPrice,img1,img2){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
        this.stock = stock;
        this.discount = discount;
        this.totalPrice = totalPrice;
        this.img1 = img1;
        this.img2 = img2;
    }

    createBasketCard(){
        let basketCard = document.createElement("div");
        basketCard.className = "card mb-3";
        basketCard.innerHTML = `
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${this.img1}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Adet : ${this.quantity}</p>
            <button class="btn btn-danger">Sepetten Çıkar</button>
          </div>
        </div>
      </div>`
        
      basketCard.querySelector(".btn-danger").addEventListener("click",()=>{this.deleteFromBasket(this.id)})

        return basketCard;
    }

    async deleteFromBasket(id){
        console.log(id)
        await basketRequest.delete(id);
        basketUi.loadBasketToUi();
        basketUi.basketCount();
        toasty("danger","Ürün Sepetten Çıkarıldı")
    }
}

class BasketUi{
    async basketCount(){
        let basketDatas =await basketRequest.getAll() 
        let count=basketDatas !==[]?basketDatas.length:0;
        document.querySelector(".basketCount").textContent=count;
        if(count>0){
            document.querySelector(".basket-order").disabled=false;
        }
        else{
            document.querySelector(".basket-order").disabled=true;
        }
        
    }

    async addBasketToUi(product){
        product = new Basket(product.id,product.name,product.quantity,product.price,product.category,product.stock,product.discount,product.totalPrice,product.img1,product.img2);
        let basketCard = product.createBasketCard();
        document.querySelector(".basketWrap").appendChild(basketCard);

    }

    async loadBasketToUi(){
        document.querySelector(".basketWrap").innerHTML="";
        let basketDatas =await basketRequest.getAll() 
        basketDatas.map(data => {
            this.addBasketToUi(data);
        });
    }

    async order(){
        console.log("geldi")
        let basketDatas =await basketRequest.getAll() 
        let result= basketDatas.map(data=>basketUi.downStock(data.id,data.quantity))
        return result;
    }

    async downStock(id,quantity){
        let stock = await productRequest.getById(id).then(data=>data.stock);
        await productRequest.patch(id,{stock:stock-quantity})
        await basketRequest.delete(id);
        basketUi.loadBasketToUi();
        basketUi.basketCount();
        ui.loadUi();

    }
}