class Product {
	constructor(name, category, price, description, inStock, image) {
		this.name = name;
		this.category = category;
		this.price = +price;
		this.description = description;
		this.inStock = +inStock;
		this.image = image;
	}

	createProduct = async () => {
		const existingProducts = await dbManager.getAllProducts();
		const sameProduct = existingProducts.find((p) => p.name === this.name);
		if (!sameProduct) dbManager.createProduct(this);
		else dbManager.editProduct(sameProduct.id, { ...sameProduct, inStock: sameProduct.inStock + this.inStock });
	};
}
