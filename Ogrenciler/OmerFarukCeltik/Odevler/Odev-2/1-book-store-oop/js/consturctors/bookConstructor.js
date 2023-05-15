function Book(name, author, category, publicationDate, banner) {
  this.id = Date.now();
  this.bookName = name;
  this.author = author;
  this.category = category;
  this.publicationDate = publicationDate;
  this.banner = banner;
  this.date= this.id.toString();
}

export default Book;