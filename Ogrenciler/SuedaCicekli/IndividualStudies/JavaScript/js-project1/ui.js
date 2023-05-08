function UI() {

}
UI.prototype.addFilmToUI = function (newFilm) {
  // console.log(newFilm); //newFilm objesini consola yazdırdık
  //  <!-- <tr>
  //  <td><img src="" class="img-fluid img-thumbnail" alt=""></td>
  //  <td></td>
  //  <td></td>
  //  <td><a href="#" id="delete-film" class="btn btn-danger"></a></td>
  // </tr> -->
  const filmList = document.getElementById("films"); //tbody'i seçtik

  filmList.innerHTML += `
      <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" alt=""></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
      </tr>
 
 `;
}
//inputları temizlemek için bir fonksiyon oluşturuyoruz ve bunu addFilm fonksiyonunun içinde çağırıyoruz
UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";

} //ui objesine addFilmToUI fonksiyonunu ekledik ve içine newFilm objesini gönderdik

UI.prototype.displayMessages = function (message, type) {

  const cardBody = document.querySelector(".card-body"); //cord-body'i seçtik
  //Alert divini oluşturma
  const div = document.createElement("div"); //div oluşturduk
  div.className = `alert alert-${type} `; //div'e class ismi verdik
  div.textContent = message; //div'in içine mesajımızı yazdırdık

  cardBody.appendChild(div); //div'i card-body'e ekledik

  setTimeout(function () { //setTimeout fonksiyonu ile 1 saniye sonra alert divini sileceğiz
    div.remove();
  }, 1000);
}