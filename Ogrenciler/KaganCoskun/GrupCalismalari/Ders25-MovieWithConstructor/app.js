const UI = new UserInterface();
const storage = new StorageConstructor();

let form = document.getElementById("form");
isEdit = false;

function submitForm(e) {
	e.preventDefault();
	isEdit ? storage.editLocalStorage() : UI.addMovie();
}

form.addEventListener("submit", submitForm);

function getData() {
	let name = document.getElementById("name").value;
	let director = document.getElementById("director").value;
	let year = document.getElementById("year").value;
	let cover = document.getElementById("cover").value;
	const newMovie = new Movie(name, director, year, cover);

	return newMovie;
}

document.addEventListener("DOMContentLoaded", UI.loadUI);


