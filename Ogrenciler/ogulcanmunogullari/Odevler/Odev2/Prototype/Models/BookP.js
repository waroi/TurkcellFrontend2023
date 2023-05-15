function BookP(title, author, genre, url, publishingDate) {
 this.title = title;
 this.author = author;
 this.genre = genre;
 this.url = url;
 this.publishingDate = publishingDate;
 this.isbn = Math.floor(Math.random() * 1_000_000);
}

BookP.prototype.changeBook = function (
 title,
 author,
 genre,
 url,
 publishingDate,
) {
 this.title = title;
 this.author = author;
 this.genre = genre;
 this.url = url;
 this.publishingDate = publishingDate;
};

export default BookP;
