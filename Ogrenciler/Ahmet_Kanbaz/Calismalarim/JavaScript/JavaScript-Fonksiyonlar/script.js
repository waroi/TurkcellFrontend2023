//Kullanıcıdan alınan değere göre Faktöriyel Hesaplama, Asal Sayı Kontrolü, Tek mi Çift mi ve Mükemmel Sayı olup olmadığı kontrol edilebilmektedir.
// while (true) {
//   const number = Number(prompt("Sayı Giriniz:"));
// const islem = Number(prompt(`1- Faktöriyel Hesaplama\n2- Asal Sayı Kontrolü\n3- Tek mi Çift mi\n4- Mükemmel Sayı Kontrolü\nSeçiminizi Giriniz:`));

// switch (islem) {
//   case 1:
//     let faktor = faktoriyel(number);
//     alert(`${number} sayısının faktoriyel sonucu = ${faktor}`);
//     break;
//   case 2:
//     let asal = asalSayi(number);
//     if(asal) alert(`${number} sayısı asal sayıdır.`);
//     else alert(`${number} sayısı asal sayı değildir.`);
//     break;
//   case 3:
//     let cift = ciftMi(number);
//     if (cift) alert(`${number} sayısı çift sayıdır.`);
//     else alert(`${number} sayısı tek sayıdır.`);
//     break;
//   case 4:
//     let mukemmel = mukemmelSayi(number);
//     if(mukemmel) alert(`${number} sayısı mükemmel sayıdır.`);
//     else alert(`${number} sayısı mükemmel sayı değildir.`);
//     break;
//   default:
//     alert("Hatalı Seçim Yaptınız!");
// }
// }

// function faktoriyel (num) {
//   let sonuc = 1;
//   for (let i = 1; i <= num; i++) {
//     sonuc *= i;
//   }
//   return sonuc;
// }

// function asalSayi (num) {
//   let asalMi = true;
//   if (num > 2) {
//     for (let i = 2; i < num; i++) {
//       if(num % i == 0) {
//         asalMi = false;
//         break;
//       }
//     }
//   }
//   else {
//     asalMi = false;
//   }
//   return asalMi;
// }

// function ciftMi(num) {
//   return num % 2 == 0;
// }

// function mukemmelSayi(num) {
//   let toplam = 0;
//   for (let i = 1; i < num; i++) {
//     if(num % i == 0) {
//       toplam += i;
//     }
//   }
//   return num == toplam;
// }

//Kullanıcıdan alınan iki sayıya göre hesap makinesi yapımı.
//Kullanıcı tarafından girilen iki sayının toplamı, çıkarılması, çarpımı, bölümü, üs alınması, mod alınması işlemleri gerçekleştirilmektedir.
//Herhangi bir işlem gerçekleştirildikten sonra kullanıcıya devam edip etmeyeceği sorulur. Devam etmek istiyorsa yeni işlem başlatılır.
//Devam etmek istemiyorsa programdan çıkılır.
//Bu işlemler kullanıcı programdan çıkmak isteyene kadar devam etmektedir.
//Kullanıcının girdiği değerler sayı değilse kullanıcıdan tekrar sayı istenmektedir.
//Kullanıcı eğer yapmak istediği işlemin değerini yanlış girerse kullanıcıdan tekrar işlem değeri istenir.
// let decision = true;
// let firstNumberName = "Birinci";
// let secondNumberName = "İkinci";

// const toplama = (number1, number2) => number1 + number2;

// const cikarma = (number1, number2) => number1 - number2;

// const carpma = (num1, num2) => num1 * num2;

// const bolme = (num1, num2) => num1 / num2;

// const modAlma = (num1, num2) => num1 % num2;

// while (decision) {
//   let firstNumber = Number(prompt("Birinci Sayıyı Giriniz:"));
//   firstNumber = isNotNumber(firstNumber, firstNumberName);

//   let secondNumber = Number(prompt("İkinci Sayıyı Giriniz:"));
//   secondNumber = isNotNumber(secondNumber, secondNumberName);
//   let operation = Number(prompt(
//     "Yapmak istediğiniz işlemin numarasını giriniz\n1- Toplama\n2- Çıkarma\n3- Çarpma\n4- Bölme\n5- Üs Alma\n6- Mod ALma"
//   ));
//   operation = isNotNumberOperation(operation);

//   switch (operation) {
//     case 1:
//       let sumResult = toplama(firstNumber, secondNumber);
//       alert(
//         `${firstNumber} ve ${secondNumber} sayılarının toplamı: ${sumResult}`
//       );
//       break;
//     case 2:
//       let subtractionResult = cikarma(firstNumber, secondNumber);
//       alert(
//         `${firstNumber} sayısından ${secondNumber} sayısını çıkardığımızda sonuç: ${subtractionResult}`
//       );
//       break;
//     case 3:
//       let carpmaResult = carpma(firstNumber, secondNumber);
//       alert(
//         `${firstNumber} ve ${secondNumber} sayılarının çarpımı sonucu: ${carpmaResult}`
//       );
//       break;
//     case 4:
//       let bolmeSonuc = bolme(firstNumber, secondNumber);
//       alert(
//         `${firstNumber} sayısının ${secondNumber} sayısına bölümünün sonucu: ${bolmeSonuc}`
//       );
//       break;
//     case 5:
//       let usSonuc = usAlma(firstNumber, secondNumber);
//       alert(`${firstNumber} sayısının ${secondNumber} üssü sonucu: ${usSonuc}`);
//       break;
//     case 6:
//       let modSonuc = modAlma(firstNumber, secondNumber);
//       alert(
//         `${firstNumber} sayısının ${secondNumber} sayısına bölümünden kalan: ${modSonuc}`
//       );
//       break;

//     default:
//       operation = isNotNumberOperation(operation);
//   }

//   decisionFunction();
// }

// function isNotNumber(number, name) {
//   while (isNaN(number)) {
//     number = Number(
//       prompt(`Lütfen Doğru Değer Giriniz.\n${name} Sayıyı Giriniz:`)
//     );
//   }
//   return number;
// }

// function isNotNumberOperation(operation) {
//   while(isNaN(operation) || !(0 < operation && operation < 7)) {
//     operation = Number(prompt(
//       "Lütfen yapmak işlemin numarasını doğru giriniz!!!\n1- Toplama\n2- Çıkarma\n3- Çarpma\n4- Bölme\n5- Üs Alma\n6- Mod ALma"
//     ));
//   }
//   return operation;
// }

// function usAlma(num1, num2) {
//   let result = 1;
//   if (num2 < 0) {
//     for (let i = 0; num2 < i; i--) {
//       result /= num1;
//     }
//   } else {
//     for (let i = 0; i < num2; i++) {
//       result *= num1;
//     }
//   }
//   return result;
// }

// function decisionFunction() {
//   while (true) {
//     let valueDecision = prompt("Devam etmek istiyor musunuz? (E/H)");
//     if (valueDecision == "E" || valueDecision == "e") {
//       break;
//     } else if (valueDecision == "H" || valueDecision == "h") {
//       decision = false;
//       alert("Programdan çıkış yapılıyor...");
//       break;
//     } else alert("Lütfen geçerli bir değer giriniz!");
//   }
//   return decision;
// }