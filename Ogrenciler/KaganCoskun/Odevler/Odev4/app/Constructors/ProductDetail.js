class ProductDetail{
    constructor(data){
        this.data=data;
        this.name=data.name;
        this.price=data.price;
        this.category=data.category;
        this.stock=data.stock;
        this.discount=data.discount;
        this.totalPrice=data.totalPrice;
        this.img1=data.img1;
        this.img2=data.img2;
        this.id=data.id;
    }


    async createProductDetail(){
        productDetailWrap.innerHTML="";
        let categoryData =await categoryRequest.getById(this.category);
        let productDetail = document.createElement("div");
        productDetail.className="container";
        productDetail.innerHTML=`
                <div class="z-3 position-fixed row g-2 end-0 bottom-50 action-button">
                <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productModal" id="editBtn"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger" id="deleteBtn"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="row g-5 justify-content-center">
                <div class="col-lg-5 col-sm-12  border-end ">
                    <div id="carouselExampleIndicators" class="carousel carousel-dark slide">
                        <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button class="img2 d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        
                        </div>
                        <div class="carousel-inner ">
                            <div class="carousel-item active">
                                <img src="${this.img1}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item img2 d-none">
                                <img src="${this.img2}" class="d-block w-100" alt="...">
                            </div>
                        
                        </div>
                        <button class="carousel-control-prev pe-5 img2 d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next ps-5 img2 d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-lg-5 col-sm-12">
                    <h4 class="text-primary">${this.name.toUpperCase()} </h4>
                    <span class="fs-7 text-uppercase bg-primary px-2 py-1 text-white rounded-1">${categoryData.name}</span>
                    <p class="py-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <h4 class="mt-5 discount d-none"><del class="text-danger">$${this.price}</del></h4>
                    <h3 class="mb-5">$${this.totalPrice}</h3>
                    <p>Stoklarımzda ${this.stock?this.stock:"0"} ürün bulunmakta.</p>
                    <span>Adet</span>
                    <select class="form-select mb-3">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <p class="opacity-0 text-danger outOffTheStock">Sınırlı stok sebebiyle, satın alabileceğiniz ürün adedine ulaştınız.</p>
                    <span>Bedenler</span>
                    <div>
                        <button class="btn btn-outline-primary  px-4 offStock">S</button>
                        <button class="btn btn-outline-primary  px-4 offStock">M</button>
                        <button class="btn btn-outline-primary  px-4 offStock">L</button>
                        <button class="btn btn-outline-primary  px-4 offStock">XL</button>
                    </div>
                    <div class="my-5">
                        <button  href="#" class="btn btn-primary px-5 offStock">Sepete Ekle</button>
                </div>
            
            </div>
        </div>`

        let select = productDetail.querySelector(".form-select");

        if(this.img2){
            productDetail.querySelectorAll(".img2").forEach(item=>item.classList.remove("d-none"));
        }

        if(Number(this.stock)==0){
            productDetail.querySelectorAll(".offStock").forEach(btn=>btn.disabled=true);
            productDetail.querySelector(".btn-primary").textContent="Stokta Yok";
        }
        if(Number(this.discount)>0){
            productDetail.querySelector(".discount").classList.remove("d-none");
        }
        
        productDetail.querySelector(".btn-primary").addEventListener("click",()=>{
            this.addToBasket(this.data,Number(select.value))
        })
           

        select.addEventListener("change",(e)=>{
            if(e.target.value>this.stock){
                productDetail.querySelector(".outOffTheStock").classList.replace("opacity-0","opacity-1");
                productDetail.querySelector(".btn-primary").disabled=true;
            }
            else{
                productDetail.querySelector(".outOffTheStock").classList.add("opacity-0");
                productDetail.querySelector(".btn-primary").disabled=false;
            }
        }
        )
        productDetail.querySelector("#editBtn").addEventListener("click",()=>{this.editProduct()});
        productDetail.querySelector("#deleteBtn").addEventListener("click",()=>{this.deleteProduct()});
        

        productDetailWrap.appendChild(productDetail);
        
    }




    async addToBasket(data,quantity){
        let haveBasket = await this.checkBasket();
        if(haveBasket.length>0){
            await basketRequest.patch(haveBasket[0].id,{quantity:haveBasket[0].quantity+quantity});
            toasty("success","Sepetinizde ayni ürün mevcut bu yüzden ürün adedi güncellendi. Anasyafaya Yönlendiriliyorsunuz!");
            setTimeout(()=>{window.location.href ="/"},3000)
        }
        else{
            await basketRequest.post({...data,quantity:quantity});
            toasty("success","Ürün Sepete Eklendi. Anasyafaya Yönlendiriliyorsunuz!");
            setTimeout(()=>{window.location.href ="/"},3000)
        }
        
    }

    async checkBasket(){
        let basketData = await basketRequest.getByQuery(`id=${this.id}`);
        return basketData;
    }
    
    async deleteProduct(){
        let productData = await productRequest.delete(this.id);
        toasty("danger","Ürün Başarıyla Silindi");
        setTimeout(()=>{window.location.href ="/"},3000)
        return productData;
    }
    async updateProduct(){
        let productData = await productRequest.put(productId,this.product);
        return productData;
    }

    editProduct(){
        document.querySelector("#productName").value=this.name;
        document.querySelector("#price").value=this.price;
        document.querySelector("#category").value=this.category;
        document.querySelector("#stockNumber").value=this.stock || 0;
        document.querySelector("#discount").value=this.discount || 0;
        document.querySelector("#img1").value=this.img1;
        document.querySelector("#img2").value=this.img2;
    }
}






