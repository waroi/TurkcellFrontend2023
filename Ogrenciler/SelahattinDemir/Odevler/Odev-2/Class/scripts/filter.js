class Filter {
  static filterBooksFromFilter() {
    const bookCategory = document.getElementById("bookCategory").value;
    const bookWriter = document.getElementById("bookWriter").value;

    const categoriesAndAuthors = document.querySelectorAll(
      'input[name="categoriesandauthors"]:checked'
    );
    const selectedCategoriesAndAuthors = Array.from(categoriesAndAuthors).map(
      (input) => input.value
    );

    let books = LocalStorage.getBookFromLocalStorage();
    // Kitapları sorguya göre filtreleyin
    const filteredBooks = books.filter((book) => {
      if (bookCategory !== "" && book.category !== bookCategory) {
        return false;
      }
      if (bookWriter !== "" && book.writer !== bookWriter) {
        return false;
      }
      if (selectedCategoriesAndAuthors.length > 0) {
        const bookCategoriesAndAuthors = [
          book.category.toLowerCase(),
          book.writer.replace(/ /g, "").toUpperCase(),
        ];
        const matchingCategoriesAndAuthors =
          selectedCategoriesAndAuthors.filter((selectedCategoryAndAuthor) =>
            bookCategoriesAndAuthors.includes(selectedCategoryAndAuthor)
          );
        if (matchingCategoriesAndAuthors.length === 0) {
          return false;
        }
      }
      return true;
    });
    bookList.innerHTML = "";

    // Filtrelenen kitapları kitap listesine ekleyin
    filteredBooks.forEach((book) => {
      BookCard.addBookFromBookCard(book);
    });
  }
  static searchBookFromFilter(query) {
    let books = LocalStorage.getBookFromLocalStorage();

    // Kitapları sorguya göre arayın
    const filteredBooks = books.filter(
      (book) =>
        book.name.toLowerCase().includes(query.toLowerCase()) ||
        book.writer.toLowerCase().includes(query.toLowerCase())
    );
    bookList.innerHTML = "";

    // Filtrelenen kitapları kitap listesine ekleyin
    filteredBooks.forEach((book) => {
      BookCard.addBookFromBookCard(book);
    });
  }
  static sortBooksFromFilter(sortType) {
    let books = LocalStorage.getBookFromLocalStorage();

    // Kitapları sorguya göre sıralayın
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
    bookList.innerHTML = "";

    // Filtrelenen kitapları kitap listesine ekleyin
    books.forEach((book) => {
      BookCard.addBookFromBookCard(book);
    });
  }
}
