class BookC {
 constructor(title, author, genre, url, publishingDate) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.url = url;
  this.publishingDate = publishingDate;
  this.isbn = Math.floor(Math.random() * 1_000_000);
 }
 changeBook(title, author, genre, url, publishingDate) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.url = url;
  this.publishingDate = publishingDate;
 }
}

export default BookC;
