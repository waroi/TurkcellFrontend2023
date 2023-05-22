class Post {
  constructor(title, author, content, category, url) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.category = category;
    this.url = url;
    this.date = Date.now();
  }
}
