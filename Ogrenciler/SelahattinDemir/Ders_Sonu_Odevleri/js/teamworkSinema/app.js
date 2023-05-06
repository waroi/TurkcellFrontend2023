const form = document.querySelector("#film-form");
const filmList = document.querySelector("#film-list");

// Resim URL'si validasyonu
function isValidImageUrl(url) {
  // Geçerli bir URL mi diye kontrol etme
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }

  // Başka bir yöntem olarak, resim URL'sinin dosya uzantısına bakabiliriz
  /*
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  return allowedExtensions.test(url);
  */
}

// Form gönderildiğinde
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Kullanıcı girdilerini al
  const filmName = document.querySelector("#film-name").value;
  const director = document.querySelector("#director").value;
  const year = document.querySelector("#year").value;
  const kind = document.querySelector("#kind").value;
  const image = document.querySelector("#image").value;

  // Form validasyonları
  if (!filmName) {
    document.getElementById("filmNameError").innerHTML =
      "Lütfen bir film adı girin.";
    return;
  } else if (!director) {
    document.getElementById("directorError").innerHTML =
      "Lütfen bir yönetmen adı girin.";
    return;
  } else if (!kind) {
    document.getElementById("kindError").innerHTML =
      "Lütfen bir tür adı girin.";
    return;
  } else if (!year || year < 1887 || year > 2024) {
    document.getElementById("yearError").innerHTML =
      "Lütfen geçerli bir yıl girin.";
    return;
  } else if (!image || !isValidImageUrl(image)) {
    document.getElementById("imageError").innerHTML =
      "Lütfen geçerli bir url girin.";
    return;
  } else {
    document.getElementById("filmNameError").innerHTML = "";
    document.getElementById("directorError").innerHTML = "";
    document.getElementById("kindError").innerHTML = "";
    document.getElementById("yearError").innerHTML = "";
    document.getElementById("imageError").innerHTML = "";
  }

  // Film objesi oluştur
  const film = {
    filmName,
    director,
    year,
    kind,
    image,
  };

  // Film objesini kart olarak ekle
  filmAdd(film);

  // Formu temizle
  form.reset();

  // Validasyon mesajlarını temizle
  document.querySelectorAll(".error").forEach((element) => {
    element.innerHTML = "";
  });

  // Film objesini local storage'a kaydet
  filmSaveLS(film);
});

// Film kartı oluştur ve listeye ekle
function filmAdd(film) {
  // Film kartını oluştur
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = film.image;
  card.appendChild(image);

  const content = document.createElement("div");
  content.classList.add("content");
  card.appendChild(content);

  const title = document.createElement("h3");
  title.textContent = film.filmName;
  content.appendChild(title);

  const director = document.createElement("p");
  director.textContent = `Yönetmen: ${film.director}`;
  content.appendChild(director);

  const year = document.createElement("p");
  year.textContent = `Yıl: ${film.year}`;
  content.appendChild(year);

  const kind = document.createElement("p");
  kind.textContent = `Tür: ${film.kind}`;
  content.appendChild(kind);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Sil";
  deleteBtn.addEventListener("click", () => {
    filmDeleteLS(film);
    card.remove();
  });
  content.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Düzenle";
  editBtn.addEventListener("click", () => {
    filmEdit(film, card);
  });
  content.appendChild(editBtn);

  // Film kartını listeye ekle
  filmList.appendChild(card);
}

// Local storage'dan filmleri yükle
document.addEventListener("DOMContentLoaded", () => {
  let films = filmBringLS();
  films.forEach((film) => {
    filmAdd(film);
  });
});

// Film objesini local storage'a kaydet
function filmSaveLS(film) {
  let films = filmBringLS();
  films.push(film);
  localStorage.setItem("films", JSON.stringify(films));
}

// Local storage'dan filmleri getir
function filmBringLS() {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
}

// Film objesini local storage'dan sil
function filmDeleteLS(film) {
  let films = filmBringLS();
  films.forEach((f, index) => {
    if (f.filmName === film.filmName) {
      films.splice(index, 1);
    }
  });
  localStorage.setItem("films", JSON.stringify(films));
}

// Film objesini düzenleme
function filmEdit(film, card) {
  // Eski film objesini local storage'dan sil
  filmDeleteLS(film);

  // Film kartındaki bilgileri formda göster
  const filmName = document.querySelector("#film-name");
  const director = document.querySelector("#director");
  const year = document.querySelector("#year");
  const kind = document.querySelector("#kind");
  const image = document.querySelector("#image");

  filmName.value = film.filmName;
  director.value = film.director;
  year.value = film.year;
  kind.value = film.kind;
  image.value = film.image;

  // Kartı sil
  card.remove();
}
