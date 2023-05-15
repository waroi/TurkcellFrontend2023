function Book (id, name, author, category, date, coverPageUrl) {
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

    if (name === '' || author === '' || category === '' || date === '' || coverPageUrl === '') {    
        alert('Lütfen tüm alanları doldurunuz.');
    }

    const book = new Book(id, name, author, category, date, coverPageUrl);
}
