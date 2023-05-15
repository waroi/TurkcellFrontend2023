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
    if (LStorage.getBooksFromStorage().length === 0) {
        LStorage.addBookToStorage(
            new Book(
                'Otomatik Portakal ',
                'Anthony Burgess',
                'History',
                '2010-07-24',
                'https://i.dr.com.tr/cache/500x400-0/originals/0000000064031-1.jpg'

            )
        );
        LStorage.addBookToStorage(
            new Book(
                'Hayvan Çiftliği',
                'George Orwell',
                'Poetry',
                '2010-07-25',
                'https://i.dr.com.tr/cache/500x400-0/originals/0000000064031-1.jpg'
            )
        );
        LStorage.addBookToStorage(
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
    let books = LStorage.getBooksFromStorage();
    books.forEach(function (book) {
        UI.addBookToUI(book);
    });
}

function addNewBook(e) {
    const name = document.getElementById('booknameinput').value;
    const author = document.getElementById('bookauthorinput').value;
    const category = document.getElementById('bookcategoryinput').value;
    const date = document.getElementById('datepublicationinput').value;
    const url = document.getElementById('urlinput').value;

    if (name === '' || author === '' || category === '' || date === '' || url === '') {
        UI.showAlert('Please fill in all fields!', 'danger');

    } else {
        const newBook = new Book(name, author, category, date, url);
        UI.addBookToUI(newBook);
        LStorage.addBookToStorage(newBook);
        UI.showAlert('Book successfully added!', 'danger');

        UI.clearInputs(document.getElementById('booknameinput'), document.getElementById('bookauthorinput'), document.getElementById('bookcategoryinput'), document.getElementById('datepublicationinput'), document.getElementById('urlinput'));

        let addingModal = bootstrap.Modal.getInstance(document.getElementById('addNewBookModal'));
        addingModal.hide();
    }
    e.preventDefault();
}

function deleteBook(e) {
    if (e.target.id === 'deleteButton') {
        UI.deleteBookFromUI(e.target);
        LStorage.deleteBookFromStorage(e.target.parentElement.parentElement.children[0].textContent);
        UI.showAlert('Book successfully deleted!', 'danger');
    }
}

function updateBook(e) {
    if (e.target.id === 'editButton') {
        UI.updateBookFromUI(e);
    }

}

function searchBook(e) {
    const searchValue = e.target.value.toLowerCase();
    UI.searchBook(searchValue);
}

function sortBookAz(e) {

    const books = LStorage.getBooksFromStorage();
    const bookNames = books.map(function (book) {
        return book.name.toLowerCase();
    }
    );

    bookNames.sort();
    UI.sortBookAz(bookNames);

}

function sortBookZa(e) {
    const books = LStorage.getBooksFromStorage();
    const bookNames = books.map(function (book) {
        return book.name.toLowerCase();
    }
    );

    bookNames.sort().reverse();
    UI.sortBookAz(bookNames);

}

function sortBookLatest(e) {
    const books = LStorage.getBooksFromStorage();
    const bookDates = books.map(function (book) {
        return book.date;
    }
    );

    bookDates.sort().reverse();
    UI.sortBookDates(bookDates);

}

function sortBookOldest(e) {
    const books = LStorage.getBooksFromStorage();
    const bookDates = books.map(function (book) {
        return book.date;
    }
    );
    console.log(bookDates);
    bookDates.sort();
    UI.sortBookDates(bookDates);

}

function filterBooks() {

    const checkboxAuthor = document.querySelectorAll('input[type="checkbox"].authorcheckbox');
    const checkboxCategory = document.querySelectorAll('input[type="checkbox"].categorycheckbox');

    const selectedAuthors = [];
    const selectedCategory = [];

    checkboxAuthor.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedAuthors.push(checkbox.id);
            // console.log(selectedAuthors);
        }
    });

    checkboxCategory.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedCategory.push(checkbox.id);
            // console.log(selectedCategory);
        }
    });

    const books = LStorage.getBooksFromStorage();

    const filteredBooksWithAuthor = books.filter(function (book) {
        return selectedAuthors.includes(book.author);
    });

    const filteredBooksWithCategory = books.filter(function (book) {
        return selectedCategory.includes(book.category);
    });

    UI.filterBooks(filteredBooksWithAuthor, filteredBooksWithCategory);

    let modalFilter = bootstrap.Modal.getInstance(document.getElementById('filterModal'));
    modalFilter.hide();

}
