function BookManager() {
  this.books = [];

  if (localStorage.getItem("books")) {
    this.books = JSON.parse(localStorage.getItem("books"));
    this.renderBooks();
  }
}

BookManager.prototype.addBook = function(event) {
  event.preventDefault();

  const form = event.target;
  const bookName = form.elements.bookName.value;
  const writer = form.elements.writer.value;
  const year = form.elements.year.value;
  const type = form.elements.type.value;
  const posterUrl = form.elements.posterUrl.value;
  const searchInput = document.querySelector(".searchInput");
  searchInput.addEventListener("input", searchBook);
  if (bookName === '' || writer === '' || year === '' || type === '' || posterUrl === '') {
    alert('Lütfen tüm alanları doldurun.');
  
  }
  else{ const newBook = {
    bookName,
    writer,
    year,
    type,
    posterUrl,
  };


    console.log("deneme");
    this.books.push(newBook);
    localStorage.setItem("books", JSON.stringify(this.books));
  
    form.reset();
    this.renderBooks();

  }
 

};

const searchBook = function() {
  const searchTerm = document.querySelector(".searchInput").value.toLowerCase();
  const books = document.querySelectorAll(".card");

  const selectedCategory = document.querySelector('input[name="category"]:checked');
  const selectedCategoryValue = selectedCategory ? selectedCategory.value : "";

  books.forEach((book) => {
    const text = book.querySelector(".card-title").textContent.toLowerCase();
    const text2 = book.querySelector(".writer").textContent.toLowerCase();
    const category = book.querySelector(".category").textContent.toLowerCase();

    const isMatch = text.includes(searchTerm) || text2.includes(searchTerm);
    const isCategoryMatch = selectedCategoryValue === "" || category === selectedCategoryValue.toLowerCase();

    if ((text.includes(searchTerm) || text2.includes(searchTerm)) && isCategoryMatch) {
      book.style.display = "flex";
    } else {
      book.style.display = "none";
    }
  });

  const allRadio = document.getElementById("all");
  if (allRadio.checked) {
    books.forEach((book) => {
      book.style.display = "flex";
    });
  }
};

BookManager.prototype.renderBooks = function() {
  const sortSelect = document.getElementById("sortSelect");
  const bookCard = document.getElementById("bookCard");

  while (bookCard.firstChild) {
    bookCard.firstChild.remove();
  }

  this.sortBooks(sortSelect.value);
  bookCard.innerHTML = "";

  this.sortBooks(sortSelect.value);

  this.books.forEach((book, index) => {
    const item = document.createElement("div");
    item.className = "card";
    item.setAttribute("style", "width: 18rem;");

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.setAttribute("src", book.posterUrl);
    item.appendChild(img);

    const body = document.createElement("div");
    body.className = "card-body";
    item.appendChild(body);

    const header = document.createElement("h5");
    header.className = "card-title";
    header.textContent = book.bookName;
    body.appendChild(header);

    const list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    item.appendChild(list);

    const writerItem = document.createElement("li");
    writerItem.className = "list-group-item writer";
    writerItem.textContent = book.writer;
    list.appendChild(writerItem);

    const typeItem = document.createElement("li");
    typeItem.className = "list-group-item category";
    typeItem.textContent = book.type;
    list.appendChild(typeItem);

    const yearItem = document.createElement("li");
    yearItem.className = "list-group-item";
    yearItem.textContent = book.year;
    list.appendChild(yearItem);

    const buttons = document.createElement("li");
    buttons.className = "d-flex justify-content-evenly";

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.setAttribute("style", "padding-left: 40px; padding-right: 40px;");
    deleteButton.textContent = "Sil";
    deleteButton.addEventListener("click", () => {
      this.deleteBook(index);
    });
    buttons.appendChild(deleteButton);

    const updateButton = document.createElement("button");
    updateButton.textContent = "Güncelle";
    updateButton.className = "btn btn-success";
    updateButton.addEventListener("click", () => {
      this.updateBook(index);
    });

    buttons.appendChild(updateButton);

    list.appendChild(buttons);
    bookCard.appendChild(item);
  });
  const radioButtons = document.querySelectorAll('input[name="category"]');

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", searchBook);
  });
  // Radio butonları güncelle
  const categoryContainer = document.getElementById("categoryContainer");
  categoryContainer.innerHTML = "";

  const categories = this.getCategories();

  categories.forEach((category) => {
    const label = document.createElement("label");
    label.className = "radio-label";
    label.textContent = category;

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "category";
    radio.value = category;
    radio.addEventListener("change", searchBook);

    label.appendChild(radio);
    categoryContainer.appendChild(label);
  });
};

BookManager.prototype.getCategories = function() {
  const categories = new Set();

  this.books.forEach((book) => {
    categories.add(book.type);
  });

  return Array.from(categories);
};

BookManager.prototype.sortBooks = function(sortOption) {
  if (sortOption === "name") {
    this.books.sort((a, b) => {
      const bookA = a.bookName.toLowerCase();
      const bookB = b.bookName.toLowerCase();
      if (bookA < bookB) {
        return -1;
      }
      if (bookA > bookB) {
        return 1;
      }
      return 0;
    });
  } else if (sortOption === "reverse-name") {
    this.books.sort((a, b) => {
      const bookA = a.bookName.toLowerCase();
      const bookB = b.bookName.toLowerCase();
      if (bookA < bookB) {
        return 1;
      }
      if (bookA > bookB) {
        return -1;
      }
      return 0;
    });
  } else if (sortOption === "year") {
    this.books.sort((a, b) => {
      const yearA = Number(a.year);
      const yearB = Number(b.year);

      return yearA - yearB;
    });
  } else if (sortOption === "reverse-year") {
    this.books.sort((a, b) => {
      const yearA = Number(a.year);
      const yearB = Number(b.year);

      return yearB - yearA;
    });
  }
};

const bookManger = new BookManager();
const sortSelect = document.getElementById("sortSelect");

sortSelect.addEventListener("change", () => {
  const searchInput = document.querySelector(".searchInput");
  searchInput.addEventListener("input", searchBook);

  bookManger.sortBooks(sortSelect.value);
  bookManger.renderBooks();
});

searchInput = document.querySelector(".searchInput");
searchInput.addEventListener("input", searchBook);

BookManager.prototype.deleteBook = function(index) {
  this.books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(this.books));
  this.renderBooks();
};

BookManager.prototype.updateBook = function(index) {
  const book = this.books[index];
  const form = document.getElementById("bookForm");
  form.elements.bookName.value = book.bookName;
  form.elements.writer.value = book.writer;
  form.elements.year.value = book.year;
  form.elements.type.value = book.type;
  form.elements.posterUrl.value = book.posterUrl;

  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();

  const updateButton = document.getElementById("updateButton");
  updateButton.addEventListener("click", () => {
    this.performUpdate(index);
    modal.hide();
  });
};

BookManager.prototype.performUpdate = function(index) {
  const form = document.getElementById("bookForm");
  const bookName = form.elements.bookName.value;
  const writer = form.elements.writer.value;
  const year = form.elements.year.value;
  const type = form.elements.type.value;
  const posterUrl = form.elements.posterUrl.value;

  const updatedBook = {
    bookName,
    writer,
    year,
    type,
    posterUrl,
  };

  this.books[index] = updatedBook;
  localStorage.setItem("books", JSON.stringify(this.books));

  form.reset();
  this.renderBooks();
};

const form = document.getElementById("bookForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const bookName = form.elements.bookName.value;
  const writer = form.elements.writer.value;
  const year = form.elements.year.value;
  const type = form.elements.type.value;
  const posterUrl = form.elements.posterUrl.value;
  if (bookName === "" || writer === "" || year === "" || type === "" || posterUrl === "") {
    alert("Lütfen tüm alanları doldurun.");
   
  }else{
  const newBook = {
    bookName,
    writer,
    year,
    type,
    posterUrl,
  };

 bookManger.books.push(newBook);
    localStorage.setItem("books", JSON.stringify(bookManger.books));
  
    form.reset();
    bookManger.renderBooks();

  }

 
});

const bookManager = new BookManager();

const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", function(event) {
  event.preventDefault();
  bookManager.addBook(event);
});

