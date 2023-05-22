const storage = new LocalStorage();
const ui = new UI();
const book = new Book();

const [
    bookName,
    bookAuthor,
    bookCategory,
    bookDate,
    bookCoverPageUrl,
    bookForm,
    bookList,
    deleteAllBooks,
    filter,
    toggleForm] = [
        'bookName',
        'bookAuthor',
        'bookCategory',
        'bookDate',
        'bookCoverPageUrl',
        'book-form',
        'books',
        'delete-all-books',
        'filter',
        'toggle-form'
    ].map(id => document.getElementById(id));

// Modal Form Elements
const [
    modalBookName,
    modalBookAuthor,
    modalBookCategory,
    modalBookDate,
    modalBookCoverPageUrl,
    modalSaveChanges,
    modal] = [
        'modal-bookName',
        'modal-bookAuthor',
        'modal-bookCategory',
        'modal-bookDate',
        'modal-bookCoverPageUrl',
        'modal-edit-book',
        'exampleModal'
    ].map(id => document.getElementById(id));

// Table Column Elements
const [
    columnID,
    columnBookName,
    columnAuthor,
    columnCategory,
    columnDate] = [
        'column-id',
        'column-name',
        'column-author',
        'column-category',
        'column-date'
    ].map(id => document.getElementById(id));


const [filterByAuthor, filterByCategory] = [
    'filter-author',
    'filter-category'
].map(id => document.getElementById(id));


// Event Listeners
eventListeners();

function eventListeners() {
    bookForm.addEventListener('submit', addBook);
    deleteAllBooks.addEventListener('click', clearAllBooks);
    document.addEventListener('DOMContentLoaded', showAllBooks);

    filter.addEventListener('keyup', function (e) {
        ui.searchBooks(e);
    });

    toggleForm.addEventListener('click', function () {
        ui.toggleForm();
    });

    modalSaveChanges.addEventListener('click', function (e) {
        book.saveChanges(e);
    });

    columnID.addEventListener('click', function () {
        ui.sortBooksByID();
    });

    columnBookName.addEventListener('click', function () {
        ui.sortBooksByName();
    });

    columnAuthor.addEventListener('click', function () {
        ui.sortBooksByAuthor();
    });

    columnCategory.addEventListener('click', function () {
        ui.sortBooksByCategory();
    });

    columnDate.addEventListener('click', function () {
        ui.sortBooksByDate();
    });

    // filter by author when value changed
    filterByAuthor.addEventListener('change', function (e) {
        ui.filterBooks(filterByAuthor.value, filterByCategory.value);
    } );

    // filter by category when value changed
    filterByCategory.addEventListener('change', function (e) {
        ui.filterBooks(filterByAuthor.value, filterByCategory.value);
    });
}

// Functions
function addBook(e) {
    book.addBook(e);
    resetFilter();
}

function deleteBook(e) {
    book.deleteBook(e);
    resetFilter();
}

function clearAllBooks(e) {
    book.clearAllBooks(e);
    resetFilter();
}

function previewBook(e) {
    book.previewBook(e);
}

function editBook(e) {
    book.editBook(e);
    resetFilter();
}

function showAllBooks() {
    storage.showAllBooksFromLocalStorage();
}

function resetFilter() {
    filterByAuthor.value = 'all';
    filterByCategory.value = 'all';
    ui.filterBooks(filterByAuthor.value, filterByCategory.value);
}

// Seed Data
const book1 = new Book(1, 'The Alchemist', 'Paulo Coelho', 'Adventure', '1988', 'https://books.google.com.tr/books/publisher/content?id=PIEyCgAAQBAJ&hl=tr&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0FAiU6SihRsZ_dr2fi-HxHmgh6Yg&w=1280');
const book2 = new Book(2, 'The Kite Runner', 'Khaled Hosseini', 'Fiction', '2003', 'https://img.kitapyurdu.com/v1/getImage/fn:126812/wh:true/wi:800');

// if don't have any book in local storage, add seed data

document.addEventListener('DOMContentLoaded', function () {
    const books = storage.getBooksFromLocalStorage();
    if (books.length === 0) {
        storage.addBookToLocalStorage(book1);
        storage.addBookToLocalStorage(book2);

        ui.addBookToUI(book1);
        ui.addBookToUI(book2);
    }

    ui.toggleForm();

    // add options to filter by author
    fetchOptionsFilterByAuthor();
});

function fetchOptionsFilterByAuthor() {
    const books = storage.getBooksFromLocalStorage();
    const authors = books.map(function (book) {
        return book.author;
    });

    const uniqueAuthors = [...new Set(authors)];

    filterByAuthor.innerHTML = '';
    filterByAuthor.innerHTML = '<option value="all">All</option>';
    uniqueAuthors.map(function (author) {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        filterByAuthor.appendChild(option);
    }
    );
}

