const form = document.getElementById("movie-form");
const nameElement = document.querySelector("#name");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const releaseElement = document.querySelector("#release");

//uı Objesinİ Başlatma
const ui = new UI();

//Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addMovie);
}
function addMovie(e) {
  e.preventDefault();

  const name = nameElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  const release = releaseElement.value;

  if (name === "" || director === "" || url === "" || release === "") {
    //Hata
    ui.displayMessages("Lütfen boş alan bırakmayınız!", "danger");
  } else {
    //yeni filmm
    const newMovie = new Movie(name, director, url, release);
    ui.addMovieToUI(newMovie); //arayüze film ekle
  }
  ui.clearInputs(nameElement, urlElement, directorElement, releaseElement);
}
