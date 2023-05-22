class Article {
	constructor(title, information, author, date, category, cover) {
		this.title = title;
		this.information = information;
		this.author = author;
		this.date = date;
		this.category = category;
		this.cover = cover;
	}

	createArticle = function () {
		dbManager.createArticle(this);
	};
}
