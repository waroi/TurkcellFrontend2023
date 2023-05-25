class Product{
    constructor(name,price,category,stock,discount,totalPrice,img1,img2,id){
        this.name=name;
        this.category=category;
        this.price=price;
        this.img1=img1;
        this.img2=img2;
        this.totalPrice=totalPrice;
        this.stock=stock?stock:0;
        this.discount=discount?discount:0;
        this.id=id;
}

async createProductCard(){
  let category = await categoryRequest.getById(this.category)

    let productCard = document.createElement('article');
    productCard.className='col-lg-3';
    productCard.innerHTML=`
      <div class="card" >
        <div id="${this.name}${this.id}" class="carousel slide">
            <div class="carousel-inner position-relative">
              <div class="carousel-item active">
                <img src="${this.img1}" class="card-img-top" alt="...">
              </div>
              <div class="carousel-item second-image d-none">
                <img src="${this.img2}" class="card-img-top" alt="...">
              </div>
              <h6 class="position-absolute text-danger discount fw-bold d-none">%${this.discount} İndirimli!</h6>
              <button class="carousel-control-prev d-none" type="button" data-bs-target="#${this.name}${this.id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next d-none" type="button" data-bs-target="#${this.name}${this.id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>


        <div class="card-body position-relative">
          <span class="fs-7 text-uppercase bg-primary px-2 text-white rounded-1">${category.name}</span>
          <h6 class="productName">${this.name.toUpperCase()}</h6>
          <div class="mb-1">
            <i class="fa-solid fa-star voted" ></i>
            <i class="fa-solid fa-star voted" ></i>
            <i class="fa-solid fa-star voted" ></i>
            <i class="fa-solid fa-star voted" ></i>
            <i class="fa-solid fa-star"></i>
            <span class="fs-7">1.777</span>
          </div>
          <p id="stock">Stok Adedi: ${this.stock}</p>
          <del class="text-danger without-disc-price d-none">$${this.price}</del> 
          <h6 class="d-inline ms-2 bg-success p-1 text-white rounded-3 discounted-price">$${this.price}</h6>
          <a class="btn btn-primary opacity-0 mt-3 w-100 stretched-link" href="./pages/productDetail.html?id=${this.id}">Ürün Detay</a>
        </div>
        </div>`

        if(Number(this.discount) !==0){
            productCard.querySelector('.discount').classList.remove('d-none');
            productCard.querySelector('.without-disc-price').classList.remove('d-none');
            productCard.querySelector('.discounted-price').innerText=`$${this.totalPrice}`;
        }

      if(this.img2){
         productCard.querySelector('.second-image').classList.remove('d-none');
          productCard.querySelector('.carousel-control-prev').classList.remove('d-none');
          productCard.querySelector('.carousel-control-next').classList.remove('d-none');
      } 

      if(Number(this.stock) === 0){
        productCard.classList.add('offStock');
        productCard.querySelector('#stock').className='stock text-danger';
        productCard.querySelector('#stock').innerText="Stokta Yok";

      }
      else{
         productCard.querySelector('#stock').innerText=`Stok Adedi: ${this.stock}`;
      }

      return productCard;

}
}

