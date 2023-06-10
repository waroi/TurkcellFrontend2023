class Blog {
  constructor(author, title, text, category, img, releaseDate, releaseTime, blogDetail) {

    this.author = author;
    this.title = title;
    this.text = text;
    this.releaseDate = releaseDate;
    this.releaseTime = releaseTime;
    this.category = category;
    this.img = img;
    this.detail = blogDetail;
    this.id = `ID_${Date.now()}`;

  }
}
export default Blog