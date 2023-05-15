import Card from '../../Components/Card.js';

class UiC {
 constructor(books, purchaseHistory) {
  this.books = books;
  this.purchaseHistory = purchaseHistory;
  this.filterCategory = 'null';
  this.filterAuthor = 'null';
  this.sorting = 'Yeniden eskiye';
  this.search = '';
 }
 addBook(book) {
  this.books.push(book);
 }
 takeToBringingBooks(name1, id1, books) {
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
 }
 getBook(isbn) {
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
 }
 getPurchaseHistory() {
  //Bu işlem user.setUserPurchase() içine gelecek.
  return this.purchaseHistory;
 }
 setPurchaseHistory(userObj) {
  //userObj = user.userPurchase() ten dönen obje
  if (userObj) {
   if (!this.purchaseHistory.includes(userObj)) {
    this.purchaseHistory.push(userObj);
   }
   localStorage.setItem(
    'purchaseHistory',
    JSON.stringify(this.purchaseHistory),
   );
   localStorage.setItem('books', JSON.stringify(this.books));
  }
 }
 getCategory() {
  return new Set(this.books.map((book) => book.genre).flat(Infinity));
 }
 getFilters() {
  const CATEGORIES = this.getCategory();

  const AUTHORS = new Set(this.books.map((book) => book.author));

  return { authors: [...AUTHORS], categories: [...CATEGORIES] };
 }

 //Test

 getLibrary() {
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
 }
 getLibraryData(GENRE) {
  const BOOKS = this.books.filter((book) => book.genre[0] == GENRE);
  libraryModalRaf.innerHTML = BOOKS.map((book) => {
   return Card(book, 'library');
  }).join('');
 }
 //Test

 filterBooks() {
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
 }
 filteredList() {
  filteredBooks.innerHTML = this.filterBooks()
   .map((book) => {
    return Card(book, 'pc');
   })
   .join('');
 }
 searchTitle(title) {
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
 }
 resetFilters() {
  this.filterCategory = 'null';
  this.filterAuthor = 'null';
  this.sorting = 'Yeniden eskiye';
  this.resetSearch();
 }
 resetSearch() {
  this.search = '';
 }
 categoryFilter(books) {
  if (this.filterCategory == 'null') {
   return books;
  }
  return books.filter((book) => book.genre.includes(this.filterCategory));
 }
 authorFilter(books) {
  if (this.filterAuthor == 'null') {
   return books;
  }
  return books.filter(
   (book) => book.author.toLowerCase() == this.filterAuthor.toLowerCase(),
  );
 }
 changeFilterCategory(category) {
  this.filterCategory = category;
 }
 changeFilterAuthor(author) {
  this.filterAuthor = author;
 }
 changeSorting(sort) {
  this.sorting = sort;
 }
 changeSearch(search) {
  this.search = search;
 }
}
export default UiC;
