import Card from '../../Components/Card.js';

class UserC {
 constructor(name, id) {
  this.name = name;
  this.id = id;
  this.inventory = [];
  this.selectedBook = null;
  this.purchased = [];
 }
 takeToInventory(book) {
  //book = ui.getBook() den gelen veri.
  this.inventory.push(book);
 }
 selectBook(id) {
  this.selectedBook = this.inventory.find((book) => book.isbn == id);
 }
 leaveFromInventory(book) {
  this.inventory = this.inventory.filter((iBook) => iBook != book);
  return book;
 }
 setUserPurchase(purchaseHistory) {
  //purchaseHistory = getPurchaseHistory() den gelen veri.
  purchaseHistory.forEach((purchases) => {
   if (purchases.name == this.name) {
    if (!this.purchased.includes(purchases.books)) {
     this.purchased = [...this.purchased, ...purchases.books];
    }
   }
  });
 }
 userPurchase() {
  let fakeInventory = this.inventory;
  this.purchased.unshift(...this.inventory);
  this.inventory = [];
  return { name: this.name, id: this.id, books: fakeInventory };
  //Bu işlem ui.setPurchaseHistory() içine gelecek.
 }
 userBringBack() {
  let books = this.purchased;
  this.purchased = [];
  return { name: this.name, id: this.id, books: books };
  //Bu işlem ui.takeToBringingBooks() içine gelecek.
 }
 //Test
 getInventoryData() {
  if (this.name) {
   inventoryList.innerHTML = this.inventory
    .map((book) => {
     return Card(book, 'inventory');
    })
    .join('');
  }
 }
 //Test
}
export default UserC;
