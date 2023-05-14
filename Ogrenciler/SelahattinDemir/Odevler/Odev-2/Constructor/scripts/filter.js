function Filter() {}

Filter.prototype.filterBooksFromFilter = function () {
  const bookType = document.getElementById("bookCategory").value;
  const bookWriter = document.getElementById("bookWriter").value;

  const categoriesAndAuthors = document.querySelectorAll(
    'input[name="categoriesandauthors"]:checked'
  );
  const selectedCategoriesAndAuthors = Array.from(categoriesAndAuthors).map(
    (input) => input.value
  );
  console.log(selectedCategoriesAndAuthors);

  let books = storage.getBookFromLocalStorage();
  // Filter the books based on the query
  const filteredBooks = books.filter((book) => {
    if (bookType !== "" && book.type !== bookType) {
      return false;
    }
    if (bookWriter !== "" && book.writer !== bookWriter) {
      return false;
    }
    if (selectedCategoriesAndAuthors.length > 0) {
      const bookCategoriesAndAuthors = [
        book.type,
        book.writer.replace(/ /g, ""),
      ];
      // console.log(book.writer.replace(/ /g, ""));
      const matchingCategoriesAndAuthors = selectedCategoriesAndAuthors.filter(
        (selectedCategoryAndAuthor) =>
          bookCategoriesAndAuthors.includes(selectedCategoryAndAuthor)
      );
      if (matchingCategoriesAndAuthors.length === 0) {
        return false;
      }
    }
    return true;
  });

  // Clear the book list
  bookList.innerHTML = "";

  // Add the filtered books to the book list
  filteredBooks.forEach((book) => {
    bookCard.addBookFromBookCard(book);
  });
};

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
    bookCard.addBookFromBookCard(book);
  });
};

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
    bookCard.addBookFromBookCard(book);
  });
};
