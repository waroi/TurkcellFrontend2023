function UI() {}
UI.prototype.displayBooks = function () {
  const books = Store.getBooks();
  books.forEach((book) => UI.addBookToList(book));
};

UI.prototype.addBookToList = function (book) {
  const list = document.querySelector("#book-list");
  const card = document.createElement("div");
  card.classList.add("col-lg-4");
  card.classList.add("col-sm-12");
  card.innerHTML = `
    <div class="card" id="${book.id}">
      <div class="d-flex justify-content-center  slide slide1">
        <img src="${book.image}" alt="${book.title}" class="card-img-top" />
      </div>

      <div class="card-body slide slide2">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.author}</p>
        <p class="card-text">${book.date}</p>
        <p class="card-text">${book.category}</p>
      </div>
      <div class="card-footer slide slide2">
        <button class="btn btn-primary btn-sm edit">
          <i class="fa-solid fa-pencil" style="color: #fff"></i>
        </button>
        <button class="btn btn-danger ml-auto btn-sm delete">
          <i class="fa-solid fa-trash" style="color: #fff"></i>
        </button>
      </div>
    </div>
    `;
  list.appendChild(card);
};

// Other UI methods such as clearFields, deleteBook, showAlert etc.
UI.prototype.showAlert = function (message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));

  document.querySelector("body").appendChild(div);

  // Disappear in 3 seconds
  setTimeout(() => document.querySelector(".alert").remove(), 2000);
};

UI.prototype.clearFields = function () {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#year").value = "";
  document.querySelector("#category").value = "";
  document.querySelector("#image").value = "";
};

// Other methods such as deleteBook, filterBooks, sortBooks etc.
UI.prototype.deleteBook = function (el) {
  if (el.classList.contains("delete")) {
    const id = el.parentElement.parentElement.dataset.id;
    el.parentElement.parentElement.remove();
    return id;
  }
};
UI.prototype.filterBooks = function (e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(text) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
};
UI.prototype.clearList = function () {
  const bookList = document.querySelector("#book-list");

  // Simple and fast way to clear child elements
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  }
};
UI.prototype.fillForm = function (book) {
  document.querySelector("#title").value = book.title;
  document.querySelector("#author").value = book.author;
  document.querySelector("#year").value = book.date;
  document.querySelector("#category").value = book.category;
  document.querySelector("#image").value = book.image;

  document.querySelector("#book-form").dataset.id = book.id;
};

UI.prototype.updateBookFields = function (book) {
  book.title = document.querySelector("#title").value;
  book.author = document.querySelector("#author").value;
  book.date = document.querySelector("#year").value;
  book.category = document.querySelector("#category").value;
  book.image = document.querySelector("#image").value;
  document.querySelector("#book-form").dataset.id = book.id;
};
