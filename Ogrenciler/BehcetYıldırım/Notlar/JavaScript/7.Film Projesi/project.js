const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");

const cardBody = document.querySelectorAll(".card-body")[1];


// UI Başlatma
const ui = new UI();

// Storage objesi üretme

const storage = new Storage();

// Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",loadAllFilms);

    cardBody.addEventListener("click",deleteFilm);
}

function addFilm(e){
    // Kullanıcının girdiği değerleri alıyoruz.
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title ==="" || director==="" || url ==""){
        // Hata
    }
    else{
        // Yeni film oluşturma
        // Film objesinden kullanıcının girdiği değerler ile bir obje oluşturuyoruz.
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);// Burada 8.satırda UI objesinden oluşturduğumuz "ui" objesinde, yine oluşturduğumuz ui objesi içindeki fonksiyona "newFilm"'i yolluyoruz.
        storage.addFilmToStorage(newFilm);
    }

    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function loadAllFilms(){
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilmsFromStorage(films);
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
}