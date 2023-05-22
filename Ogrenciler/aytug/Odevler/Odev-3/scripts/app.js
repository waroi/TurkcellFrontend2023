const render = new Render();
const dbManager = new DbService();
const request = new Request("http://localhost:3000/blogs");

// listeners
document.getElementById("newArticle").addEventListener("click", () => {
	document.forms["articleForm"].setAttribute("data-modal-type", "create");
});
document.getElementById("articleSearch").addEventListener("keyup", () => {
	render.filterArticles();
});
document.getElementById("articleForm").addEventListener("submit", submitForm);
document.getElementById("newArticle").addEventListener("click", () => {
	document.forms["articleForm"]["date"].value = new Date().toLocaleString();
});
document.addEventListener("DOMContentLoaded", render.loadUI);
document.addEventListener("DOMContentLoaded", render.createNews);

Array.from(document.getElementsByClassName("cancelBtn")).forEach((cancelBtn) =>
	cancelBtn.addEventListener("click", () => render.clearForm())
);

// initial sort of articles
Array.from(document.querySelectorAll("input[name=sort]")).forEach((inp) => {
	inp.addEventListener("click", () => {
		render.loadUI();
	});
});

// submit form action
function submitForm(e) {
	e.preventDefault();
	document.forms["articleForm"].getAttribute("data-modal-type") === "edit"
		? dbManager.editArticle(+document.forms["articleForm"].getAttribute("data-article-id"), getFormData())
		: render.createArticle();
	// ? dbManager.updateArticle(+document.forms["articleForm"].getAttribute("data-article-id"))
	document.querySelector("button[data-bs-dismiss=modal]").click();
}

// get blog data from create blog form
function getFormData() {
	const title = document.getElementById("title").value;
	const information = document.getElementById("information").value;
	const author = document.getElementById("author").value;
	const date = document.getElementById("date").value;
	const category = document.getElementById("category").value;
	const cover = document.getElementById("cover").value;

	return { title, information, author, date, category, cover };
}
