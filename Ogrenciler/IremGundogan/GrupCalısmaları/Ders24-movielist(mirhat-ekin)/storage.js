function Storage() {}
Storage.prototype.addMovieStorage = function (newMovie) {
  let movies = this.getMoviesFromStorage();
  movies.push(newMovie);
  localStorage.setItem("movies", JSON.stringify(movies));
};

Storage.prototype.getMoviesFromStorage = function () {
  let movies;
  if (!localStorage.getItem("movies")) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }
  return movies;
};
