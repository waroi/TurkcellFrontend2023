// function Storage() {}

class Storage {
  static addBookToStorage(newBook) {
    let books = this.getBooksFromStorage();

    books.push(newBook);
    console.log(books);

    localStorage.setItem("books", JSON.stringify(books));
  }
  static getBooksFromStorage() {
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
  }
  static deleteBookFromStorage(deleteBook) {
    let books = this.getBooksFromStorage();

    books.forEach((book, index) => {
      if (book.id === Number(deleteBook.id)) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// Storage.prototype.addBookToStorage = function (newBook) {
//   let books = this.getBooksFromStorage();

//   books.push(newBook);
//   console.log(books);

//   localStorage.setItem("books", JSON.stringify(books));
// };

// Storage.prototype.getBooksFromStorage = function () {
//   let books;

//   if (localStorage.getItem("books") === null) {
//     books = [
//       {
//         id: 61,
//         name: "3 Silahsorler",
//         year: 1926,
//         category: "horror",
//         author: "osman can",
//         url: "https://assets-prd.ignimgs.com/2022/08/02/lord-of-the-rings-thumbnail-1659474646743.jpg",
//       },
//       {
//         id: 34,
//         name: "Tuvalettekiler",
//         year: 1926,
//         category: "historical",
//         author: "mehmet",
//         url: "https://upload.wikimedia.org/wikipedia/tr/6/68/Hobbit_Beklenmedik_Yolculuk_T%C3%BCrk%C3%A7e.jpeg",
//       },
//     ];
//   } else {
//     books = JSON.parse(localStorage.getItem("books"));
//   }
//   return books;
// };

// Storage.prototype.deleteBookFromStorage = function (deleteBook) {
//   let books = this.getBooksFromStorage();

//   books.forEach((book, index) => {
//     if (book.id === Number(deleteBook.id)) {
//       books.splice(index, 1);
//     }
//   });
//   localStorage.setItem("books", JSON.stringify(books));
// };
