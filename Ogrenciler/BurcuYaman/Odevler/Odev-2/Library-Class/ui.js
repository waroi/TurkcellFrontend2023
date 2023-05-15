class UI {
  static addBookToUI(newBook) {
    const bookList = document.getElementById('booklist');
    const filterauthor = document.getElementById('filterauthor');
    const filtercategory = document.getElementById('filtercategory');

    bookList.innerHTML += `
      <div class="col-md-3">
      <div class="card my-3 bg-transparent">
        <img
          src="${newBook.url}"
          class="card-img-top p-5"
          alt="..."
        />
        <div class="card-body ">
          <h5 class="card-title fs-5 fw-bold" id="name">${newBook.name}</h5>
          <h6 class="card-title" id="author">${newBook.author}</h6>
          <a href="#" class="btn btn-primary btn-sm my-2 text-light" id="category"
            >${newBook.category}</a
          >
          <p class="card-text" id="date">${newBook.date}</p>
          <div class="justify-content-end d-flex gap-4">
            <a href="#" class="btn btn-success" id="editButton"
              >Edit</a
            >
            <a
              href="#"
              class="btn btn-danger text-end"
              id="deleteButton"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>
      `;

    if (!filterauthor.innerHTML.includes(newBook.author)) {
      filterauthor.innerHTML += `
    <div class="form-check ">
                        <input
                          class="form-check-input authorcheckbox"
                          type="checkbox"
                          value=""
                          id="${newBook.author}"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                        ${newBook.author}
                        </label>
                      </div>
    `;
    }
    if (!filtercategory.innerHTML.includes(newBook.category)) {
      filtercategory.innerHTML += ` <div class="form-check ">
    <input
      class="form-check-input categorycheckbox "
      type="checkbox"
      value=""
      id="${newBook.category}"
    />
    <label class="form-check-label" for="flexCheckDefault">
    ${newBook.category}
    </label>
  </div>
  `;
    }

  }

  static clearInputs(element1, element2, element3, element4, element5) {
    element1.value = '';
    element2.value = '';
    element3.value = '';
    element4.value = '';
    element5.value = '';
  }

  static showAlert(message, type) {
    const alert = document.getElementById('alert');
    alert.innerHTML += ` 
    <div class="alert text-center alert-${type}" role="alert">
    ${message}
  </div>
    `;
    setTimeout(function () {
      alert.innerHTML = '';
    }
      , 2000);
  }

  static deleteBookFromUI(element) {
    element.parentElement.parentElement.parentElement.parentElement.remove();
  }

  static deleteAllBooksFromUI() {
    const bookList = document.getElementById('booklist');
    bookList.innerHTML = '';
  }
  static updateBookFromUI(element) {
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
      LStorage.updateBookFromStorage(oldBook, newBook);
      UI.showAlert('Book successfully updated!', 'danger');
    });
  }

  static searchBook(searchValue) {
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
    })
  }

  static sortBookAz(bookNames) {
    UI.deleteAllBooksFromUI();

    const books = LStorage.getBooksFromStorage();

    bookNames.forEach(function (bookName) {
      books.forEach(function (book) {
        if (book.name.toLowerCase() == bookName) {
          UI.addBookToUI(book);
        }
      })
    })

  }

  static sortBookDates(bookDates) {
    UI.deleteAllBooksFromUI();
    console.log(bookDates);

    const books = LStorage.getBooksFromStorage();

    bookDates.forEach(function (bookDate) {
      books.forEach(function (book) {
        let booksInUI = document.getElementById('booklist');
        if (book.date == bookDate && booksInUI.innerHTML.indexOf(book.name) == -1) {
          UI.addBookToUI(book);
        }
      })
    })
  }

  static filterBooks(filteredBooksWithAuthor, filteredBooksWithCategory) {
    UI.deleteAllBooksFromUI();
    console.log(filteredBooksWithAuthor);
    console.log(filteredBooksWithCategory);

    const books = LStorage.getBooksFromStorage();

    filteredBooksWithAuthor.forEach(function (filter) {
      books.forEach(function (book) {
        let booksInUI = document.getElementById('booklist');
        if (book.author == filter.author) {
          if (booksInUI.innerHTML.indexOf(book.name) == -1) {
            UI.addBookToUI(book);
          }

        }
      })
    })

    filteredBooksWithCategory.forEach(function (filter) {

      books.forEach(function (book) {
        let booksInUI = document.getElementById('booklist');
        if (book.category == filter.category) {
          if (booksInUI.innerHTML.indexOf(book.name) == -1) {
            UI.addBookToUI(book);
          }
        }
      })
    })
  }
}