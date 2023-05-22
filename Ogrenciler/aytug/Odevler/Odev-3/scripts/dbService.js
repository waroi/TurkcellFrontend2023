class DbService {
	createArticle = (article) => {
		request.createArticle(article).catch((err) => {
			console.error(err);
		});
	};

	getAllArticles = async () => {
		return await request.getAllArticles().catch((err) => {
			console.error(err);
		});
	};

	getArticle = (id) =>
		request.get(id).catch((err) => {
			console.error(err);
		});

	editArticle = function (id, article) {
		request
			.editArticle(id, {
				title: article.title,
				information: article.information,
				author: article.author,
				date: article.date,
				category: article.category,
				cover: article.cover,
			})
			.catch((err) => console.error(err));

		document.forms["articleForm"]["submitBtn"].innerHTML = `<i class="bi bi-upload text-success fs-3"></i>`;
	};

	deleteArticle = (id) => request.deleteArticle(id).catch((err) => console.error(err));
}
