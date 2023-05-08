const form = document.getElementById("film-form"); //form seçme
const titleElement = document.querySelector("#title"); //input title seçme
const directorElement = document.querySelector("#director"); //input director seçme
const urlElement = document.querySelector("#url"); //input url seçme 

//Ui Objesini Başlatma

const ui = new UI();

//Storage Objesini üretme

const storage = new Storage();
//Tüm eventleri yüklemek için fonksiyon

let allFilms = getAllFilms();
allFilms.forEach(function (film) {
  ui.addFilmToUI(film);
})

eventListener();

function eventListener() {
  form.addEventListener("submit", addFilm); //submit olduğunda addFilm fonksiyonunu çalıştır
}

//addFilm fonksiyonu

function addFilm(e) {
  //sectiğimiz üç elementin title, director ve url değerlerini almamız gerekiyor
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //hata
    ui.displayMessages("Tüm alanları doldurunuz...", "danger"); //ui objesinden displayMessages fonksiyonunu çağırıyoruz ve içine mesajımızı ve type'ımızı gönderiyoruz
  } else { //eğer hata vermiyorsa film constructurdan filmimizi oluşturacağız.
    //yeni film


    const newFilm = new Film(title, director, url) //obje oluşturuyoruz ve içine title, director ve url değerlerini atıyoruz

    // localstorage içine yeni film eklenmeli

    // localstorage içindeki değerler döngü ile addfilmToUi fonksiyonuna gönderilmeli.


    //arayüze film ekleme
    // ui.addFilmToUI(newFilm); //ui objesinden addFilmToUI fonksiyonunu çağırıyoruz ve içine newFilm objesini gönderiyoruz
    addFilmToStorage(newFilm); //storage objesinden addFilmToStorage fonksiyonunu çağırıyoruz ve içine newFilm objesini gönderiyoruz
    ui.displayMessages("Film başarıyla eklendi...", "success"); //ui objesinden displayMessages fonksiyonunu çağırıyoruz ve içine mesajımızı ve type'ımızı gönderiyoruz
  }

  //inputları temizlemek için ui.js te yazdığımız fonksiyonu çağırıyoruz
  ui.clearInputs(titleElement, urlElement, directorElement);
  e.preventDefault(); //sayfa yenilenmesini engellemek için , yani formun yenilenmesini engellemek için
}

function addFilmToStorage(newFilm) {
  // Mevcut verileri al
  let existingFilms = getAllFilms();
  // Yeni filmi ekle
  existingFilms.push(newFilm);
  // Değişiklikleri localStorage'a kaydet
  localStorage.setItem("films", JSON.stringify(existingFilms)); //localstorage'a film eklemek için setItem kullanıyoruz ve içine key ve value değerlerini gönderiyoruz
}

function getAllFilms() {
  let existingFilms = JSON.parse(localStorage.getItem("films")) || [];
  return existingFilms;
}