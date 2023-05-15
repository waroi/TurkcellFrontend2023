function LocalStorage() {}

LocalStorage.prototype.getBooksFromStorage = function () {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
};

LocalStorage.prototype.addBookToStorage = function (book) {
  const books = storage.getBooksFromStorage();
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));

  const newAuthor = book.author.trim();
  const authorSelect = document.getElementById("authorSelect");
  const optionElements = authorSelect.getElementsByTagName("option");
  const existingAuthors = new Set();

  for (let i = 0; i < optionElements.length; i++) {
    const existingAuthor = optionElements[i].value.trim();
    existingAuthors.add(existingAuthor.toLowerCase());
  }

  if (newAuthor !== "" && !existingAuthors.has(newAuthor.toLowerCase())) {
    const option = document.createElement("option");
    option.value = newAuthor;
    option.text = newAuthor;
    authorSelect.add(option);
  }
};

LocalStorage.prototype.deleteBookFromStorage = function (id) {
  const books = storage.getBooksFromStorage();
  books.forEach(function (book, index) {
    if (book.id === id) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
};

LocalStorage.prototype.showBooksFromStorage = function () {
  const books = storage.getBooksFromStorage();
  const authorSelect = document.getElementById("authorSelect");
  const optionElements = authorSelect.getElementsByTagName("option");
  const existingAuthors = new Set();

  for (let i = 0; i < optionElements.length; i++) {
    const existingAuthor = optionElements[i].value.trim();
    existingAuthors.add(existingAuthor.toLowerCase());
  }

  books.forEach(function (book) {
    const newAuthor = book.author.trim();
    const newAuthorLowerCase = newAuthor.toLowerCase();

    if (!existingAuthors.has(newAuthorLowerCase) && newAuthor !== "") {
      const option = document.createElement("option");
      option.value = newAuthor;
      option.text = newAuthor;
      authorSelect.add(option);

      existingAuthors.add(newAuthorLowerCase);
    }

    ui.addBookToUI(book);
  });
};

LocalStorage.prototype.getBookFromStorage = function (id) {
  const books = storage.getBooksFromStorage();
  let book;
  books.forEach(function (bk) {
    if (bk.id === id) {
      book = bk;
    }
  });
  return book;
};
