// Access the input elements using getElementById
const nameInput = document.getElementById("book-name-input");
const authorInput = document.getElementById("author-input");
const categoryInput = document.getElementById("category-input");
const dateInput = document.getElementById("date-input");
const coverUrlInput = document.getElementById("cover-url-input");

const modal = document.getElementById("add-book-modal");

// Get the author and category filter select elements
const authorFilterSelect = document.getElementById("author-filter");
const categoryFilterSelect = document.getElementById("category-filter");

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

  if (!Array.isArray(this.books)) {
    this.books = [];
  }
}

// Add a new book to the bookshelf
Bookshelf.prototype.addBook = function () {
  // Get the books from localStorage
  const books = this.books;


  // Save the updated books array to localStorage
  localStorage.setItem("books", JSON.stringify(books));

  // Update the bookshelf's list of books
  this.books = books;

  // Re-render the book list
  this.render();
};

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

  // Add an event listener to the form submit button to save the changes
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", function () {
    // Update the book object with the new information
    book.name = nameInput.value;
    book.author = authorInput.value;
    book.category = categoryInput.value;
    book.date = dateInput.value;
    book.coverUrl = coverUrlInput.value;

    // Update the books array in localStorage
    books.splice(index, 1, book);
    localStorage.setItem("books", JSON.stringify(books));

    // Re-render the book list
    bookshelf.render();

    // Close the modal
    modal.style.display = "none";
  });
};

const searchInput = document.getElementById("search-input")
Bookshelf.prototype.searchBook = function (e) {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  const pressedKey = searchInput.value.trim().toLowerCase();

  books.filter((book) => {
    if (book.name.toLowerCase().includes(pressedKey) || book.author.toLowerCase().includes(pressedKey)) {
      console.log(book)
      return book
    }
  });
};

const bookList = document.getElementById("book-list");
Bookshelf.prototype.render = function () {
  bookList.innerHTML = "";
  const books = JSON.parse(localStorage.getItem("books")) || [];

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

  // Add event listeners to the filter select elements
  authorFilterSelect.addEventListener("change", filterBooks);
  categoryFilterSelect.addEventListener("change", filterBooks);

  // Define the filter function
  function filterBooks() {
    const selectedAuthor = authorFilterSelect.value;
    const selectedCategory = categoryFilterSelect.value;

    // Filter the books list
    const filteredBooks = books.filter(function (book) {
      return (selectedAuthor === "" || book.author === selectedAuthor) &&
        (selectedCategory === "" || book.category === selectedCategory);
    });

    // Render the filtered list of books
    bookshelf.render(filteredBooks);
    printItems(filteredBooks, bookshelf);

  }
}
function printItems(filteredBooks) {
  for (const book of filteredBooks) {
    console.log(book);
  }
}



const sortSelect = document.getElementById("sortSelect");
Bookshelf.prototype.sortBooks = function () {
  const selectedValue = sortSelect.value;

  bookList.innerHTML = "";

  if (selectedValue === "default") {
    this.render(this.books);
  } else if (selectedValue === "az") {
    this.books.sort((a, b) => (a.name < b.name ? -1 : 1));
    this.books = bookshelf.books;
    this.render(this.books);
  } else if (selectedValue === "za") {
    this.books.sort((a, b) => (a.name > b.name ? -1 : 1));
    this.books = bookshelf.books;
    this.render(this.books);
  } else if (selectedValue === "newest") {
    this.books.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
    this.books = bookshelf.books;
    this.render();
  } else if (selectedValue === "oldest") {
    this.books.sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));
    this.books = bookshelf.books;
    this.render();
  }
  return this.render()
}

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

searchInput.addEventListener("keyup", function () {
  bookshelf.searchBook()
});

sortSelect.addEventListener("change", () => {
  bookshelf.sortBooks();
  bookshelf.render();

})

const bookshelf = new Bookshelf();
bookshelf.addNewItemsToFilterInput();
bookshelf.render();