class Blog {
  constructor(author, title, text, category, releaseDate, releaseTime, image) {
    this.author = author;
    this.title = title;
    this.text = text;
    this.category = category;
    this.releaseDate = releaseDate;
    this.releaseTime = releaseTime;
    this.image = image;
    this.id = Date.now();
  }
}

export default Blog;
