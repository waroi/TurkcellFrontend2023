class Blog {
  constructor(author, title, text, category, image) {
    const date = new Date();
    this.author = author;
    this.title = title;
    this.text = text;
    this.category = category;
    this.releaseDate = `${date.getFullYear()}-${
      date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
    this.releaseTime = `${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
    this.image = image;
    this.id = `ID_${Date.now()}`;
  }
}

export default Blog;
