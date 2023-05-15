let form = document.getElementById("form");
let movieUI = document.getElementById("movieUI");
let saveBtn = document.getElementById("saveBtn");
let createBtn = document.getElementById("createBtn");
let tempMovieData;

form.removeAttribute('novalidate');

createBtn.addEventListener("click", addMovie);
 saveBtn.addEventListener("click", editLocalStorage)


function getData() {
	// const newMovie = Object.fromEntries(new FormData(e.target).entries());
	let name = document.getElementById("name").value;
	let director = document.getElementById("director").value;
	let year = document.getElementById("year").value;
	let cover = document.getElementById("cover").value;
	const newMovie = {name, director, year, cover}
	return newMovie;
}

function addMovie(e) {
	let newMovie = getData()
	let localData;
	getLocalStorage() ? (localData = getLocalStorage()) : (localData = []);
	localData.push(newMovie);
	setLocalStrorage(localData);
	addBox(newMovie);
	e.preventDefault();
}

function addBox(movie) {
	let card = `<div class='card'>
					<div class='mx-auto' style='width:100%; height:300px; '>
                  		<img src='${movie.cover}' class='card-img-top' alt='${movie.cover}' style='width:100%; height:300px; '/>
										</div>
                    <div class='card-body'>
                      <h5 class='card-title'>${movie.name}</h5>
                      <p class='card-text'> ${movie.director} - ${movie.year}</p>
                        <div class='d-flex justify-content-center gap-3'>
                          <button class='btn btn-success' id='e-${movie.name}'>Edit</button>
                          <button class='btn btn-danger' id='d-${movie.name}'>Delete</button>
                        </div>
                      </div>
                </div>`;
	let cardWrap = document.createElement("div");
	cardWrap.className = "col-sm-6 col-md-4";
	cardWrap.innerHTML = card;
	movieUI.appendChild(cardWrap);

	let deleteBtn = document.getElementById(`d-${movie.name}`);
	deleteBtn.addEventListener("click", function () {
		cardWrap.remove();
		deleteLocalStorage(movie.name);
	});

	let editBtn = document.getElementById(`e-${movie.name}`);
	editBtn.addEventListener("click", function () {
		editMovie(movie);
	});
}

function loadUI() {
	let localData = getLocalStorage();
	localData.map((data) => addBox(data));
}

document.addEventListener("DOMContentLoaded", loadUI);

function getLocalStorage() {
	return JSON.parse(localStorage.getItem("movieList"));
}

function setLocalStrorage(localData) {
	localStorage.setItem("movieList", JSON.stringify(localData));
}

function deleteLocalStorage(name) {
	let localData = getLocalStorage();
	let index = localData.indexOf(localData.find((item) => item.name === name));
	localData.splice(index, 1);
	setLocalStrorage(localData);
}

function editMovie(movie) {
	document.forms["form"]["name"].value = movie.name;
	document.forms["form"]["director"].value = movie.director;
	document.forms["form"]["year"].value = movie.year;
	document.forms["form"]["cover"].value = movie.cover;

	document.forms["form"]["saveBtn"].classList.replace("d-none", "d-block");
	document.forms["form"]["createBtn"].classList.replace("d-block", "d-none");

	tempMovieData = movie;
}

function editLocalStorage() {
	let newMovie = getData()
	let localData = getLocalStorage();
	let index = localData.indexOf(localData.find((item) => item.name === tempMovieData.name));
	localData[index] = newMovie;
	document.forms["form"]["saveBtn"].classList.replace("d-block", "d-none");
	document.forms["form"]["createBtn"].classList.replace("d-none", "d-block");
	
	setLocalStrorage(localData);
	window.location.reload();

}

