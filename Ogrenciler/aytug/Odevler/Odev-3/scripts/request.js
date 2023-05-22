class Request {
	constructor(url) {
		this.url = url;
	}
	getAllArticles() {
		return new Promise((resolve, reject) => {
			fetch(this.url)
				.then((response) => response.json())
				.then((data) => resolve(data))
				.catch((err) => {
					alert("Json server başlatılamadı. Terminalde 'npm start' yazarak başlatabilirsiniz");
					reject(err, "Data could not be fetched.");
				});
		});
	}
	getArticle(id) {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}/${id}`)
				.then((response) => response.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err, "Data could not be fetched."));
		});
	}
	createArticle(article) {
		return new Promise((resolve, reject) => {
			fetch(this.url, {
				method: "POST",
				body: JSON.stringify({ id: null, ...article }),
				headers: {
					"content-type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((article) => resolve(article))
				.catch((err) => reject(err));
		});
	}
	editArticle(id, article) {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}/${id}`, {
				method: "PUT",
				body: JSON.stringify(article),
				headers: {
					"content-type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((article) => resolve(article))
				.catch((err) => reject(err));
		});
	}
	deleteArticle(id) {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}/${id}`, {
				method: "DELETE",
			})
				.then((response) => response.json())
				.then(() => resolve("Veri silindi."))
				.catch((err) => reject(err));
		});
	}
}
