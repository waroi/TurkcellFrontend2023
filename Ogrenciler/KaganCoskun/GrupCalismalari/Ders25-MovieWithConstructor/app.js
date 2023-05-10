let form = document.getElementById("form");
let movieUI = document.getElementById("movieUI");
let tempMovieData;
isEdit = false;

function submitForm(e) {
	e.preventDefault();
	isEdit ? editLocalStorage() : addMovie();
}

form.addEventListener("submit", submitForm);

function addMovie() {
	let newMovie = getData();
	let localData;
	getLocalStorage() ? (localData = getLocalStorage()) : (localData = []);
	localData.push(newMovie);
	setLocalStorage(localData);
	addBox(newMovie);
	clearForm();
}

function getData() {
	let name = document.getElementById("name").value;
	let director = document.getElementById("director").value;
	let year = document.getElementById("year").value;
	let cover = document.getElementById("cover").value;
	const newMovie = new Movie(name, director, year, cover);

	return newMovie;
}

function Movie(name, director, year, cover) {
	this.name = name;
	this.director = director;
	this.year = year;
	this.cover = cover;
}

Movie.prototype.createBox = function () {
	let cardWrap = document.createElement("div");
	cardWrap.className = "col-sm-6 col-md-4";
	let card = `<div class='card'>
	              <div class='mx-auto' style='width:100%; height:300px; '>
		              <img src='${this.cover}' class='card-img-top' alt='${this.cover}' style='width:100%; height:300px; '/>
                </div>
	              <div class='card-body'>
	                <h5 class='card-title'>${this.name}</h5>
	                <p class='card-text'>${this.director} - ${this.year}</p>
		                <div class='d-flex justify-content-center gap-3'>
		                  <button class='btn btn-success'>Edit</button>
		                  <button class='btn btn-danger'>Delete</button>
		                </div>
	              </div>
              </div>`;
	cardWrap.innerHTML = card;
	return cardWrap;
};

function addBox(movie) {
	let box = movie.createBox();

	box.querySelector(".btn-danger").addEventListener("click", function () {
		box.remove();
		deleteLocalStorage(movie.name);
	});
	box.querySelector(".btn-success").addEventListener("click", function () {
		editMovie(movie);
	});

	movieUI.appendChild(box);
}

function loadUI() {
	let localData = getLocalStorage();
	movieUI.innerHTML = "";
	localData.map((data) => addBox(new Movie(data.name, data.director, data.year, data.cover)));
}

document.addEventListener("DOMContentLoaded", loadUI);

function getLocalStorage() {
	return JSON.parse(localStorage.getItem("movieList"));
}

function setLocalStorage(localData) {
	localStorage.setItem("movieList", JSON.stringify(localData));
}

function deleteLocalStorage(name) {
	let localData = getLocalStorage();
	let index = localData.indexOf(localData.find((item) => item.name === name));
	localData.splice(index, 1);
	setLocalStorage(localData);
}

function editMovie(movie) {
	isEdit = true;
	document.forms["form"]["name"].value = movie?.name;
	document.forms["form"]["director"].value = movie?.director;
	document.forms["form"]["year"].value = movie?.year;
	document.forms["form"]["cover"].value = movie?.cover;

	document.forms["form"]["submitBtn"].classList.replace("btn-primary", "btn-success");
	document.forms["form"]["submitBtn"].innerHTML = "Save";

	tempMovieData = movie;
	window.scrollTo(0, 0);
}

function editLocalStorage() {
	isEdit = false;
	let newMovie = getData();
	let localData = getLocalStorage();
	let index = localData.indexOf(localData.find((item) => item.name === tempMovieData.name));
	localData[index] = newMovie;
	document.forms["form"]["submitBtn"].classList.replace("btn-success", "btn-primary");
	document.forms["form"]["submitBtn"].innerHTML = "Create";

	setLocalStorage(localData);
	clearForm();
	loadUI();
}

function clearForm() {
	document.forms["form"]["name"].value = "";
	document.forms["form"]["director"].value = "";
	document.forms["form"]["year"].value = "";
	document.forms["form"]["cover"].value = "";
}
