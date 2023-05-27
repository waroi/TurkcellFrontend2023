class Request {
	constructor(url) {
		this.url = url;
	}
	getAllProducts() {
		return new Promise((resolve, reject) => {
			fetch(this.url)
				.then((response) => response.json())
				.then((data) => resolve(data))
				.catch((err) => {
					alert("Json server başlatılamadı. Terminalde 'npm start' yazarak başlatabilirsiniz");
					reject(err, "Products could not be fetched.");
				});
		});
	}
	getProduct(id) {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}/${id}`)
				.then((response) => response.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err, "Product data could not be fetched."));
		});
	}
	createProduct(product) {
		return new Promise((resolve, reject) => {
			fetch(this.url, {
				method: "POST",
				body: JSON.stringify({ id: null, ...product }),
				headers: {
					"content-type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((product) => resolve(product))
				.catch((err) => reject(err));
		});
	}
	editProduct(id, product) {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}/${id}`, {
				method: "PUT",
				body: JSON.stringify(product),
				headers: {
					"content-type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((product) => resolve(product))
				.catch((err) => reject(err));
		});
	}
	deleteProduct(id) {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}/${id}`, {
				method: "DELETE",
			})
				.then((response) => response.json())
				.then(() => resolve("Veri silindi."))
				.catch((err) => reject(err));
		});
	}
	getBasket() {
		return new Promise((resolve, reject) => {
			fetch(this.url)
				.then((response) => response.json())
				.then((data) => resolve(data))
				.catch((err) => {
					reject(err, "Basket data could not be fetched");
				});
		});
	}
	getBasketItem(id) {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}/${id}`)
				.then((response) => response.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err, "Basket item could not be fetched."));
		});
	}
	addProductToBasket(product) {
		return new Promise((resolve, reject) => {
			fetch(this.url, {
				method: "POST",
				body: JSON.stringify({ id: null, ...product }),
				headers: {
					"content-type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((product) => resolve(product))
				.catch((err) => reject(err, "Product could not be added to the cart"));
		});
	}
	deleteFromBasket(id) {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}/${id}`, {
				method: "DELETE",
			})
				.then((response) => response.json())
				.then(() => resolve("Veri silindi."))
				.catch((err) => reject(err));
		});
	}
	updateBasket(id, quantity) {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}/${id}`, {
				method: "PUT",
				body: JSON.stringify(quantity),
				headers: {
					"content-type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((product) => resolve(product))
				.catch((err) => reject(err, "Could not update cart item"));
		});
	}
}
