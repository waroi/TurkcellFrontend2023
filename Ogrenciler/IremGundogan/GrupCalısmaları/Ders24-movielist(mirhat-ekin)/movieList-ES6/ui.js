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
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Düzenle</a></td>
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
  // static editMovieUI(e) {
  //   const oldName =
  //     e.target.parentElement.parentElement.children[0].textContent;
  //   const oldDirector =
  //     e.target.parentElement.parentElement.children[1].innerHTML.split(": ")[1];
  //   const oldURL =
  //     e.target.parentElement.parentElement.parentElement.children[0].src;
  //   const oldRelease =
  //     e.target.parentElement.parentElement.children[2].textContent.split(
  //       ": "
  //     )[1];

  //   const newName = prompt(
  //     "Yeni film ismini giriniz.(Movies.json'dan yararlanabilirsiniz 😉)"
  //   );
  //   const newDirector = prompt("Yeni yönetmen adını giriniz.");
  //   const newURL = prompt("Yeni film URL'ini giriniz.");
  //   const newRelease = prompt(
  //     "Film çıkış tarihini giriniz.(YYYY-AA-GG formatında)"
  //   );

  //   const oldValue = [oldName, oldDirector, oldRelease, oldURL];
  //   const newValue = [newName, newDirector, newRelease, newURL];

  //   if (
  //     newURL == null ||
  //     newName == null ||
  //     newDirector == null ||
  //     newRelease == null
  //   ) {
  //     return;
  //   } else {
  //     LStorage.editMovieStorage(oldValue, newValue);

  //     e.target.parentElement.parentElement.parentElement.innerHTML = `

  //             <img class='card-img-top' width='100%' height='400' src='${newURL}'></img>
  //             <div class='card-body'>
  //               <h4 class='text-center name'>${newName}</h4>
  //               <p class='card-text'>Director: ${newDirector}</p>
  //               <p class='card-text'>Release Year: ${newRelease}</p>
  //               <div class='d-flex space-between  justify-content-between mt-2'>
  //                 <button type='button' class='btn btn-sm btn-outline-primary fs-6 py-1 px-4' id='edit-movie'>
  //                   Edit
  //                 </button>
  //                 <button type='button' class='btn btn-sm btn-outline-danger fs-6 py-1 px-4' id='delete-movie'>
  //                   Delete
  //                 </button>
  //               </div>
  //             </div>
  // `;
  //   }
  // }
}
