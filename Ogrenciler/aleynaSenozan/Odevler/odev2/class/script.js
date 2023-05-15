class Book {
  constructor(title, author, category, year, cover) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.year = year;
    this.cover = cover;
  }
}

class Storage {
  getBooksFromStorage() {
    let books;

    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  addBookToStorage(newBook) {
    let books = this.getBooksFromStorage();

    books.push(newBook);

    localStorage.setItem("books", JSON.stringify(books));
  }

  addBookToUI(book) {
    const table = document.querySelector("table tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><input type="checkbox"></td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.category}</td>
      <td>${book.year}</td>
      <td><span class="zoom-icon" data-img="${
        book.cover
      }"><i class="btn bi bi-zoom-in"></i></span></td>
      <td><button id="update-${book.title.replace(
        /\s+/g,
        "-"
      )}" class="btn btn-primary"><i class="bi bi-pencil-fill"></i> Upd</button></td>
    `;

    const zoomIcon = row.querySelector(".zoom-icon");
    zoomIcon.addEventListener("click", function () {
      const img = zoomIcon.getAttribute("data-img");
      const largeImg = zoomIcon.getAttribute("data-large-img");

      const coverImage = document.getElementById("coverImage");
      coverImage.src = largeImg;

      const coverModal = new bootstrap.Modal(
        document.getElementById("coverModal")
      );
      coverModal.show();
    });

    table.appendChild(row);

    const authorFilter = document.getElementById("author-filter");
    const categoryFilter = document.getElementById("category-filter");
    const yearFilter = document.getElementById("year-filter");

    const addFilterItem = (filterElement, value) => {
      if (
        !Array.from(filterElement.querySelectorAll("input")).some(
          (input) => input.value === value
        )
      ) {
        const div = document.createElement("div");
        const input = document.createElement("input");
        const label = document.createElement("label");
        input.type = "checkbox";
        input.id = value;
        input.name = value;
        input.value = value;
        label.htmlFor = value;
        label.textContent = value;

        div.appendChild(input);
        div.appendChild(label);
        filterElement.appendChild(div);
      }
    };

    addFilterItem(authorFilter, book.author);
    addFilterItem(categoryFilter, book.category);
    addFilterItem(yearFilter, book.year.toString());
  }

  deleteBookFromStorage(title) {
    let books = this.getBooksFromStorage();

    books.forEach(function (book, index) {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }

  deleteBookFromUI(element) {
    element.remove();
  }

  updateBookInStorage(oldTitle, updatedBook) {
    let books = this.getBooksFromStorage();

    books.forEach(function (book, index) {
      if (book.title === oldTitle) {
        books[index] = updatedBook;
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }

  updateBookInUI(oldTitle, updatedBook) {
    const table = document.querySelector("table tbody");
    const rows = Array.from(table.querySelectorAll("tr"));

    rows.forEach(function (row) {
      const title = row.getElementsByTagName("td")[1].textContent;

      if (title === oldTitle) {
        row.getElementsByTagName("td")[1].textContent = updatedBook.title;
        row.getElementsByTagName("td")[2].textContent = updatedBook.author;
        row.getElementsByTagName("td")[3].textContent = updatedBook.category;
        row.getElementsByTagName("td")[4].textContent = updatedBook.year;
        row.getElementsByTagName("td")[5].textContent = updatedBook.cover;
      }
    });
  }
}

document.getElementById("save-button").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;
  const year = document.getElementById("year").value;
  const cover = document.getElementById("cover").value;

  const newBook = new Book(title, author, category, year, cover);

  const storage = new Storage();
  storage.addBookToStorage(newBook);
  storage.addBookToUI(newBook);

  document.getElementById("book-form").reset();

  var myModal = bootstrap.Modal.getInstance(
    document.getElementById("addBookModal")
  );
  myModal.hide();
});

Storage.prototype.deleteBookFromUI = function (element) {
  element.remove();
};

document.getElementById("delete-button").addEventListener("click", function () {
  const storage = new Storage();
  const checkboxes = document.querySelectorAll(
    "table tbody input[type=checkbox]:checked"
  );

  checkboxes.forEach(function (checkbox) {
    const row = checkbox.parentElement.parentElement;
    const title = row.getElementsByTagName("td")[1].textContent;

    storage.deleteBookFromStorage(title);
    storage.deleteBookFromUI(row);
  });
});

document.getElementById("search").addEventListener("input", function (e) {
  const searchString = e.target.value.toLowerCase();
  const table = document.querySelector("table tbody");
  const books = Array.from(table.querySelectorAll("tr"));

  books.forEach(function (book) {
    const title = book.getElementsByTagName("td")[1].textContent.toLowerCase();
    const author = book.getElementsByTagName("td")[2].textContent.toLowerCase();

    if (title.includes(searchString) || author.includes(searchString)) {
      book.style.display = "";
    } else {
      book.style.display = "none";
    }
  });
});

function getBookFromStorage(title) {
  const books = JSON.parse(localStorage.getItem("books"));

  for (let i = 0; i < books.length; i++) {
    if (books[i].title === title) {
      return books[i];
    }
  }

  return null;
}

document.addEventListener("click", function (e) {
  if (e.target.id.startsWith("update-")) {
    const title = e.target.id.substring(7).replace(/-/g, " ");

    const book = getBookFromStorage(title);

    if (book) {
      document.getElementById("update-title").defaultValue = book.title;
      document.getElementById("update-author").defaultValue = book.author;
      document.getElementById("update-category").defaultValue = book.category;
      document.getElementById("update-year").defaultValue = book.year;
      document.getElementById("update-cover").defaultValue = book.cover;

      var myModal = new bootstrap.Modal(
        document.getElementById("updateBookModal")
      );
      myModal.show();
    }
  }
});

document.getElementById("update-button").addEventListener("click", function () {
  const oldTitle = document.getElementById("update-title").defaultValue;
  const newTitle = document.getElementById("update-title").value;

  const author = document.getElementById("update-author").value;
  const category = document.getElementById("update-category").value;
  const year = document.getElementById("update-year").value;
  const cover = document.getElementById("update-cover").value;

  const updatedBook = new Book(newTitle, author, category, year, cover);

  const storage = new Storage();
  storage.updateBookInStorage(oldTitle, updatedBook);
  storage.updateBookInUI(oldTitle, updatedBook);

  var myModal = bootstrap.Modal.getInstance(
    document.getElementById("updateBookModal")
  );
  myModal.hide();
});

let activeFilters = [];

["author-filter", "category-filter", "year-filter"].forEach((filterId) => {
  document.getElementById(filterId).addEventListener("change", function (e) {
    if (e.target.tagName === "INPUT") {
      activeFilters = Array.from(
        document.querySelectorAll(
          "#author-filter input:checked, #category-filter input:checked, #year-filter input:checked"
        )
      ).map((checkbox) => checkbox.value);

      filterBooks();
    }
  });
});

function filterBooks() {
  const table = document.querySelector("table tbody");
  const books = Array.from(table.querySelectorAll("tr"));

  books.forEach((book) => (book.style.display = ""));

  activeFilters.forEach((filter) => {
    books.forEach((book) => {
      const td = book.querySelectorAll("td");

      const author = td[2].textContent;
      const category = td[3].textContent;
      const year = td[4].textContent;

      if (author !== filter && category !== filter && year !== filter) {
        book.style.display = "none";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const storage = new Storage();
  const books = storage.getBooksFromStorage();

  books.forEach((book) => storage.addBookToUI(book));
});

const sortState = {
  title: 0,
  author: 0,
  category: 0,
  year: 0,
};

function sortTable(column, num) {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelector("table");
  switching = true;

  sortState[column] = sortState[column] === 0 ? 1 : 0;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[num];
      y = rows[i + 1].getElementsByTagName("TD")[num];

      if (sortState[column] === 1) {
        if (num !== 4) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      } else {
        if (num !== 4) {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

document.querySelectorAll(".bi-caret-up-fill, .bi-caret-down-fill").forEach(function (icon) {
  icon.addEventListener;
  icon.addEventListener("click", function (e) {
    const column = e.target.getAttribute("data-column");
    const num = Number(e.target.getAttribute("data-num"));
    sortTable(column, num);

    document
      .querySelectorAll(".bi-caret-up-fill, .bi-caret-down-fill")
      .forEach(function (icon) {
        icon.classList.add("bi-caret-up-fill");
        icon.classList.remove("bi-caret-down-fill");
      });

    e.target.classList.toggle("bi-caret-up-fill");
    e.target.classList.toggle("bi-caret-down-fill");
  });
});

const coverModal = document.getElementById("coverModal");
const coverImage = document.getElementById("coverImage");

coverModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  const imgUrl = button.getAttribute("data-img");
  const largeImgUrl = button.getAttribute("data-large-img");
  const bookUrl = button.getAttribute("data-url");

  coverImage.src = largeImgUrl;
});