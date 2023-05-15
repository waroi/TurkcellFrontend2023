let movieUI = document.getElementById("movieUI");
let tempMovieData;


class Movie{
    constructor(name, director, year, cover){
    this.name = name;
    this.director = director;
    this.year = year;
    this.cover = cover;
  }
  createBox = function () {
    let cardWrap = document.createElement("div");
    cardWrap.className = "col-sm-6 col-md-4";
    let card = `<div class='card'>
      <div class='mx-auto' style='width:100%; height:300px; '>
            <img src='${this.cover}' class='card-img-top' alt='${this.cover}' style='width:100%; height:300px; '/></div>
      <div class='card-body'>
        <h5 class='card-title'>${this.name}</h5>
        <p class='card-text'> ${this.director} - ${this.year}</p>
          <div class='d-flex justify-content-center gap-3'>
            <button class='btn btn-success'>Edit</button>
            <button class='btn btn-danger'>Delete</button>
          </div>
        </div>
  </div>`;
    cardWrap.innerHTML = card;
    return cardWrap;
  };
}
  
  


class StorageConstructor{
    static getLocalStorage = function () {
        return JSON.parse(localStorage.getItem("movieList"));
      }

    static setLocalStorage = function (localData) {
        localStorage.setItem("movieList", JSON.stringify(localData));
      }

      static deleteLocalStorage = function (name) {
        let localData = storage.getLocalStorage();
        let index = localData.indexOf(localData.find((item) => item.name === name));
        localData.splice(index, 1);
        storage.setLocalStorage(localData);
      }

    static editLocalStorage = function () {
        isEdit=false;
      let newMovie = getData();
      let localData = storage.getLocalStorage();
      let index = localData.indexOf(
        localData.find((item) => item.name === tempMovieData.name)
      );
      localData[index] = newMovie;
      document.forms["form"]["submitBtn"].classList.replace("btn-success","btn-primary");
      document.forms["form"]["submitBtn"].innerHTML = "Create";
    
    //   StorageConstructor.prototype.setLocalStorage(localData);
     this.setLocalStorage(localData);//Buraya Bakılıcak

      UI.clearForm()
      UI.loadUI();
    }
}

  

class UserInterface{
    static addMovie = function () {
	let newMovie = getData();
	let localData;
	storage.getLocalStorage() ? (localData = storage.getLocalStorage()) : (localData = []);
	localData.push(newMovie);
	storage.setLocalStorage(localData);
	UI.addBox(newMovie);
	UI.clearForm();
  }

  static addBox=function(movie) {
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

static  editMovie = function(movie) {
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

  static clearForm =  function() {
    document.forms["form"]["name"].value = "";
    document.forms["form"]["director"].value = "";
    document.forms["form"]["year"].value = "";
    document.forms["form"]["cover"].value = "";
  }
  static  loadUI = function () {
    let localData = storage.getLocalStorage();
    movieUI.innerHTML = "";
    localData.map((data) => UI.addBox(new Movie(data.name, data.director, data.year, data.cover)));
  }


}