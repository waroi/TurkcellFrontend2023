function UI() { }

UI.prototype.addBookToUI = function (newBook) {

  const bookList = document.getElementById('booklist');

  bookList.innerHTML += `
    <div class="col-md-4">
    <div class="card mt-4">
      <img
        src="${newBook.url}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title" id="name">${newBook.name}</h5>
        <h6 class="card-title" id="author">${newBook.author}</h6>
        <a href="#" class="btn btn-primary btn-sm my-2" id="category"
          >${newBook.category}</a
        >
        <p class="card-text" id="date">${newBook.date}</p>
        <div class="justify-content-end d-flex gap-4">
          <a href="#" class="btn btn-outline-success" id="editButton"
            >Edit</a
          >
          <a
            href="#"
            class="btn btn-outline-danger text-end"
            id="deleteButton"
            >Delete</a
          >
        </div>
      </div>
    </div>
  </div>
    `;

};

UI.prototype.clearInputs = function (element1, element2, element3, element4, element5) {
  element1.value = '';
  element2.value = '';
  element3.value = '';
  element4.value = '';
  element5.value = '';
}

//DÜZENLEEEEEEEEEEEEEEEEEEEEEEEEEEEE
UI.prototype.displayMessages = function (modalname) {
  let warningModal = new bootstrap.Modal(document.getElementById(modalname));
  warningModal.show();
};


UI.prototype.deleteBookFromUI = function (element) {
  element.parentElement.parentElement.parentElement.parentElement.remove();
};

UI.prototype.updateBookFromUI = function (element) {
  let editingModal = new bootstrap.Modal(document.getElementById('editBookModal'));
  editingModal.show();

  document.getElementById('editbooknameinput').value = element.target.parentElement.parentElement.children[0].textContent;
  document.getElementById('editbookauthorinput').value = element.target.parentElement.parentElement.children[1].textContent;
  document.getElementById('editbookcategoryinput').value = element.target.parentElement.parentElement.children[2].textContent;
  document.getElementById('editdatepublicationinput').value = element.target.parentElement.parentElement.children[3].textContent;
  document.getElementById('editurlinput').value = element.target.parentElement.parentElement.parentElement.children[0].src;

  const oldBook = new Book(element.target.parentElement.parentElement.children[0].textContent, element.target.parentElement.parentElement.children[1].textContent, element.target.parentElement.parentElement.children[2].textContent, element.target.parentElement.parentElement.children[3].textContent, element.target.parentElement.parentElement.parentElement.children[0].src);

  const saveChanges = document.getElementById('saveChanges');
  saveChanges.addEventListener('click', function () {
    const newBook = new Book();
    newBook.name = document.getElementById('editbooknameinput').value;
    newBook.author = document.getElementById('editbookauthorinput').value;
    newBook.category = document.getElementById('editbookcategoryinput').value;
    newBook.date = document.getElementById('editdatepublicationinput').value;
    newBook.url = document.getElementById('editurlinput').value;

    element.target.parentElement.parentElement.children[0].textContent = document.getElementById('editbooknameinput').value;
    element.target.parentElement.parentElement.children[1].textContent = document.getElementById('editbookauthorinput').value;
    element.target.parentElement.parentElement.children[2].textContent = document.getElementById('editbookcategoryinput').value;
    element.target.parentElement.parentElement.children[3].textContent = document.getElementById('editdatepublicationinput').value;
    element.target.parentElement.parentElement.parentElement.children[0].src = document.getElementById('editurlinput').value;
    editingModal.hide();
    storage.updateBookFromStorage(oldBook, newBook);
    ui.displayMessages('successedited');
  });

}

UI.prototype.searchBook = function (searchValue) {
  const bookList = document.getElementById('booklist');
  const bookListItems = bookList.querySelectorAll('.card-body');
  bookListItems.forEach(function (bookListItem) {
    const text = bookListItem.children[0].textContent.toLowerCase();
    const author = bookListItem.children[1].textContent.toLowerCase();
    if (text.indexOf(searchValue) === -1 && author.indexOf(searchValue) === -1) {
      bookListItem.parentElement.parentElement.setAttribute('style', 'display : none !important');
    } else {
      bookListItem.parentElement.parentElement.setAttribute('style', 'display : block');
    }
  }

  )

}
