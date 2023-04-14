//Veriables - Değişkenler
//Number - Sayısal Değer

// var firstNumber = 10;
// console.log(firstNumber)

// let a = [10];
// let b = a;
// console.log('1', a, b)
// a.push(20);
// console.log('2', a, b)

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// fruits.push("Kiwi", "Lemon");
// console.log(fruits)

// function - Fonksiyonlar
// var merhabaa = function () {
//   console.log("merhabaa");
// }

// function merhaba() {
//   console.log("Merhaba");
// };
// merhabaa();
// merhaba();

//scope
// var a = 10; // function scope
// let b = 20; //block scope
// let c = 30; //block scope

// function test() {
//   var a = 40;
//   let b = 50;
//   const c = 60;
//   console.log("function scope: ", a, b, c)
// }
// {
//   var a = 720;
//   let b = 80;
//   const c = 90;
// }
// test();
// console.log("Gloabal Scope:", a, b, c);

// tip dönüşümleri
// var a = "deneme";
// console.log(a, typeof a);
// a = 5;
// console.log(a, typeof a)

// var a = 5;
// console.log(a, typeof a);
// a = String(a);
// console.log(a, typeof a);

// var a = "8";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a);

// console.log(typeof NaN);

// var a = 5 + "2";
// console.log(a, typeof a);

// //tip dönüşümü
// var a = 5 - "2";
// console.log(a, typeof a);

// operatorler
const a = 10;
const b = 4;
let s;

// Arithmetic Operators
// console.log(a + b); //Toplama operatörü
// console.log(a - b); //Çıkarma operatörü
// console.log(a * b); //Çarpma operatörü
// console.log(a / b); //Bölme operatörü
// console.log(a % b); //Mod alma operatörü
// console.log(a ** b); //Üs alma operatörü

// Assignment  Matematich Operators
s = Math.PI; //Pi sayısı
s = Math.E; //Euler sayısı
s = Math.round(3.6); //Yuvarlama
s = Math.ceil(3.2); //Yukarı yuvarlama
s = Math.floor(3.6); //Aşağı yuvarlama
s = Math.sqrt(16); //Karekök alma
s = Math.abs(-10); //Mutlak değer alma
s = Math.pow(8, 3); //Üs alma
s = Math.max(10, -1, 100, 50, 3, 2, 1); //En büyük sayı
s = Math.min(10, -1, 100, 50, 3, 2, 1); //En küçük sayı
s = Math.random(); //Rastgele sayı
s = Math.floor(Math.random() * 20 + 1); //1 ile 20 arasında rastgele sayı
s = Math.floor(Math.random() * 100); //0 ile 100 arasında rastgele sayı


console.log(s, typeof s);
