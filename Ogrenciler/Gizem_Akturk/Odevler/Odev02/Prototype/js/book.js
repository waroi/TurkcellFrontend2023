function Book(id, name, author, category, date, coverPageUrl) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.category = category;
    this.date = date;
    this.coverPageUrl = coverPageUrl;
}

Book.prototype.addBook = function (e) {
    const id = Date.now();
    const name = bookName.value.trim();
    const author = bookAuthor.value.trim();
    const category = bookCategory.value.trim();
    const date = bookDate.value.trim();
    const coverPageUrl = bookCoverPageUrl.value.trim();


    const book = new Book(id, name, author, category, date, coverPageUrl);
    ui.addBookToUI(book);
    storage.addBookToLocalStorage(book);

    ui.clearInputs();
    fetchOptionsFilterByAuthor();

    // show success alert
    ui.showAlert('success', 'Kitap başarıyla eklendi.');
    e.preventDefault();
}

Book.prototype.editBook = function (e) {
    if (e.target.id === 'edit-book') {
        const bookId = e.target.parentElement.parentElement.id.split('-')[1];
        const book = storage.getBooksFromLocalStorage().find(b => b.id == bookId);
        ui.fillInputs(book);
        
    } else if (e.target.parentElement.id === "edit-book") {
        const bookId = e.target.parentElement.parentElement.parentElement.id.split('-')[1];
        const book = storage.getBooksFromLocalStorage().find(b => b.id == bookId);
        ui.fillInputs(book);
    }

    fetchOptionsFilterByAuthor();
    e.preventDefault();
}

Book.prototype.saveChanges = function (e) {
    const id = e.target.getAttribute('data-id');
    const name = modalBookName.value.trim();
    const author = modalBookAuthor.value.trim();
    const category = modalBookCategory.value.trim();
    const date = modalBookDate.value.trim();
    const coverPageUrl = modalBookCoverPageUrl.value.trim();

    if (name === '' || author === '' || category === '' || date === '' || coverPageUrl === '') {
        ui.showAlert('danger', 'Lütfen tüm alanları doldurunuz.');
        return;
    }

    const book = new Book(id, name, author, category, date, coverPageUrl);
    ui.editBookInUI(book);
    storage.editBookFromLocalStorage(book);

    ui.clearInputs();

    // close modal with standart bootstrap method data-bs-toggle="modal" data-bs-target="#exampleModal"
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
    fetchOptionsFilterByAuthor();
    // show success alert
    ui.showAlert('success', 'Kitap başarıyla güncellendi.');
    e.preventDefault();
}

Book.prototype.previewBook = function (e) {
    if (e.target.id === 'preview-book') {
        const bookId = e.target.parentElement.parentElement.id.split('-')[1];
        const book = storage.getBooksFromLocalStorage().find(b => b.id == bookId);
        window.open(book.coverPageUrl, '_blank');


    } else if (e.target.parentElement.id === "preview-book") {
        const bookId = e.target.parentElement.parentElement.parentElement.id.split('-')[1];
        const book = storage.getBooksFromLocalStorage().find(b => b.id == bookId);
        window.open(book.coverPageUrl, '_blank');
    }
    e.preventDefault();
}
Book.prototype.deleteBook = function (e) {
    if (e.target.id === 'delete-book') {
        // get book element by id
        const bookId = e.target.parentElement.parentElement.id;
        const book = document.getElementById(bookId);
        if (confirm('Kitabı silmek istediğinize emin misiniz?')) {
            ui.deleteBookFromUI(book);
            storage.deleteBookFromLocalStorage(bookId);
            ui.showAlert('success', 'Kitap başarıyla silindi.');
        }
    }
    fetchOptionsFilterByAuthor();
    e.preventDefault();
}

Book.prototype.clearAllBooks = function (e) {
    if (confirm('Tüm kitapları silmek istediğinize emin misiniz?')) {
        ui.clearAllBooksFromUI();
        storage.clearAllBooksFromLocalStorage();
        ui.showAlert('success', 'Tüm kitaplar başarıyla silindi.');
    }
    fetchOptionsFilterByAuthor();
    e.preventDefault();
}
