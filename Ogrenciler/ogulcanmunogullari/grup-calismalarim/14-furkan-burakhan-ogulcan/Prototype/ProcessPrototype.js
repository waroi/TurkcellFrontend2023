function Process() {}

Process.prototype.degistir = function (id, filmler, ui) {
 const film = filmler.find((film) => film.id == id);
 ui.degistirmekIcinTiklananFilm = film;
 console.log(ui);
 filmResmi.value = film.url;
 filmYili.value = film.yil;
 filmAdi.value = film.ad;
 filmTuru.value = film.tur;
 filmPuani.value = film.puan;
 filmAciklamasi.value = film.aciklama;
 ekleButton.classList.toggle('d-none');
 uygulaButton.classList.toggle('d-none');
};
Process.prototype.uygula = function (ui) {
 const film = ui.degistirmekIcinTiklananFilm;
 film.url = filmResmi.value;
 film.yil = filmYili.value;
 film.ad = filmAdi.value;
 film.tur = filmTuru.value;
 film.puan = filmPuani.value;
 film.aciklama = filmAciklamasi.value;
 uygulaButton.classList.toggle('d-none');
 ekleButton.classList.toggle('d-none');
};

export default Process;
