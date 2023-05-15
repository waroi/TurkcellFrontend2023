const ui = new UI();
const store = new Store();
document.addEventListener("DOMContentLoaded", ui.displayBooks);
document.querySelector("#add-book").addEventListener("click", (e) => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const date = document.querySelector("#year").value;
  const category = document.querySelector("#category").value;
  const image = document.querySelector("#image").value;
  let id = 1;
  if (
    title === "" ||
    author === "" ||
    date === "" ||
    category === "" ||
    image === ""
  ) {
    ui.showAlert("Please fill in all fields", "danger");
  } else {
    const book = new Book(title, author, date, category, image, id);
    ui.addBookToList(book);

    store.addBook(book);

    ui.clearFields();

    $("#addBookModal").modal("hide");

    id++;
  }
});
document.querySelector("#edit-book").addEventListener("click", (e) => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const date = document.querySelector("#year").value;
  const category = document.querySelector("#category").value;
  const image = document.querySelector("#image").value;

  if (
    title === "" ||
    author === "" ||
    date === "" ||
    category === "" ||
    image === ""
  ) {
    ui.showAlert("Please fill in all fields", "danger");
  } else {
    const id = document.querySelector("#book-form").dataset.id;
    if (id) {
      const book = store.getBook(id);
      ui.updateBookFields(book);
      store.updateBook(book);

      $("#addBookModal").modal("hide");
      ui.showAlert("Book Updated", "success");
      document.getElementById("book-list").innerHTML = "";
      ui.displayBooks();
    }
    ui.clearFields();
    document.querySelector("#addBookModal").click();
  }
});
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const id = document.querySelector("#book-form").dataset.id;

  if (id) {
    const book = store.getBook(id);
    ui.updateBookFields(book);
    store.updateBook(book);

    ui.showAlert("Book Updated", "success");
  } else {
    const book = new Book(title, author, date, category, image, id);

    ui.addBookToList(book);
    store.addBook(book);

    ui.showAlert("Book Added", "success");
  }

  ui.clearFields();
});

document.querySelector("#book-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    const id = e.target.parentElement.parentElement.id;
    const book = store.getBook(id);
    ui.fillForm(book);

    const modal = new bootstrap.Modal(document.getElementById("addBookModal"));
    document.getElementById("edit-book").classList.remove("d-none");
    document.getElementById("add-book").classList.add("d-none");
    modal.show();
  } else if (e.target.classList.contains("delete")) {
    const id = ui.deleteBook(e.target);

    store.removeBook(id);

    ui.showAlert("Book Removed", "success");
  }
});
document.getElementById("add-btn").addEventListener("click", () => {
  document.getElementById("edit-book").classList.add("d-none");
  document.getElementById("add-book").classList.remove("d-none");
});

function filterAndSearch() {
  const sortOption = document.querySelector("#sort").value;
  const category = document.querySelector("#filterCategory").value;
  const author = document.querySelector("#filterAuthor").value;
  const term = document.querySelector("#searchInput").value.toLowerCase();

  let filteredBooks = store.getBooks();

  if (category !== "Choose...") {
    filteredBooks = filteredBooks.filter((book) => book.category === category);
  }

  if (author !== "Choose...") {
    filteredBooks = filteredBooks.filter((book) => book.author === author);
  }

  if (term !== "") {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
    );
  }

  switch (sortOption) {
    case "title-asc":
      filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "date-asc":
      filteredBooks.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "date-desc":
      filteredBooks.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
  }

  ui.clearList();

  filteredBooks.forEach((book) => ui.addBookToList(book));
}

document.querySelector("#searchInput").addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    filterAndSearch();
  }
});

document.querySelector("#sort").addEventListener("change", filterAndSearch);
document
  .querySelector("#filterCategory")
  .addEventListener("change", filterAndSearch);
document
  .querySelector("#filterAuthor")
  .addEventListener("change", filterAndSearch);
document
  .querySelector("#searchButton")
  .addEventListener("click", filterAndSearch);

document.addEventListener("DOMContentLoaded", () => {
  const storedBooks = store.getBooks();
  const book1 = new Book(
    "Half-Blood Prince",
    "J.K. Rowling",
    "2005",
    "Fantastic",
    "https://i.pinimg.com/originals/6a/da/c8/6adac852cb98aca061d688bab3650a2a.jpg",
    "99"
  );
  const book2 = new Book(
    "The Fellowship of the Ring",
    "J.R.R. Tolkien",
    "1954",
    "Fantastic",
    "https://i.pinimg.com/originals/ee/6a/29/ee6a292745db5aae3f4485ee177a48a9.jpg",
    "98"
  );
  if (storedBooks.length === 0) {
    store.addBook(book1);
    store.addBook(book2);
    ui.displayBooks();
  }
  const authors = [...new Set(store.getBooks().map((book) => book.author))];

  const authorFilter = document.querySelector("#filterAuthor");

  authors.forEach((author) => {
    const option = document.createElement("option");

    option.value = author;
    option.textContent = author;
    authorFilter.appendChild(option);
  });
});
