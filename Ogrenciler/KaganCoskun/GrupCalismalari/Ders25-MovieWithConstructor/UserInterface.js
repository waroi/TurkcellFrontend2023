function UserInterface(){}

let movieUI = document.getElementById("movieUI");


UserInterface.prototype.addMovie = function () {
	let newMovie = getData();
	let localData;
	storage.getLocalStorage() ? (localData = storage.getLocalStorage()) : (localData = []);
	localData.push(newMovie);
	storage.setLocalStorage(localData);
	UI.addBox(newMovie);
	UI.clearForm();
  }

UserInterface.prototype.addBox=function(movie) {
	let box = movie.createBox();

	box.querySelector(".btn-danger").addEventListener("click", function () {
		box.remove();
    storage.deleteLocalStorage(movie.name);
	});
	box.querySelector(".btn-success").addEventListener("click", function () {
		UI.editMovie(movie);
	});

	movieUI.appendChild(box); 
}


UserInterface.prototype.editMovie = function(movie) {
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

  UserInterface.prototype.clearForm =  function() {
    document.forms["form"]["name"].value = "";
    document.forms["form"]["director"].value = "";
    document.forms["form"]["year"].value = "";
    document.forms["form"]["cover"].value = "";
  }
  
  UserInterface.prototype.loadUI = function () {
    let localData = storage.getLocalStorage();
    movieUI.innerHTML = "";
    localData.map((data) => UI.addBox(new Movie(data.name, data.director, data.year, data.cover)));
  }