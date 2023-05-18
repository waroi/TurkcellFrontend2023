function LocalStorage() {}

// Local Storage'da bulunan kitapları alma
LocalStorage.prototype.getBookFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem("books")) || [];
};

// Local Storage'a kitap ekleme
LocalStorage.prototype.saveBookFromLocalStorage = function (books) {
  localStorage.setItem("books", JSON.stringify(books));
};

LocalStorage.prototype.deleteFromLocalStorage = function (bookDeleteId) {
  let books = this.getBookFromLocalStorage();
  books.forEach((book, index) => {
    if (book.id == bookDeleteId) {
      books.splice(index, 1);
    }
  });
  this.saveBookFromLocalStorage(books);
};

LocalStorage.prototype.updateBookFromLocalStorage = function (book) {
  let books = this.getBookFromLocalStorage();
  books.forEach((bookone) => {
    if (bookone.id == book.id) {
      Object.assign(bookone, book);
    }
  });
  this.saveBookFromLocalStorage(books);
};
