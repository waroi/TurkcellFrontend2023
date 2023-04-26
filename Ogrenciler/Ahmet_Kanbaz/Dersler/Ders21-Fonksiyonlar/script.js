//Functions - Fonksiyonlar
// merhaba();
// function merhaba() {
//   alert("Merhaba");
// }


// function user (name, age) {
//   console.log (`İsim: ${name} Yaş: ${age}`);
// }

// user ("Ahmet", 24);
// user ("Varol", 37);

//Bilgi girilmediğinde varsayılan değerler vermek
// function user (name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log (`İsim: ${name} Yaş: ${age}`);
// }

// user ("Ahmet");
// user();

//Return kullanarak fonksiyon içerisinde işlem sonucunu döndürmek
//Return ile dışarı değer döndürme
// function square (x) {
//   return x * x;
// }
// const sonuc = square (5);
// console.log(sonuc);
// const sonuc2 = square (6) * 2;
// console.log(sonuc2);


// function cube (x) {
//   return x * x * x;
// }

// const result = cube (5) + 10;
// console.log(result);

//Object içerisinde bulunan fonksiyonlara erişme
// const dataBase = {
//   host: "localhost",
//   add: function () {
//     console.log ("Veri Eklendi");
//   },
//   get: function () {
//     console.log ("Veri Alındı");
//   },
//   update: function () {
//     console.log ("Veri Güncellendi.");
//   },
//   delete: function () {
//     console.log ("Veri Silindi");
//   },
//   put: function (id) {
//     console.log(`${id} id'li veri eklendi.`);
//   }
// }

// console.log (dataBase.host);
// dataBase.add();
// dataBase.get();
// dataBase.update();
// dataBase.delete();
// dataBase.put(10);


//Arrow Function
// const kareAl = function (x) {
//   return x * x;
// }

// console.log(kareAl(5));

// const kareAL = (x) => {
//   return x * x;
// }

// const kareAl = (x) => x * x;
// console.log(kareAl(5));

//Loops - Döngüler

//While Döngüsü
// let i = 0;
// while (i < 10) {
//   console.log(i+1 + "- Merhaba");
//   i++;
// }

// let i = 0;
// while (i < 10) {
//   if(i ==3 || i == 5) {
//     i++;
//     continue;
//   }
//   console.log(i + "- Merhaba");
//   i++;
// }

//do-while Döngüsü

// let i = 0;
// do{
//   console.log (i +"- Merhaba")

//   i++;
// } while (i < 10);

//Array map() methodu
// const numbers = [3, 4, 5, 6, 7, 8];

// numbers.map(function (x) {
//   console.log(x);
// });

// numbers.map((x) => console.log(x));
// const newNumbers = numbers.map ((x) => x);
// console.log(newNumbers);

//Array'de bulunan değerleri bulundukları index'e göre yazdırma
// numbers.map ((x, index) => console.log (`Array[${index}]: ${x}`));

//Kullanıcıdan bir sayı alma ve bir işlem seçeneği seçtirme. Seçenekler: 1-Faktöriyel 2-Asal sayı 3-Çiftmi tekmi? 4-Süper Sayı olup olmadığını bulsun.
while (true) {
  const number = Number(prompt("Sayı Giriniz:"));
const islem = Number(prompt(`1- Faktöriyel Hesaplama\n2- Asal Sayı Kontrolü\n3- Tek mi Çift mi\n4- Mükemmel Sayı Kontrolü\nSeçiminizi Giriniz:`));

switch (islem) {
  case 1:
    let faktor = faktoriyel(number);
    alert(`${number} sayısının faktoriyel sonucu = ${faktor}`);
    break;
  case 2:
    let asal = asalSayi(number);
    if(asal) alert(`${number} sayısı asal sayıdır.`);
    else alert(`${number} sayısı asal sayı değildir.`);
    break;
  case 3:
    let cift = ciftMi(number);
    if (cift) alert(`${number} sayısı çift sayıdır.`);
    else alert(`${number} sayısı tek sayıdır.`);
    break;
  case 4:
    let mukemmel = mukemmelSayi(number);
    if(mukemmel) alert(`${number} sayısı mükemmel sayıdır.`);
    else alert(`${number} sayısı mükemmel sayı değildir.`);
    break;
  default:
    alert("Hatalı Seçim Yaptınız!");
}
}

function faktoriyel (num) {
  let sonuc = 1;
  for (let i = 1; i <= num; i++) {
    sonuc *= i;
  }
  return sonuc;
}

function asalSayi (num) {
  let asalMi = true;
  if (num > 2) {
    for (let i = 2; i < num; i++) {
      if(num % i == 0) {
        asalMi = false;
        break;
      }
    }
  }
  else {
    asalMi = false;
  }
  return asalMi;
}

function ciftMi(num) {
  return num % 2 == 0;
}

function mukemmelSayi(num) {
  let toplam = 0;
  for (let i = 1; i < num; i++) {
    if(num % i == 0) {
      toplam += i;
    }
  }
  return num == toplam;
}