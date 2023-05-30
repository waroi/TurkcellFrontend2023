class DbService {
	createProduct = (product) => {
		productRequest.createProduct(product).catch((err) => {
			console.error(err);
		});

		render.loadUI();
	};

	getAllProducts = async () => {
		return await productRequest.getAllProducts().catch((err) => {
			console.error(err);
		});
	};

	getProduct = (id) =>
		productRequest.getProduct(id).catch((err) => {
			console.error(err);
		});

	editProduct = async function (id, product) {
		const resp = await productRequest
			.editProduct(id, {
				name: product.name,
				category: product.category,
				price: +product.price,
				description: product.description,
				inStock: +product.inStock,
				image: product.image,
			})
			.catch((err) => console.error(err));

		document.forms["productForm"]["submitBtn"].innerHTML = `<i class="bi bi-upload text-success fs-3"></i>`;

		render.loadUI();

		return resp;
	};

	deleteProduct = async (id) => {
		const resp = await productRequest.deleteProduct(id).catch((err) => console.error(err));

		render.loadUI();

		return resp;
	};

	getBasket = async () => {
		return await basketRequest.getBasket().catch((err) => {
			console.error(err);
		});
	};

	getBasketItem = async (id) => {
		return await basketRequest.getBasketItem(id).catch((err) => {
			console.error(err);
		});
	};

	addProductToBasket = async (product) => {
		const resp = await basketRequest.addProductToBasket(product).catch((err) => {
			console.error(err);
		});

		render.loadUI();

		return resp;
	};

	deleteFromBasket = async (id) => {
		const resp = basketRequest.deleteFromBasket(id).catch((err) => console.error(err));

		render.loadUI();

		return resp;
	};

	deleteAllBasket = async () => {
		const resp = basketRequest.deleteFromBasket().catch((err) => console.error(err));

		render.loadUI();

		return resp;
	};

	updateBasket = async (product) => {
		const resp = basketRequest
			.updateBasket(product.id, {
				name: product.name,
				price: product.price,
				quantity: product.quantity,
				image: product.image,
			})
			.catch((err) => console.error(err));

		render.loadUI();

		return resp;
	};
}
