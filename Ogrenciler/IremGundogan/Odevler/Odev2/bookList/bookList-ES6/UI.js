class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
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
        <button class="btn add-btn btn-sm edit">
        EDIT 
          <i class="fa-solid fa-pencil" style="color: blue"></i>
        </button>
        <button class="btn add-btn ml-auto btn-sm delete">
        DELETE 
          <i class="fa-solid fa-trash" style="color:red"></i>
        </button>
      </div>
    </div>
    `;
    list.appendChild(card);
  }

  // Other UI methods such as clearFields, deleteBook, showAlert etc.
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    document.querySelector("body").appendChild(div);

    // Disappear in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#year").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#image").value = "";
  }

  // Other methods such as deleteBook, filterBooks, sortBooks etc.
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      const id = el.parentElement.parentElement.dataset.id;
      el.parentElement.parentElement.parentElement.remove();
      return id;
    }
  }
  static filterBooks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach((book) => {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(text) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  }
  static clearList() {
    const bookList = document.querySelector("#book-list");

    // Simple and fast way to clear child elements
    while (bookList.firstChild) {
      bookList.removeChild(bookList.firstChild);
    }
  }
  static fillForm(book) {
    document.querySelector("#title").value = book.title;
    document.querySelector("#author").value = book.author;
    document.querySelector("#year").value = book.date;
    document.querySelector("#category").value = book.category;
    document.querySelector("#image").value = book.image;

    document.querySelector("#book-form").dataset.id = book.id;
  }

  static updateBookFields(book) {
    book.title = document.querySelector("#title").value;
    book.author = document.querySelector("#author").value;
    book.date = document.querySelector("#year").value;
    book.category = document.querySelector("#category").value;
    book.image = document.querySelector("#image").value;
    document.querySelector("#book-form").dataset.id = book.id;
  }
}
