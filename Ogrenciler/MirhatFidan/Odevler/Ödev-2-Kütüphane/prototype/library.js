function Book(name, writer, category, releaseDate, coverURL) {
  this.id = Date.now(); // burada id'yi Date.now() ile oluşturuyoruz. bu sayede her kitap için farklı bir id oluşturmuş oluyoruz.
  this.name = name;
  this.writer = writer;
  this.category = category;
  this.releaseDate = releaseDate;
  this.coverURL = coverURL;
}

export default Book;
