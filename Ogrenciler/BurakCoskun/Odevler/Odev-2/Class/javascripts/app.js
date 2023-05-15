const storage = new LocalStorage();
const books = new Books();
const ui = new UI();
const imageUrl = document.getElementById("imageUrl");
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");
const bookYear = document.getElementById("year");
const bookGenre = document.getElementById("genres");
const submitBtn = document.getElementById("submitBtn");
const bookList = document.getElementById("bookList");
const clearBtn = document.getElementById("clearBtn");
const updateBtn = document.getElementById("updateBtn");
const filter = document.getElementById("filter");
const categoriesSelect = document.querySelectorAll(".form-check-input");
const authorSelect = document.getElementById("authorSelect");
const orderSelect = document.getElementById("orderSelect");
const cancelBtn = document.getElementById("cancelBtn");
const form = document.getElementById("bookForm");

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", storage.showBooksFromStorage);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (updateBtn.classList.contains("d-inline-block")) {
      return books.updateBook(e);
    }
    books.addBook();
  });
  cancelBtn.addEventListener("click", ui.cancelInputs);
  bookList.addEventListener("click", books.deleteBook);
  bookList.addEventListener("click", books.editBook);
  clearBtn.addEventListener("click", books.clearAllBooks);
  filter.addEventListener("keyup", books.searchBooks);
  categoriesSelect.forEach((category) => {
    category.addEventListener("change", books.filterBooks);
  });
  authorSelect.addEventListener("change", books.filterBooks);
  orderSelect.addEventListener("change", books.orderBooks);
}

addStartedBook();

function addStartedBook() {
  const books = storage.getBooksFromStorage();
  if (books.length === 0) {
    const book1 = new Books(
      "The Alchemist",
      "Paulo Coelho",
      "1988",
      "Adventure",
      "https://kbimages1-a.akamaihd.net/5967e7fb-edc8-403b-9989-f8aab7b3ed89/353/569/90/False/the-alchemist-38.jpg"
    );

    const book2 = new Books(
      "Dune",
      "Frank Herbert",
      "1965",
      "Sci-fi",
      "https://m.media-amazon.com/images/I/513hKKmFzDL._AC_UF1000,1000_QL80_.jpg"
    );

    const book3 = new Books(
      "The Fellowship of the Ring (The Lord of the Rings, Book 1)",
      "J.R.R. Tolkien",
      "1954",
      "Adventure",
      "https://kbimages1-a.akamaihd.net/7a557cb3-f72a-47c3-992b-951c9566e4d4/353/569/90/False/the-fellowship-of-the-ring-the-lord-of-the-rings-book-1-1.jpg"
    );
    books.push(book1, book2, book3);
    localStorage.setItem("books", JSON.stringify(books));
  }
}
