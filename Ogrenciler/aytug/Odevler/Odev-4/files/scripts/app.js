const render = new Render();
const dbManager = new DbService();
const productRequest = new Request("http://localhost:3000/products");
const basketRequest = new Request("http://localhost:3000/basket");
const basket = new Basket();

// listeners
document.getElementById("newProduct").addEventListener("click", () => {
	document.forms["productForm"].setAttribute("data-modal-type", "create");
});
document.getElementById("searchProduct").addEventListener("keyup", () => {
	render.filterProducts();
});
document.getElementById("checkoutBasket").addEventListener("click", () => {
	basket.checkoutBasket();
});
document.getElementById("productForm").addEventListener("submit", submitForm);
document.addEventListener("DOMContentLoaded", render.loadUI);

Array.from(document.getElementsByClassName("cancelBtn")).forEach((cancelBtn) =>
	cancelBtn.addEventListener("click", () => render.clearForm())
);

// initial sort of products
Array.from(document.querySelectorAll("input[name=sort]")).forEach((inp) => {
	inp.addEventListener("click", () => {
		render.loadUI();
	});
});

// submit form action
function submitForm(e) {
	e.preventDefault();
	document.forms["productForm"].getAttribute("data-modal-type") === "edit"
		? dbManager.editProduct(+document.forms["productForm"].getAttribute("data-product-id"), getFormData())
		: render.createProduct();
	document.querySelector("button[data-bs-dismiss=modal]").click();
}

// get blog data from create blog form
function getFormData() {
	const name = document.getElementById("name").value;
	const category = document.getElementById("category").value;
	const price = document.getElementById("price").value;
	const inStock = document.getElementById("inStock").value;
	const image = document.getElementById("image").value;
	const description = document.getElementById("description").value;

	return { name, category, price, inStock, image, description };
}

// function getHostName() {
// 	console.log(window.location.hostname);
// 	return window.location.hostname;
// }

// getHostName();
