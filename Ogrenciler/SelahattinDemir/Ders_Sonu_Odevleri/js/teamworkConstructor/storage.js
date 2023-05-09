function LocalStorage() {
  this.saveFilmToLocalStorage = function (films) {
    localStorage.setItem("films", JSON.stringify(films));
  };
  this.updateFilmFromLocalStorage = function (movie) {
    let films = storage.getFilmFromLocalStorage();
    films.map((film) => {
      if (film.id == movie.id) {
        //filme gelen değerleri ata
        film.kind = movie.kind;
        film.year = movie.year;
        film.director = movie.director;
        film.imageUrl = movie.imageUrl;
        film.title = movie.title;
        film.score = movie.score;
      }
    });
    storage.saveFilmToLocalStorage(films);
  };
}

LocalStorage.prototype.getFilmFromLocalStorage = function () {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};

LocalStorage.prototype.deleteFilmFromLocalStorage = function (movie) {
  let films = storage.getFilmFromLocalStorage();
  films.forEach((film, index) => {
    if (film.id == movie.id) {
      films.splice(index, 1);
    }
  });
  storage.saveFilmToLocalStorage(films);
};

LocalStorage.prototype.deleteItemFromLocalStorage = function (id) {
  let film = document.getElementById(id);
  deleteFilmToLocalStorage(film);
  film.remove();
};

LocalStorage.prototype.checkedIdFromLS = function () {
  let id;
  if (localStorage.getItem("id") === null) {
    localStorage.setItem("id", 0);
    id = 0;
  } else {
    id = localStorage.getItem("id");
  }
  return id;
};
