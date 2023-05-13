// Access the input elements using getElementById
const nameInput = document.getElementById("book-name-input");
const authorInput = document.getElementById("author-input");
const categoryInput = document.getElementById("category-input");
const dateInput = document.getElementById("date-input");
const coverUrlInput = document.getElementById("cover-url-input");

const modal = document.getElementById("add-book-modal");

const authorFilter = document.getElementById("author-filter");
const categoryFilter = document.getElementById("category-filter");

// Define the Book class
function Book(name, author, category, date, coverUrl) {
  this.name = name;
  this.author = author;
  this.category = category;
  this.date = date;
  this.coverUrl = coverUrl;
}

// Define the Bookshelf class
function Bookshelf() {
  this.books = JSON.parse(localStorage.getItem("books")) || [];
}

// Add a new book to the bookshelf
Bookshelf.prototype.addBook = function (book) {
  this.books.push(book);
  this.addBooktoLocalStorage(book);
  $('#add-book-modal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  addBookForm.reset(); // access addBookForm element globally
}

Bookshelf.prototype.addBooktoLocalStorage = function (book) {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  document.getElementById("add-book-modal").style.display = "none"; // close the modal
}

// Remove a book from the bookshelf
Bookshelf.prototype.removeBook = function (index) {
  this.books.splice(index, 1);
  this.updateLocalStorage();
}

Bookshelf.prototype.editBook = function (index) {
  modal.classList.add("show");
  modal.style.display = "block";
  document.body.classList.add("modal-open");

  // Get the current book information
  const books = JSON.parse(localStorage.getItem("books")) || [];
  const book = books[index];

  // Populate the form fields with the book's current information
  nameInput.value = book.name;
  authorInput.value = book.author;
  categoryInput.value = book.category;
  dateInput.value = book.date;
  coverUrlInput.value = book.coverUrl;

  // Capture the bookshelf object in a variable
  const self = this;

  // Add an event listener to the form submit button to save the changes
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function () {
    // Update the book object with the new information
    book.name = nameInput.value;
    book.author = authorInput.value;
    book.category = categoryInput.value;
    book.date = dateInput.value;
    book.coverUrl = coverUrlInput.value;

    // Update the books array in localStorage
    self.books.splice(index, 1);
    self.updateLocalStorage();

    // Re-render the book list
    // self.render();

    // Close the modal
    modal.style.display = "none";
  });
};

const bookList = document.getElementById("book-list");
Bookshelf.prototype.render = function () {
  bookList.innerHTML = "";
  const books = JSON.parse(localStorage.getItem("books")) || [];

  const authorFilter = document.getElementById("author-filter").value;
  const categoryFilter = document.getElementById("category-filter").value;

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const bookElement = document.createElement("div");
    bookElement.classList.add("col-10", "col-sm-5", "col-lg-2", "mb-4", "mx-1", "card");
    bookElement.innerHTML = `
      <div class="imgBx">
        <img src="${book.coverUrl}" class="card-img-top" alt="Book Cover">
      </div>
      <div class="contentBx">
        <h2 class="title-tooltip">${book.name} <p class="tooltiptext">${book.name}</p></h2>
        <p class="author">${book.author}</p>
        <span class="genre">${book.category}</span>
        <span class="publication-year">${book.date}</span>
        <div class="card-btns">
        <button type="button" class="btn edit-book-btn" data-book-index="${i}" data-original-text="Edit">Edit</button>
        <button type="button" class="btn delete-book-btn" data-book-index="${i}">Delete</button>
        </div>
      </div>
    `;
    bookList.appendChild(bookElement);
  }

  const editButtons = document.querySelectorAll(".edit-book-btn");
  editButtons.forEach(function (editButton) {
    editButton.addEventListener("click", function () {
      const bookIndex = editButton.dataset.bookIndex;

      bookshelf.editBook(bookIndex);
    });
  });

  const deleteButtons = document.querySelectorAll(".delete-book-btn");
  deleteButtons.forEach(function (deleteButton) {
    deleteButton.addEventListener("click", function () {
      const bookIndex = deleteButton.dataset.bookIndex;
      bookshelf.removeBook(bookIndex);
      bookshelf.render();
    });
  });
}

// Update localStorage with the updated books array
Bookshelf.prototype.updateLocalStorage = function () {
  localStorage.setItem("books", JSON.stringify(this.books));
}

// Filter the bookshelf by category
Bookshelf.prototype.addNewItemsToFilterInput = function () {
  const authorOptions = new Set();
  const categoryOptions = new Set();

  // Get the books from localStorage
  const books = JSON.parse(localStorage.getItem("books")) || [];

  // Loop through each book and add its author and category to the option sets
  books.forEach(function (book) {
    authorOptions.add(book.author);
    categoryOptions.add(book.category);
  });

  // Get the author and category filter select elements
  const authorFilterSelect = document.getElementById("author-filter");
  const categoryFilterSelect = document.getElementById("category-filter");

  // Remove any existing options from the select elements
  authorFilterSelect.innerHTML = "";
  categoryFilterSelect.innerHTML = "";

  // Add a default "All" option to both selects
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.text = "All";

  const allOption2 = allOption.cloneNode(true); // create a copy of the "All" option

  authorFilterSelect.add(allOption);
  categoryFilterSelect.add(allOption2); // add the copy of the "All" option to the category filter select element


  // Add each author and category to the respective select element as an option
  authorOptions.forEach(function (author) {
    const option = document.createElement("option");
    option.value = author;
    option.text = author;
    authorFilterSelect.add(option);
  });

  categoryOptions.forEach(function (category) {
    const option = document.createElement("option");
    option.value = category;
    option.text = category;
    categoryFilterSelect.add(option);
  });
}

const searchInput = document.getElementById("search-input")

Bookshelf.prototype.searchBook = function () {
  const books = JSON.parse(localStorage.getItem("books")) || [];

  // Iterate over all the book elements in the book list
  const bookElements = document.querySelectorAll(".card");
  bookElements.forEach((bookElement) => {
    const bookTitle = bookElement.querySelector(".title-tooltip").textContent.toLowerCase();
    const bookAuthor = bookElement.querySelector(".author").textContent.toLowerCase();

    // Check if the book matches the search query
    if (
      bookTitle.includes(searchInput.value.toLowerCase()) ||
      bookAuthor.includes(searchInput.value.toLowerCase())
    ) {
      bookElement.classList.add("search-match");
    } else {
      bookElement.classList.remove("search-match");
    }
  });
};

const addBookForm = document.getElementById("add-book-form");
addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newBook = new Book(
    nameInput.value,
    authorInput.value,
    categoryInput.value,
    dateInput.value,
    coverUrlInput.value
  );
  bookshelf.addBook(newBook);
  bookshelf.render();
});

searchInput.addEventListener("keyup", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const filteredBooks = bookshelf.books.filter(function (book) {
    return (
      book.name.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.category.toLowerCase().includes(searchTerm)
    );
  });
  bookList.innerHTML = "";
  filteredBooks.forEach(function (book, i) {
    const bookElement = createBookElement(book, i);
    bookList.appendChild(bookElement);
  });
});




const bookshelf = new Bookshelf();
bookshelf.addNewItemsToFilterInput();
bookshelf.render();