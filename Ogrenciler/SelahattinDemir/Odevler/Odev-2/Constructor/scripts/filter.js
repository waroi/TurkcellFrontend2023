function Filter() {}

Filter.prototype.filterBooksFromFilter = function () {
  const bookType = document.getElementById("bookCategory").value;
  const bookWriter = document.getElementById("bookWriter").value;

  const categories = document.querySelectorAll(
    'input[name="categories"]:checked'
  );
  const category = Array.from(categories).map((input) => input.value);
  const authors = document.querySelectorAll('input[name="authors"]:checked');
  const author = Array.from(authors).map((input) => input.value);

  let books = storage.getBookFromLocalStorage();
  // console.log(books.filter((book) => book.type));
  // console.log(books.filter((book) => book.category));
  // console.log(books.filter((book) => book.writer));

  // Filter the books based on the query
  const filteredBooks = books.filter((book) => {
    if (bookType !== "" && book.type !== bookType) {
      return false;
    }
    if (bookWriter !== "" && book.writer !== bookWriter) {
      return false;
    }
    if (category.length > 0 && !category.includes(book.type)) {
      return false;
    }
    if (author.length > 0 && !author.includes(book.writer.trim())) {
      return false;
    }
    return true;
  });

  // Clear the book list
  bookList.innerHTML = "";

  // Add the filtered books to the book list
  filteredBooks.forEach((book) => {
    ui.addBookFromUI(book);
  });
}

Filter.prototype.searchBookFromFilter = function (query) {
  let books = storage.getBookFromLocalStorage();

  // Filter the books based on the query
  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(query.toLowerCase()) ||
      book.writer.toLowerCase().includes(query.toLowerCase())
  );

  // Clear the book list
  bookList.innerHTML = "";

  // Add the filtered books to the book list
  filteredBooks.forEach((book) => {
    ui.addBookFromUI(book);
  });
}

Filter.prototype.sortBooksFromFilter = function (sortType) {
  let books = storage.getBookFromLocalStorage();
  console.log(sortType);

  switch (sortType) {
    case "alphabetical-asc":
      books.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "alphabetical-desc":
      books.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "date-asc":
      books.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "date-desc":
      books.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    default:
      break;
  }

  // Clear the book list
  bookList.innerHTML = "";

  // Add sorted books to UI
  books.forEach((book) => {
    ui.addBookFromUI(book);
  });

  // Save sorted books to local storage
  storage.saveBookFromLocalStorage(books);
};