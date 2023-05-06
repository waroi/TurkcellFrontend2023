// Functions
// merhaba();
// function merhaba() {
//   console.log("Merhaba");
// }

// function user(name, age) {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }

// user("Varol", 37);
// user("Maksutoğlu", 38);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }

// user("Varol");
// user();

// Return ile dışarı değer döndürme
// function square(x) {
//   return x * x;
// }
// const sonuc = square(5) * 3;
// console.log(sonuc);

// function cube(x) {
//   return x * x * x;
// }
// const sonuc = cube(5) + 10;
// console.log(sonuc);

// /**
//  * Rastgele Başlık xD
//  * @param {string} x
//  */
// function test(x) {
// }
// test();

// const database = {
//   host: "localhost",
//   add: function () {
//     console.log("Veri Eklendi");
//   },
//   get: function () {
//     console.log("Veli Okundu");
//   },
//   update: function (id) {
//     console.log(`${id} id'li Veri güncellendi`);
//   },
//   delete: function () {
//     console.log(`Veri silindi`);
//   },
// };

// console.log(database.host);
// database.add();
// database.get();
// database.delete();
// database.update(10);

// Arrow functions

// const kare = function (x) {
//   return x * x;
// }

// const kare = (x) => {
// .....
//   return x * x;
// };

// console.log(kare(5));

// const kare = (x) => x * x;
// console.log(kare(5));

// Loops - Döngüler
// while döngüsü

// let i = 0;
// while (i < 10) {
//   console.log("Merhaba");
//   i++;
// }

// let i = 0;
// while (i < 10) {
//   if (i === 3 || i === 5) {
//     i++;
//     continue;
//   }
//   console.log(`Deneme ${i}`);
//   i++;
// }

// do while döngüsü

// let i = 0;
// do {
//   console.log(`Deneme ${i}`);
//   i++;
// } while (i > 10);

// Array map() methodu

const langs = ["Python", "Java", "C++", "C#"];

// langs.map(function (x) {
//   console.log(x);
// });

langs.map((x) => console.log(x));
const lengths = langs.map((x) => x.length);
console.log(lengths);

langs.map((x, i) => console.log(i, x));



// let value = Number(prompt("Bir sayı giriniz:"));

// let operation = prompt("Bu sayı ile ne yapmak istediğinizi seçiniz?\n1:Faktöriyel\n2:Asal Sayı\n3:Tek Çift\n4:Mükemmel Sayı")

// function faktoriyel(value) {
//     let fac = 1;
//     for (let i = 1; i <= value; i++) {
//         fac = fac * i;
//     }
//     return `${value} sayısının faktöriyeli ${fac}'dır.`;
// }

// function asal(value) {
//     if (value === 2) {
//         return `${value} sayısı asal bir sayıdır.`;
//     }
//     else if (value === 1) {
//         return `${value} sayısı asal bir sayı değildir.`;

//     }
//     else {
//         for (let i = 2; i < value; i++) {
//             if (value % i == 0) {
//                 return `${value} sayısı asal bir sayı değildir.`;
//             }
//             else {
//                 return `${value} sayısı asal bir sayıdır.`;
//             }
//         }
//     }
// }

// function tekcift(value) {
//     if (value % 2 == 0) {
//         return `${value} sayısı çift bir sayıdır.`
//     }
//     else
//         return `${value} sayısı tek bir sayıdır.`
// }

// function mukemmel(value) {
//     let sum = 0;
//     for (let i = 1; i < value; i++) {
//         if (value % i == 0) {
//             sum += i;
//         }
//     }
//     if (sum == value) {
//         return `${value} sayısı mük bir sayıdır.`
//     }
//     else
//         return `${value} sayısı mük bir sayı değildir.`
// }

// console.log(typeof operation)

// switch (operation) {
//     case "1":
//         console.log(faktoriyel(value));
//         break;
//     case "2":
//         console.log(asal(value));
//         break;
//     case "3":
//         console.log(tekcift(value));
//         break;
//     case "4":
//         console.log(mukemmel(value));
//         break;
// }
