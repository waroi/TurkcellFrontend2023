const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");


// UI Başlatma
const ui = new UI();

// Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
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
    }




    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}
