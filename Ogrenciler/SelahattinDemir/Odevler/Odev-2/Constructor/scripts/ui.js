function UI() {}

UI.prototype.addBookFromUI = function (book) {
  // const books = storage.getBookFromLocalStorage();
  // books.forEach((book) => {
  bookList.innerHTML += `
  <div class="col-lg-3 col-sm-6 my-3 text-center" id="${book.id}">
    <div class="card shadow">
      <img src=${book.imageUrl} alt="" class="card-img-top img-fluid" />
      <div class="card-body">
        <h5 class="card-title text-center text-truncate">${book.name}</h5>
        <h6 class="text-center text-success">${book.writer}</h6>
        <p class="card-text text-truncate">${book.type}</p>
        <h6 class="text-end">${book.date}</h6>
        <h6 class="text-end text-secondary">${book.type}</h6>
        <div class="d-flex justify-content-around my-3">
          <a
            href="#"
            class="me-3"
            data-bs-toggle="modal"
            data-bs-target="#booksModal"
            ><span class="fa-solid fa-pen-to-square fa-lg"></span
          ></a>
          <a href="#"><span class="fa-solid fa-trash fa-lg"></span></a>
        </div>
      </div>
    </div>
  </div>
`;
  // });
};

UI.prototype.editBookFromUI = function (e) {
  if (e.target.classList.contains("fa-pen-to-square")) {
    const book = e.target.closest(".col-lg-3");
    const bookChangeId = book.id;
    let books = storage.getBookFromLocalStorage();
    books.forEach((book) => {
      if (book.id == bookChangeId) {
        const button = document.getElementById("addOrEditButton");
        const bookName = document.getElementById("bookName");
        const bookType = document.getElementById("bookCategory");
        const bookDate = document.getElementById("bookDate");
        const bookWriter = document.getElementById("bookWriter");
        const ImageUrl = document.getElementById("imgUrl");
        const form = document.getElementById("book-form");

        form.id = book.id;
        ImageUrl.value = book.imageUrl;
        bookName.value = book.name;
        bookType.value = book.type;
        bookDate.value = book.date;
        bookWriter.value = book.writer;

        // butonu düzenle
        button.innerHTML = "Düzenle";
        button.className = "btn btn-warning w-25";

        // butona tıklandığında kitabı güncelle ve sayfayı yenile
        button.onclick = function () {
          book.name = bookName.value;
          book.type = bookType.value;
          book.date = bookDate.value;
          book.writer = bookWriter.value;
          book.imageUrl = ImageUrl.value;
          //update fonksiyonuna kitabı gönder
          storage.updateBookFromLocalStorage(book);
          location.reload();
        };
      }
    });
  }
  e.preventDefault();
};

UI.prototype.formListenSubmitFromUI = function (e) {
  const id = Date.now();
  const bookName = document.getElementById("bookName").value.trim();
  const bookType = document.getElementById("bookCategory").value.trim();
  const bookDate = document.getElementById("bookDate").value.trim();
  const bookWriter = document.getElementById("bookWriter").value.trim();
  const ImageUrl = document.getElementById("imgUrl").value.trim();
  const button = document.getElementById("addOrEditButton");
  const form = document.getElementById("book-form");

  if (
    bookName === "" ||
    bookType === "" ||
    bookDate === "" ||
    bookWriter === "" ||
    ImageUrl === ""
  ) {
    alert("Lütfen tüm alanları doldurunuz.");
  }
  if (button.innerHTML === "Düzenle") {
    // butonu düzenle
    button.innerHTML = "Ekle";
    button.className = "btn btn-success w-25";
  } else {
    const book = new Books(
      id,
      ImageUrl,
      bookName,
      bookType,
      bookDate,
      bookWriter
    );
    saveLocalStorage(book);
    location.reload();
  }
  e.preventDefault();
  form.reset();
};

// UI.prototype.sortBooksFromUI = function (sortType) {
//   let books = storage.getBookFromLocalStorage();
//   console.log(sortType);

//   switch (sortType) {
//     case "alphabetical-asc":
//       books.sort((a, b) => a.name.localeCompare(b.name));
//       break;
//     case "alphabetical-desc":
//       books.sort((a, b) => b.name.localeCompare(a.name));
//       break;
//     case "date-asc":
//       books.sort((a, b) => new Date(a.date) - new Date(b.date));
//       break;
//     case "date-desc":
//       books.sort((a, b) => new Date(b.date) - new Date(a.date));
//       break;
//     default:
//       break;
//   }

//   // Clear the book list
//   bookList.innerHTML = "";

//   // Add sorted books to UI
//   books.forEach((book) => {
//     ui.addBookFromUI(book);
//   });

//   // Save sorted books to local storage
//   storage.saveBookFromLocalStorage(books);
// };

// UI.prototype.searchBookFromUI = function (query) {
//   let books = storage.getBookFromLocalStorage();

//   // Filter the books based on the query
//   const filteredBooks = books.filter(
//     (book) =>
//       book.name.toLowerCase().includes(query.toLowerCase()) ||
//       book.writer.toLowerCase().includes(query.toLowerCase())
//   );

//   // Clear the book list
//   bookList.innerHTML = "";

//   // Add the filtered books to the book list
//   filteredBooks.forEach((book) => {
//     ui.addBookFromUI(book);
//   });
// };

// UI.prototype.filterBooksFromUI = function () {
//   const bookType = document.getElementById("bookCategory").value;
//   const bookWriter = document.getElementById("bookWriter").value;

//   const categories = document.querySelectorAll(
//     'input[name="categories"]:checked'
//   );
//   const category = Array.from(categories).map((input) => input.value);
//   const authors = document.querySelectorAll('input[name="authors"]:checked');
//   const author = Array.from(authors).map((input) => input.value);

//   let books = storage.getBookFromLocalStorage();
//   // console.log(books.filter((book) => book.type));
//   // console.log(books.filter((book) => book.category));
//   // console.log(books.filter((book) => book.writer));

//   // Filter the books based on the query
//   const filteredBooks = books.filter((book) => {
//     if (bookType !== "" && book.type !== bookType) {
//       return false;
//     }
//     if (bookWriter !== "" && book.writer !== bookWriter) {
//       return false;
//     }
//     if (category.length > 0 && !category.includes(book.type)) {
//       return false;
//     }
//     if (author.length > 0 && !author.includes(book.writer.trim())) {
//       return false;
//     }
//     return true;
//   });

//   // Clear the book list
//   bookList.innerHTML = "";

//   // Add the filtered books to the book list
//   filteredBooks.forEach((book) => {
//     ui.addBookFromUI(book);
//   });
// };

// UiBook.prototype.editBookFromUI = function (e) {
//   const button = document.getElementById("addOrEditButton");
//   const bookName = document.getElementById("bookName");
//   const bookType = document.getElementById("bookCategory");
//   const bookDate = document.getElementById("bookDate");
//   const bookWriter = document.getElementById("bookWriter");
//   const ImageUrl = document.getElementById("imgUrl");
//   const form = document.getElementById("book-form");

//   if (e.target.className.includes("fa-pen-to-square fa-lg")) {
//     const book =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .parentElement;
//     const bookChangeId = book.id;
//     let books = storage.getBookFromLocalStorage();
//     books.forEach((book) => {
//       if (book.id == bookChangeId) {
//         form.id = book.id;
//         ImageUrl.value = book.imageUrl;
//         bookName.value = book.name;
//         bookType.value = book.type;
//         bookDate.value = book.date;
//         bookWriter.value = book.writer;
//       }
//     });
//     // butonu düzenle
//     button.innerHTML = "Düzenle";
//     button.className = "btn btn-warning w-25";
//   }
//   e.preventDefault();
// };
