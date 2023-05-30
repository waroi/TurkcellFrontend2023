let basketProductContainer = document.getElementById("basketProductContainer");
class Basket {
	constructor() {
		this.products = [];
	}

	addProduct(product) {
		this.products.push(product);
	}

	deleteProduct(product) {
		const index = this.products.indexOf(product);
		if (index !== -1) {
			this.products.splice(index, 1);
		}
	}

	getBasket() {
		return this.products;
	}

	// buy() {
	// 	const basketDetails = JSON.stringify(this.products);
	// }

	async basketCount() {
		const basketArr = await dbManager.getBasket();

		basketCounter.innerText = basketArr.length || "";
		basketProductContainer.innerHTML = "";
		basketArr.forEach(async (product) => {
			product.inStock = (await dbManager.getProduct(product.id)).inStock;
			const productDiv = document.createElement("div");
			productDiv.clasName = "col-12 mx-auto";
			const cardEl = document.createElement("div");
			cardEl.className = "card mb-3";
			const cardRowEl = document.createElement("div");
			cardRowEl.className = "row g-0";
			const cardImageEl = document.createElement("div");
			cardImageEl.className = "col-md-4";
			const cardImage = document.createElement("img");
			cardImage.className = "img-fluid rounded-start";
			cardImage.src = product.image.includes("http") ? product.image : `./assets/img/${product.image}`;
			cardImage.alt = product.name;
			const cardBodyEl = document.createElement("div");
			cardBodyEl.className = "col-md-6";
			const cardBody = document.createElement("div");
			cardBody.className = "card-body";
			const cardTitle = document.createElement("h5");
			cardTitle.className = "card-title";
			cardTitle.innerText = product.name;
			const cardTextPrice = document.createElement("p");
			cardTextPrice.className = "card-text";
			cardTextPrice.innerText = `Fiyat : ${product.price} ₺`;
			const cardTextQuantity = document.createElement("p");
			cardTextQuantity.className = "card-text";
			cardTextQuantity.innerText = `Sipariş Adedi : ${product.quantity}`;
			const quantityInput = document.createElement("input");
			quantityInput.className = "form-control";
			quantityInput.type = "number";
			quantityInput.placeholder = "Sipariş Adedi";
			quantityInput.value = product.quantity;
			quantityInput.setAttribute("min", "1");
			quantityInput.setAttribute("max", String(product.inStock));
			quantityInput.onchange = (e) => {
				this.updateBasket(e, product, "quantityInput");
			};
			const cardTextTotal = document.createElement("p");
			cardTextTotal.className = "card-text";
			cardTextTotal.innerText = `Toplam Tutar : ${product.quantity * product.price} ₺`;
			const cardDeleteEl = document.createElement("div");
			cardDeleteEl.className = "col-md-2 d-flex justify-content-center align-items-center";
			const cardDeleteBtn = document.createElement("button");
			cardDeleteBtn.className = "btn delete-from-basket-btn";
			cardDeleteBtn.innerHTML = `<i class="bi bi-trash3-fill fs-3 text-danger"></i>`;

			productDiv.append(cardEl);
			cardEl.append(cardRowEl);
			cardRowEl.append(cardImageEl);
			cardImageEl.append(cardImage);
			cardRowEl.append(cardBodyEl);
			cardBodyEl.append(cardBody);
			cardBody.append(cardTitle);
			cardBody.append(cardTextPrice);
			cardBody.append(cardTextQuantity);
			cardBody.append(quantityInput);
			cardBody.append(cardTextTotal);
			cardRowEl.append(cardDeleteEl);
			cardDeleteEl.append(cardDeleteBtn);

			basketProductContainer.append(productDiv);

			cardDeleteBtn.onclick = (e) => {
				e.preventDefault();
				dbManager.deleteFromBasket(product.id);
				productDiv.remove();
				basket.basketCount();
			};
		});
	}

	async renderBasket(product) {
		const basket = await dbManager.getBasket();
		document.getElementById("basketModalProductName").innerText = product.name;
		document.getElementById("basketModalPrice").innerText = `Fiyat : ${product.price}₺`;
		document.getElementById("basketModalStockStatus").innerText = `Stok : ${product.inStock} adet`;
		document.getElementById("quantityInBasket").classList.add("d-none");

		const isProductInBasket = basket.some((p) => p.id === product.id);

		let max = String(product.inStock);

		if (isProductInBasket) {
			const existingBasketProduct = await dbManager.getBasketItem(product.id);
			document.getElementById("quantityInBasket").classList.remove("d-none");
			document.getElementById(
				"quantityInBasket"
			).innerText = `Zaten sepetinize ${existingBasketProduct.quantity} adet eklenmiş`;
			max = String(product.inStock - existingBasketProduct.quantity);
		}

		if (max === "0") {
			document.getElementById("quantity").setAttribute("disabled", "disabled");
			document.getElementById("quantity").setAttribute("min", "0");
			document.getElementById("quantity").setAttribute("max", max);
			document.getElementById("quantity").setAttribute("placeholder", "Bu üründen daha fazla alamazsınız");
			document.getElementById("addBasketBtn").setAttribute("disabled", "disabled");
			document.getElementById("addBasketBtn").querySelector("i").classList.add("text-white");
			document.getElementById("addBasketBtn").classList.add("bg-secondary");
		} else {
			document.getElementById("quantity").removeAttribute("disabled");
			document.getElementById("quantity").setAttribute("min", "1");
			document.getElementById("quantity").setAttribute("max", max);
			document.getElementById("quantity").setAttribute("placeholder", "Ne kadar daha almak istersiniz?");
			document.getElementById("addBasketBtn").removeAttribute("disabled");
			document.getElementById("addBasketBtn").querySelector("i").classList.remove("text-white");
			document.getElementById("addBasketBtn").classList.remove("bg-secondary");
		}

		document.getElementById("addBasketBtn").onclick = (e) => this.updateBasket(e, product, "addBasketBtn");
	}

	async updateBasket(e, product, referrer) {
		e.preventDefault();
		let newQuantity;
		let isExistingProduct;
		if (referrer === "addBasketBtn") {
			const quantity = Number(document.getElementById("quantity").value);
			const basket = await dbManager.getBasket();
			const existingBasketItem = basket.find((p) => p.id === product.id);
			newQuantity = existingBasketItem ? existingBasketItem.quantity + quantity : quantity;
			isExistingProduct = !!existingBasketItem;
		} else {
			newQuantity = +e.target.value;
			isExistingProduct = true;
		}

		if (newQuantity > product.inStock) {
			alert("Stoktan daha fazla ürün alamazsınız!");
		} else {
			if (isExistingProduct) {
				dbManager.updateBasket({
					id: product.id,
					name: product.name,
					price: product.price,
					quantity: newQuantity,
					image: product.image,
				});
			} else {
				dbManager.addProductToBasket({
					id: product.id,
					name: product.name,
					price: product.price,
					quantity: newQuantity,
					image: product.image,
				});
				this.basketCount();
			}
			if (referrer === "addBasketBtn") e.target.parentNode.parentNode.querySelector(".cancelBtn").click();
			document.getElementById("quantity").value = "";
		}
	}

	async checkoutBasket() {
		const currBasket = await dbManager.getBasket();
		const checkoutSum = currBasket.reduce((sum, curr) => sum + curr.price * curr.quantity, 0);

		alert(`Sepetiniz toplam ${checkoutSum}₺ tuttu.`);

		document.getElementById("basketModal").querySelector(".cancelBtn").click();

		currBasket.forEach((basketItem, i) => {
			setTimeout(async () => {
				const originalItem = await dbManager.getProduct(basketItem.id);
				await dbManager.editProduct(basketItem.id, {
					...originalItem,
					inStock: +originalItem.inStock - basketItem.quantity,
				});
				await dbManager.deleteFromBasket(basketItem.id);
			}, 100 * i);
		});
	}
}
