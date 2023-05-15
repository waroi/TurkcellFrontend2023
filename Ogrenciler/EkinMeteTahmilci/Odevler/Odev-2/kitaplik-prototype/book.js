function Book(bookName, bookAuthor, bookDate, bookCategory, bookURL) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookDate = bookDate;
  this.bookCategory = bookCategory;
  this.bookURL = bookURL;
}

const exampleBooks = [
  {
    bookAuthor: "Dante Alighieri",
    bookCategory: "Destan",
    bookDate: "1308",
    bookName: "İlahi Komedya",
    bookURL: "https://picsum.photos/id/200/200/300"
  },
  {
    bookAuthor: "Miguel de Cervantes",
    bookCategory: "Roman",
    bookDate: "1605",
    bookName: "Don Kişot",
    bookURL: "https://picsum.photos/id/201/200/300"
  },
  {
    bookAuthor: "William Shakespeare",
    bookCategory: "Tragedya",
    bookDate: "1603",
    bookName: "Othello",
    bookURL: "https://picsum.photos/id/202/200/300"
  },
  {
    bookAuthor: "William Shakespeare",
    bookCategory: "Tragedya",
    bookDate: "1599",
    bookName: "Hamlet",
    bookURL: "https://picsum.photos/id/255/200/300"
  },
  {
    bookAuthor: "Daniel Defoe",
    bookCategory: "Macera",
    bookDate: "1719",
    bookName: "Robinson Crusoe",
    bookURL: "https://picsum.photos/id/203/200/300"
  },
  {
    bookAuthor: "Jane Austen",
    bookCategory: "Romantik",
    bookDate: "1813",
    bookName: "Pride and Prejudice",
    bookURL: "https://picsum.photos/id/204/200/300"
  },
  {
    bookAuthor: "Charlotte Bronte",
    bookCategory: "Roman",
    bookDate: "1847",
    bookName: "Jane Eyre",
    bookURL: "https://picsum.photos/id/140/200/300"
  },
  {
    bookAuthor: "Herman Melville",
    bookCategory: "Macera",
    bookDate: "1851",
    bookName: "Moby Dick",
    bookURL: "https://picsum.photos/id/206/200/300"
  },
  {
    bookAuthor: "Fyodor Dostoyevsky",
    bookCategory: "Roman",
    bookDate: "1866",
    bookName: "Suç ve Ceza",
    bookURL: "https://picsum.photos/id/220/200/300"
  },
  {
    bookAuthor: "Mark Twain",
    bookCategory: "Macera",
    bookDate: "1884",
    bookName: "Huckleberry Finn",
    bookURL: "https://picsum.photos/id/208/200/300"
  },
  {
    bookAuthor: "Leo Tolstoy",
    bookCategory: "Roman",
    bookDate: "1869",
    bookName: "Savaş ve Barış",
    bookURL: "https://picsum.photos/id/209/200/300"
  }
];