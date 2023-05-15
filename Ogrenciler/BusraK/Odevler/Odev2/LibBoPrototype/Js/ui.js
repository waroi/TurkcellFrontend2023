function UI() {}
UI.prototype.addBook = function (book) {
  const searchValue = bookSearch.value.trim().toLowerCase();
  const selectCategory = Array.from(
    document.querySelectorAll(".form-check-input:checked")
  ).map((category) => category.value);

  const selectAuthor = bookAuthorFilter.value.toLowerCase();

  if (
    ((selectCategory.length === 0 || selectCategory.includes(book.type)) &&
      (selectAuthor === "all" || book.author.toLowerCase() === selectAuthor) &&
      (!searchValue ||
        book.name.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue))) ||
    (selectCategory.length === 0 &&
      selectAuthor === "all" &&
      searchValue === "")
  ) {
    const bookCol = document.createElement("div");
    bookCol.id = book.id;
    bookCol.className = "col-lg-3 col-sm-6 card-group";

    const bookCard = document.createElement("div");
    bookCard.className =
      "card shadow border-start  border  border-5 border-primary-subtle";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "d-flex justify-content-evenly mt-3";
    const deleteButton = document.createElement("button");
    deleteButton.className =
      "btn btn-outline-dark deleteButton rounded rounded-circle";
    deleteButton.textContent = "❌";
    deleteButton.id = "deleteButton";
    const editButton = document.createElement("button");
    editButton.className =
      "btn btn-outline-warning editBtn rounded rounded-circle";
    editButton.id = "editButton";
    const lovedButton = document.createElement("button");
    lovedButton.className =
      "btn btn-outline-danger lovedBtn rounded rounded-circle";
    lovedButton.id = "lovedButton";
    lovedButton.textContent = "❤️";
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#myModal");
    editButton.textContent = "✏️";

    const bookImgContainer = document.createElement("div");
    bookImgContainer.className =
      "h-50 rounded rounded-3  d-flex justify-content-center mt-2";
    const bookImg = document.createElement("img");
    bookImg.className = "card-img-top img-fluid h-100 w-75 p-2";
    bookImg.setAttribute("src", book.url);
    bookImg.setAttribute("alt", book.name);
    bookImgContainer.appendChild(bookImg);

    const bookBody = document.createElement("div");
    bookBody.className =
      "card-body  text-start bg-light rounded rounded-2 fs-6 border-dark";

    const cardBodyItems = `
    <h5 class="card-title"> <span class="fw-bold">name: </span>  ${book.name}  </h5>
    <h5 class="card-title"><span class="fw-bold">author: </span>  ${book.author}</h5>
    <h5 class="card-title"><span class="fw-bold">type: </span>${book.type} </h5>
    <h5 class="card-title"><span class="fw-bold">time :</span>${book.date} </h5>
  `;

    bookBody.innerHTML = cardBodyItems;

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(lovedButton);

    bookCard.appendChild(buttonContainer);
    bookCard.appendChild(bookImgContainer);
    bookCard.appendChild(bookBody);

    bookCol.appendChild(bookCard);
    bookList.appendChild(bookCol);
  }
};

UI.prototype.alertMessage = function (message) {
  alert(message);
};

UI.prototype.clearForm = function () {
  bookUrl.value = "";
  bookName.value = "";
  bookType.value = "";
  bookDate.value = "";
  bookAuthor.value = "";
};

UI.prototype.showBooks = function (books) {
  bookList.innerHTML = "";

  // books.forEach(function (book) {
  //   ui.addBook(book);
  // });
  const searchValue = bookSearch.value.trim().toLowerCase();
  const selectedGenres = Array.from(
    document.querySelectorAll(".form-check-input:checked")
  ).map((category) => category.value);
  const selectedAuthor = bookAuthorFilter.value.toLowerCase();

  if (selectedGenres.length === 0 && selectedAuthor === "All" && !searchValue) {
    books.forEach(function (book) {
      ui.addBook(book);
    });
  } else {
    books.forEach(function (book) {
      const bookType = book.type;
      const bookAuthor = book.author.toLowerCase();
      const bookName = book.name.toLowerCase();

      if (
        (selectedGenres.length === 0 || selectedGenres.includes(bookType)) &&
        (selectedAuthor === "all" || bookAuthor === selectedAuthor) &&
        (!searchValue ||
          bookName.includes(searchValue) ||
          bookAuthor.includes(searchValue))
      ) {
        ui.addBook(book);
      }
    });
  }
};
