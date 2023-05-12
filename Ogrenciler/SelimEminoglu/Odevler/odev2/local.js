function LocalConstructor() {}

LocalConstructor.prototype.changeBookToLocalS = function (books) {
  books.map((book) => {
    book = {
      name: book.name,
      writer: book.writer,
      date: book.date,
      category: book.category,
      url: book.url,
      id: book.id,
    };
  });
  localStorage.setItem("books", JSON.stringify(books));
};

LocalConstructor.prototype.checkToLocalS = function () {
  if (localStorage.getItem("books")) {
    let localBooks = [];
    let bookData = JSON.parse(localStorage.getItem("books"));
    let item = new BookConstructor(
      bookData.name,
      bookData.writer,
      bookData.date,
      bookData.category,
      bookData.url,
      bookData.id
    );
    localBooks.push(item);
    return localBooks;
  } else {
    return false;
  }
};
