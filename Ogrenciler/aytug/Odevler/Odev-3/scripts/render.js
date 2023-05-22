let articleContainerWrapper = document.getElementById("articleContainerWrapper");
let newsContinerWrapper = document.getElementById("newsContainerWrapper");
let randomContainerWrapper = document.getElementById("randomArticleContainer");
let containers = {};

let categoryFiltersWrapper = document.getElementById("categoryFilters");
let authorFiltersWrapper = document.getElementById("authorFilters");

const categories = [];
const authors = [];

class Render {
	createArticle = function () {
		const newArticleData = getFormData();
		const newArticle = new Article(
			newArticleData.title,
			newArticleData.information,
			newArticleData.author,
			newArticleData.date,
			newArticleData.category,
			newArticleData.cover
		);
		newArticle.createArticle();
		render.clearForm();
	};

	createFilters = async function () {
		categoryFiltersWrapper.innerHTML = "";
		authorFiltersWrapper.innerHTML = "";
		let allArticles = await dbManager.getAllArticles();
		const categories = allArticles.reduce((cum, curr) => {
			if (!cum.includes(curr.category)) cum.push(curr.category);
			return cum;
		}, []);
		const authors = allArticles.reduce((cum, curr) => {
			if (!cum.includes(curr.author)) cum.push(curr.author);
			return cum;
		}, []);

		categories.map((category) => {
			const wrapper = document.createElement("div");
			wrapper.setAttribute("data-filter-type", "category");
			const chckBox = document.createElement("input");
			chckBox.setAttribute("name", "filter");
			chckBox.setAttribute("type", "checkbox");
			const spanEl = document.createElement("span");
			spanEl.innerText = category;
			chckBox.onchange = () => {
				this.filterArticles();
			};
			wrapper.appendChild(chckBox);
			wrapper.appendChild(spanEl);
			categoryFiltersWrapper.appendChild(wrapper);
		});

		authors.map((author) => {
			const wrapper = document.createElement("div");
			wrapper.setAttribute("data-filter-type", "author");
			const chckBox = document.createElement("input");
			chckBox.setAttribute("name", "filter");
			chckBox.setAttribute("type", "checkbox");
			const spanEl = document.createElement("span");
			spanEl.innerText = author;
			chckBox.onchange = () => {
				this.filterArticles();
			};
			wrapper.appendChild(chckBox);
			wrapper.appendChild(spanEl);
			authorFiltersWrapper.appendChild(wrapper);
		});
	};

	filterArticles = async function () {
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
		const searchInput = document.getElementById("articleSearch");
		if (searchInput && searchInput.value) {
			selectedFilters.push({ filterColumns: ["title", "category", "author"], filterVals: [searchInput.value] });
		}

		let articles = await dbManager.getAllArticles();

		articles = articles.filter((article) => {
			const articleEl = document.getElementById(`article-${article.id}`);
			if (!articleEl) return false;
			let shouldShow = true;
			selectedFilters.forEach((filter) => {
				let currFilterCombined = false;
				filter.filterColumns.forEach((col) => {
					filter.filterVals.forEach((filterVal) => {
						currFilterCombined = currFilterCombined || article[col].toLowerCase().includes(filterVal.toLowerCase());
					});
				});
				shouldShow = shouldShow && currFilterCombined;
			});
			if (shouldShow && articleEl.classList.contains("d-none")) articleEl.classList.remove("d-none");
			else if (!shouldShow && !articleEl.classList.contains("d-none")) articleEl.classList.add("d-none");
			return shouldShow;
		});

		const noArticleFoundEl = document.getElementById("noArticleFound");
		if (articles.length == 0) noArticleFoundEl.classList.remove("d-none");
		else noArticleFoundEl.classList.add("d-none");

		return articles;
	};

	sortArticles = async function (articles) {
		const chosenSort = document.querySelector("input[name=sort]:checked").value;
		// this.articles = articles;

		switch (chosenSort) {
			case "sortDefault":
				articles = articles.sort((a, b) => a.id - b.id);
				break;
			case "sortAsc":
				articles = articles.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case "sortDesc":
				articles = articles.sort((a, b) => b.title.localeCompare(a.title));
				break;
			case "sortDateAsc":
				articles = articles.sort((a, b) => a.date.localeCompare(b.date));
				break;
			case "sortDateDesc":
				articles = articles.sort((a, b) => b.date.localeCompare(a.date));
				break;
			case "sortAuthorAsc":
				articles = articles.sort((a, b) => a.author.localeCompare(b.author));
				break;
			case "sortAuthorDesc":
				articles = articles.sort((a, b) => b.author.localeCompare(a.author));
				break;
		}

		return articles;
	};

	editArticle = async function (article) {
		document.forms["articleForm"].elements["title"].value = article?.title;
		document.forms["articleForm"].elements["information"].value = article?.information;
		document.forms["articleForm"].elements["author"].value = article?.author;
		document.forms["articleForm"].elements["category"].value = article?.category;
		document.forms["articleForm"].elements["date"].value = article?.date;

		document.forms["articleForm"].elements["date"].setAttribute("disabled", "true");
		document.forms["articleForm"].elements["cover"].value = article?.cover;

		document.forms["articleForm"]["submitBtn"].innerHTML = `<i class="bi bi-upload text-success fs-3"></i>`;

		document.forms["articleForm"].setAttribute("data-modal-type", "edit");
		document.forms["articleForm"].setAttribute("data-article-id", article?.id);
	};

	clearForm = function () {
		document.forms["articleForm"]["title"].value = "";
		document.forms["articleForm"]["information"].value = "";
		document.forms["articleForm"]["author"].value = "";
		document.forms["articleForm"]["date"].value = "";
		document.forms["articleForm"]["category"].value = "";
		document.forms["articleForm"]["cover"].value = "";

		document.forms["articleForm"]["submitBtn"].innerHTML = `<i class="bi bi-check-circle-fill text-success fs-3">`;
	};

	loadUI = async function () {
		containers = {};
		render.createFilters();
		const allArticles = await dbManager.getAllArticles();
		let sortedArticles = await render.sortArticles([...allArticles]);
		const randomArticles = Util.generateRandomNumbers(4, allArticles.length);

		randomContainerWrapper.innerHTML = "";
		articleContainerWrapper.innerHTML = "";

		sortedArticles.forEach((article) => {
			const cardWrap = document.createElement("div");
			cardWrap.className = "col-12 article-card";
			cardWrap.setAttribute("id", `article-${article.id}`);
			cardWrap.setAttribute("data-bs-toggle", "modal");
			cardWrap.setAttribute("data-bs-target", "#articleModal");

			if (randomArticles.includes(article.id)) {
				const randomArticle = document.createElement("div");
				randomArticle.className = "col-3 col-lg-12";
				randomArticle.setAttribute("data-bs-toggle", "modal");
				randomArticle.setAttribute("data-bs-target", "#articleModal");

				const randomArticleCard = `
				<div class="card article mb-3">
					<img src="${article.cover}" class="card-img" alt="${article.name}">
					<p class="card-text my-1 ms-2 d-none d-lg-block"><small class="text-body-secondary">${article.title}</small></p>
				</div>`;

				randomArticle.innerHTML = randomArticleCard;
				randomContainerWrapper.append(randomArticle);
				randomArticle.onclick = () => {
					cardWrap.click();
				};
			}

			if (article.id == allArticles[allArticles.length - 3].id) {
				const cauroselItem = document.getElementById("news3Img").parentElement;
				cauroselItem.setAttribute("data-bs-toggle", "modal");
				cauroselItem.setAttribute("data-bs-target", "#articleModal");
				document.getElementById("news3Img").src = article.cover;
				document.getElementById("news3Img").alt = article.title;
				document.getElementById("news3Title").innerText = article.title;
				document.getElementById("news3Information").innerText = `${article.information.slice(0, 200)}...`;
				cauroselItem.onclick = () => {
					cardWrap.click();
				};
			}
			if (article.id == allArticles[allArticles.length - 2].id) {
				const cauroselItem = document.getElementById("news2Img").parentElement;
				cauroselItem.setAttribute("data-bs-toggle", "modal");
				cauroselItem.setAttribute("data-bs-target", "#articleModal");
				document.getElementById("news2Img").src = article.cover;
				document.getElementById("news2Img").alt = article.title;
				document.getElementById("news2Img").setAttribute("data-bs-toggle", "modal");
				document.getElementById("news2Img").setAttribute("data-bs-target", "#articleModal");
				document.getElementById("news2Title").innerText = article.title;
				document.getElementById("news2Information").innerText = `${article.information.slice(0, 200)}...`;
				cauroselItem.onclick = () => {
					cardWrap.click();
				};
			}
			if (article.id == allArticles[allArticles.length - 1].id) {
				const cauroselItem = document.getElementById("news1Img").parentElement;
				cauroselItem.setAttribute("data-bs-toggle", "modal");
				cauroselItem.setAttribute("data-bs-target", "#articleModal");
				document.getElementById("news1Img").src = article.cover;
				document.getElementById("news1Img").alt = article.title;
				document.getElementById("news1Img").setAttribute("data-bs-toggle", "modal");
				document.getElementById("news1Img").setAttribute("data-bs-target", "#articleModal");
				document.getElementById("news1Title").innerText = article.title;
				document.getElementById("news1Information").innerText = `${article.information.slice(0, 200)}...`;
				cauroselItem.onclick = () => {
					cardWrap.click();
				};
			}

			const card = `
			<div class="card mb-3 article">
				<div class="row g-0">
					<div class="col-md-4">
						<img src="${article.cover}" class="img-fluid rounded-start card-img" alt="${article.title}">
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">${article.title}</h5>
							<p class="card-text">${article.information.slice(0, 200)}...</p>
							<p class="card-text"><small class="text-body-secondary">Oluşturulma tarihi: ${new Date(
								article.date
							).toLocaleDateString()}</small></p>
						</div>
					</div>
				</div>
			</div>`;

			cardWrap.innerHTML = card;
			articleContainerWrapper.append(cardWrap);

			cardWrap.onclick = () => {
				document.getElementById("articleModalLabel").innerText = article.title;
				document.getElementById("articleModalImage").src = article.cover;
				document.getElementById("articleModalImage").alt = article.title;
				document.getElementById("articleModalTitle").innerText = article.title;
				document.getElementById("articleModalAuthor").innerText = `Yazar : ${article.author} `;
				document.getElementById("articleModalCategory").innerText = `Kategori : ${article.category}`;
				document.getElementById("articleModalBody").innerText = article.information;
				document.getElementById("articleModalDate").innerText = `Oluşturulma Tarihi : ${article.date}`;

				document.getElementById("editArticle").onclick = () => {
					render.editArticle(article);
				};
				document.getElementById("deleteArticle").onclick = () => {
					dbManager.deleteArticle(article.id);
				};
			};
		});
	};
}
