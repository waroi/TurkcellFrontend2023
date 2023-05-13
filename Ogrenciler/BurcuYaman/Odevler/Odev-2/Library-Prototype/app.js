const bookList = document.getElementById('booklist');
const modalEl = document.querySelector('#addNewBookModal');
const addLibraryButton = modalEl.querySelector('#addLibraryButton');
const searchButton = document.querySelector('#searchInputButton');
const searchInput = document.querySelector('#searchInput');

const ui = new UI();
const storage = new LStorage();

eventListeners();

function eventListeners() {
    modalEl.addEventListener('shown.bs.modal', function () {
        // Modal açıldığında çalışacak kodlar
        addLibraryButton.addEventListener('click', addNewBook); // Modal butonuna event listener ekleme
    });
    // modalEl.addEventListener('hidden.bs.modal', function () {
    //     // Modal kapatıldığında çalışacak kodlar
    //     addLibraryButton.removeEventListener('click', addNewBook); // Modal butonundan event listener kaldırma
    // });
    bookList.addEventListener('click', deleteBook);
    bookList.addEventListener('click', updateBook);
    document.addEventListener('DOMContentLoaded', starterCond);
    searchInput.addEventListener('keyup', searchBook);

}

function starterCond() {
    if (storage.getBooksFromStorage().length === 0) {
        console.log('localstorage empty');
        storage.addBookToStorage(
            new Book(
                'Otomatik Portakal ',
                'Anthony Burgess',
                'Roman',
                '2010-07-25',
                'https://i.dr.com.tr/cache/500x400-0/originals/0000000064031-1.jpg'

            )
        );
        storage.addBookToStorage(
            new Book(
                'Hayvan Çiftliği',
                'George Orwell',
                'Hikaye',
                '2010-07-25',
                'https://i.dr.com.tr/cache/500x400-0/originals/0000000064031-1.jpg'
            )
        );
        storage.addBookToStorage(
            new Book(
                'Şeker Portakalı',
                'Jose Mauro De Vasconcelos ',
                'Şiir',
                '2010-07-25',
                'https://i.dr.com.tr/cache/500x400-0/originals/0000000064031-1.jpg'
            )
        );
        showBooks();
    } else {
        showBooks();
    }

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
        ui.displayMessages("warningModal");

    } else {
        const newBook = new Book(name, author, category, date, url);
        ui.addBookToUI(newBook);
        storage.addBookToStorage(newBook);
        ui.displayMessages("successadded");

        //modaldaki inputları temizleme işlemi
        ui.clearInputs(document.getElementById('booknameinput'), document.getElementById('bookauthorinput'), document.getElementById('bookcategoryinput'), document.getElementById('datepublicationinput'), document.getElementById('urlinput'));

        // burada modalın kapatılmasını sağlayan kodu yazdım
        let addingModal = bootstrap.Modal.getInstance(document.getElementById('addNewBookModal'));
        addingModal.hide();
    }
    e.preventDefault();
}

function deleteBook(e) {
    if (e.target.id === 'deleteButton') {
        ui.deleteBookFromUI(e.target);
        storage.deleteBookFromStorage(e.target.parentElement.parentElement.children[0].textContent);
        ui.displayMessages('successdeleted');
    }
}

function updateBook(e) {
    if (e.target.id === 'editButton') {
        ui.updateBookFromUI(e);
        storage.updateBookFromStorage(e.target.parentElement.parentElement.children[0].textContent);
    }

}

function searchBook(e) {
    const searchValue = e.target.value.toLowerCase();
    ui.searchBook(searchValue);

}