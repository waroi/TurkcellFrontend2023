class Book{
  constructor(bookName, writer, url, date, category){

    this.id = new Date().getTime();
    this.bookName = bookName;
    this.writer = writer;
    this.url = url;
    this.date = date;
    this.category = category;
  }
  
  constantBooks() {
    const book1 = new Book(
      "Küçük Prens",
      "Antoine de Saint-Exupéry",
      "https://upload.wikimedia.org/wikipedia/tr/thumb/f/f5/Kucukprens.jpg/330px-Kucukprens.jpg",
      "1943",
      "Story"
    );
    const book2 = new Book(
      "Fahrenheit 451",
      "Ray Bradbury",
      "https://upload.wikimedia.org/wikipedia/tr/5/5c/Fahrenheit451roman.jpg",
      "1953",
      "Sciencefiction"
    );
  
    return [book1,book2];
  }


  }
export default Book;

