class Storage {
  static getBooksFromLocalStorage = function() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    }
    else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static setBook2LocalStorage = function(book) {
    const books = Storage.getBooksFromLocalStorage();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    UI.addCategories2UI(books);
  }

  static showBooksFromLocalStorage = function() {
    const books = Storage.getBooksFromLocalStorage();
    books.map((book) => {
      UI.addBookToUI(book);
    });
    UI.addCategories2UI(books);
  }

  static deleteBookFromLocalStorage = function(deleteBookId) {
    const books = Storage.getBooksFromLocalStorage();
    books.map((book, index) => {
      if(book.id == deleteBookId) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    UI.addCategories2UI(books);
  }

  static deleteAllBooksFromLocalStorage = function() {
    localStorage.removeItem('books');
  }
}