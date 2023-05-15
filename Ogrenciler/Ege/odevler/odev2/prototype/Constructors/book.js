function Book(name, writer, category, releaseDate, coverURL) {
  this.id = Date.now();
  this.name = name;
  this.writer = writer;
  this.category = category;
  this.releaseDate = releaseDate;
  this.coverURL = coverURL;
}

export default Book;
