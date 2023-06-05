class UI {
  static addMovieToUI(newMovie) {
    /* <!-- <tr>
                                            <td><img src="" class="img-fluid img-thumbnail"></td>
                                            <td></td>
                                            <td></td>
                                            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr> -->*/

    const movieList = document.getElementById("movies");
    movieList.innerHTML += `
    <tr>
        <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
        <td>${newMovie.name}</td>
        <td>${newMovie.director}</td>
        <td>${newMovie.release}</td>
        <td><a href="#" id = "delete-movie" class = "btn btn-danger">Filmi Sil</a></td>
          <td><a href="#" id = "edit-movie" class = "btn btn-danger">Filmi Düzenle</a></td>
    </tr>
    `;
  }
  static clearInputs(element1, element2, element3, element4) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
    element4.value = "";
  }
  static displayMessages(message, type) {
    const cardbody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `àlert alert-${type}`;
    div.textContent = message;
    cardbody.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1000);
  }
  static loadAllMovies(movies) {
    const movieList = document.getElementById("movies");
    movies.forEach(function (movie) {
      movieList.innerHTML += ` <tr>
        <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
        <td>${movie.name}</td>
        <td>${movie.director}</td>
        <td>${movie.release}</td>
        <td><a href="#" id = "delete-movie" class = "btn btn-danger">Filmi Sil</a></td>
          <td><a href="#" id = "edit-movie" class = "btn btn-danger">Filmi Düzenle</a></td>
          
    </tr>`;
    });
  }
  static deleteMovieFromUI(element) {
    console.log(element.parentElement);
    element.parentElement.parentElement.remove();
  }
  static clearAllFilmsFromUI() {
    const movieList = document.getElementById("movies");
    while (movieList.firstElementChild !== null) {
      movieList.firstElementChild.remove();
    }
  }
}
