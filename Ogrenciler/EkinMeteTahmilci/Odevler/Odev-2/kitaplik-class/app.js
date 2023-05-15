
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookCoverUrl = document.querySelector("#bookCoverUrl");
const bookDate = document.querySelector("#bookDate");
const bookCategory = document.querySelector("#bookCategory");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-books");
let saveButton = document.getElementById("saveButton");
let modalFooter = document.getElementById("modalFooter");
const resetModalBtn = document.getElementById("resetModal");
let bookSearch = document.getElementById("bookSearch");
let bookCategories = document.getElementById("dropdownCategoryButton");
let bookAuthors = document.getElementById("dropdownAuthorButton");
let comboCategory = document.getElementById("categoryDropdown");
let comboAuthor = document.getElementById("authorDropdown");
let sortAZ = document.getElementById("sortAZ");
let sortZA = document.getElementById("sortZA");
let sortDate = document.getElementById("sortDate");
let isSortAz;
let isSortZa;
let isSortDate;
let bookNameForEdit;

const ui = new UI();
const storage = new Storage();

resetModalBtn.addEventListener("click", resetModal);
saveButton.addEventListener("click", addBook);
document.addEventListener("DOMContentLoaded", function () {
  let books = storage.getBooksFromStorage();
  ui.loadAllBooks(books);
  getBookCategories();
  getBookAuthors();
  comboCategory.addEventListener("change", filterBooks);
  comboAuthor.addEventListener("change", filterBooks);
});
cardbody.addEventListener("click", deleteBook);
cardbody.addEventListener("click", editBook);
clear.addEventListener("click", clearAllBooks);
bookSearch.addEventListener("keyup", searchForABook);
sortAZ.addEventListener("click", sortBooksByAZ);
sortZA.addEventListener("click", sortBooksByZA);
sortDate.addEventListener("click", sortBooksByDate);

function addBook(e) {
  e.preventDefault();

  const name = bookName.value;
  const author = bookAuthor.value;
  const url = bookCoverUrl.value;
  const date = bookDate.value;
  const category = bookCategory.value;

  if (name == "" || author == "" || url == "" || date == "" || category == "") {
    ui.displayMessages("Lütfen boş alan bırakmayınız!", "danger");
  }
  else {
    const newBook = new Book(name, author, date, category, url);
    ui.addBookToUI(newBook);
    storage.addBookStorage(newBook);
    filterBooks();

    if(isSortAz)
      sortBooksByAZ()
    if(isSortZa)
      sortBooksByZA
    if(isSortDate)
      sortBooksByDate
      
    ui.displayMessages("Kitap başarıyla eklendi!", "success");
  }
}

function deleteBook(e) {
  if (e.target.id === "delete-book") {
    ui.deleteBookFromUI(e.target);
    storage.deleteBookFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    ui.displayMessages("Silme işlemi başarılı", "success");
  }
  else{
    return;
  }
}

function clearAllBooks() {
  if (confirm("Emin misiniz?")) {
    ui.clearAllBooksFromUI();
    storage.clearAllBooksFromStorage();
  }
}

function editBook(e) {
  if (e.target.id == "edit-book") {
    let url = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].currentSrc;
    let name = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    let author = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    let date = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    let category = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;

    bookNameForEdit = name;

    bookName.value = name;
    bookCoverUrl.value = url;
    bookAuthor.value = author;
    bookCategory.value = category;
    bookDate.value = date;
    ui.editBookUI();
  }
  else{
    return;
  }
}

function resetModal() {
  modalFooter.children[1].remove();
  let saveButtonText = `<button type="submit" class="btn btn-primary" id="saveButton">Kaydet</button>`
  modalFooter.innerHTML += saveButtonText;
  saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", addBook);
  ui.clearInputs();
}

function searchForABook(e) {
  const filterValue = e.target.value.toLowerCase();
  const books = document.querySelectorAll(".book");
  books.forEach((book) => {
    const text = book.textContent.toLowerCase();
    if (text.includes(filterValue)) {
      book.classList.remove("d-none");
    }
    else {
      book.classList.add("d-none");
    }
  })
}

function getBookCategories() {
  const categories = document.querySelectorAll(".category");
  let categoryArray = [];
  categories.forEach((category) => {
    categoryArray.push(category.innerText);
  })
  categoryArray = Array.from(new Set(categoryArray));
  categoryArray.forEach((category) => {
    comboCategory.innerHTML += `<option>${category}</option>`;
  })
  comboCategory.addEventListener("change", filterBooks);
}

function getBookAuthors() {
  const authors = document.querySelectorAll(".author");
  let authorArray = [];
  authors.forEach((author) => {
    authorArray.push(author.innerText);
  })
  authorArray = Array.from(new Set(authorArray));
  authorArray.forEach((author) => {
    comboAuthor.innerHTML += `<option>${author}</option>`;
  })
  comboAuthor.addEventListener("change", filterBooks);
}

function filterBooks() {
  const authorValue = (comboAuthor.value.toLowerCase()) == "yazar seçimi..." ? "hepsi" : comboAuthor.value.toLowerCase();
  const categoryValue = (comboCategory.value.toLowerCase()) == "kategori seçimi..." ? "hepsi" : comboCategory.value.toLowerCase();
  const books = document.querySelectorAll(".book");
  books.forEach(book => {
    const author = book.textContent.toLocaleLowerCase().includes(authorValue) || authorValue === "hepsi";
    const category = book.textContent.toLocaleLowerCase().includes(categoryValue) || categoryValue === "hepsi";

    if (author && category) {
      book.classList.remove("d-none");
    } else {
      book.classList.add("d-none");
    }
  });
}

function sortBooksByAZ() {
  const books = document.querySelectorAll('.book');
  const sortedBooks = [...books].sort((a, b) => {
    const titleA = a.querySelector('td:nth-child(2)').textContent;
    const titleB = b.querySelector('td:nth-child(2)').textContent;

    return titleA.localeCompare(titleB);
  });

  const tbody = document.querySelector('tbody');
  sortedBooks.forEach(book => {
    tbody.appendChild(book);
  });
  isSortAz = true;
  isSortZa = false;
  isSortDate = false;
}

function sortBooksByZA() {
  const books = document.querySelectorAll('.book');

  const sortedBooks = [...books].sort((a, b) => {
    const titleA = a.querySelector('td:nth-child(2)').textContent;
    const titleB = b.querySelector('td:nth-child(2)').textContent;

    return titleB.localeCompare(titleA);
  });

  const tbody = document.querySelector('tbody');
  sortedBooks.forEach(book => {
    tbody.appendChild(book);
  });
  isSortAz = false;
  isSortZa = true;
  isSortDate = false;
}

function sortBooksByDate() {
  const books = document.querySelectorAll('.book');

  const sortedBooks = [...books].sort((a, b) => {
    const yearA = a.querySelector('td:nth-child(4)').textContent;
    const yearB = b.querySelector('td:nth-child(4)').textContent;

    return yearA - yearB;
  });

  const tbody = document.querySelector('tbody');
  sortedBooks.forEach(book => {
    tbody.appendChild(book);
  });
  isSortAz = false;
  isSortZa = false;
  isSortDate = true;
}
