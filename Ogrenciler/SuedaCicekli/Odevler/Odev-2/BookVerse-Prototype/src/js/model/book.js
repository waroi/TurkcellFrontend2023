function Book(id, name, author, year, category, summary, url, rank, editor, language, review) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.year = year;
  this.category = category;
  this.summary = summary;
  this.url = url;
  this.rank = rank || 0;
  this.editor = editor || "";
  this.language = language || "";
  this.review = review || "";
}
