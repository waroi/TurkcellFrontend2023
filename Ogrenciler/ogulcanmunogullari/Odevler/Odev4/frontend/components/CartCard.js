const CartCard = (product, quantity) => {
 return `<div class="border border-1 p-16 mt-16 rounded-2 bg-light fs-2">
    <div class="d-flex justify-content-between align-items-center"> 
       <span class="fs-4">${product.subTitle}</span>
       <div>
         <span> ${quantity} X ${product.price} =
         ${(product.price * quantity).toFixed(3)} TL</span>
         <div> <button ${
          product.stock == 0 && 'disabled'
         } class="btn btn-primary" id="${product.id}"> Ekle </button>
  <button ${
   quantity == 0 && 'disabled'
  } class="btn btn-danger text-light" id="${product.id}"> Çıkar </button></div>
        </div>
    </div>
</div>
<div>`;
};
export default CartCard;
