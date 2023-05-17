function UI() {}

UI.prototype.addBookToUI = function (newBook) {
  const bookList = document.getElementById("books");
  bookList.innerHTML += `
    <tr class="book">
        <td><img src="${newBook.bookURL}" class="img-fluid img-thumbnail"></td>
        <td>${newBook.bookName}</td>
        <td class="author">${newBook.bookAuthor}</td>
        <td>${newBook.bookDate}</td>
        <td class="category">${newBook.bookCategory}</td>
        <td><a href="#" id = "delete-book" class = "btn btn-danger">Kitabı Sil</a></td>
        <td><a href="#" id = "edit-book" class = "btn btn-info" data-toggle="modal" data-target="#myModal">Kitabı Düzenle</a></td>
    </tr>
    `;
};

UI.prototype.clearInputs = function () {
  bookName.value = "";
  bookCoverUrl.value = "";
  bookCategory.value = "";
  bookAuthor.value = "";
  bookDate.value = "";
};

UI.prototype.displayMessages = function (message, type) {
  const cardbody = document.querySelector(".card-body");
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  cardbody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 2000);
};

UI.prototype.loadAllBooks = function (books) {
  const bookList = document.getElementById("books");
  books.forEach(function (book) {
    bookList.innerHTML += ` <tr class="book">
        <td><img src="${book.bookURL}" class="img-fluid img-thumbnail"></td>
        <td>${book.bookName}</td>
        <td class="author">${book.bookAuthor}</td>
        <td>${book.bookDate}</td>
        <td class="category">${book.bookCategory}</td>
        <td><a href="" id = "delete-book" class = "btn btn-danger">Kitabı Sil</a></td>
        <td><a href="" id = "edit-book" class = "btn btn-info" data-toggle="modal" data-target="#myModal">Kitabı Düzenle</a></td>
    </tr>`;
  });
};


UI.prototype.deleteBookFromUI = function (element) {
  element.parentElement.parentElement.remove();
};

UI.prototype.clearAllBooksFromUI = function () {
  const bookList = document.getElementById("books");
  while (bookList.firstElementChild !== null) {
    bookList.firstElementChild.remove();
  }
};

UI.prototype.editBookUI = function () {
  modalFooter.children[1].remove();
  let changeButton = `<button type="submit" class="btn btn-primary" id="changeButton">Değiştir</button>`
  modalFooter.innerHTML += changeButton;
  let changeButtonDOM = document.getElementById("changeButton");
  changeButtonDOM.addEventListener("click", storage.editStoredBook);
}



