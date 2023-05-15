function Books(id, url, name, type, date, author) {
  this.id = id;
  this.url = url;
  this.name = name;
  this.type = type;
  this.date = date;
  this.author = author;
}

function generateRandomId(length) {
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  const arr = Array.from(books);
  arr.forEach((book) => {
    if (book.id === id) {
      id = generateRandomId(length);
    }
  });

  return id;
}

Books.prototype.updateAuthorOptions = function () {
  const books = storage.getBooksFromLocalStorage();
  const authors = [...new Set(books.map((book) => book.author))];
  const bookAuthorFilter = document.querySelector("#bookAuthorFilter");

  bookAuthorFilter.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.textContent = "All";
  bookAuthorFilter.appendChild(allOption);

  authors.forEach((author) => {
    const option = document.createElement("option");
    option.value = author;
    option.textContent = author;
    bookAuthorFilter.appendChild(option);
  });
};

Books.prototype.addBook = function (e) {
  const id = Books.generateRandomId(10);
  const url = bookUrl.value.trim();
  const name = bookName.value.trim();
  const type = bookType.value.trim() || "Other";
  const date = bookDate.value.trim();
  const author = bookAuthor.value.trim();

  if (type === "Other") {
    return alert("Please select a genre");
  }

  if (
    url === "" ||
    name === "" ||
    type === "" ||
    date === "" ||
    author === ""
  ) {
    alert("Lütfen tüm alanları doldurunuz.");
  } else {
    const newBook = new Books(id, url, name, type, date, author);

    storage.setBookLocalStorage(newBook);
    ui.alertMessage("Kitap başarıyla eklendi.");

    ui.clearForm();
    ui.addBook(newBook);
    newBook.updateAuthorOptions();
  }
};

Books.prototype.deleteBook = function (e) {
  if (
    e.target.className ===
    "btn btn-outline-dark deleteButton rounded rounded-circle"
  ) {
    const Book = e.target.closest(".card-group");
    console.log(Book);
    if (confirm("Bu filmi silmek istediğinize emin misiniz?")) {
      Book.remove();
      storage.deleteBookFromLocalStorage(Book.id);

      const books = storage.getBooksFromLocalStorage();
      const authors = [...new Set(books.map((book) => book.author))];
      const bookAuthorFilter = document.querySelector("#bookAuthorFilter");

      bookAuthorFilter.innerHTML = "";

      const allOption = document.createElement("option");
      allOption.value = "All";
      allOption.textContent = "All";
      bookAuthorFilter.appendChild(allOption);

      authors.forEach((author) => {
        const option = document.createElement("option");
        option.value = author;
        option.textContent = author;
        bookAuthorFilter.appendChild(option);
      });
    }
    console.log(Book.id);
  }

  e.preventDefault();
  this.updateAuthorOptions();
};

Books.prototype.editBook = function (e) {
  console.log(addOrEditButton.classList, editButton.classList);
  if (
    e.target.className ===
    "btn btn-outline-warning editBtn rounded rounded-circle"
  ) {
    const book = e.target.closest(".card-group");
    const bookChangeId = book.id;
    const books = storage.getBooksFromLocalStorage();

    books.forEach(function (book) {
      if (book.id == bookChangeId) {
        const { url, name, type, date, author, id } = book;
        bookUrl.value = url;
        bookName.value = name;
        bookType.value = type;
        bookDate.value = date;
        bookAuthor.value = author;
        bookUrl.setAttribute("data-id", id);
      }
    });
  }
  e.preventDefault();
};

Books.prototype.saveEditBook = function (e) {
  const books = storage.getBooksFromLocalStorage();
  const bookChangeId = bookUrl.getAttribute("data-id");
  books.forEach(function (book) {
    if (book.id == bookChangeId) {
      book.url = bookUrl.value;
      book.name = bookName.value;
      book.type = bookType.value;
      book.date = bookDate.value;
      book.author = bookAuthor.value;
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
  const authors = [...new Set(books.map((book) => book.author))];
  const bookAuthorFilter = document.querySelector("#bookAuthorFilter");

  bookAuthorFilter.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "All";
  allOption.textContent = "All";
  bookAuthorFilter.appendChild(allOption);

  authors.forEach((author) => {
    const option = document.createElement("option");
    option.value = author;
    option.textContent = author;
    bookAuthorFilter.appendChild(option);
  });
  ui.clearForm();
  ui.showBooks(books);
  e.preventDefault();
};

//filtreleme yazar ve kategoriye göre
Books.prototype.filterBook = function (e) {
  let books = storage.getBooksFromLocalStorage();
  let optionAuthor = bookAuthorFilter.value;
  const searchValue = bookSearch.value.trim().toLowerCase();
  const optionType = Array.from(
    document.querySelectorAll(".form-check-input:checked")
  );
  console.log(optionType);

  if (optionType.length === 0 && optionAuthor === "All" && !searchValue) {
    storage.showBooksFromLocalStorage();
    return;
  }
  let filteredBooks = books.filter(function (book) {
    if (optionType.length === 0) {
      return optionAuthor === "All" || book.author === optionAuthor;
    } else {
      return optionType.some(function (type) {
        return (
          (type.value === "All" || book.type === type.value) &&
          (optionAuthor === "All" || book.author === optionAuthor)
        );
      });
    }
  });
  console.log(filteredBooks);
  ui.showBooks(filteredBooks);
};

//local storagedan kitap adı veya yazara göre arama
Books.prototype.searchBook = function (e) {
  let books = storage.getBooksFromLocalStorage();
  let searchBook = e.target.value.toLowerCase();
  console.log(searchBook);
  let filteredBooks = books.filter(function (book) {
    return (
      book.name.toLowerCase().includes(searchBook) !== -1 ||
      book.author.toLowerCase().includes(searchBook) !== -1
    );
  });

  ui.showBooks(filteredBooks);
};

//local storagedan sıralama a'dan z'ye veya z'den a'ya  veya en yeni veya en eski
Books.prototype.sortBook = function (e) {
  let books = storage.getBooksFromLocalStorage();
  let option = bookSort.value;

  let sortedBooks = [...books];
  if (option === "default") {
    const selectedGenres = Array.from(
      document.querySelectorAll(".form-check-input:checked")
    ).map((category) => category.value);
    const selectedAuthor = bookAuthorFilter.value;

    if (selectedGenres.length !== 0) {
      sortedBooks = sortedBooks.filter((book) =>
        selectedGenres.includes(book.type)
      );
    }

    if (selectedAuthor !== "All") {
      sortedBooks = sortedBooks.filter(
        (book) => book.author === selectedAuthor
      );
    }
  } else if (option === "asc") {
    sortedBooks = books.sort(function (x, y) {
      return x.name.localeCompare(y.name);
    });
  } else if (option === "desc") {
    sortedBooks = books.sort(function (x, y) {
      return y.name.localeCompare(x.name);
    });
  } else if (option === "old-new") {
    sortedBooks = books.sort(function (x, y) {
      return y.date - x.date;
    });
  } else if (option === "new-old") {
    sortedBooks = books.sort(function (x, y) {
      return x.date - y.date;
    });
  }

  console.log(sortedBooks);
  ui.showBooks(sortedBooks);

  e.preventDefault();
};
