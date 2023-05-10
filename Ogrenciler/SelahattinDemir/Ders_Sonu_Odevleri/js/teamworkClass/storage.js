class LocalStorage {
  static checkedIdFromLS() {
    let id = localStorage.getItem("id") || 0;
    localStorage.setItem("id", id);
    return id;
  }
  static getFilmFromLocalStorage() {
    return JSON.parse(localStorage.getItem("films")) || [];
  }
  static saveFilmFromLocalStorage(films) {
    localStorage.setItem("films", JSON.stringify(films));
  }
  static deleteItemFromLocalStorage(id) {
    const film = document.getElementById(id);
    LocalStorage.deleteFromLocalStorage(film);
    film.remove();
  }
  static deleteFromLocalStorage(movie) {
    let films = LocalStorage.getFilmFromLocalStorage();
    films = films.filter((film) => film.id !== movie.id);
    LocalStorage.saveFilmFromLocalStorage(films);
  }
  static updateFilmFromLocalStorage(movie) {
    let films = LocalStorage.getFilmFromLocalStorage();
    films.forEach((film) => {
      if (film.id === movie.id) {
        Object.assign(film, movie);
      }
    });
    LocalStorage.saveFilmFromLocalStorage(films);
  }
}
