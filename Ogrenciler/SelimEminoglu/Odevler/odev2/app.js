const bookName = document.getElementById("bookName");
const bookWriter = document.getElementById("bookWriter");
const bookDate = document.getElementById("bookDate");
const bookCategory = document.getElementById("bookCategory");
const bookUrl = document.getElementById("bookUrl");
const addBook = document.getElementById("addBook");
const bookList = document.getElementById("bookList");

addBook.addEventListener("click", formClicked);

let check = LocalConstructor.prototype.checkToLocalS();

if (check) {
  UIConstructor.prototype.showBook(check);
}

function formClicked() {
  let books = [];
  let bookİd = Date.now();
  let newBook = new BookConstructor(
    bookName.value,
    bookWriter.value,
    bookDate.value,
    bookCategory.value,
    bookUrl.value,
    bookİd
  );

  for (let key in newBook) {
    if (newBook.hasOwnProperty(key)) {
      if (newBook[key].value === "") {
        alert("Lütfen Boş Alan Bırakmayınız");
        return;
      }
      if (key == "date") {
        let min = 1800;
        let max = 2023;
        if (
          Number(newBook[key].value) < min ||
          Number(newBook[key].value) > max
        ) {
          alert("Lütfen 1800-2023 arası bir yıl girin");
          return;
        }
      }
    }
  }
  books.push(newBook);
  check.push(newBook);
  LocalConstructor.prototype.changeBookToLocalS(check);
  UIConstructor.prototype.showBook(books);
}
