class Process {
 static degistir(id, kitaplar, ui) {
  const kitap = kitaplar.find((kitap) => kitap.id == id);
  ui.degistirmekIcinTiklananKitap = kitap;
  console.log(ui);
  kitapResmi.value = kitap.url;
  kitapYili.value = kitap.yil;
  kitapAdi.value = kitap.ad;
  kitapTuru.value = kitap.tur;
  kitapPuani.value = kitap.puan;
  kitapAciklamasi.value = kitap.aciklama;
  ekleButton.classList.toggle('d-none');
  uygulaButton.classList.toggle('d-none');
 }


 static uygula(ui) {
  const kitap = ui.degistirmekIcinTiklananKitap;
  kitap.url = kitapResmi.value;
  kitap.yil = kitapYili.value;
  kitap.ad = kitapAdi.value;
  kitap.tur = kitapTuru.value;
  kitap.puan = kitapPuani.value;
  kitap.aciklama = kitapAciklamasi.value;
  uygulaButton.classList.toggle('d-none');
  ekleButton.classList.toggle('d-none');
 }
}


export default Process;
