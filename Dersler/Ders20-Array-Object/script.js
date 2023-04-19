// Array Özellikleri

// let value;
// const numbers = [43, 56, 33, 23, 44, 35, 5];
// const langs = ["Python", "Java", "C++", "Php"];

// value = numbers.length; // Array uzunluğu
// value = numbers[0]; // Array ilk elemanı
// value = numbers[2]; // Array üçüncü elemanı
// value = numbers[numbers.length - 1]; // Array son elemanı
// numbers.push(77); // Array sonuna eleman ekleme
// // numbers.pop(); // Array sonundaki elemanı silme
// // numbers.shift(); // Array başındaki elemanı silme
// value = numbers;
// value = numbers.indexOf(33); // 33 değerinin index değeri
// value = numbers.includes(33); // 33 değeri var mı?
// value = numbers.includes(49); // 49 değeri var mı?
// value = numbers.indexOf(49); // 49 değerinin index değeri
// numbers[1] = 100; // Array elemanı değiştirme
// value = numbers;

// value = langs.sort(); // Array elemanlarını alfabetik sıraya göre sıralama
// value = numbers.sort(); // Array elemanlarını alfabetik sıraya göre sıralama
// value = numbers.sort(function (a, b) {
//   return a - b;
// }); // Array elemanlarını küçükten büyüğe sıralama  (a-b)
// value = numbers.sort(function (a, b) {
//   return b - a;
// }); // Array elemanlarını büyükten küçüğe sıralama (b-a)

// // value = numbers.reverse(); // Array elemanlarını ters çevirme

// console.log(value);
// console.log(typeof value);

// ===============================================================
// Object Özellikleri
// let value;
// const user = {
//   name: "Varol Maksutoğlu",
//   age: 37,
//   email: "varol.maksutoğlu@yandex.com",
//   langs: ["Python", "Java", "C++", "Php"],
//   address: {
//     city: "Giresun",
//     street: "Kurtuluş",
//   },
//   work: function () {
//     console.log("Çalışıyor");
//   },
// };

// value = user.address.city;
// value = user.work();

// console.log(value);

// // ===============================================================
// // Zaman Objesi
// let value;
// let date = new Date();

// value = date.getFullYear();
// value = date.getDate();
// value = date.getDay();
// value = date.getMonth() + 1;
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

// console.log(value);
// // console.log(date);

// // ===============================================================
// Karşılaştırma Operatörleri

// == eşittir (iki eşittir) (değerler eşitse true değilse false döner)
// a = 10;
// b = 20;
// a = "20";
// b = 20;
// console.log(a == b);

// === eşittir (üç eşittir) (değerler ve veri tipleri eşitse true değilse false döner)
// a = 10;
// b = 20;
// a = 20;
// b = 20;
// console.log(a === b);

// != eşit değildir (değerler eşit değilse true değilse false döner)
// a = 10;
// b = 20;
// a = "20";
// b = 20;
// console.log(a != b);

// !== eşit değildir (değerler ve veri tipleri eşit değilse true değilse false döner)
// a = 10;
// b = 20;
// a = 20;
// b = 20;
// console.log(a !== b);

// > büyüktür (değer büyükse true değilse false döner)
// a = 30;
// b = 20;
// console.log(a > b);

// < küçüktür (değer küçükse true değilse false döner)
// a = 10;
// b = 20;
// console.log(a < b);

// >= büyük eşittir (değer büyük veya eşitse true değilse false döner)
// a = 20;
// b = 20;
// console.log(a >= b);

// <= küçük eşittir (değer küçük veya eşitse true değilse false döner)
// a = 20;
// b = 20;
// console.log(a <= b);

// And (&&) Operatörü (iki değer true ise true değilse false döner)
// console.log(2 == 2 && 3 == 2);

// Or (||) Operatörü (iki değerden biri true ise true değilse false döner)
// console.log(2 == 2 || 3 == 2);

// Not (!) Operatörü (değer true ise false değilse true döner)
// console.log(!(2 == 2));
// const numbers = [43, 56, 33, 23, 44, 35, 5];
// console.log(!!numbers);

// const user = {
//   name: "Varol Maksutoğlu",
//   age: 37,
//   email: "varol.maksutoğlu@yandex.com",
//   langs: ["Python", "Java", "C++", "Php"],
//   address: {
//     city: "Giresun",
//     street: "Kurtuluş",
//   },
//   work: function () {
//     console.log("Çalışıyor");
//   },
// };

// console.log(user?.address?.street);

// Koşul İfadeleri

// if (koşul)
// a = 20;
// b = 20;
// if (a === b) {
//   console.log("Eşit");
// } else {
//   console.log("Eşit değil");
// }

// let a = 20;
// let b = 20;
// if (a < b) {
//   console.log("A B'den küçük");
// } else if (a > b) {
//   console.log("A B'den büyük");
// } else {
//   console.log("A B'ye eşit");
// }

// TODO:Switch Case gelecek

// Döngüler

// For Döngüsü

// const langs = ["Python", "Java", "C++", "Php"];

// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i]);
// }

// Kullanıcıdan değer almak

let value = prompt("Bir değer giriniz");

console.log(value);
