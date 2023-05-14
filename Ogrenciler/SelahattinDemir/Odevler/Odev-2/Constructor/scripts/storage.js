function LocalStorage() {}

// Local Storage'da bulunan kitapları alma
LocalStorage.prototype.getBookFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem("books")) || [];
};

// Local Storage'a kitap ekleme
LocalStorage.prototype.saveBookFromLocalStorage = function (books) {
  localStorage.setItem("books", JSON.stringify(books));
};

// Local Storage'dan kitap silme
LocalStorage.prototype.deleteFromLocalStorage = function (bookDeleteId) {
  let books = storage.getBookFromLocalStorage();
  books.forEach((book, index) => {
    if (book.id == bookDeleteId) {
      books.splice(index, 1);
    }
  });
  storage.saveBookFromLocalStorage(books);
};

LocalStorage.prototype.updateBookFromLocalStorage = function (book) {
  let books = storage.getBookFromLocalStorage();
  books.forEach((bookone) => {
    if (bookone.id == book.id) {
      Object.assign(bookone, book);
    }
  });
  storage.saveBookFromLocalStorage(books);
};
