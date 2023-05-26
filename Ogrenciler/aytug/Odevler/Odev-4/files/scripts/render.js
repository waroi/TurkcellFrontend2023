let productContainerWrapper = document.getElementById("productContainerWrapper");
let containers = {};
let categoryFiltersWrapper = document.getElementById("categoryFilters");
let basketCounter = document.getElementById("basketCounter");

const categories = [];

class Render {
	createProduct = function () {
		const newProductData = getFormData();
		const newProduct = new Product(
			newProductData.name,
			newProductData.category,
			newProductData.price,
			newProductData.description,
			newProductData.inStock,
			newProductData.image
		);
		newProduct.createProduct();
		render.clearForm();
	};

	createFilters = async function () {
		const alreadySelectedCategories = Array.from(
			document.querySelectorAll(".filtersWrapper input[name=filter]:checked")
		).map((chckBox) => chckBox.parentElement.innerText);
		categoryFiltersWrapper.innerHTML = "";
		let allProducts = await dbManager.getAllProducts();
		const categories = allProducts.reduce((cum, curr) => {
			if (!cum.includes(curr.category)) cum.push(curr.category);
			return cum;
		}, []);

		categories.map((category) => {
			const wrapper = document.createElement("div");
			wrapper.setAttribute("data-filter-type", "category");
			const chckBox = document.createElement("input");
			chckBox.setAttribute("name", "filter");
			chckBox.setAttribute("type", "checkbox");
			if (alreadySelectedCategories.includes(category)) chckBox.checked = true;
			const spanEl = document.createElement("span");
			spanEl.innerText = category.toUpperCase();
			chckBox.onchange = () => {
				this.filterProducts();
			};
			wrapper.appendChild(chckBox);
			wrapper.appendChild(spanEl);
			categoryFiltersWrapper.appendChild(wrapper);
		});
	};

	filterProducts = async function () {
		const selectedCheckboxes = Array.from(document.querySelectorAll(".filtersWrapper input[name=filter]:checked"));
		const columnGroupedChecboxes = selectedCheckboxes.reduce((cumul, curr) => {
			const column = curr.parentElement.getAttribute("data-filter-type");
			if (cumul[column]) {
				cumul[column].push(curr);
			} else {
				cumul[column] = [curr];
			}

			return cumul;
		}, {});
		const selectedFilters = Object.entries(columnGroupedChecboxes).map(([column, chckBoxs]) => {
			const filterColumn = column;
			const filterVals = chckBoxs.map((chckBox) => chckBox.parentElement.querySelector("span").innerText);
			return { filterColumns: [filterColumn], filterVals };
		});
		const searchInput = document.getElementById("searchProduct");
		if (searchInput && searchInput.value) {
			selectedFilters.push({ filterColumns: ["name", "category"], filterVals: [searchInput.value] });
		}

		let products = await dbManager.getAllProducts();

		products = products.filter((product) => {
			const productEl = document.getElementById(`product-${product.id}`);
			if (!productEl) return false;
			let shouldShow = true;
			selectedFilters.forEach((filter) => {
				let currFilterCombined = false;
				filter.filterColumns.forEach((col) => {
					filter.filterVals.forEach((filterVal) => {
						currFilterCombined = currFilterCombined || product[col].toLowerCase().includes(filterVal.toLowerCase());
					});
				});
				shouldShow = shouldShow && currFilterCombined;
			});
			if (shouldShow && productEl.classList.contains("d-none")) productEl.classList.remove("d-none");
			else if (!shouldShow && !productEl.classList.contains("d-none")) productEl.classList.add("d-none");
			return shouldShow;
		});

		const noProductFoundEl = document.getElementById("noProductFound");
		if (products.length == 0) noProductFoundEl.classList.remove("d-none");
		else noProductFoundEl.classList.add("d-none");

		return products;
	};

	sortProducts = async function (products) {
		const chosenSort = document.querySelector("input[name=sort]:checked").value;
		// this.products = products;

		switch (chosenSort) {
			case "sortDefault":
				products = products.sort((a, b) => a.id - b.id);
				break;
			case "sortAsc":
				products = products.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "sortDesc":
				products = products.sort((a, b) => b.name.localeCompare(a.name));
				break;
			case "sortPriceAsc":
				products = products.sort((a, b) => a.price - b.price);
				break;
			case "sortPriceDesc":
				products = products.sort((a, b) => b.price - a.price);
				break;
		}
		return products;
	};

	editProduct = async function (product) {
		document.forms["productForm"].elements["name"].value = product?.name;
		document.forms["productForm"].elements["category"].value = product?.category;
		document.forms["productForm"].elements["price"].value = product?.price;
		document.forms["productForm"].elements["inStock"].value = product?.inStock;
		document.forms["productForm"].elements["image"].value = product?.image;
		document.forms["productForm"].elements["description"].value = product?.description;

		document.forms["productForm"]["submitBtn"].innerHTML = `<i class="bi bi-upload text-success fs-3"></i>`;

		document.forms["productForm"].setAttribute("data-modal-type", "edit");
		document.forms["productForm"].setAttribute("data-product-id", product?.id);
	};

	clearForm = function () {
		document.forms["productForm"]["name"].value = "";
		document.forms["productForm"]["category"].value = "";
		document.forms["productForm"]["price"].value = "";
		document.forms["productForm"]["inStock"].value = "";
		document.forms["productForm"]["image"].value = "";
		document.forms["productForm"]["description"].value = "";

		document.forms["productForm"]["submitBtn"].innerHTML = `<i class="bi bi-check-circle-fill text-success fs-3">`;
	};

	loadUI = async () => {
		containers = {};
		render.createFilters();
		const allProducts = await dbManager.getAllProducts();
		let sortedProducts = await render.sortProducts([...allProducts]);

		productContainerWrapper.innerHTML = "";

		basket.basketCount();

		sortedProducts.forEach((product) => {
			const cardWrap = document.createElement("div");
			cardWrap.className = "col-8 col-lg-4 mb-3 product-card";
			cardWrap.setAttribute("id", `product-${product.id}`);
			cardWrap.setAttribute("data-bs-toggle", "modal");
			cardWrap.setAttribute("data-bs-target", "#productModal");

			const card = `
			<div class="card mb-3 product">
				<img src="${
					product.image.includes("http") ? product.image : `./assets/img/${product.image}`
				}" class="card-img-top bg-dark" alt="${product.name}" />
				<div class="card-body">
					<h5 class="card-title text-center my-3">${product.name}</h5>
					<p class="card-text">${product.description}
					</p>
					<a href="./views/${product.name.toLowerCase()}.html" class="btn btn-close-white-50 mt-3 border border-2 text-bg-dark"> Daha fazlası... </a>
				</div>
			</div>`;

			cardWrap.innerHTML = card;
			productContainerWrapper.append(cardWrap);

			cardWrap.onclick = () => {
				document.getElementById("productModalLabel").innerText = product.name;
				document.getElementById("productModalImage").src = product.image.includes("http")
					? product.image
					: `./assets/img/${product.image}`;
				document.getElementById("productModalImage").alt = product.name;
				document.getElementById("productModalName").innerText = product.name;
				document.getElementById("productModalPrice").innerText = `Fiyat : ${product.price} `;
				document.getElementById("productModalCategory").innerText = `Kategori : ${product.category}`;
				document.getElementById("productModalBody").innerHTML = product.description;
				document.getElementById("productModalStock").innerText = `Stok Adedi : ${product.inStock} Adet`;

				if (product.inStock == 0) {
					document.getElementById("addBasket").classList.add("d-none");
				} else {
					document.getElementById("addBasket").classList.remove("d-none");
				}

				document.getElementById("editProduct").onclick = () => {
					render.editProduct(product);
				};
				document.getElementById("addBasket").onclick = () => {
					basket.renderBasket(product);
				};
				document.getElementById("deleteProduct").onclick = () => {
					dbManager.deleteProduct(product.id);
				};
			};
		});

		this.filterProducts();
	};
}
