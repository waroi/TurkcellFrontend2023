function Render() {}

let bookContainerWrapper = document.getElementById("bookContainerWrapper");
let containers = {};

let categoryFiltersWrapper = document.getElementById("categoryFilters");
let authorFiltersWrapper = document.getElementById("authorFilters");
let categories = [];
let authors = [];

Render.prototype.createBook = function () {
	const newBookData = getFormData();
	const newBook = new Book(
		undefined,
		newBookData.name,
		newBookData.author,
		newBookData.category,
		newBookData.year,
		newBookData.cover,
		newBookData.summary
	);
	const localData = storageManager.getBooksFromLocalStorage();
	localData.push(newBook);
	storageManager.setLocalStorage(localData);
	render.addBox(newBook);
	render.clearForm();
};

Render.prototype.addBox = function (book) {
	const box = book.createBox();

	if (!categories.includes(book.category)) {
		categories.push(book.category);
		const wrapper = document.createElement("div");
		wrapper.setAttribute("data-filter-type", "category");
		const chckBox = document.createElement("input");
		chckBox.setAttribute("name", "filter");
		chckBox.setAttribute("type", "checkbox");
		const spanEl = document.createElement("span");
		spanEl.innerText = book.category;
		chckBox.onchange = () => {
			this.filterBooks();
		};
		wrapper.appendChild(chckBox);
		wrapper.appendChild(spanEl);
		categoryFiltersWrapper.appendChild(wrapper);
	}

	if (!authors.includes(book.author)) {
		authors.push(book.author);
		const wrapper = document.createElement("div");
		wrapper.setAttribute("data-filter-type", "author");
		const chckBox = document.createElement("input");
		chckBox.setAttribute("name", "filter");
		chckBox.setAttribute("type", "checkbox");
		const spanEl = document.createElement("span");
		spanEl.innerText = book.author;
		chckBox.onchange = () => {
			this.filterBooks();
		};

		wrapper.appendChild(chckBox);
		wrapper.appendChild(spanEl);
		authorFiltersWrapper.appendChild(wrapper);
	}

	if (containers[book.category]) {
		containers[book.category].appendChild(box);
	} else {
		const containerEl = document.createElement("div");
		containerEl.className = "row g-3 mt-5 bookRow bookContainer pt-3";
		const headingEl = document.createElement("p");
		headingEl.className = "fw-bold fs-3 mx-auto text-center text-white bg-primary";
		headingEl.innerText = book.category;
		containerEl.appendChild(headingEl);
		containerEl.appendChild(box);
		containers[book.category] = containerEl;
		bookContainerWrapper.appendChild(containerEl);
	}
};

Render.prototype.filterBooks = function () {
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
	const searchInput = document.getElementById("bookSearch");
	if (searchInput && searchInput.value) {
		selectedFilters.push({ filterColumns: ["name", "author"], filterVals: [searchInput.value] });
	}

	storageManager.getBooksFromLocalStorage().forEach((book) => {
		const bookEl = document.getElementById(`book-${book.id}`);
		if (!bookEl) return;

		let shouldShow = true;
		selectedFilters.forEach((filter) => {
			let currFilterCombined = false;
			filter.filterColumns.forEach((col) => {
				filter.filterVals.forEach((filterVal) => {
					currFilterCombined = currFilterCombined || book[col].toLowerCase().includes(filterVal.toLowerCase());
				});
			});

			shouldShow = shouldShow && currFilterCombined;
		});

		if (shouldShow && bookEl.classList.contains("d-none")) bookEl.classList.remove("d-none");
		else if (!shouldShow && !bookEl.classList.contains("d-none")) bookEl.classList.add("d-none");
	});

	let hasVisibleShelf = false;
	Array.from(document.getElementsByClassName("bookContainer")).forEach((shelf) => {
		const books = Array.from(shelf.getElementsByClassName("book"));

		const hasVisibleBook = books.some((b) => !b.parentElement.classList.contains("d-none"));

		if (hasVisibleBook && shelf.classList.contains("d-none")) shelf.classList.remove("d-none");
		else if (!hasVisibleBook && !shelf.classList.contains("d-none")) shelf.classList.add("d-none");

		hasVisibleShelf = hasVisibleShelf || hasVisibleBook;
	});

	const noBookFoundEl = document.getElementById("noBookFound");
	if (!hasVisibleShelf && noBookFoundEl.classList.contains("d-none")) noBookFoundEl.classList.remove("d-none");
	else if (hasVisibleShelf && !noBookFoundEl.classList.contains("d-none")) noBookFoundEl.classList.add("d-none");
};

Render.prototype.sortBooks = function () {
	const chosenSort = document.querySelector("input[name=sort]:checked").value;

	let books = storageManager.getBooksFromLocalStorage();

	switch (chosenSort) {
		case "sortDefault":
			books = books.sort((a, b) => a.id - b.id);
			break;
		case "sortAsc":
			books = books.sort((a, b) => a.name.localeCompare(b.name));
			break;
		case "sortDesc":
			books = books.sort((a, b) => b.name.localeCompare(a.name));
			break;
		case "sortDateAsc":
			books = books.sort((a, b) => new Date(a.year) - new Date(b.year));
			break;
		case "sortDateDesc":
			books = books.sort((a, b) => new Date(b.year) - new Date(a.year));
			break;
	}

	storageManager.setLocalStorage(books);
	this.loadUI();
	this.filterBooks();
};

Render.prototype.editBook = function (book) {
	document.forms["bookForm"].elements["name"].value = book?.name;
	document.forms["bookForm"].elements["author"].value = book?.author;
	document.forms["bookForm"].elements["category"].value = book?.category;
	document.forms["bookForm"].elements["year"].value = book?.year;
	document.forms["bookForm"].elements["summary"].value = book?.summary;
	document.forms["bookForm"].elements["cover"].value = book?.cover;

	document.forms["bookForm"]["submitBtn"].classList.replace("btn-success", "btn-warning");
	document.forms["bookForm"]["submitBtn"].innerHTML = "Güncelle";
	document.forms["bookForm"].setAttribute("data-modal-type", "edit");
	document.forms["bookForm"].setAttribute("data-book-id", book?.id);
};

Render.prototype.clearForm = function () {
	document.forms["bookForm"]["name"].value = "";
	document.forms["bookForm"]["author"].value = "";
	document.forms["bookForm"]["category"].value = "";
	document.forms["bookForm"]["year"].value = "";
	document.forms["bookForm"]["summary"].value = "";
	document.forms["bookForm"]["cover"].value = "";

	document.forms["bookForm"]["submitBtn"].classList.replace("btn-warning", "btn-success");
	document.forms["bookForm"]["submitBtn"].innerHTML = "Kaydet";
};

Render.prototype.loadUI = function () {
	containers = {};
	categories = [];
	authors = [];
	let localData = storageManager.getBooksFromLocalStorage();
	storageManager.setLocalStorage(localData);
	bookContainerWrapper.innerHTML = "";
	categoryFiltersWrapper.innerHTML = "";
	authorFiltersWrapper.innerHTML = "";
	localData.forEach((book) => {
		render.addBox(new Book(book.id, book.name, book.author, book.category, book.year, book.cover, book.summary));
	});
};
