function UI() {}

UI.prototype.addBookToUI = function (book) {
  const searchValue = filter.value.trim().toLowerCase();
  const selectedGenres = Array.from(
    document.querySelectorAll(".form-check-input:checked")
  ).map((category) => category.value);
  const selectedAuthor = authorSelect.value.toLowerCase();

  if (
    (selectedGenres.length === 0 || selectedGenres.includes(book.genre)) &&
    (selectedAuthor === "all" ||
      book.author.toLowerCase() === selectedAuthor) &&
    (!searchValue ||
      book.name.toLowerCase().includes(searchValue) ||
      book.author.toLowerCase().includes(searchValue))
  ) {
    const div = document.createElement("div");
    div.className = "col-md-4";
    div.innerHTML = `
    <div class="card">
    <div class="card-image">
      <img src="${book.image}" class="card-img-top" alt="Book Image">
      <div class="card-overlay">
        <div class="card-overlay-content">
          <button data-id="${book.id}" type="button" class="btn btn-danger delete-book">
            <i data-id="${book.id}" class="fas fa-trash-alt"></i>
          </button>
          <button data-id="${book.id}" type="button" data-bs-toggle="modal" data-bs-target="#bookModal" class="btn btn-warning edit-book">
            <i data-id="${book.id}" class="fas fa-edit"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-info">Kitap Adı</h5>
      <p data-bs-toogle="tooltip" title="${book.name}" class="card-text text-truncate">${book.name}</p>
      <h5 class="card-info">Yazar</h5>
      <p class="card-text">${book.author}</p>
      <h5 class="card-info">Tarih</h5>
      <p class="card-text">${book.year}</p>
      <h5 class="card-info">Tür</h5>
      <p class="card-text">${book.genre}</p>
    </div>
  </div>
    `;
    bookList.appendChild(div);
  }
};

UI.prototype.clearInputs = function () {
  imageUrl.value = "";
  bookName.value = "";
  bookAuthor.value = "";
  bookYear.value = "";
  bookGenre.value = "";
};

UI.prototype.fillInputs = function (book, id) {
  imageUrl.value = book.image;
  bookName.value = book.name;
  bookAuthor.value = book.author;
  bookYear.value = book.year;
  bookGenre.value = book.genre == "Other" ? "" : book.genre;
  submitBtn.classList.add("d-none");
  submitBtn.classList.remove("d-inline-block");
  updateBtn.classList.remove("d-none");
  updateBtn.setAttribute("data-id", id);
  updateBtn.classList.add("d-inline-block");
  cancelBtn.classList.add("d-inline-block");
  cancelBtn.classList.remove("d-none");
};

UI.prototype.cancelInputs = function () {
  UI.prototype.clearInputs();
  updateBtn.classList.add("d-none");
  updateBtn.classList.remove("d-inline-block");
  cancelBtn.classList.add("d-none");
  cancelBtn.classList.remove("d-inline-block");
  submitBtn.classList.remove("d-none");
  submitBtn.classList.add("d-inline-block");
  submitBtn.setAttribute("data-id", "");
};

UI.prototype.updateBook = function () {
  bookList.innerHTML = "";
  storage.showBooksFromStorage();
};

UI.prototype.filterBooks = function (books) {
  bookList.innerHTML = "";
  const searchValue = filter.value.trim().toLowerCase();
  const selectedGenres = Array.from(
    document.querySelectorAll(".form-check-input:checked")
  ).map((category) => category.value);
  const selectedAuthor = authorSelect.value.toLowerCase();

  if (selectedGenres.length === 0 && selectedAuthor === "All" && !searchValue) {
    books.forEach(function (book) {
      ui.addBookToUI(book);
    });
  } else {
    books.forEach(function (book) {
      const bookGenre = book.genre;
      const bookAuthor = book.author.toLowerCase();
      const bookName = book.name.toLowerCase();

      if (
        (selectedGenres.length === 0 || selectedGenres.includes(bookGenre)) &&
        (selectedAuthor === "all" || bookAuthor === selectedAuthor) &&
        (!searchValue ||
          bookName.includes(searchValue) ||
          bookAuthor.includes(searchValue))
      ) {
        ui.addBookToUI(book);
      }
    });
  }
};
