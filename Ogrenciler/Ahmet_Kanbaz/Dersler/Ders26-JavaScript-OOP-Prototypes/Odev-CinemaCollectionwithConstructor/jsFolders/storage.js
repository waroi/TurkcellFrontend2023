function Storage() {}

//Local Storage'da bulunan filmleri alma
Storage.prototype.getMoviesFromLocalStorage = function() {
  let getMovies;
  if(localStorage.getItem('movies') === null) {
    getMovies = [];
  }
  else {
    getMovies = JSON.parse(localStorage.getItem('movies'));
  }
  return getMovies;
}

//Local Storage'a film ekleme
Storage.prototype.setMovies2LocalStorage = function(movie) {
  let setMovies = storage.getMoviesFromLocalStorage();
  setMovies.push(movie);
  localStorage.setItem('movies', JSON.stringify(setMovies));
}

//Local Storage'da bulunan filmleri ekranda gösterme
Storage.prototype.showMoviesFromLocalStorage = function() {
  let showMovies = storage.getMoviesFromLocalStorage();
  showMovies.forEach((movie) => {
    ui.createMovieCard(movie);
  })
}

Storage.prototype.deleteMovieFromLocalStorage = function(deleteMovieId) {
  let deleteMovieLocal = storage.getMoviesFromLocalStorage();
  for(let i = 0; i < deleteMovieLocal.length; i++) {
    if(deleteMovieLocal[i].id = deleteMovieId) {
      deleteMovieLocal.splice(i, 1);
    }
  }

  localStorage.setItem('movies', JSON.stringify(deleteMovieLocal));
}