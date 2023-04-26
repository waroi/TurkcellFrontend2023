let number = prompt("Bir sayı giriniz: ");
let islem = prompt(
  "İşlemi Numarası Giriniz (1: Faktoriyel Kontrolü, 2: Asal Sayı Kontrolü, 3: Tek Çift kontrolü, 4: Mükemmel Sayı kontrolü.) : "
);

switch (parseInt(islem)) {
  case 1:
    alert("Sonuç: " + factorial(number));
    break;
  case 2:
    alert("Sonuç: " + primeNumber(number));
    break;
  case 3:
    alert("Sonuç: " + oddEven(number));
    break;
  case 4:
    alert("Sonuç: " + perfectNumber(number));
    break;
  default:
    alert("Hatalı işlem girdiniz.");
    break;
}

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

function primeNumber(number) {
  if (number == 1) {
    return "Asal değildir.";
  } else if (number == 2) {
    return "Asaldır.";
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return "Asal değildir.";
      }
    }
  }
  return "Asaldır.";
}

function oddEven(number) {
  if (number % 2 == 0) {
    return "Çift sayıdır.";
  } else {
    return "Tek sayıdır.";
  }
}

function perfectNumber(number) {
  let result = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      result += i;
    }
  }
  if (result == number) {
    return "Mükemmel sayıdır.";
  }
  return "Mükemmel sayı değildir.";
}
