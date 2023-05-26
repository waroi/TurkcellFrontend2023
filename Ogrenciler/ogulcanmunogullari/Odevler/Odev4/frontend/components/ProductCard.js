const productCard = (product) => {
 return ` <div id="${product.id}" class="product-card col-6 col-lg-3 g-16">
 <a class="card">
  <img
   src="${product.image1}"
   class="card-img-top"
   loading="lazy"
   alt="${product.subTitle} resim" />
  <div class="card-body">
   <img
    src="${product.logo}"
    loading="lazy"
    alt="${product.brand} logosu" />
   <h5 class="card-title mt-16 fs-1">
    ${product.title}
   </h5>
   <p class="card-title fw-bolder">${product.price} TL #</p>
  </div>
 </a>
</div>`;
};
export default productCard;
