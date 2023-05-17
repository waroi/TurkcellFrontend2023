class LocalConstructor {
  static changeBookToLocalS(books) {
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
  }

  static checkToLocalS() {
    let localBooks = [];
    if (localStorage.getItem("books")) {
      let bookData = JSON.parse(localStorage.getItem("books"));
      bookData.map((item) => {
        item = new BookConstructor(
          item.name,
          item.writer,
          item.date,
          item.category,
          item.url,
          item.id
        );
        localBooks.push(item);
      });
      return localBooks;
    } else {
      return localBooks;
    }
  }
}
