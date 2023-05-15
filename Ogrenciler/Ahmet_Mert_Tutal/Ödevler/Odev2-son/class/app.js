const storage = new LocalStorage();
const ui = new UI();
const books = new Books();

   
//Get Elements
const bookPosterInput = document.getElementById("bookPoster");
const bookTitleInput = document.getElementById("bookTitle");
const bookCategoryInput = document.getElementById("bookCategory");
const bookYearInput = document.getElementById("bookYear");
const bookAuthorInput = document.getElementById("bookAuthor");
const addBookButton = document.getElementById("addBookButton");
const bookList = document.getElementById ("bookList");
const editBookButton = document.getElementById("editBookButton");
const deleteBookButton = document.getElementById("deleteBookButton");
const filterInput = document.getElementById("filterInput");

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", storage.firststorage); //prototype
  document.addEventListener("DOMContentLoaded", storage.showBooksFromLocalStorage);
 
  addBookButton.addEventListener("click", books.addBook);
  editBookButton.addEventListener("click", books.addBook);
  deleteBookButton.addEventListener("click", books.deleteBook);
  sorter.addEventListener("change", function () {
    const sortValue = sorter.value;
    if (sortValue === "AtoZ") {
      filterBooks("AtoZ");
    } else if (sortValue === "ZtoA") {
      filterBooks("ZtoA");
    } else if (sortValue === "OnDate") {
      filterBooks("OnDate");
    } else {
      filterBooks("default");
    }
  });
  filterInput.addEventListener("input", filterBooks);
}