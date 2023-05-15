function Storage() {}

//Local Storage'dan tüm kitapları alma
Storage.prototype.getBooksFromLocalStorage = function() {
  let books;
  if(localStorage.getItem('books') === null) {
    books = [];
  }
  else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}

//Local Storage'a kitap ekleme
Storage.prototype.setBook2LocalStorage = function(book) {
  const books = storage.getBooksFromLocalStorage();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  ui.addCategories2UI(books);
}

//Local Storage'da bulunan kitapları gösterme
Storage.prototype.showBooksFromLocalStorage = function() {
  const books = storage.getBooksFromLocalStorage();
  books.map((book) => {
    ui.addBookToUI(book);
  });
  ui.addCategories2UI(books);
}

//Local Storage'dan kitap silme
Storage.prototype.deleteBookFromLocalStorage = function(deleteBookId) {
  const books = storage.getBooksFromLocalStorage();
  books.map((book, index) => {
    if(book.id == deleteBookId) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
  ui.addCategories2UI(books);
}

//Local Storage'dan tüm kitapları silme
Storage.prototype.deleteAllBooksFromLocalStorage = function() {
  localStorage.removeItem('books');
}