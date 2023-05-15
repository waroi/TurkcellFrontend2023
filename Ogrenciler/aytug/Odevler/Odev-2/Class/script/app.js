const render = new Render();
const storageManager = new StorageCtor();

let form = document.getElementById("bookForm");

document.getElementById("closeBookModal").addEventListener("click", () => {
	document.getElementById("bookModal").close();
});

document.getElementById("newBook").addEventListener("click", () => {
	document.forms["bookForm"].setAttribute("data-modal-type", "create");
});

document.getElementById("bookSearch").addEventListener("keyup", () => {
	render.filterBooks();
});

render.sortBooks(); // initial sort
Array.from(document.querySelectorAll("input[name=sort]")).forEach((inp) => {
	inp.addEventListener("click", () => {
		render.sortBooks();
	});
});

let cancelBtns = Array.from(document.getElementsByClassName("cancelBtn"));
cancelBtns.forEach((cancelBtn) => cancelBtn.addEventListener("click", () => render.clearForm()));

function submitForm(e) {
	e.preventDefault();
	document.forms["bookForm"].getAttribute("data-modal-type") === "edit"
		? storageManager.editLocalStorage(+document.forms["bookForm"].getAttribute("data-book-id"))
		: render.createBook();
	document.querySelector("button[data-bs-dismiss=modal]").click();
	render.sortBooks();
}

form.addEventListener("submit", submitForm);

function getFormData() {
	const name = document.getElementById("name").value;
	const author = document.getElementById("author").value;
	const category = document.getElementById("category").value;
	const year = document.getElementById("year").value;
	const summary = document.getElementById("summary").value;
	const cover = document.getElementById("cover").value;

	return { name, author, category, year, cover, summary };
}

document.addEventListener("DOMContentLoaded", render.loadUI);

window.addEventListener("resize", () => {
	const filterCategory = document.getElementById("panelsStayOpen-collapseOne");
	const filterAuthor = document.getElementById("panelsStayOpen-collapseTwo");
	const sortMethod = document.getElementById("panelsStayOpen-collapseThree");
	const screenWidth = window.innerWidth;

	if (screenWidth <= 992) {
		filterCategory.classList.remove("show");
		filterAuthor.classList.remove("show");
		sortMethod.classList.remove("show");
	} else {
		filterCategory.classList.add("show");
		filterAuthor.classList.add("show");
		sortMethod.classList.add("show");
	}
});
