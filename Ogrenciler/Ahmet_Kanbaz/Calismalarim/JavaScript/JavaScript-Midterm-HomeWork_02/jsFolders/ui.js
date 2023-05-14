function UI() {}

UI.prototype.alertMessage = function(message) {
  alert(message);
}

UI.prototype.clearModalForm = function() {
  updateBookButton.style.display = 'none';
  bookCreateButton.style.display= 'block';
  bookName.value = '';
  bookAuthor.value = '';
  bookCategory.value = '';
  bookDate.value = '';
  bookImageUrl.value = '';
}

UI.prototype.addBookToUI = function(book) {
  const bookCol = document.createElement('div');
  bookCol.id = book.id;
  bookCol.className = 'col-md-4 col-sm-6 mb-3';
  const bookCard = document.createElement('div');
  bookCard.className = 'card shadow border-0';
  const bookCardRow = `
  <div class="row">
    <div class="col-6">
      <img src=${book.imageUrl} alt=${book.name}
        class="cardImage img-fluid rounded">
    </div>
    <div class="col-6 ps-0">
      <div class="card-body ps-0 pt-3">
        <h6 class="card-title text-center mb-3 text-truncate getAllBooks">${book.name}</h6>
        <span class="card-text bg-danger rounded px-2 py-1">${book.category}</span>
        <p class="card-text fst-italic fw-bolder text-end mt-3 mb-2">${book.date}</p>
        <p class="border-top mb-0 text-center pt-2 text-truncate getAllDirectors">${book.author}</p>
        <div class="d-flex justify-content-around pt-2 cardIcon">
          <a href="#" data-bs-toggle="modal" data-bs-target="#addBookModal"><span class="fa-solid fa-pen"></span></a>
          <a href="#"><span class="fa-solid fa-trash"></span></a>
        </div>
      </div>
    </div>
  </div>
  `;
  bookCard.innerHTML = bookCardRow;
  bookCol.appendChild(bookCard);
  bookList.appendChild(bookCol);
}

UI.prototype.deleteBookFromUI = function(deleteBook) {
  deleteBook.remove();
}

UI.prototype.toastMessage = function(message) {
  const date = new Date();
  const toastBody = `<div class="toast-header">
  <strong class="me-auto">BookStore</strong>
    <small>${date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${message}
  </div>`;
  toast.innerHTML = toastBody;
  const toastMessage = new bootstrap.Toast(toast);
  toastMessage.show();
}

UI.prototype.updateDisplay = function(books) {
    bookList.innerHTML = '';
    books.map((book) => ui.addBookToUI(book));
}

UI.prototype.updateBook2UI = function(updateBook) {
  bookName.value = updateBook.name;
  bookAuthor.value = updateBook.author;
  bookCategory.value = updateBook.category;
  bookDate.value = updateBook.date;
  bookImageUrl.value = updateBook.imageUrl;
  updateBookButton.addEventListener('click', function(e) {
    const books = storage.getBooksFromLocalStorage();
    const updateBookId = updateBook.id;
    books.map((book) => {
      if (book.id == updateBookId) {
        book.name = bookName.value;
        book.author = bookAuthor.value;
        book.category = bookCategory.value;
        book.date = bookDate.value;
        book.imageUrl = bookImageUrl.value;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    ui.toastMessage('Kitap Başarılı Bir Şekilde Güncellendi.');
    location.reload();
    e.preventDefault();
  });
}

UI.prototype.searchBook2UI = function(getAllBooksName, getAllDirectors, searchWord) {
  for(let i = 0; i < getAllBooksName.length; i++) {
    const bookCard = getAllBooksName[i].parentElement.parentElement.parentElement.parentElement.parentElement;
    const bookNames = getAllBooksName[i].innerHTML.toLowerCase();
    const directorNames = getAllDirectors[i].innerHTML.toLowerCase();
    if(bookNames.indexOf(searchWord) > -1 || directorNames.indexOf(searchWord) > -1) {
      bookCard.style.display = 'block';
    }
    else {
      bookCard.style.display = 'none';
    }
  }
}

UI.prototype.sortBook2UI = function(dropDownValue) {
  const books = storage.getBooksFromLocalStorage();
  function sortBooksWithName(a, b) {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return;
  }
  
  function sortBooksWithDate(a, b) {
    let x = a.date;
    let y = b.date;
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return;
  }
  if(dropDownValue === 'A - Z') books.sort(sortBooksWithName);
  else if(dropDownValue === 'Z - A') books.sort(sortBooksWithName).reverse();
  else if(dropDownValue === 'Eskiden Yeniye') books.sort(sortBooksWithDate);
  else if(dropDownValue === 'Yeniden Eskiye') books.sort(sortBooksWithDate).reverse();
  ui.updateDisplay(books);
}

UI.prototype.addCategories2UI = function(books) {
  const myCategoriesSet = new Set(books.map((book) => book.category));
  ui.addCategoriesAndAuthor2UI4ListGroup(categoryDropDown, categories, myCategoriesSet);
  const myAuthorSet = new Set(books.map((book) => book.author));
  ui.addCategoriesAndAuthor2UI4ListGroup(directorDropDown, directors, myAuthorSet);
}

UI.prototype.addCategoriesAndAuthor2UI4ListGroup = function(dropDown, listGroup, tempSet) {
  dropDown.innerHTML = '';
  listGroup.innerHTML = '';
  const tempArray4ListGroup = [];
  const tempArray4DropDown = [];
  tempArray4ListGroup.push(tempSet);
  tempArray4DropDown.push(tempSet);
  Array.from(tempArray4ListGroup[0]).sort().map((typeCategory) => {
    const listGroupItem = document.createElement('a');
    listGroupItem.className = 'list-group-item list-group-item-action';
    listGroupItem.setAttribute('href', '#');
    listGroupItem.value = typeCategory;
    listGroupItem.innerHTML = typeCategory;
    listGroup.appendChild(listGroupItem);
    const dropDownItem = document.createElement('li');
    const dropDownItemLink = document.createElement('a');
    dropDownItemLink.className = 'dropdown-item';
    dropDownItemLink.setAttribute('href', '#');
    dropDownItemLink.value = typeCategory;
    dropDownItemLink.innerHTML = typeCategory;
    dropDownItem.appendChild(dropDownItemLink);
    dropDown.appendChild(dropDownItem);
  }
  );
}

UI.prototype.listOfSameCategoriesBooks = function(e) {
  const books = storage.getBooksFromLocalStorage();
  const categoryName = e.target.value;
  const filteredBooks = books.filter((book) => book.category === categoryName);
  ui.updateDisplay(filteredBooks);
  e.preventDefault();
}

UI.prototype.listOfDirectorBooks = function(e) {
  const books = storage.getBooksFromLocalStorage();
  const directorName4Books = e.target.value;
  const filteredBooks = books.filter((book) => book.author === directorName4Books);
  ui.updateDisplay(filteredBooks);
  e.preventDefault();
}