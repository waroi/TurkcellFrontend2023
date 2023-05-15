
const categoryAdd = document.querySelector("#categories");
const writer = document.querySelector("#writers");
const imageBook = document.querySelector("#book-cover");
const bookAdd = document.querySelector("#add-button");
const nameBook = document.querySelector("#book-name");
const writerBook = document.querySelector("#book-writer");
const editBook = document.querySelector("#edit-button");
const categoryBook = document.querySelector("#book-category");
const dateBook = document.querySelector("#book-date");

function createCard(book) {
  return `
    <div class="col-md-3 mb-5" id="${book.id}">
    <div class="card h-100 card-item">
    <img src="${book.coverURL}" class="card-img-top" alt="..." width="300px" height="350px">
    <div class="card-body h-50">
      <h2 class="book-title fw-bold fs-2">${book.name}</h2>
      <h3 class="book-writer fs-4 text-muted">${book.writer}</h3>
      <h3 class="book-category fs-6 text-muted">${book.category}</h3>
      <h5 class="book-release-date fs-6 pb-3  text-muted">${book.releaseDate}</h5>
      
      <a href="#" data-bs-toggle="modal" data-bs-target="#addModal" class="btn btn-warning book-edit">DÜZENLE</a>
      <a href="#"  class="btn btn-danger book-delete">
        SİL
      </a>
    </div>
    </div>
  </div>`;
}

function createOption(value) {
  return `<option value="${value}">${value}</option>`;
}

class UI {
  constructor(display) {
    this.display = display;
  }

  updateDisplay = function (books) {
    this.display.innerHTML = "";
    books.map((book) => (this.display.innerHTML += createCard(book)));
  };

  uqWriters = function (books) {
    const writersSet = new Set(books.map((book) => book.writer));
    writer.innerHTML = "";
    writer.innerHTML += `<option value="">Tümü</option>`;
    writer.innerHTML += Array.from(writersSet).map((writer) => {
      return createOption(writer);
    });
  };

  uqCategories = function (books) {
    const categoriesSet = new Set(books.map((book) => book.category));
    categoryAdd.innerHTML = "";
    categoryAdd.innerHTML += `<option value="">Tümü</option>`;
    categoryAdd.innerHTML += Array.from(categoriesSet).map((category) => {
      return createOption(category);
    });
  };

  makeUniques (books) {
    this.uqWriters(books);
    this.uqCategories(books);
  };


  static modalWrap (books, bookID) {
    const book = books.find((book) => book.id == bookID);

    if(book){
      nameBook.value = book.name;
      writerBook.value = book.writer;
      categoryBook.value = book.category;
      dateBook.value = book.releaseDate;
      imageBook.value = book.coverURL;
      bookAdd.classList.toggle("d-none");
      editBook.classList.toggle("d-none");
    }
  };
}
export default UI;
