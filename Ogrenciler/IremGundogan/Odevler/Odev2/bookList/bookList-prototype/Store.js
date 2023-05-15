function Store() {}
Store.prototype.getBooks = function () {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
};

Store.prototype.getBook = function (id) {
  const books = Store.prototype.getBooks();
  return books.find((book) => {
    console.log(book);
    return book.id == Number(id);
  });
};

Store.prototype.addBook = function (book) {
  const books = Store.prototype.getBooks();
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
};

Store.prototype.removeBook = function (year) {
  const books = Store.prototype.getBooks();

  books.forEach((book, index) => {
    if (book.year === year) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem("books", JSON.stringify(books));
};

Store.prototype.updateBook = function (updatedBook) {
  const books = Store.prototype.getBooks();

  books.forEach((book, index) => {
    if (book.id === updatedBook.id) {
      books[index] = updatedBook;
    }
  });

  localStorage.setItem("books", JSON.stringify(books));
};
