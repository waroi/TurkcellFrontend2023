function hesapla(ilkSayi, ikinciSayi, islem) {
  let sonuc;

  switch (islem) {
    case "+":
      sonuc = ilkSayi + ikinciSayi;
      break;
    case "-":
      sonuc = ilkSayi - ikinciSayi;
      break;
    case "*":
      sonuc = ilkSayi * ikinciSayi;
      break;
    case "/":
      if (ikinciSayi === 0) {
        alert("Sıfıra bölme hatası!");
        return;
      }
      sonuc = ilkSayi / ikinciSayi;
      break;
    default:
      alert("Geçersiz işlem!");
      return;
  }

  alert("Sonuç: " + sonuc);
}

function hesapMakinesi() {
  let devam = "evet";

  while (devam.toLowerCase() === "evet") {
    const ilkSayi = parseFloat(prompt("Birinci sayıyı girin:"));
    const ikinciSayi = parseFloat(prompt("İkinci sayıyı girin:"));
    const islem = prompt("Yapmak istediğiniz işlemi seçin (+, -, *, /):");

    hesapla(ilkSayi, ikinciSayi, islem);
    devam = prompt("Başka bir işlem yapmak ister misiniz? (Evet/Hayır)");
  }
}
