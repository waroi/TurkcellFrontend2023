import Card from '../../Components/Card.js';

function UserP(name, id) {
 this.name = name;
 this.id = id;
 this.inventory = [];
 this.selectedBook = null;
 this.purchased = [];
}

UserP.prototype.takeToInventory = function (book) {
 //book = ui.getBook() den gelen veri.
 this.inventory.push(book);
};
UserP.prototype.selectBook = function (id) {
 this.selectedBook = this.inventory.find((book) => book.isbn == id);
};

UserP.prototype.leaveFromInventory = function (book) {
 this.inventory = this.inventory.filter((iBook) => iBook != book);
 return book;
};
UserP.prototype.setUserPurchase = function (purchaseHistory) {
 //purchaseHistory = getPurchaseHistory() den gelen veri.
 purchaseHistory.forEach((purchases) => {
  if (purchases.name == this.name) {
   if (!this.purchased.includes(purchases.books)) {
    this.purchased = [...this.purchased, ...purchases.books];
   }
  }
 });
};

UserP.prototype.userPurchase = function () {
 let fakeInventory = this.inventory;
 this.purchased.unshift(...this.inventory);
 this.inventory = [];
 return { name: this.name, id: this.id, books: fakeInventory };
 //Bu işlem ui.setPurchaseHistory() içine gelecek.
};

UserP.prototype.userBringBack = function () {
 let books = this.purchased;
 this.purchased = [];
 return { name: this.name, id: this.id, books: books };
 //Bu işlem ui.takeToBringingBooks() içine gelecek.
};
//Test
UserP.prototype.getInventoryData = function () {
 if (this.name) {
  inventoryList.innerHTML = this.inventory
   .map((book) => {
    return Card(book, 'inventory');
   })
   .join('');
 }
};
//Test
export default UserP;
