class LocalStorage {
  constructor() {}

  // Local Storage'da bulunan filmleri alma
  getBooksFromLocalStorage() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  // Local Storage'a film ekleme
  setBookLocalStorage(book) {
    let books = this.getBooksFromLocalStorage();
    books.forEach((storedBook) => {
      if (!bookAuthorFilter.innerHTML.includes(storedBook.author)) {
        bookAuthorFilter.innerHTML += `<option value="${storedBook.author}">${storedBook.author}</option>`;
      }
    });

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  // Local Storage'da bulunan filmleri gösterme
  showBooksFromLocalStorage() {
    bookList.innerHTML = "";

    let books = this.getBooksFromLocalStorage();
    books.forEach((book) => {
      if (!bookAuthorFilter.innerHTML.includes(book.author)) {
        bookAuthorFilter.innerHTML += `<option value="${book.author}">${book.author}</option>`;
      }

      ui.addBook(book);
    });
  }

  // Local Storage'dan film silme
  deleteBookFromLocalStorage(deleteBookId) {
    console.log(deleteBookId);
    let books = this.getBooksFromLocalStorage();

    books.forEach((book, index) => {
      if (book.id == deleteBookId) {
        console.log(book);
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}
