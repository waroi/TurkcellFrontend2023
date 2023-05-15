const bookUrl = document.querySelector("#bookUrl");
const bookName = document.querySelector("#bookName");
const bookType = document.querySelector("#bookType");
const bookDate = document.querySelector("#bookDate");
const bookAuthor = document.querySelector("#bookAuthor");
const bookList = document.querySelector("#bookList");
const bookForm = document.querySelector("#bookForm");

const bookSearch = document.querySelector("#bookSearch");
const bookSort = document.querySelector("#bookSort");
const bookAuthorFilter = document.querySelector("#bookAuthorFilter");
const myModal = document.querySelector("#myModal");
const categoriesSelect = document.querySelectorAll(".form-check-input");

const addOrEditButton = document.querySelector("#addOrEditButton");
const editButton = document.querySelector("#editButton");
const storage = new LocalStorage();
const ui = new UI();
const books = new Books();

addEventListeners();

function addEventListeners() {
  myModal.addEventListener("show.bs.modal", function (event) {
    ui.clearForm();
    if (event.relatedTarget.id === "editButton") {
      addOrEditButton.style.display = "none";
      editButton.style.display = "block";
    } else {
      addOrEditButton.style.display = "block";
      editButton.style.display = "none";
    }
  });
  addOrEditButton.addEventListener("click", books.addBook);
  bookList.addEventListener("click", books.deleteBook);
  bookList.addEventListener("click", books.editBook);
  editButton.addEventListener("click", books.saveEditBook);
  bookSearch.addEventListener("keyup", books.searchBook);
  categoriesSelect.forEach((category) => {
    category.addEventListener("change", books.filterBook);
  });

  bookSort.addEventListener("change", books.sortBook);
  bookAuthorFilter.addEventListener("change", books.filterBook);
}

window.addEventListener("DOMContentLoaded", () => {
  let books = storage.getBooksFromLocalStorage();

  //kendimi books içinden books oluşturup ui a ekliyoruz

  if (books.length == 0) {
    storage.setBookLocalStorage(
      new Books(
        1,
        "https://m.media-amazon.com/images/I/41v0JhxLPIL._SY498_BO1,204,203,200_.jpg",
        "name of the wind",
        "Fantasy",
        2011,
        "Patrick Rothfuss"
      )
    );

    storage.setBookLocalStorage(
      new Books(
        2,
        "https://img.kitapyurdu.com/v1/getImage/fn:8602682/wh:true/wi:220",
        "Thus Spake Zarathustra",
        "Classic",
        1883,
        "Friedrich Nietzsche"
      )
    );
  }
  storage.showBooksFromLocalStorage(books);
});
