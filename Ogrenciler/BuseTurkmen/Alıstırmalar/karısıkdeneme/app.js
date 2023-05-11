// Book Class: Represents a Book
class Book {
    constructor(title, author, category, date, image) {
      this.title = title;
      this.author = author;
      this.category = category;
      this.date = date;
      this.image = image;
    }
  }
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector("#book-list");
  
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td><img src="${book.image}" width="70"></td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.category}</td>
        <td>${book.date}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteBook(el) {
      if (el.classList.contains("delete")) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement("div");
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector(".container");
      const form = document.querySelector("#book-form");
      container.insertBefore(div, form);
  
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector(".alert").remove(), 3000);
    }
  
    static clearFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#author").value = "";
      document.querySelector("#category").value = "";
      document.querySelector("#date").value = "";
      document.querySelector("#image").value = "";
    }
  }
  
  // Store Class: Handles Storage
  class Store {
    static getBooks() {
      let books;
      if (localStorage.getItem("books") === null) {
        books = [
          {
            title: "Book One",
            author: "John Doe",
            category: "Fiction",
            date: "2018-01-01",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/James_Stewart_-_Rear_Window_%281954%29.jpg/200px-James_Stewart_-_Rear_Window_%281954%29.jpg",
          },
          {
            title: "Book Two",
            author: "Jane Doe",
            category: "Non-Fiction",
            date: "2019-02-01",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Harry_Potter_and_the_Deathly_Hallows_Part_1.jpg/200px-Harry_Potter_and_the_Deathly_Hallows_Part_1.jpg",
          },
        ];
        localStorage.setItem("books", JSON.stringify(books));
      } else {
        books = JSON.parse(localStorage.getItem("books"));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem("books", JSON.stringify(books));
    }
  
    static removeBook(title) {
      const books = Store.getBooks();
      books.forEach((book, index) => {
        if (book.title === title) {
          books.splice(index, 1);
        }
      });
      localStorage.setItem("books", JSON.stringify(books));
    }
  }
  
  // Event: Display Books
  document.addEventListener("DOMContentLoaded", UI.displayBooks);
  
  // Event: Add a Book
  class Controller {
    static init() {
      // Event: Display Books
      document.addEventListener("DOMContentLoaded", UI.displayBooks);
  
      // Event: Add a Book
      document.querySelector("#book-form").addEventListener("submit", (e) => {
        // Prevent actual submit
        e.preventDefault();
  
        // Get form values
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const category = document.querySelector("#category").value;
        const date = document.querySelector("#date").value;
        const image = document.querySelector("#image").value;
  
        // Validate
        if (title === "" || author === "" || category === "" || date === "" || image === "") {
          UI.showAlert("Please fill in all fields", "danger");
        } else {
          // Instatiate book
          const book = new Book(title, author, category, date, image);
  
          // Add Book to UI
          UI.addBookToList(book);
  
          // Add book to store
          Store.addBook(book);
  
          // Show success message
          UI.showAlert("Book added", "success");
  
          // Clear fields
          UI.clearFields();
        }
      });
  
      // Event: Remove a Book
      document.querySelector("#book-list").addEventListener("click", (e) => {
        // Remove book from UI
        UI.deleteBook(e.target);
  
        // Remove book from store
        Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
  
        // Show success message
        UI.showAlert("Book removed", "success");
      });
    }
  }
  
  // Initialize Controller
  Controller.init();
  
  // Event: Remove a Book
  document.querySelector("#book-list").addEventListener("click", (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);
  
    // Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
  
    // Show success message
    UI.showAlert("Book removed", "success");
  });
  