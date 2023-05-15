class Book {
  constructor(name, writer, category, releaseDate, coverUrl) {
    this.id = Date.now();
    this.name = name;
    this.writer = writer;
    this.category = category;
    this.releaseDate = releaseDate;
    this.coverURL = coverUrl;
  }
}

export default Book;
