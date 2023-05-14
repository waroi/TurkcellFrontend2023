const bookName = document.getElementById("bookName");
const bookWriter = document.getElementById("bookWriter");
const bookDate = document.getElementById("bookDate");
const bookCategory = document.getElementById("bookCategory");
const bookUrl = document.getElementById("bookUrl");

const bookNameUpdate = document.getElementById("bookNameUpdate");
const bookWriterUpdate = document.getElementById("bookWriterUpdate");
const bookDateUpdate = document.getElementById("bookDateUpdate");
const bookCategoryUpdate = document.getElementById("bookCategoryUpdate");
const bookUrlUpdate = document.getElementById("bookUrlUpdate");

const addBook = document.getElementById("addBook");
const updateBook = document.getElementById("updateBook");

const searchİnput = document.getElementById("search");
const bookList = document.getElementById("bookList");

addBook.addEventListener("click", formClicked);
updateBook.addEventListener("click", bookUpdated);
searchİnput.addEventListener("keyup", searchBook);

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

function bookUpdated() {
  let list = LocalConstructor.prototype.checkToLocalS();
  list.map((item) => {
    if (bookNameUpdate.getAttribute("order") == item.id) {
      item.name = bookNameUpdate.value;
      item.writer = bookWriterUpdate.value;
      item.date = bookDateUpdate.value;
      item.category = bookCategoryUpdate.value;
      item.url = bookUrlUpdate.value;
    }
  });
  LocalConstructor.prototype.changeBookToLocalS(list);
  list = LocalConstructor.prototype.checkToLocalS();
  location.reload();
  UIConstructor.prototype.showBook(list);
}

function searchBook() {
  let list = LocalConstructor.prototype.checkToLocalS();
  let searchİnput = this.value.toLowerCase();
  let searchList = [];

  list.map((item) => {
    if (searchİnput == "") {
      bookList.childNodes.forEach((child) => {
        if (child.hasChildNodes()) {
          child.classList.remove("d-none");
        }
      });
      return;
    } else if (
      item.name.toLowerCase().indexOf(searchİnput) > -1 ||
      item.writer.toLowerCase().indexOf(searchİnput) > -1
    ) {
      bookList.childNodes.forEach((child) => {
        if (child.hasChildNodes()) {
          child.classList.add("d-none");
        }
      });
      searchList.push(item);
    }
  });

  searchList.map((item) => {
    bookList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        if (item.id == Number(child.childNodes[0].id)) {
          child.classList.remove("d-none");
        }
      }
    });
  });
}
