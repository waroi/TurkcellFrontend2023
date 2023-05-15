const bookCollection = document.querySelector(".bookCollection");

function UI() {}
UI.prototype.addBookToUI = function (newBook) {
  this.createBookCard(newBook);
};
UI.prototype.displayMessage = function (message, type) {
  const modalBody = document.querySelector(".modal-body");
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  modalBody.appendChild(div);

  setTimeout(() => {
    div.remove();
    console.log(type === "success");
    if (type === "success") {
      let close = document.querySelector(".btn-close");
      console.log(close);
      close.click();
    }
  }, 1500);
};

UI.prototype.loadAllBooks = function (books) {
  bookCollection.innerHTML = "";
  books.forEach((book) => {
    this.createBookCard(book);
  });
};
UI.prototype.deleteBookFromUI = function (element) {
  element.remove();
};

UI.prototype.filterBooks = function (category, author) {
  const cardItem = document.querySelectorAll(".card-body");
  cardItem.forEach((card) => {
    if (
      card.children[3].textContent
        .substring(8, card.children[0].length)
        .toLowerCase()
        .indexOf(author.trim().toLowerCase()) === 0 &&
      card.children[1].textContent
        .substring(10, card.children[0].length)
        .indexOf(category) === 0
    ) {
      card.parentElement.parentElement.setAttribute("style", "display:block");
    } else {
      card.parentElement.parentElement.setAttribute("style", "display:none");
    }
  });
};
UI.prototype.sortBooks = function (shape, category) {
  console.log(shape);
  if (shape === "A-Z" && category === "name") {
    let books = storage.getBooksFromStorage();
    books.sort(function (a, b) {
      const nameA = a.name.charAt(0).toUpperCase();
      const nameB = b.name.charAt(0).toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    console.log(books);
    this.loadAllBooks(books);
  }
  if (shape === "A-Z" && category === "date") {
    let books = storage.getBooksFromStorage();
    books.sort(function (a, b) {
      return a.year - b.year;
    });
    console.log(books);
    this.loadAllBooks(books);
  }
  if (shape === "Z-A" && category === "name") {
    let books = storage.getBooksFromStorage();
    books.sort(function (a, b) {
      const nameA = a.name.charAt(0).toUpperCase();
      const nameB = b.name.charAt(0).toUpperCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    console.log(books);
    this.loadAllBooks(books);
  }
  if (shape === "Z-A" && category === "date") {
    let books = storage.getBooksFromStorage();
    books.sort(function (a, b) {
      return b.year - a.year;
    });
    console.log(books);
    this.loadAllBooks(books);
  }
};
UI.prototype.searchOnBooks = function (input) {
  const cardItem = document.querySelectorAll(".card-body");

  cardItem.forEach((card) => {
    console.log(
      card.children[0].textContent.substring(
        6,
        card.children[0].textContent.length
      )
    );
    if (
      card.children[0].textContent
        .substring(6, card.children[0].textContent.length)
        .toLowerCase()
        .indexOf(input.trim().toLowerCase()) === 0 ||
      card.children[3].textContent
        .substring(8, card.children[0].textContent.length)
        .indexOf(input.trim().toLowerCase()) === 0
    ) {
      card.parentElement.parentElement.setAttribute("style", "display:block");
    } else {
      card.parentElement.parentElement.setAttribute("style", "display:none");
    }
  });
};
UI.prototype.addCurrentBookInf = function (currentBookId) {
  let books = storage.getBooksFromStorage();
  let curBook = books.find((book) => book.id == currentBookId);

  console.log(curBook);
  bookName.value = curBook.name;
  bookAuthor.value = curBook.author;
  bookRelaseDate.value = curBook.year;
  bookCategory.value = curBook.category;
  bookUrl.value = curBook.url;
};

UI.prototype.createBookCard = function (book) {
  bookCollection.innerHTML += `
  <div  class="cardItem col-md-6 col-lg-3" id="${book.id}" ">
  <div style="max-height: 320px" class="card bookCard">
  <img
  style="height: 200px"
    src=${book.url}
    class="bookImage card-img-top movie-banner img-fluid"
    alt="..."
  />
  <div style="overflow: scroll" class="card-body">
    <p class="card-title name"><strong>Name: </strong>${book.name}</p>
    <p class="card-title category"><strong>Category: </strong>${book.category}</p>
    <p class="card-title year"><strong>Release Date: </strong>${book.year}</p>
    <p class="card-title author"><strong>Author: </strong>${book.author}</p>
    <div class="text-center">
    <button id="book-edit" class="btn btn-warning book-edit w-75" data-bs-toggle="modal"
    data-bs-target="#inputModal2">Edit</button>
    <button class="btn btn-danger book-delete my-1 w-75  ">Delete</button>
    
    </div>
    </div>
    </div>
    </div>`;
};
