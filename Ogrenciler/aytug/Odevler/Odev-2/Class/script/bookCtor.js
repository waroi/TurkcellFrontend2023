let maxId = -1;

class Book {
	constructor(id, name, author, category, year, cover, summary) {
		if (id) {
			this.id = id;
			maxId = Math.max(maxId, id);
		} else {
			this.id = ++maxId;
		}
		this.name = name;
		this.author = author;
		this.category = category;
		this.year = year;
		this.cover = cover;
		this.summary = summary;
	}

	createBox() {
		const cardWrap = document.createElement("div");
		cardWrap.className = "col-4 col-md-2";
		cardWrap.setAttribute("id", `book-${this.id}`);

		const card = `<div class="card text-bg-dark book">
										<img src="${this.cover}" class="card-img" alt="${this.name}">
									</div>`;

		cardWrap.onclick = () => {
			const coverEl = document.getElementById("bCover");
			coverEl.setAttribute("src", this.cover);

			["Name", "Author", "Category", "Year", "Summary"].forEach((field) => {
				const dialogField = document.getElementById(`b${field}`);
				dialogField.innerText = this[field.toLowerCase()];
			});

			const modalEl = document.getElementById("bookModal");

			modalEl.querySelector(".delete").onclick = () => {
				storageManager.deleteBookFromLocalStorage(this.id);
				closeModal();
			};

			modalEl.querySelector(".edit").onclick = () => {
				render.editBook(this);
				closeModal();
			};

			modalEl.showModal();
		};

		cardWrap.innerHTML = card;
		return cardWrap;
	}
}

function closeModal() {
	const modalEl = document.getElementById("bookModal");
	modalEl.close();
	render.loadUI();
}
