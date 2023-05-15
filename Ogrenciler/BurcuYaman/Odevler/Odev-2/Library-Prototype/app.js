const bookList = document.getElementById('booklist');
const modalEl = document.querySelector('#addNewBookModal');
const addLibraryButton = modalEl.querySelector('#addLibraryButton');
const searchInput = document.querySelector('#searchInput');
const sortAz = document.querySelector('#sortAz');
const sortZa = document.querySelector('#sortZa');
const sortLatest = document.querySelector('#sortLatest');
const sortOldest = document.querySelector('#sortOldest');
const filterauthor = document.querySelector('#filterauthor');
const filterbooksbutton = document.querySelector('#filterbooksbutton');
const modalFilter = document.querySelector('#filterModal');
const authorcheckbox = document.querySelector('.authorcheckbox');
const categorycheckbox = document.querySelector('.categorycheckbox');
const warningModal = document.querySelector('#warningmodal');

const ui = new UI();
const storage = new LStorage();

eventListeners();

function eventListeners() {
    modalEl.addEventListener('shown.bs.modal', function () {
        addLibraryButton.addEventListener('click', addNewBook); // Modal butonuna event listener ekleme
    });
    modalFilter.addEventListener('shown.bs.modal', function () {
        filterbooksbutton.addEventListener('click', filterBooks);
    });

    bookList.addEventListener('click', deleteBook);
    bookList.addEventListener('click', updateBook);
    document.addEventListener('DOMContentLoaded', starterCond);
    searchInput.addEventListener('keyup', searchBook);
    sortAz.addEventListener('click', sortBookAz);
    sortZa.addEventListener('click', sortBookZa);
    sortLatest.addEventListener('click', sortBookLatest);
    sortOldest.addEventListener('click', sortBookOldest);
}

function starterCond() {
    if (storage.getBooksFromStorage().length === 0) {
        console.log('localstorage empty');
        storage.addBookToStorage(
            new Book(
                'Otomatik Portakal ',
                'Anthony Burgess',
                'History',
                '2010-07-24',
                'https://i.dr.com.tr/cache/500x400-0/originals/0000000064031-1.jpg'

            )
        );
        storage.addBookToStorage(
            new Book(
                'Hayvan Çiftliği',
                'George Orwell',
                'Poetry',
                '2010-07-25',
                'https://i.dr.com.tr/cache/500x400-0/originals/0000000064031-1.jpg'
            )
        );
        storage.addBookToStorage(
            new Book(
                'Seker Portakalı',
                'Jose Mauro De Vasconcelos ',
                'Academic',
                '2010-07-26',
                'https://i.dr.com.tr/cache/500x400-0/originals/0000000064031-1.jpg'
            )
        );
        showBooks();
    } else {
        showBooks();
    }

    const checkboxes = document.querySelectorAll(' input[type=checkbox');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    }
    );

}

function showBooks() {
    let books = storage.getBooksFromStorage();
    books.forEach(function (book) {
        ui.addBookToUI(book);
    });
}

function addNewBook(e) {
    const name = document.getElementById('booknameinput').value;
    const author = document.getElementById('bookauthorinput').value;
    const category = document.getElementById('bookcategoryinput').value;
    const date = document.getElementById('datepublicationinput').value;
    const url = document.getElementById('urlinput').value;

    if (name === '' || author === '' || category === '' || date === '' || url === '') {
        ui.showAlert('Please fill in all fields!', 'danger');

    } else {
        const newBook = new Book(name, author, category, date, url);
        ui.addBookToUI(newBook);
        storage.addBookToStorage(newBook);
        ui.showAlert('Book successfully added!', 'danger');

        ui.clearInputs(document.getElementById('booknameinput'), document.getElementById('bookauthorinput'), document.getElementById('bookcategoryinput'), document.getElementById('datepublicationinput'), document.getElementById('urlinput'));

        let addingModal = bootstrap.Modal.getInstance(document.getElementById('addNewBookModal'));
        addingModal.hide();
    }
    e.preventDefault();
}

function deleteBook(e) {
    if (e.target.id === 'deleteButton') {
        ui.deleteBookFromUI(e.target);
        storage.deleteBookFromStorage(e.target.parentElement.parentElement.children[0].textContent);
        ui.showAlert('Book successfully deleted!', 'secondary');
    }
}

function updateBook(e) {
    if (e.target.id === 'editButton') {
        ui.updateBookFromUI(e);
    }

}

function searchBook(e) {
    const searchValue = e.target.value.toLowerCase();
    ui.searchBook(searchValue);
}

function sortBookAz(e) {

    const books = storage.getBooksFromStorage();
    const bookNames = books.map(function (book) {
        return book.name.toLowerCase();
    }
    );

    bookNames.sort();
    ui.sortBookAz(bookNames);

}

function sortBookZa(e) {
    const books = storage.getBooksFromStorage();
    const bookNames = books.map(function (book) {
        return book.name.toLowerCase();
    }
    );

    bookNames.sort().reverse();
    ui.sortBookAz(bookNames);

}

function sortBookLatest(e) {
    const books = storage.getBooksFromStorage();
    const bookDates = books.map(function (book) {
        return book.date;
    }
    );

    bookDates.sort().reverse();
    ui.sortBookDates(bookDates);

}

function sortBookOldest(e) {
    const books = storage.getBooksFromStorage();
    const bookDates = books.map(function (book) {
        return book.date;
    }
    );
    console.log(bookDates);
    bookDates.sort();
    ui.sortBookDates(bookDates);

}

function filterBooks() {

    const checkboxAuthor = document.querySelectorAll('input[type="checkbox"].authorcheckbox');
    const checkboxCategory = document.querySelectorAll('input[type="checkbox"].categorycheckbox');

    const selectedAuthors = [];
    const selectedCategory = [];

    checkboxAuthor.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedAuthors.push(checkbox.id);
        }
    });

    checkboxCategory.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedCategory.push(checkbox.id);
        }
    });

    const books = storage.getBooksFromStorage();

    const filteredBooksWithAuthor = books.filter(function (book) {
        return selectedAuthors.includes(book.author);
    });

    const filteredBooksWithCategory = books.filter(function (book) {
        return selectedCategory.includes(book.category);
    });
    const filteredbooks = [];

    if (filteredBooksWithAuthor.length !== 0) {
        filteredBooksWithAuthor.forEach(function (book) {
            if (filteredBooksWithCategory.length !== 0 && filteredBooksWithAuthor.length !== 0 && !filteredbooks.includes(book)) {
                filteredBooksWithCategory.forEach(function (book2) {
                    if (book.category === book2.category && book.author === book2.author) {
                        filteredbooks.push(book);
                    }
                });
            } else if (filteredBooksWithCategory.length === 0 && filteredBooksWithAuthor.length !== 0 && !filteredbooks.includes(book)) {
                filteredbooks.push(book);
            }
        });

    } else if (filteredBooksWithAuthor.length === 0 && filteredBooksWithCategory.length !== 0) {
        filteredBooksWithCategory.forEach(function (book) {
            filteredbooks.push(book);
        });
    } else {
        books.forEach(function (book) {
            filteredbooks.push(book);
        });
    }

    ui.filterBooks(filteredbooks);
    let modalFilter = bootstrap.Modal.getInstance(document.getElementById('filterModal'));
    modalFilter.hide();

}
