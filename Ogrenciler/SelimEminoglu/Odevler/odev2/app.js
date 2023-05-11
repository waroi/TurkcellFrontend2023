const bookName = document.getElementById("bookName");
const bookWriter = document.getElementById("bookWriter");
const bookDate = document.getElementById("bookDate");
const bookCategory = document.getElementById("bookCategory");
const bookUrl = document.getElementById("bookUrl");
const addBook = document.getElementById("addBook");

let books = [];

addBook.addEventListener("click", formClicked);

let newBook = new BookConstructor(
  bookName,
  bookWriter,
  bookDate,
  bookCategory,
  bookUrl
);

function formClicked() {
  console.log(newBook);
  books.push(newBook);
}
