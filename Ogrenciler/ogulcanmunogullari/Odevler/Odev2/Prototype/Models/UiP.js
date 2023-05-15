import Card from '../../Components/Card.js';
function UiP(books, purchaseHistory) {
 this.books = books;
 this.purchaseHistory = purchaseHistory;
 this.filterCategory = 'null';
 this.filterAuthor = 'null';
 this.sorting = 'Yeniden eskiye';
 this.search = '';
}
UiP.prototype.addBook = function (book) {
 this.books.push(book);
};
UiP.prototype.takeToBringingBooks = function (name1, id1, books) {
 this.purchaseHistory = this.purchaseHistory.filter((user) => {
  if (user.name == name1 && user.id == id1) {
   this.books = [...this.books, ...books];
   return false;
  } else {
   return true;
  }
 });

 localStorage.setItem('purchaseHistory', JSON.stringify(this.purchaseHistory));
 localStorage.setItem('books', JSON.stringify(this.books));
};
UiP.prototype.getBook = function (isbn) {
 //Bu işlem user.takeToInventory() içine gelecek.
 let takenBook;
 this.books = this.books.filter((book) => {
  if (book.isbn == isbn) {
   takenBook = book;
   return false;
  } else {
   return true;
  }
 });
 return takenBook;
};
UiP.prototype.getPurchaseHistory = function () {
 //Bu işlem user.setUserPurchase() içine gelecek.
 return this.purchaseHistory;
};
UiP.prototype.setPurchaseHistory = function (userObj) {
 //userObj = user.userPurchase() ten dönen obje
 if (userObj) {
  if (!this.purchaseHistory.includes(userObj)) {
   this.purchaseHistory.push(userObj);
  }
  localStorage.setItem('purchaseHistory', JSON.stringify(this.purchaseHistory));
  localStorage.setItem('books', JSON.stringify(this.books));
 }
};

UiP.prototype.getCategory = function () {
 return new Set(this.books.map((book) => book.genre).flat(Infinity));
};
UiP.prototype.getFilters = function () {
 const CATEGORIES = this.getCategory();

 const AUTHORS = new Set(this.books.map((book) => book.author));

 return { authors: [...AUTHORS], categories: [...CATEGORIES] };
};
//Test
UiP.prototype.getLibrary = function () {
 const genres = Array.from(new Set(this.books.map((book) => book.genre[0])));
 libraryBooks.innerHTML = genres
  .sort()
  .map((genre) => {
   return `
   <div id="${genre}" class="libraryDiv" data-bs-toggle="modal"
   data-bs-target="#library"
   >
   <img src="../assets/raf.png" alt="" class="libraryImg" />
   <span class="text-wheat libraryText">${genre} Rafı</span>
   </div>
   `;
  })
  .join('');
};

UiP.prototype.getLibraryData = function (GENRE) {
 const BOOKS = this.books.filter((book) => book.genre[0] == GENRE);
 libraryModalRaf.innerHTML = BOOKS.map((book) => {
  return Card(book, 'library');
 }).join('');
};
//Test
UiP.prototype.filterBooks = function () {
 let books = this.books;
 if (this.filterCategory != 'null') {
  books = this.categoryFilter(books);
 }
 if (this.filterAuthor != 'null') {
  books = this.authorFilter(books);
 }
 if (this.sorting != 'null') {
  books = books.sort((a, b) => {
   switch (this.sorting) {
    case 'A-Z':
     return a.title.localeCompare(b.title);
    case 'Z-A':
     return b.title.localeCompare(a.title);
    case 'Yeniden eskiye':
     return b.publishingDate - a.publishingDate;
    case 'Eskiden yeniye':
     return a.publishingDate - b.publishingDate;
    case null:
     break;
   }
  });
 }
 if (this.search) {
  books = books.filter((book) => {
   return (
    this.searchTitle(book.title) ||
    book.author
     .split(' ')
     .map((word) => word.toLowerCase())
     .join(' ')
     .includes(
      this.search
       .split('')
       .map((word) => word.toLowerCase())
       .join(''),
     )
   );
  });
 }
 return books;
};
UiP.prototype.filteredList = function () {
 filteredBooks.innerHTML = this.filterBooks()
  .map((book) => {
   return Card(book, 'pc');
  })
  .join('');
};
UiP.prototype.searchTitle = function (title) {
 return title
  .split(' ')
  .map((word) => word.toLowerCase())
  .join(' ')
  .includes(
   this.search
    .split(' ')
    .map((word) => word.toLowerCase())
    .join(' '),
  );
};
UiP.prototype.resetFilters = function () {
 this.filterCategory = 'null';
 this.filterAuthor = 'null';
 this.sorting = 'Yeniden eskiye';
 this.resetSearch();
};
UiP.prototype.resetSearch = function () {
 this.search = '';
};

UiP.prototype.categoryFilter = function (books) {
 if (this.filterCategory == 'null') {
  return books;
 }
 return books.filter((book) => book.genre.includes(this.filterCategory));
};

UiP.prototype.authorFilter = function (books) {
 if (this.filterAuthor == 'null') {
  return books;
 }
 return books.filter(
  (book) => book.author.toLowerCase() == this.filterAuthor.toLowerCase(),
 );
};

UiP.prototype.changeFilterCategory = function (category) {
 this.filterCategory = category;
};
UiP.prototype.changeFilterAuthor = function (author) {
 this.filterAuthor = author;
};
UiP.prototype.changeSorting = function (sort) {
 this.sorting = sort;
};
UiP.prototype.changeSearch = function (search) {
 this.search = search;
};

export default UiP;
