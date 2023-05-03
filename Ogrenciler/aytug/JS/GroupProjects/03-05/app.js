let form = document.getElementById("form");
let movieUI = document.getElementById("movieUI");

form.addEventListener("submit", getData);

function getData(e) {
	const newMovie = Object.fromEntries(new FormData(e.target).entries());
	e.preventDefault();
	addMovie(newMovie);
}

function addMovie(newMovie) {
	let localData;
	getLocalStorage() ? (localData = getLocalStorage()) : (localData = []);
	localData.push(newMovie);
	setLocalStrorage(localData);
	addBox(newMovie);
}

function addBox(movie) {
	let card = `<div class='card'>
                  <img src='${movie.cover}' class='card-img-top' alt='${movie.cover}' />
                    <div class='card-body'>
                      <h5 class='card-title'>${movie.name}</h5>
                      <p class='card-text'> ${movie.director}/${movie.year}</p>
                        <div class='d-flex justify-content-center gap-3'>
                          <button class='btn btn-success' id='e-${movie.name}'>Edit</button>
                          <button class='btn btn-danger' id='d-${movie.name}'>Delete</button>
                        </div>
                      </div>
                </div>`;
	let cardWrap = document.createElement("div");
	cardWrap.className = "col-sm-12 col-md-6";
	cardWrap.innerHTML = card;
	// let deleteBtn = document.getElementById(`d-asdasd`);
	// console.log(deleteBtn);
	// deleteBtn &&
	// 	deleteBtn.addEventListener("click", function () {
	// 		console.log("sildi");
	// 		cardWrap.remove();
	// 	});
	movieUI.appendChild(cardWrap);
}

function loadUI() {
	let localData = getLocalStorage();
	localData.map((data) => addBox(data));
}

document.addEventListener("DOMContentLoaded", loadUI);

function deleteMovie(movie) {}

function getLocalStorage() {
	return JSON.parse(localStorage.getItem("movieList"));
}

function setLocalStrorage(localData) {
	localStorage.setItem("movieList", JSON.stringify(localData));
}
