const number = Number(prompt("Bir sayı giriniz"));
let secenek = Number(prompt("Lütfen bir işlem seçiniz: \n 1-Faktoriyel \n 2-Asal mı değil mi  \n 3-Çift mi Tek mi \n 4-Mükemmel Sayı"));

function islemler() {
  switch (secenek) {
    case 1:
      alert(faktoriyel(number));
      break;
    case 2:
      alert(asal(number));
      break;
    case 3:
      alert(ciftTek(number));
      break;
    case 4:
      mukemmel(number);
      break;
    default:
      secenek = Number(prompt("Lütfen geçerli bir işlem seçiniz: \n 1-Faktoriyel \n 2-Asal mı değil mi  \n 3-Çift mi Tek mi \n 4-Mükemmel Sayı"));

  }
}

function faktoriyel(number) {
  let sonuc = 1;
  for (let i = number; i > 0; i--) {
    sonuc *= i;
  }
  return sonuc;
}

function asal(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return "Asal değildir";
    }
  }
  return "Sayı asaldir."
}

function ciftTek(number) {
  if (number % 2 == 0) {
    return "Sayı çifttir."
  } return "Sayi tektir."

}

// var sonuc = 1;
// function faktoriyel(number) {
//   console.log(number);
//   if (number < 1) {
//     return sonuc;
//   }

//   sonuc *= number;
//   console.log(sonuc);
//   faktoriyel(number - 1);

// }
