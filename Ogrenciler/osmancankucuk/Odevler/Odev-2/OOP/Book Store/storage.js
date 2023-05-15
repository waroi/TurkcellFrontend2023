function Storage() {}
Storage.prototype.addBookToStorage = function (newBook) {
  let books = this.getBooksFromStorage();

  books.push(newBook);
  console.log(books);

  localStorage.setItem("books", JSON.stringify(books));
};

Storage.prototype.getBooksFromStorage = function () {
  let books;

  if (localStorage.getItem("books") === null) {
    books = [
      {
        id: 61,
        name: "Oliver Twist",
        year: 1948,
        category: "horror",
        author: "Charles Dickens",
        url: "https://img.kitapyurdu.com/v1/getImage/fn:4638315/wh:true/miw:200/mih:200",
      },
      {
        id: 34,
        name: "Anna Karenina",
        year: 1877,
        category: "historical",
        author: "Tolstoy",
        url: "https://www.iskultur.com.tr/dosyalar/2011/10/ANNA.png",
      },
    ];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
};

Storage.prototype.deleteBookFromStorage = function (deleteBook) {
  let books = this.getBooksFromStorage();

  books.forEach((book, index) => {
    if (book.id === Number(deleteBook.id)) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
};
