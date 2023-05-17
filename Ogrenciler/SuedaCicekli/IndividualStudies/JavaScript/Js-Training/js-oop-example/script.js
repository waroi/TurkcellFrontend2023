ui = new UI();

window.onload = function () {
  ui.listenFormSubmit(); // Tıklanan formu dinle ve filmleri ls'ye at
  ui.showFilmsToUI(); //ls'deki filmleri göster
}