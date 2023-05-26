class CartItem {
 constructor(id, quantity = 0) {
  this.id = id;
  this.quantity = quantity;
 }
 changeQuantity(number) {
  this.quantity = this.quantity + number;
 }
}
export default CartItem;
