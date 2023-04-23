// console.log(this); //en genel kapsayiciyi gosterir nerede calisiyorsa

// let value;
// const numbers = [1, 2, 3, 4, 55, 33, 22, 87];
// const langs = ["a", "s", "c", "g", "y", "v"];

// value = numbers.length;
// value = numbers[0]; // ilk eleman
// value = numbers[3]; //dorduncu eleman
// value = numbers[numbers.length - 1]; //son eleman

// numbers.push(46); //ekleme
// numbers.pop(); //elemani cikarma
// numbers.shift(); //bastaki elemani silme

// value = numbers;
// value = numbers.indexOf(22); //olmayan sayi varsa -1 doner
// value = numbers.includes(2);
// numbers[1] = 99;
// value = numbers;

// value = langs.sort(); //alfabetik siralama
// value = numbers.sort();
// value = numbers.reverse(); //tersine cevirme

// value = numbers.sort(function (a, b) {
//   return a - b;
// }); //array elemanlarini kucukten buyuge siralama

// value = numbers.sort(function (a, b) {
//   return b - a;
// }); //buyukten kucuge siralama

// console.log(value);
// console.log(typeof value);

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
//Object ozellikleri
// let value;
// const user = {
//   name: "busra kosnak",
//   age: 22,
//   email: "no@example.com",
//   langs: ["python", "java", "c++", "php"],
//   address: {
//     city: "edirne",
//     street: "who",
//   },

//   work: function () {
//     console.log("calisti be!");
//   },
// };

// value = user.address.city;
// value = user.work();

// console.log(value);

//const user= new Object();

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
//zaman objesi
// let value;
// let date = new Date();
// value = date.getFullYear();
// value = date.getMonth() + 1;
// value = date.getDate();
// value = date.getDay(); //haftanin gunu

// console.log(value);

// //console.log(date);

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
//karsilastirma operatorleri
// a = "20";
// b = 20;
// console.log(a === b);

// a= 10;
// b=20;
// console.log(a === b);

// a = 10;
// b = 20;
// console.log(a != b);

// a = 10;
// b = 20;
// console.log(a !== b);

// a = 10;
// b = 20;
// console.log(a > b);
// console.log(a < b);

// a = 10;
// b = 20;
// console.log(a >= b);
// console.log(a <= b);

//And operatoru (&&)
//console.log(2 == 2 && 3 == 3);

//Or operator (||)
//console.log(2 == 2 || 3 == 2);

//Not (!)
// console.log(!(2 == 2));
// console.log(!!(2 == 2));

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
//Kosul ifadeleri

// a = "20";
// b = 20;
// if (a == b) {
//   console.log("esit");
// } else {
//   console.log("esit degildir");
// }

//if else
// let a = 30;
// let b = 20;
// if (a < b) {
//   console.log("A B den kucuk");
// } else if (a > b) {
//   console.log("A B den buyuk");
// } else {
//   console.log("A B ye esit");
// }

//switch case gelecek

//donguler

//for dongusu
// const langs = ["python", "java", "c++", "php"];

// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i]);
// }

//kullanicidan deger almak
// let value = prompt("deger girer misin guzel kardesim");
// console.log(value);

//sayi tut kullanıcıdan sayı tahmin etmesini iste
//tuttuğun sayıya göre yönlendir
//doğru sayıyı kaç tahminde bulduğunu
Math.floor(Math.random() * 10);
