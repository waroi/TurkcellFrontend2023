class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static getBook(id) {
    const books = Store.getBooks();
    return books.find((book) => {
      console.log(book);
      return book.id == Number(id);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }


  static removeBook(year) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.year === year) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }

  static updateBook(updatedBook) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.id === updatedBook.id) {
        books[index] = updatedBook;
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}
