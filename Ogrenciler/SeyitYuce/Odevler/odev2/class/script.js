const nameInput = document.getElementById("book-name-input");
const authorInput = document.getElementById("author-input");
const categoryInput = document.getElementById("category-input");
const dateInput = document.getElementById("date-input");
const coverUrlInput = document.getElementById("cover-url-input");

const modal = document.getElementById("add-book-modal");

const authorFilterSelect = document.getElementById("author-filter");
const categoryFilterSelect = document.getElementById("category-filter");


class Book {
    constructor(name, author, category, date, coverUrl) {
        this.name = name;
        this.author = author;
        this.category = category;
        this.date = date;
        this.coverUrl = coverUrl;
    }
}

class Bookshelf {
    constructor() {
        this.books = JSON.parse(localStorage.getItem("books")) || [];

        if (!Array.isArray(this.books)) {
            this.books = [];
        }
        if (this.books.length === 0) {
            const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", "1951", "https://covers.openlibrary.org/w/id/2222747-M.jpg");
            const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", "1960", "https://covers.openlibrary.org/w/id/1028892-M.jpg");
            this.books.push(book1);
            this.books.push(book2);
            localStorage.setItem("books", JSON.stringify(this.books));
        }
    }
    addBook() {
        const books = JSON.parse(localStorage.getItem("books")) || [];

        const newBook = {
            name: nameInput.value,
            author: authorInput.value,
            category: categoryInput.value,
            date: dateInput.value,
            coverUrl: coverUrlInput.value,
        };

        // Check if the book already exists in the list
        const bookExists = books.some(book => book.name === newBook.name && book.author === newBook.author);

        if (bookExists) {
            // Alert the user that the book already exists
            // alert("This book is already in the list!");
        } else {
            // Add the book to the list and reset the form inputs
            books.push(newBook);
            localStorage.setItem("books", JSON.stringify(books));
            this.books = books;
            bookshelf.render();
            modal.classList.remove("show");
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            document.querySelector('.modal-backdrop').remove();

            // Reset the form inputs
            nameInput.value = "";
            authorInput.value = "";
            categoryInput.value = "";
            dateInput.value = "";
            coverUrlInput.value = "";
        }
    }
    addBooktoLocalStorage(book) {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }
    removeBook(index) {
        this.books.splice(index, 1);
        this.updateLocalStorage();
    }
    editBook(index) {
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");

        const books = JSON.parse(localStorage.getItem("books")) || [];
        const book = books[index];

        nameInput.value = book.name;
        authorInput.value = book.author;
        categoryInput.value = book.category;
        dateInput.value = book.date;
        coverUrlInput.value = book.coverUrl;

        submitButton.textContent = "Submit";
        submitButton.addEventListener("click", onSubmitClick);

        function onSubmitClick() {
            book.name = nameInput.value;
            book.author = authorInput.value;
            book.category = categoryInput.value;
            book.date = dateInput.value;
            book.coverUrl = coverUrlInput.value;

            const books = JSON.parse(localStorage.getItem("books")) || [];
            books[index] = book; // modify the existing book at the given index
            localStorage.setItem("books", JSON.stringify(books));

            bookshelf.render();

            document.body.classList.remove("modal-open");
            modal.style.display = "none";


            // Reset the form inputs
            nameInput.value = "";
            authorInput.value = "";
            categoryInput.value = "";
            dateInput.value = "";
            coverUrlInput.value = "";
        }
    }
    searchBook(e) {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        const pressedKey = searchInput.value.trim().toLowerCase();

        const filteredBooks = books.filter((book) => {
            return book.name.toLowerCase().includes(pressedKey) || book.author.toLowerCase().includes(pressedKey);
        });

        bookList.innerHTML = "";
        sessionStorage.setItem("filteredBooks", JSON.stringify(filteredBooks));
        console.log(filteredBooks);
        bookList.innerHTML = filteredBooks;
        this.render(JSON.parse(sessionStorage.getItem("filteredBooks")) || []);

    }
    render() {
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
        <h2 class="title-tooltip">${book.name}</h2>
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
    updateLocalStorage() {
        localStorage.setItem("books", JSON.stringify(this.books));
    }
    addNewItemsToFilterInput() {
        const authorOptions = new Set();
        const categoryOptions = new Set();

        const books = JSON.parse(localStorage.getItem("books")) || [];

        books.forEach(function (book) {
            authorOptions.add(book.author);
            categoryOptions.add(book.category);
        });

        authorFilterSelect.innerHTML = "";
        categoryFilterSelect.innerHTML = "";

        const allOption = document.createElement("option");
        allOption.value = "";
        allOption.text = "All";

        const allOption2 = allOption.cloneNode(true);

        authorFilterSelect.add(allOption);
        categoryFilterSelect.add(allOption2);


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

        authorFilterSelect.addEventListener("change", filterBooks);
        categoryFilterSelect.addEventListener("change", filterBooks);

        function filterBooks() {
            const selectedAuthor = authorFilterSelect.value;
            const selectedCategory = categoryFilterSelect.value;

            const allBooks = JSON.parse(localStorage.getItem("books")) || [];

            const filteredBooks = books.filter(function (book) {
                return (selectedAuthor === "" || book.author === selectedAuthor) &&
                    (selectedCategory === "" || book.category === selectedCategory);
            });

            bookshelf.render(filteredBooks);

            bookList.innerHTML = "";

            filteredBooks.forEach(function (book) {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
      <div class="imgBx">
        <img src="${book.coverUrl}" class="card-img-top" alt="Book Cover">
      </div>
      <div class="contentBx">
        <h2 class="title-tooltip">${book.name}</h2>
        <p class="author">${book.author}</p>
        <span class="genre">${book.category}</span>
        <span class="publication-year">${book.date}</span>
        <div class="card-btns">
        <button type="button" class="btn edit-book-btn"  data-original-text="Edit">Edit</button>
        <button type="button" class="btn delete-book-btn"">Delete</button>
        </div>
      </div>
    `;
                bookList.appendChild(card);
            });
        }
    }
    sortBooks() {
        const selectedValue = sortSelect.value;

        let books = JSON.parse(localStorage.getItem("books")) || [];


        if (selectedValue === "default") {
            this.render(this.books);
        } else if (selectedValue === "az") {
            this.books.sort((a, b) => (a.name < b.name ? -1 : 1));
            this.updateLocalStorage(books);
            this.render(books);
        } else if (selectedValue === "za") {
            this.books.sort((a, b) => (a.name > b.name ? -1 : 1));
            this.updateLocalStorage(books);
            this.render(books);
        } else if (selectedValue === "newest") {
            this.books.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
            this.updateLocalStorage(books);
            this.render(books);
        } else if (selectedValue === "oldest") {
            this.books.sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));
            this.updateLocalStorage(books);
            this.render(books);
        }
    }
}





const submitButton = document.getElementById("submit-btn");

const searchInput = document.getElementById("search-input");

const bookList = document.getElementById("book-list");



const sortSelect = document.getElementById("sortSelect");

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
  bookshelf.searchBook();
  bookshelf.render()
});

sortSelect.addEventListener("change", function () {
  bookshelf.sortBooks();
  bookshelf.render();
})

const bookshelf = new Bookshelf();
bookshelf.addNewItemsToFilterInput();
bookshelf.render();