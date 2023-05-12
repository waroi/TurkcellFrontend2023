const bookName = document.getElementById("bookName");
const bookWriter = document.getElementById("bookWriter");
const bookDate = document.getElementById("bookDate");
const bookCategory = document.getElementById("bookCategory");
const bookUrl = document.getElementById("bookUrl");
const addBook = document.getElementById("addBook");
const bookList = document.getElementById("bookList");

let books = [];
let bookİd=Date.now();

addBook.addEventListener("click", formClicked);

let newBook = new BookConstructor(
  bookName,
  bookWriter,
  bookDate,
  bookCategory,
  bookUrl,
  bookİd
);

function formClicked() {
  console.log(newBook);
  books.push(newBook);
  UIConstructor.prototype.addBook(newBook);
  console.log(books);
}
