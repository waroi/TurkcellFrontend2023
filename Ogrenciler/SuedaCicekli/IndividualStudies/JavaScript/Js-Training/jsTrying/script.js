// let value;
// const numbers = [43, 56, 33, 23, 44, 35, 5];
// const langs = ["Python", "Java", "C++", "Php"];

// value = numbers.length; // Array uzunluğunu verir.
// value = numbers[0]; // Array'in ilk elemanını verir.
// value = numbers[2]; // Array'in 3. elemanını verir.
// value = numbers[numbers.length - 1]; // Array'in son elemanını verir.
// numbers.push(77); // Array'in sonuna eleman ekler.
// // numbers.pop(); // Array'in sonundaki elemanı siler.
// // numbers.shift(); // Array'in başındaki elemanı siler.
// value = numbers; // Array'in son hali.
// value = numbers.indexOf(33); // Array'de 33 değerinin indexini verir.
// value = numbers.indexOf(99); // Array'de 99 değeri olmadığı için -1 döner. false demektir.
// value = numbers.includes(33); // Array'de 33 değeri var mı? true döner.
// numbers[1] = 100; // Array'in 2. elemanını verilen sayı ile  değiştirir.
// value = numbers;

// value = langs.sort(); // Array'i alfabetik sıraya göre sıralar.
// value = numbers.sort(); // Array'i sıralar. 1, 100, 23, 33, 35, 43, 44, 5, 56, 77 alfabetik sıraya göre sıralar.
// // value = numbers.reverse(); // Array'i ters çevirir.
// value = numbers.sort(function (x, y) {
//   return x - y; // Küçükten büyüğe sıralar.
// });
// value = numbers.sort(function (x, y) {
//   return y - x; // Büyükten küçüğe sıralar.
// });

// // value = numbers.reverse(); // Array'i ters çevirir.




// console.log(value);
// console.log(typeof value);

// =============================================================

// Object Özellikleri
// let value;
// const user = {
//   name: "Sueda",
//   age: 24,
//   email: "suedacicekli@gmail.com",
//   langs: ["Python", "Java", "C++", "Php"],
//   address: {
//     city: "Ankara",
//     street: "Kızılay",
//   },
//   work: function () {
//     console.log("Çalışıyor");
//   },
// }

// value = user.address.city;
// value = user.work();

// console.log(value);

// =============================================================
// Zaman Objesi 

// let value;
// let date = new Date();

// value = date.getFullYear();
// value = date.getDate();
// value = date.getDay();
// value = date.getMonth() + 1;
// value = `${date.getHours()}/${date.getMonth() + 1}/${date.getFullYear()}`;


// console.log(value);

// =============================================================
// Karşılaştırma Operatörleri

// == eşittir
// === eşittir ve aynı türde

// a = "20";
// b = 20;
// console.log(a == b); // true
// console.log(a === b); // false
// a = "20";
// b = "20";

// console.log(a == b); // true
// console.log(a === b); // true

// // != eşit değildir ( değerler eşit değilse true değilse false döner)

// a = 10;
// b = 20;
// a = "20";
// b = 20;

// console.log(a != b); // false


// != eşit değildir ( değerler eşit değilse true değilse false döner)

// a = 10;
// b = 20;
// a = 20;
// b = 20;

// console.log(a === b); // true

// > büyüktür ( değer büyükse true değilse false döner)
// a = 39;
// b = 20;
//console.log(a > b); // true


// < küçüktür ( değer küçükse true değilse false döner)
// a = 39;
// b = 20;
// console.log(a < b); // false


// <= küçük eşittir ( değer küçükse true değilse false döner)
// a = 39;
// b = 20;
// console.log(a <= b); // false


// And (&&) Operatörü ( iki değer true ise true değilse false döner)
// console.log(2 == 2 && 3 == 2); // false

// // Or (||) Operatörü (iki değerden biri true ise true değilse false döner)
// console.log(2 == 2 || 3 == 2); // true
// // Not (!) Operatörü (değeri tersine çevirir)
// console.log(!(2 == 2)); // false 

// console.log(!!(2 == 2)); // true (iki tane not operatörü kullanıldığında değer tekrar doğru hale gelir
// double bang operatörü olarak da bilinir)

// =============================================================


// Object Özellikleri
// let value;
// const user = {
//   name: "Sueda",
//   age: 24,
//   email: "suedacicekli@gmail.com",
//   langs: ["Python", "Java", "C++", "Php"],
//   address: {
//     city: "Ankara",
//     street: "Kızılay",
//   },
//   work: function () {
//     console.log("Çalışıyor");
//   },
// }

// console.log(user?.address?.street);

// =============================================================

// Koşullu İfadeler
//if else

// a = "20";
// b = 20;
// if (a === b) {
//   console.log("Eşit");
// } else {
//   console.log("Eşit değil");
// }
// // 2.örnek 
// c = 20;
// d = 20;
// if (c === d) {
//   console.log("Eşit");
// } else {
//   console.log("Eşit değil");
// }

// 3.örnek

// let a = 30;
// let b = 20;
//   console.log("A B'den küçüktür");
// } else if (a > b) {
//   console.log("A B'den büyüktür");
// } else {
//   console.log("A B'ye eşittir");
// }

// TODO :  buraya Swithc Case yazılacak

// Döngüler 
// for döngüsü

// const langs = ["Python", "Java", "C++", "Php"];

// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i]);
// }

// kullanıcıdan değer almak 
// let value = prompt("Bir değer giriniz");
// console.log(value);

//TEMP KULLAN


// // Kullanıcıdan alınan sayının tek yada çift olduğunu bulan program.
// let userInput = prompt("Lütfen bir sayı giriniz:");

// // Girilen sayının çift mi tek mi olduğunu kontrol et
// if (userInput % 2 === 1) {
//   console.log(userInput + " sayısı TEK bir sayıdır.");
// } else {
//   console.log(userInput + " sayısı ÇİFT bir sayıdır.");
// }


//random cinsiyet söyleyen program
// const value = Math.floor(Math.random() * 2);
// if (value == 1) {
//   console.log("kadın")
// } else {
//   console.log("erkek")
// }

// //random zar atan program
// const zar1 = Math.floor(Math.random() * 5 + 1);
// const zar2 = Math.floor(Math.random() * 5 + 1);
// console.log(zar1, zar2)

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
const deneme = `I am a "danger" `
console.log(deneme)





