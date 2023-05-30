const singleProduct = (product) => {
 return `<section class="col-12 col-lg-3">
      <div id="productCarousel" class="carousel slide" data-bs-ride="true">
       <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
         <img
          src="${product.image1}"
          class="d-block w-100"
          loading="lazy"
          alt="laptop resim 1" />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
         <img
          src="${product.image2}"
          class="d-block w-100"
          loading="lazy"
          alt="laptop resim 2" />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
         <img
          src="${product.image3}"
          class="d-block w-100"
          loading="lazy"
          alt="laptop resim 3" />
        </div>
       </div>
       <div class="d-flex justify-content-between">
        <img
         src="${product.image1}"
         type="button"
         loading="lazy"
         data-bs-target="#productCarousel"
         data-bs-slide-to="0"
         class="active w-25"
         aria-current="true"
         aria-label="Slide 1" />
        <img
         src="${product.image2}"
         type="button"
         loading="lazy"
         data-bs-target="#productCarousel"
         data-bs-slide-to="1"
         class="w-25"
         aria-label="Slide 2" />
        <img
         src="${product.image3}"
         type="button"
         loading="lazy"
         data-bs-target="#productCarousel"
         data-bs-slide-to="2"
         class="w-25"
         aria-label="Slide 3" />
       </div>
      </div>
     </section>
     <section class="col-12 col-lg-8 offset-lg-1">
      <h3 class="col-12">
       ${product.title}
      </h3>
      <img
       src="${product.logo}"
       alt="hp logo"
       loading="lazy"
       class="mt-16" />
      <div class="row">
       <div
        class="col-12 d-flex align-items-center justify-content-between mt-16">
        <h3>${product.price} TL</h3>
       </div>
       <p class="fs-2">${(product.price / 6).toFixed(3)} x 6 Taksitle</p>
       <div
        class="row gap-16 align-items-center justify-content-between justify-content-lg-start mt-16">
        <div class="d-flex align-items-center col-auto">
         <button ${
          product.stock == 0 && 'disabled'
         } class="btn btn-success col-auto " id="addCart">Sepete Ekle</button>
         <p id="productStock" class="fs-2 fw-semibold mt-16 px-16">${
          product.stock == 0
           ? 'Ürün Bitti'
           : `Stokta ${product.stock}
          Adet Kaldı`
         }</p>
        </div>
       </div>
      </div>
     </section>`;
};
export default singleProduct;
