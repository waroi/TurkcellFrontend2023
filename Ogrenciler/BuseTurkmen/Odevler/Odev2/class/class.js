
class Book {
  constructor(title, author, year, category, poster) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.category = category;
    this.poster = poster;
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.bookListElement = document.getElementById("bookList");
    this.addBookButtonElement = document.getElementById("addBookButton");
    this.searchInputElement = document.getElementById("searchInput");
    this.init();
  }

  init() {
    this.addBookButtonElement.addEventListener("click", () => {
      const bookTitle = document.getElementById("bookTitle").value;
      const bookAuthor = document.getElementById("bookAuthor").value;
      const bookYear = document.getElementById("bookYear").value;
      const bookCategory = document.getElementById("bookCategory").value;
      const bookPoster = document.getElementById("bookPoster").value;

      if (bookTitle === "" || bookAuthor === "" || bookYear === "" || bookCategory === "" || bookPoster === "") {
        alert("Lütfen kitap ile ilgili bilgileri doldurunuz", "danger");
        return;
      }

      const newBook = new Book(bookTitle, bookAuthor, bookYear, bookCategory, bookPoster);
      this.addBook(newBook);
      this.displayBooks(this.books);
      this.clearForm();
    });

    this.searchInputElement.addEventListener("keyup", () => {
      const searchTerm = this.searchInputElement.value.toLowerCase();

      const filteredBooks = this.books.filter((book) => {
        return (
          book.author.toLowerCase().includes(searchTerm) ||
          book.category.toLowerCase().includes(searchTerm) ||
          book.title.toLowerCase().includes(searchTerm)
        );
      });

      this.displayBooks(filteredBooks);
    });

    const sampleBook = new Book(
      "Kürk Mantolu Madonna",
      "Sabahattin Ali",
      "1998",
      "Roman",
      "../resim/kurk-mantolu-madonna.png"
    );
    this.addBook(sampleBook);

    const sampleBook2 = new Book(
      "Kadınlar Ülkesi",
      "Charlotte Perkin Gılman",
      "2018",
      "Bilim Kurgu",
      "../resim/Kadinlar-Ulkesi-2.png"
    );
    this.addBook(sampleBook2);

    this.displayBooks(this.books);
  }

  addBook(book) {
    this.books.push(book);
    this.saveBooksToLocalStorage();
  }

  clearForm() {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookYear").value = "";
    document.getElementById("bookCategory").value = "";
    document.getElementById("bookPoster").value = "";
    $('#addBookModal').modal('hide');
  }

  displayBooks(books) {
    this.bookListElement.innerHTML = "";
    books.forEach((book, index) => {
      const card = this.createBookCard(book, index);
      this.bookListElement.appendChild(card);
    });
  }

  createBookCard(book, index) {
    const card = document.createElement("div");
    card.className = "card col-lg-3 col-sm-12";
    card.innerHTML = `
      <img src="${book.poster}" class="card-img-top" alt="${book.title}">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Yazar        <p class="card-text">Yazar: ${book.author}<br>Yayın Yılı: ${book.year}<br>Kategori: ${book.category}</p>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-danger" onclick="bookList.deleteBook(${index})">Sil</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addBookModal" data-index="${index}">Düzenle</button>
        </div>
      </div>
    `;
    return card;
  }

  deleteBook(index) {
    this.books.splice(index, 1);
    this.saveBooksToLocalStorage();
    this.displayBooks(this.books);
  }

  editBook(index) {
    const book = this.books[index];
    this.clearForm();
    document.getElementById("bookTitle").value = book.title;
    document.getElementById("bookAuthor").value = book.author;
    document.getElementById("bookYear").value = book.year;
    document.getElementById("bookCategory").value = book.category;
    document.getElementById("bookPoster").value = book.poster;

    this.clearForm();
    this.deleteBook(index);
    $('#addBookModal').modal('show');

    this.saveBooksToLocalStorage();
    const addBookButton = document.getElementById("addBookButton");
    addBookButton.innerHTML = "Kitap Ekle";
    addBookButton.removeEventListener("click", () => this.editBook(index));
    addBookButton.addEventListener("click", () => this.addBook());
  }

  loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
      this.displayBooks(this.books);
    }
  }

  saveBooksToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}

const bookList = new BookList();
bookList.loadBooksFromLocalStorage();

