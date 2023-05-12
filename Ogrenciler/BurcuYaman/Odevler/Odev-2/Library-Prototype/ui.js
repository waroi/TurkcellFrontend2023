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


UI.prototype.displayMessages = function (modalname) {
    let warningModal = new bootstrap.Modal(document.getElementById(modalname));
    warningModal.show();
};



UI.prototype.deleteBookFromUI = function (element) {
    element.parentElement.parentElement.parentElement.remove();

};

// UI.prototype.editBookUI = function (e) {

//     let editingModal = new bootstrap.Modal(document.getElementById('editBookModal'));
//     editingModal.show();

//     const name = document.getElementById('editbooknameinput');
//     const author = document.getElementById('editbookauthorinput');
//     const category = document.getElementById('editbookcategoryinput');
//     const date = document.getElementById('editdatepublicationinput');
//     const url = document.getElementById('editurlinput');


//     name.value = e.target.parentElement.parentElement.children[0].textContent;
//     author.value = e.target.parentElement.parentElement.children[1].textContent;
//     category.value = e.target.parentElement.parentElement.children[2].textContent;
//     date.value = e.target.parentElement.parentElement.children[3].textContent;
//     url.value = e.target.parentElement.parentElement.parentElement.children[0].src;

//     const saveChanges = document.getElementById('saveChanges');
//     saveChanges.addEventListener('click', function () {
//         const newBook = new Book(name.value, author.value, category.value, date.value, url.value);
//         ui.addBookToUI(newBook);
//         storage.addBookToStorage(newBook);
//         ui.displayMessages("successadded");
//         ui.deleteBookFromUI(e.target);
//         storage.deleteBookFromStorage(e.target.parentElement.parentElement.children[0].textContent);
//         editingModal.hide();


//     });



// }

