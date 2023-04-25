function HesapMakinesi(ilkSayi, ikinciSayi, islem) {
  let sonuc;
  let ilk = parseInt(ilkSayi);
  let ikinci = parseInt(ikinciSayi);
  switch (islem) {
    case "+":
      sonuc = ilk + ikinci;
      break;
    case "-":
      sonuc = ilk - ikinci;
      break;
    case "*":
      sonuc = ilk * ikinci;
      break;
    case "/":
      sonuc = ilk / ikinci;
      break;
  }
  return console.log(sonuc);
}

for (let i = 0; i < Infinity; i++) {
    let islemTuruSec = prompt(
        "\n**Kullanıcıdan alınacak iki sayı ile işlem yapmak istiyorsanız '1' yazın\n\n**Birden fazla değer ile işlem yapmak için '2' yazın\n --Örneğin: '2+5/10*2*(-12)'\n"
      );
  if (islemTuruSec == 1 || islemTuruSec == "1") {
    let islemYapilacakMi = prompt(
      "İşlem yapmak istiyorsanız 'Y veya y' istemiyorsanız 'N veya n' yazınız\n"
    );
    if (islemYapilacakMi == "Y" || islemYapilacakMi == "y") {
      let ilkSayi = prompt("İlk Sayıyı Girin\n");
      let ikinciSayi = prompt("İkinci Sayıyı Girin\n");
      let islem = prompt(
        "--Yapılacak işlemi seçiniz--\n Örneğin: toplama işlemi yapcaksanız '+' işareti yazın\n "
      );

      HesapMakinesi(ilkSayi, ikinciSayi, islem);
    } else if (islemYapilacakMi == "N" || islemYapilacakMi == "n") {
      console.log("Görüşmek üzere");
      break;
    } else {
      console.log("Lütfen geçerli bir değer giriniz\n");
    }
  } else if (islemTuruSec == 2 || islemTuruSec == "2") {
    let islemiYazin = prompt(
      "Yapılmasını istediğiniz işlemi buraya yazın\n"
    ).replace(/[^-()\d/*+.]/g, "");
    console.log(eval(islemiYazin));
  }
  
  else{
    console.log("Lütfen geçerli bir değer giriniz\n"); 
  }
}
