class LocalStorage {
  // Local Storage'da bulunan kitapları alma
  static getBookFromLocalStorage() {
    return JSON.parse(localStorage.getItem("books")) || [];
  }
  static saveBookFromLocalStorage(books) {
    localStorage.setItem("books", JSON.stringify(books));
  }
  static deleteFromLocalStorage(bookDeleteId) {
    let books = this.getBookFromLocalStorage();
    books.forEach((book, index) => {
      if (book.id == bookDeleteId) {
        books.splice(index, 1);
      }
    });
    this.saveBookFromLocalStorage(books);
  }
  static updateBookFromLocalStorage(book) {
    let books = this.getBookFromLocalStorage();
    books.forEach((bookone) => {
      if (bookone.id == book.id) {
        Object.assign(bookone, book);
      }
    });
    this.saveBookFromLocalStorage(books);
  }
}