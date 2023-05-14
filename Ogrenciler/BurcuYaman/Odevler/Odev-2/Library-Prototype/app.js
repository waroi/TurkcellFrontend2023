const bookList = document.getElementById('booklist');
const modalEl = document.querySelector('#addNewBookModal');
const addLibraryButton = modalEl.querySelector('#addLibraryButton');
const searchButton = document.querySelector('#searchInputButton');
const searchInput = document.querySelector('#searchInput');
const sortAz = document.querySelector('#sortAz');
const sortZa = document.querySelector('#sortZa');
const sortLatest = document.querySelector('#sortLatest');
const sortOldest = document.querySelector('#sortOldest');
const filterauthor = document.querySelector('#filterauthor');
const filterbooksbutton = document.querySelector('#filterbooksbutton');
const modalFilter = document.querySelector('#filterModal');




const ui = new UI();
const storage = new LStorage();

eventListeners();

function eventListeners() {
    modalEl.addEventListener('shown.bs.modal', function () {
        // Modal açıldığında çalışacak kodlar
        addLibraryButton.addEventListener('click', addNewBook); // Modal butonuna event listener ekleme
    });
    modalFilter.addEventListener('shown.bs.modal', filterBook2)
    // modalFilter.addEventListener('shown.bs.modal', filteredCategory)
    // {
    //     // Modal açıldığında çalışacak kodlar
    //     const checkboxes = document.querySelectorAll('.authorcheckbox');
    //     const filteredAuthor = [];
    //     checkboxes.forEach(function (checkbox) {
    //         checkbox.addEventListener('change', function () {
    //             if (this.checked) {
    //                 filteredAuthor.push(this.id);
    //                 console.log(filteredAuthor);
    //             }
    //         });
    //     });


    //     filterbooksbutton.addEventListener('click', filterAuthor);

    // });
    // modalEl.addEventListener('hidden.bs.modal', function () {
    //     // Modal kapatıldığında çalışacak kodlar
    //     addLibraryButton.removeEventListener('click', addNewBook); // Modal butonundan event listener kaldırma
    // });
    bookList.addEventListener('click', deleteBook);
    bookList.addEventListener('click', updateBook);
    document.addEventListener('DOMContentLoaded', starterCond);
    searchInput.addEventListener('keyup', searchBook);
    sortAz.addEventListener('click', sortBookAz);
    sortZa.addEventListener('click', sortBookZa);
    sortLatest.addEventListener('click', sortBookLatest);
    sortOldest.addEventListener('click', sortBookOldest);
    filterbooksbutton.addEventListener('click', filterBook2);




}

function starterCond() {
    if (storage.getBooksFromStorage().length === 0) {
        console.log('localstorage empty');
        storage.addBookToStorage(
            new Book(
                'Otomatik Portakal ',
                'Anthony Burgess',
                'Roman',
                '2010-07-24',
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
                'Seker Portakalı',
                'Jose Mauro De Vasconcelos ',
                'Şiir',
                '2010-07-26',
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

function checkedAuthor(e) {
    const authorCheckboxes = document.querySelectorAll("authorcheckbox");
    console.log(authorCheckboxes);
}




// function filterAuthor(e) {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//     console.log(checkboxes);

//     const selectedAuthors = [];
//     const authorCheckboxes = document.querySelectorAll("authorcheckbox");

//     authorCheckboxes.forEach(function (checkbox) {
//         if (checkbox.checked) {
//             selectedAuthors.push(checkbox.value);
//         }
//     });
//     console.log(selectedAuthors);
//     // const books = storage.getBooksFromStorage();

//     // const filteredBooks = books.filter(function (book) {
//     //     return selectedAuthors.includes(book.author);
//     // });

//     // ui.filterAuthor(filteredBooks);
// }

function filterBook2() {
    const checkboxes = document.querySelectorAll('.authorcheckbox');
    const filteredAuthor = [];
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                filteredAuthor.push(this.id);
                console.log(filteredAuthor);
            }
        });
    });

    const checkboxes2 = document.querySelectorAll('.categorycheckbox');
    const filteredCategory = [];
    checkboxes2.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                filteredCategory.push(this.id);
                console.log(filteredCategory);

            }
        });
    });

}

// function filteredAuthor() {
//     //sçilen yazarların dizisi
//     const checkboxes = document.querySelectorAll('.authorcheckbox');
//     const filteredAuthor = [];
//     checkboxes.forEach(function (checkbox) {
//         checkbox.addEventListener('change', function () {
//             if (this.checked) {
//                 filteredAuthor.push(this.id);
//                 console.log(filteredAuthor);
//             }
//         });
//     });
//     console.log(filteredAuthor);
//     return filteredAuthor;
//     // ui.filterAuthor(filteredAuthor);
// }

// function filteredCategory() {
//     //sçilen kategorilerin dizisi
//     const checkboxes = document.querySelectorAll('.categorycheckbox');
//     const filteredCategory = [];
//     checkboxes.forEach(function (checkbox) {
//         checkbox.addEventListener('change', function () {
//             if (this.checked) {
//                 filteredCategory.push(this.id);
//                 console.log(filteredCategory);
//             }
//         });
//     });
//     console.log(filteredCategory);
//     return filteredCategory;
//     // ui.filterAuthor(filteredAuthor);
// }

// function filterBook() {

// }