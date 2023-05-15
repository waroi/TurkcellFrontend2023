class Book {
  constructor(name, author, year, category, url) {
    this.id = Date.now();
    this.name = name;
    this.author = author;
    this.year = year;
    this.category = category;
    this.url = url;
  }
}
