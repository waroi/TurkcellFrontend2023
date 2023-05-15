

const addBtn = document.querySelector("#add-book");
const bookList = document.querySelector("#book-collection");
const bookName = document.querySelector("#bookNameInput");
const bookGenre = document.querySelector("#bookGenreInput");
const bookAuthor = document.querySelector("#bookAuthorInput");
const bookWrittenDate = document.querySelector("#bookWrittenDateInput");
const bookCoverUrl = document.querySelector("#bookCoverUrlInput");
const searchInput = document.querySelector("#search-input");
const editButton = document.querySelector("#edit-button");
const clrButton = document.querySelector("#clear-button");
const addBtnindex = document.querySelector("#addBook-index");
const bookImg = document.querySelector(".book-img");
const arrangeBooks = document.querySelector("#floatingSelect");
const selectGenreElement = document.querySelector("#genreSelect");
const authorSelect = document.querySelector("#authorSelect");

let list = document.getElementById("book-collection");



// Book Constructor

class Book {
  constructor(name, genre, author, coverUrl, writtenDate) {
    this.id = Date.now();
    this.name = name;
    this.genre = genre;
    this.author = author;
    this.coverUrl = coverUrl;
    this.writtenDate = writtenDate.split("-").reverse().join("-");
  }
}


// UI Constructor

class UI {
  constructor() {
    this.bookList = document.getElementById("film-collection");
  }
  searchBook(e) {
    const searchTerm = e.target.value.toLowerCase();
    const bookList = document.querySelectorAll("#book-collection li");
    Array.from(bookList).forEach((bookLi) => {
      const bookName = bookLi
        .querySelector(".bookName")
        .textContent.toLowerCase();
      const bookAuthor = bookLi
        .querySelector(".bookAuthor")
        .textContent.toLowerCase();
      if (bookName && bookAuthor) {
        if (bookName.includes(searchTerm) || bookAuthor.includes(searchTerm)) {
          bookLi.style.display = "flex";
        } else {
          bookLi.style.display = "none";
        }
      }
    });
  }
  filterBooks() {
    const selectedAuthor = authorSelect.value.toLowerCase();
    const selectedGenre = genreSelect.value.toLowerCase();
    const bookList = document.querySelectorAll("#book-collection li");
    let hasMatches = false;

    Array.from(bookList).forEach((bookLi) => {
      const bookAuthor = bookLi
        .querySelector(".bookAuthor")
        ?.textContent.toLowerCase();
      const bookGenres = bookLi
        .querySelector(".bookGenre")
        .textContent.toLowerCase();

      if (
        (selectedAuthor === "all" ||
          (bookAuthor && bookAuthor === selectedAuthor)) &&
        (selectedGenre === "all" || bookGenres.includes(selectedGenre))
      ) {
        bookLi.style.display = "flex";
        hasMatches = true;
      } else {
        bookLi.style.display = "none";
      }
    });

    if (!hasMatches) {
      alert("No matches Found");
    }
  }
  arrangeBook() {
    const sortCriteria = document.querySelector("#floatingSelect").value;
    const bookList = document.querySelectorAll("#book-collection li");
    const booksArray = Array.from(bookList);

    switch (sortCriteria) {
      case "1": 
        booksArray.sort((a, b) => {
          const titleA = a.querySelector(".bookName").textContent.toLowerCase();
          const titleB = b.querySelector(".bookName").textContent.toLowerCase();
          return titleA.localeCompare(titleB);
        });
        break;
      case "2": 
        booksArray.sort((a, b) => {
          const titleA = a.querySelector(".bookName").textContent.toLowerCase();
          const titleB = b.querySelector(".bookName").textContent.toLowerCase();
          return titleB.localeCompare(titleA);
        });
        break;
      case "3": 
        booksArray.sort((a, b) => {
          const dateA = a
            .querySelector(".bookWrittenDate")
            .textContent.toLowerCase();
          const dateB = b
            .querySelector(".bookWrittenDate")
            .textContent.toLowerCase();
          return dateA.localeCompare(dateB);
        });
        break;
      case "4": 
        booksArray.sort((a, b) => {
          const dateA = a
            .querySelector(".bookWrittenDate")
            .textContent.toLowerCase();
          const dateB = b
            .querySelector(".bookWrittenDate")
            .textContent.toLowerCase();
          return dateB.localeCompare(dateA);
        });
        break;
      default:
        return;
    }

    const bookCollection = document.querySelector("#book-collection");
    booksArray.forEach((bookLi) => {
      bookCollection.appendChild(bookLi);
    });
  }
  updateAuthorSelectOptions() {
    let bookList = localStorage.getItem("bookList");
    bookList = bookList ? JSON.parse(bookList) : [];

    const author = [...new Set(bookList.map((book) => book.author))];

    const selectedOption = authorSelect.value;

    while (authorSelect.options.length > 1) {
      authorSelect.remove(1);
    }

    author.forEach((author) => {
      const option = document.createElement("option");
      option.textContent = author;
      authorSelect.appendChild(option);
    });

    authorSelect.value = selectedOption;
  }
  addBook(e) {
    e.preventDefault();
    const name = bookName.value;
    const genre = bookGenre.value;
    const author = bookAuthor.value;
    const writtenDate = bookWrittenDate.value;
    const coverUrl = bookCoverUrl.value;
    const newAuthor = bookAuthor.value;
    if (!author.includes(newAuthor)) {
      author.push(newAuthor);
      ui.updateAuthorSelectOptions();
      storage.saveAuthorsToLocalStorage();
    }
    if (ui.inputValidation()) {
      const book = new Book(name, genre, author, coverUrl, writtenDate);
      console.log(book);
      storage.addBook(book);
      ui.addBookToList(book);
      console.log("başarılı");
    }
  }
  clearFields() {
    bookName.value = "";
    bookAuthor.value = "";
    bookGenre.value = "";
    bookWrittenDate.value = "";
    bookCoverUrl.value = "";
  }
  addBookToList(book) {
    const bookLi = document.createElement("li");
    const bookImg = document.createElement("img");
    const bookName = document.createElement("h3");
    const bookAuthor = document.createElement("h3");
    const bookGenre = document.createElement("h3");
    const bookWrittenDate = document.createElement("h3");
    const modalId = "modal-" + book.id;
    ui.updateAuthorSelectOptions();
    bookName.innerText = book.name;
    bookAuthor.innerText = book.author;
    bookGenre.innerText = book.genre;
    bookWrittenDate.innerText = book.writtenDate;
    bookName.classList.add("d-none", "bookName");
    bookAuthor.classList.add("d-none", "bookAuthor");
    bookGenre.classList.add("d-none", "bookGenre");
    bookWrittenDate.classList.add("d-none", "bookWrittenDate");
    bookImg.src = book.coverUrl;
    bookImg.className = "book-img";
    bookImg.setAttribute("data-bs-toggle", "modal");
    bookImg.setAttribute("data-bs-target", "#" + modalId);

    bookImg.addEventListener("click", function () {
      const modalBookCover = document.getElementById(
        "modalBookCover-" + book.id
      );
      const modalBookTitle = document.getElementById(
        "modalBookTitle-" + book.id
      );
      const modalBookName = document.getElementById("modalBookName-" + book.id);
      const modalBookAuthor = document.getElementById(
        "modalBookAuthor-" + book.id
      );
      const modalBookGenre = document.getElementById(
        "modalBookGenre-" + book.id
      );
      const modalBookWrittenDate = document.getElementById(
        "modalBookWrittenDate-" + book.id
      );

      modalBookCover.src = book.coverUrl;
      modalBookTitle.textContent = "Book Details";
      modalBookName.textContent = "Book Name: " + book.name;
      modalBookAuthor.textContent = "Book Author: " + book.author;
      modalBookGenre.textContent = "Book Genre: " + book.genre;
      modalBookWrittenDate.textContent =
        "Book Written Date: " + book.writtenDate;
    });

    bookLi.appendChild(bookImg);
    bookLi.appendChild(bookName);
    bookLi.appendChild(bookWrittenDate);
    bookLi.appendChild(bookGenre);
    bookLi.appendChild(bookAuthor);
    list.appendChild(bookLi);

    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = modalId;
    modal.tabIndex = "-1";
    modal.setAttribute("aria-labelledby", "exampleModalLabel");
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalBookTitle-${book.id}"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <div class="zoom-container">
            <img id="modalBookCover-${book.id}" src="" class="img-fluid rounded-start zoom-img modal-img-edit" alt="Book Cover">
          </div>
          <p class="mt-3 modalBookName" id="modalBookName-${book.id}">${book.name}</p>
          <p class="modalBookAuthor" id="modalBookAuthor-${book.id}">${book.author}</p>
          <p class="modalBookGenre" id="modalBookGenre-${book.id}">${book.genre}</p>
          <p class="modalBookWrittenDate" id="modalBookWrittenDate-${book.id}">${book.writtenDate}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" id="delete-btn">Remove</button>
          <button data-bs-dismiss="modal" aria-label="Close" type="button" id="edit-btn" class="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
  `;
    document.body.appendChild(modal);
    const deleteBtn = modal.querySelector("#delete-btn");
    deleteBtn.addEventListener("click", function () {
      ui.deleteBook(modal, bookLi, book);
    });
    const editBtn = modal.querySelector("#edit-btn");
    editBtn.addEventListener("click", function () {
      ui.showEditForm(book);
    });
  }
  showEditForm(book) {
    bookName.value = book.name;
    bookAuthor.value = book.author;
    bookGenre.value = book.genre;
    bookWrittenDate.value = book.writtenDate;
    bookCoverUrl.value = book.coverUrl;
    editButton.classList.remove("d-none");
    editButton.style.display = "flex";
    addBtn.classList.add("d-none");
    currentId = book.id;
    const addModalBook = new bootstrap.Modal(
      document.getElementById("addModalBook")
    );
    addModalBook.show();
  }
  updateBook() {
    const name = bookName.value;
    const genre = bookGenre.value;
    const author = bookAuthor.value;
    const writtenDate = bookWrittenDate.value;
    const coverUrl = bookCoverUrl.value;
    console.log(coverUrl);
    let bookList = storage.getBooks();
    console.log(bookList);
    const id = currentId;
    let updateItem = bookList.find((item) => item.id === id);
    if (ui.inputValidation()) {
      updateItem.name = name;
      updateItem.genre = genre;
      updateItem.author = author;
      updateItem.writtenDate = writtenDate.split("-").reverse().join("-");
      updateItem.coverUrl = coverUrl;
      localStorage.setItem("bookList", JSON.stringify(bookList));
      ui.clearFields();
      addBtn.classList.remove("d-none");
      editButton.classList.add("d-none");
      window.location.reload();
    }
  }
  deleteBook(modal, bookLi, book) {
    bookLi.parentNode.removeChild(bookLi);
    modal.remove();
    const storage = new Storage();
    storage.deleteBooks(book.id);
    window.location.reload();
  }
  inputValidation() {
    let regexTest = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i;
    if (
      bookName.value.trim() === "" ||
      bookAuthor.value.trim() === "" ||
      bookGenre.value.trim() === "" ||
      bookWrittenDate.value.trim() === "" ||
      !regexTest.test(bookCoverUrl.value.trim())
    ) {
      bookName.classList.add("is-invalid");
      bookAuthor.classList.add("is-invalid");
      bookGenre.classList.add("is-invalid");
      bookWrittenDate.classList.add("is-invalid");
      bookCoverUrl.classList.add("is-invalid");
      console.log("başarısız");
      return false;
    }

    const form = document.querySelector(".needs-validation");
    form.classList.add("was-validated");
    console.log("başarılı");
    return true;
  }
}

// Storage Constructor

class Storage {
  constructor() {}
  getBooks() {
    let bookList = localStorage.getItem("bookList");
    return bookList ? JSON.parse(bookList) : [];
  }
  addBook(book) {
    let bookList = this.getBooks();
    bookList.push(book);
    localStorage.setItem("bookList", JSON.stringify(bookList));
  }
  deleteBooks(id) {
    let bookList = this.getBooks();
    bookList = bookList.filter((book) => book.id !== id);
    localStorage.setItem("bookList", JSON.stringify(bookList));
  }
  loadMoviesFromLocalStorage() {
    const bookList = this.getBooks();
    for (let i = 0; i < bookList.length; i++) {
      ui.addBookToList(bookList[i]);
    }
  }
  saveAuthorsToLocalStorage() {
    localStorage.setItem("authors", JSON.stringify(authors));
  }
}

// EventListeners and if bookList empty(addBooks to bookList) && Initialize Storage, UI and currentId
const ui =  new UI();
const storage = new Storage();
let currentId;



arrangeBooks.addEventListener("change", ui.arrangeBook);
selectGenreElement.addEventListener("change", ui.filterBooks);
authorSelect.addEventListener("change", ui.filterBooks);
clrButton.addEventListener("click", ui.clearFields);
addBtn.addEventListener("click", ui.addBook);
editButton.addEventListener("click", ui.updateBook);
searchInput.addEventListener("input", ui.searchBook);
addBtnindex.addEventListener("click", () => {
  addBtn.classList.remove("d-none");
  editButton.classList.add("d-none");
  ui.clearFields();
});

document.addEventListener("DOMContentLoaded", function () {
  storage.loadMoviesFromLocalStorage();
});

window.addEventListener("load", function () {
  ui.updateAuthorSelectOptions();
  let bookList = storage.getBooks();
  if (bookList.length === 0) {
    const book1 = new Book(
      "Lord of the Rings",
      "Fantasy",
      "J. R. R. Tolkien",
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
      "1949-12-12"
    );
    const book2 = new Book(
      "Cyberpunk",
      "Sci-Fi",
      "Rafal Kosik",
      "https://www.hachettebookgroup.com/wp-content/uploads/2022/10/9780759555952-1.jpg?fit=1711%2C2600",
      "2012-1-4"
    );
    let nextId = 1;
    book1.id = nextId++;
    book2.id = nextId++;
    bookList.push(book1, book2);
    localStorage.setItem("bookList", JSON.stringify(bookList));
  }
});


