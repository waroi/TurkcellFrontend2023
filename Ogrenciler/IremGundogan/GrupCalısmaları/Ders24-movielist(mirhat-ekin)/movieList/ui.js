function UI() {}
UI.prototype.addMovieToUI = function (newMovie) {
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
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Düzenle</a></td>
    </tr>
    `;
};
UI.prototype.clearInputs = function (element1, element2, element3, element4) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
  element4.value = "";
};
UI.prototype.displayMessages = function (message, type) {
  const cardbody = document.querySelector(".card-body");
  const div = document.createElement("div");
  div.className = `àlert alert-${type}`;
  div.textContent = message;
  cardbody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 1000);
};
UI.prototype.loadAllMovies = function (movies) {
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
};
UI.prototype.deleteMovieFromUI = function (element) {
  console.log(element.parentElement);
  element.parentElement.parentElement.remove();
};
UI.prototype.clearAllMoviesFromUI = function () {
  const movieList = document.getElementById("movies");
  while (movieList.firstElementChild !== null) {
    movieList.firstElementChild.remove();
  }
};

UI.prototype.editMovieUI = function (element) {
  const oldName = e.target.parentElement.children[1].textContent;
  const oldDirector = e.target.parentElement.children[2].innerHTML.split(': ')[1];
  const oldUrl = e.target.parentElement.children[0].src;
  const oldRelease = e.target.parentElement.children[3].textContent.split(': ')[1];

  const newName = prompt("Yeni Film Adı Giriniz", oldName);
  const newDirector = prompt("Yeni Yönetmen Adı Giriniz", oldDirector);
  const newUrl = prompt("Yeni Url Giriniz", oldUrl);
  const newRelease = prompt("Yeni Yıl Giriniz", oldRelease);

  const newMovie = [newName, newDirector, newUrl, newRelease];
  const oldMovie = [oldName, oldDirector, oldUrl, oldRelease];

  if (newName == null || newDirector == null || newUrl == null || newRelease == null) {
    return;
  }else {
    storage.editMovieFromStorage(oldMovie, newMovie);

  }

}
