class UI {
  static addFilmToUI(newFilm) {
    const filmList = document.getElementById("films")
    filmList.innerHTML += `
        <tr>
                                            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                                            <td>${newFilm.title}</td>
                                            <td>${newFilm.director}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>
        `
  };

  static displayMessages(message, type) {
    const cardBody = document.querySelectorAll(".card-body")[0]
    const div = document.createElement("div")
    div.className = `alert alert-${type}`
    div.textContent = message

    cardBody.appendChild(div)

    setTimeout(() => {

      div.remove()

    }, 1500);
  };

  static clearInput(el1, el2, el3) {

    el1.value = ""
    el2.value = ""
    el3.value = ""
  }

  static deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove()

  }

  static loadAllFilms(films) {
    const filmList = document.getElementById("films")
    films.forEach(film => {
      filmList.innerHTML += `
            <tr>
                                            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                                            <td>${film.title}</td>
                                            <td>${film.director}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>`

    });

  }

  static clearAllFilmsFromUI() {
    const filmList = document.getElementById("films")
    while (filmList.firstElementChild !== null) {
      filmList.firstElementChild.remove()
    }
  }
}