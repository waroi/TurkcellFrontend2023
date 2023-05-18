class Blog {
  constructor(author, title, text) {
    this.author = author;
    this.title = title;
    this.text = text;
    this.id = Date.now();
  }
}

export default Blog;
