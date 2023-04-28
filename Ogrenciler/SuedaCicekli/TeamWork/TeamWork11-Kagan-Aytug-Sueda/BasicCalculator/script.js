const number = Number(prompt("Bir sayı giriniz"));
let secenek = Number(prompt("Lütfen bir işlem seçiniz: \n 1-Faktoriyel \n 2-Asal mı değil mi  \n 3-Çift mi Tek mi \n 4-Mükemmel Sayı"));
islemler();
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
      alert(mukemmelSayi(number));
      break;
    default:
      secenek = Number(prompt("Lütfen geçerli bir işlem seçiniz: \n 1-Faktoriyel \n 2-Asal mı değil mi  \n 3-Çift mi Tek mi \n 4-Mükemmel Sayı"));
      islemler();
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

function mukemmelSayi(number) {
  let toplam = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      toplam += i;
    }

  }
  if (toplam == number) {
    return "Mükemmel Sayı"
  } return "Mükemmel sayı değil."
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

// function faktoriyel(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * faktoriyel(n - 1);
//   }
// }
