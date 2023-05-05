function UI() {}
UI.prototype.addMovieToUI = function (newMovie) {
  /* <!-- <tr>
                                            <td><img src="" class="img-fluid img-thumbnail"></td>
                                            <td></td>
                                            <td></td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr> -->*/

  const movieList = document.getElementById("movies");
  movieList.innerHTML += `
    <tr>
        <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
        <td>${newMovie.name}</td>
        <td>${newMovie.director}</td>
        <td>${newMovie.release}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    `;
};
UI.prototype.clearInputs = function (
  material1,
  material2,
  material3,
  material4
) {
  material1.value = "";
  material2.value = "";
  material3.value = "";
  material4.value = "";
};
UI.prototype.displayMessages = function (message, type) {
  const cardBody = document.querySelector(".card-body");
  const div = document.createElement("div");
  div.className = `àlert alert-${type}`;
  div.textContent = message;
  cardBody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 1000);
};
