class Storage {
  static addMovieStorage(newMovie) {
    let movies = this.getMoviesFromStorage();
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  static getMoviesFromStorage() {
    let movies;
    if (!localStorage.getItem("movies")) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
  }
  static clearAllMoviesFromStorage() {
    localStorage.removeItem("movies");
  }
}
