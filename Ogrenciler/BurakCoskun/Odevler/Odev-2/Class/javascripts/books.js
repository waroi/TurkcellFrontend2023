class Books {
  constructor(name, author, year, genre, image) {
    this.id = this.generateUniqueId();
    this.name = name;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.image = image;
  }

  generateUniqueId() {
    const books = storage.getBooksFromStorage();
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const idLength = 10;
    let id = "";

    while (id.length < idLength) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters[randomIndex];
      if (!id.includes(randomCharacter)) {
        id += randomCharacter;
      }
    }

    books.forEach(function (book) {
      if (book.id === id) {
        id = generateUniqueId();
      }
    });
    return id;
  }

  addBook() {
    const url = imageUrl.value.trim();
    const name = bookName.value.trim();
    const author = bookAuthor.value.trim();
    const year = bookYear.value.trim();
    const genre = bookGenre.value || "Other";

    if (!url || !name || !author || !year || !genre) {
      return alert("Please fill in all fields");
    }

    const book = new Books(name, author, year, genre, url);
    ui.addBookToUI(book);
    ui.clearInputs();
    storage.addBookToStorage(book);
  }

  deleteBook(e) {
    if (
      e.target.classList.contains("delete-book") ||
      e.target.classList.contains("fa-trash-alt")
    ) {
      const bookId = e.target.getAttribute("data-id");
      const book = storage.getBookFromStorage(bookId);
      const books = storage.getBooksFromStorage();
      const author = book.author;
      const authorBooks = books.filter((bk) => bk.author === author);

      if (authorBooks.length === 1) {
        const authorSelect = document.getElementById("authorSelect");
        const optionElements = authorSelect.getElementsByTagName("option");
        const existingAuthors = new Set();

        for (let i = 0; i < optionElements.length; i++) {
          const existingAuthor = optionElements[i].value.trim();
          existingAuthors.add(existingAuthor.toLowerCase());
        }

        if (existingAuthors.has(author.toLowerCase())) {
          for (let i = 0; i < optionElements.length; i++) {
            if (
              optionElements[i].value.toLowerCase() === author.toLowerCase()
            ) {
              optionElements[i].remove();
              break;
            }
          }
        }
      }

      storage.deleteBookFromStorage(bookId);
      Books.prototype.orderBooks();
    }
  }

  editBook(e) {
    if (
      e.target.classList.contains("edit-book") ||
      e.target.classList.contains("fa-edit")
    ) {
      const id = e.target.getAttribute("data-id");
      const book = storage.getBookFromStorage(id);
      const selectedGenres = Array.from(
        document.querySelectorAll(".form-check-input:checked")
      ).map((category) => category.value);
      const selectedAuthor = authorSelect.value.toLowerCase();
      const searchValue = filter.value.trim().toLowerCase();

      selectedGenres.forEach(function (genre) {
        const genreElement = document.querySelector(
          `.form-check-input[value="${genre}"]`
        );
        genreElement.checked = true;
      });
      bookAuthor.value = selectedAuthor;
      filter.value = searchValue;

      ui.fillInputs(book, id);
      Books.prototype.orderBooks();
    }
  }

  updateBook(e) {
    const url = imageUrl.value.trim();
    const name = bookName.value.trim();
    const author = bookAuthor.value.trim();
    const year = bookYear.value.trim();
    const genre = bookGenre.value.trim() || "Other";
    if (genre === "Other") {
      return alert("Please select a genre");
    }
    if (!url || !name || !author || !year || !genre) {
      return alert("Please fill in all fields");
    }
    const books = storage.getBooksFromStorage();
    books.map(function (bk) {
      if (bk.id === e.target.children[1].children[2].getAttribute("data-id")) {
        bk.image = url;
        bk.name = name;
        bk.author = author;
        bk.year = year;
        bk.genre = genre;
      }
    });
    localStorage.setItem("books", JSON.stringify(books));

    ui.clearInputs();
    ui.updateBook();
    updateBtn.classList.add("d-none");
    updateBtn.classList.remove("d-inline-block");
    submitBtn.classList.remove("d-none");
    submitBtn.classList.add("d-block");
    cancelBtn.classList.add("d-none");
    cancelBtn.classList.remove("d-inline-block");
    submitBtn.setAttribute("data-id", "");

    authorSelect.innerHTML = "<option value='All'>Tüm Yazarlar</option>";
    const authors = books.map(function (bk) {
      return bk.author;
    });
    const uniqueAuthors = Array.from(new Set(authors));
    uniqueAuthors.forEach(function (author) {
      const option = document.createElement("option");
      option.value = author;
      option.text = author;
      authorSelect.appendChild(option);
    });
  }

  clearAllBooks() {
    bookList.innerHTML = "";
    localStorage.removeItem("books");
    authorSelect.innerHTML = `<option value="All">Tüm Yazarlar</option>`;
  }

  searchBooks(e) {
    const books = storage.getBooksFromStorage();
    const filterValue = e.target.value.toLowerCase();
    let filteredBooks = books.filter(function (book) {
      return (
        book.name.toLowerCase().indexOf(filterValue) !== -1 ||
        book.author.toLowerCase().indexOf(filterValue) !== -1
      );
    });
    ui.filterBooks(filteredBooks);
  }

  filterBooks() {
    const books = storage.getBooksFromStorage();
    const selectedGenres = Array.from(
      document.querySelectorAll(".form-check-input:checked")
    );
    const selectedAuthor = authorSelect.value;
    const searchValue = filter.value.trim().toLowerCase();

    if (
      selectedGenres.length === 0 &&
      selectedAuthor === "All" &&
      !searchValue
    ) {
      ui.updateBook();
      return;
    }
    let filteredBooks = books.filter(function (book) {
      if (selectedGenres.length === 0 || selectedGenres[0].value === "") {
        return selectedAuthor === "All" || book.author === selectedAuthor;
      } else {
        return selectedGenres.some(function (genre) {
          const bookGenre = book.genre;
          const bookAuthor = book.author;
          return (
            (genre.value === "All" || bookGenre === genre.value) &&
            (selectedAuthor === "All" || bookAuthor === selectedAuthor)
          );
        });
      }
    });

    ui.filterBooks(filteredBooks);
  }

  orderBooks() {
    const books = storage.getBooksFromStorage();
    const orderValue = orderSelect.value;
    let filteredBooks = [...books];

    if (orderValue === "default") {
      const selectedGenres = Array.from(
        document.querySelectorAll(".form-check-input:checked")
      ).map((category) => category.value);
      const selectedAuthor = authorSelect.value;

      if (selectedGenres.length !== 0) {
        filteredBooks = filteredBooks.filter((book) =>
          selectedGenres.includes(book.genre)
        );
      }

      if (selectedAuthor !== "All") {
        filteredBooks = filteredBooks.filter(
          (book) => book.author === selectedAuthor
        );
      }
    } else {
      filteredBooks.sort((a, b) => {
        const propA =
          orderValue === "nameAZ" || orderValue === "nameZA" ? a.name : a.year;
        const propB =
          orderValue === "nameAZ" || orderValue === "nameZA" ? b.name : b.year;

        if (propA > propB) {
          return orderValue === "nameAZ" || orderValue === "yearAZ" ? 1 : -1;
        } else if (propA < propB) {
          return orderValue === "nameAZ" || orderValue === "yearAZ" ? -1 : 1;
        }
        return 0;
      });
    }

    ui.filterBooks(filteredBooks);
  }
}
