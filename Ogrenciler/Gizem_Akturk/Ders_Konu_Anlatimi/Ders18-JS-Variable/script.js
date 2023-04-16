// Javascript Giriş
// console.log("Deneme Mesajı");

// Variables - Değişkenler

// number = sayısal ifadeler

// var firstNumber = 20;
// var secondNumber = 30;
// console.log(firstNumber + secondNumber);
// console.log(typeof firstNumber);

// String = Karakter Dizisi

// var userName = "Varol";
// console.log(userName);
// console.log(typeof userName);

// Boolean = Karşılaştırma değerleri (True-False)
// var a = true;
// console.log(a);
// console.log(typeof a);

// null = boş
// var b = null;
// console.log(b);
// console.log(typeof b);

// Object - Nesne
// var user = {
//   name: "Varol",
//   age: 36,
// };
// console.log(user);
// console.log(typeof user);
// console.log(user.name, user.age);

// Array = Diziler
// var users = ["varol", "erdem", "şafak", 10];
// console.log(users);
// console.log(typeof users);
// console.log(users[1]);

// Date Metodu
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var merhaba = function () {
//   console.log("Merhaba");
// };
// console.log(merhaba);
// console.log(typeof merhaba);

// console.log(this);

// var a = 10;
// var b = a;
// console.log("1- ", a, b); // 10-10 mertcan
// a = 20;
// console.log("2- ", a, b); // 20-10 mertcan

// Scope

// var a = 10; // function scope
// let b = 20; // block scope
// const c = 30; // block scope
// // global scope
// // deneme();
// {
//   // block scope
//   var d = "merhaba";
//   // console.log("1- ", d);
//   // var b = 40;
//   console.log("1- ", c + b);
// }

// // function deneme() { // functional scope
// //   var b = 40;
// //   console.log("1- ", c + b); // Okan 70-20, Batuhan 70-40
// // }

// console.log("2- ", b);
// // console.log("2- ", d);

// {
//   let a = 5;
//   var b = 10;
// }
// console.log(a, b);

// Tip Dönüşümü

// var a = "string";
// console.log(a);
// a = 5;
// console.log(a);

// var a = 5;
// console.log(a);
// console.log(typeof a);
// a = String(a);
// console.log(a);
// console.log(typeof a);

// var a = "5";
// console.log(a);
// console.log(typeof a);
// a = Number(a);
// console.log(a);
// console.log(typeof a);

// var a = "deneme";
// console.log(a);
// console.log(typeof a);
// a = Number(a);
// console.log(a);
// console.log(typeof a);

// var a = 5 + "2";
// console.log(a);
// console.log(typeof a);

// Operatorler
// const a = 10;
// const b = 4;
// let s;

// // s = a + b; // Toplama Operatörü
// // s = a - b; // Çıkarma Operatörü
// // s = a * b; // Çarpma Operatörü
// // s = a / b; // Bölme Operatörü
// // s = a % b; // MOD Operatörü

// // s = Math.PI;
// // s = Number(Math.PI.toFixed(4));
// // s = Math.round(a / b);
// // s = Math.ceil(a / b);
// // s = Math.floor(a / b);
// // s = Math.sqrt(16);
// // s = Math.pow(4, 3);
// // s = Math.floor(Math.random() * 80 + 20);
// console.log(s);

// String Metodları

// let value;
// const firstName = "Varol";
// const lastName = "Maksutoğlu";
// const department = "Yazılım";
// const salary = "5000";

// value = firstName + " " + lastName;
// value = firstName;
// value += " " + lastName;

// value = firstName.length;
// value = firstName.toLowerCase();
// value = firstName.toUpperCase();
// value = firstName[2];
// value = firstName[firstName.length - 1];
// value = firstName.indexOf("a");
// value = firstName.includes("r");
// value = firstName.concat(" ", lastName, " Deneme");
// value =
//   "isim: " +
//   firstName +
//   "\nSoyisim: " +
//   lastName +
//   "\nMaaş: " +
//   salary +
//   "\nDepartman: " +
//   department;

// Template Literal

// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Maaş: ${salary}
// Deraptman: ${department}
// `;

// value =
//   "<ul>" + "<li>" + firstName + "</li>" + "<li>" + lastName + "</li>" + "</ul>";
// value = `
// <ul>
//   <li>${firstName}</li>
//   <li>${lastName}</li>
//   <li>${salary}</li>
//   <li>${department}</li>
// </ul>
// `;
// document.body.innerHTML = value;
// value = console.log(value);

// Array Özellikleri

// let value;
// const numbers = [45, 78, 34, 79, 5];
// const lang = ["Python", "C++", "Javascript"];

// // value = numbers.length;
// // value = numbers[3];
// // value = numbers[numbers.length - 1];
// // numbers.push(200);
// // value = numbers;
// // value = numbers.indexOf(5);
// // value = numbers.includes(23);
// // numbers.pop();
// // numbers.shift();
// numbers[1] = 3;
// console.log(numbers);
// let a = ["deneme", "bir", "üç", "beş"];
// a.sort();
// console.log(a);
// // value = numbers.sort(function (x, y) {
// //   return x - y;
// // });
// // value = numbers.sort(function (x, y) {
// //   return y - x;
// // });
// console.log(value);

// Obje Özellikleri
// let value;
// const user = {
//   name: "Varol Maksutoğlu",
//   age: 36,
//   email: "varolmaksutoglu@yandex.com",
//   langs: ["Python", "C++", "Javascript"],
//   adress: {
//     city: "İstanbul",
//     street: "Şahika",
//   },
//   work: function () {
//     console.log("Çalışıyor");
//   },
// };

// // value = user.adress.city;
// // value = user.work();
// value = user["name"];
// console.log(value);
// console.log(typeof value);

// Zaman Objesi

// let value;
// let now = new Date();

// // value = now.getFullYear();
// // value = now.getMonth();
// // value = now.getDay();
// // value = now.getDate();
// value = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;

// console.log(value);