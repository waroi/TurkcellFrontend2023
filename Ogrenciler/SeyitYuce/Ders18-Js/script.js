// // Variables

// // Number
// var firstNo = 10;
// console.log(firstNo + 10); //
// console.log(typeof firstNo); //number

// // String

// var username = "Kazım";
// console.log(username); //
// console.log(typeof username); //string
// var username2 = "10";
// console.log(username2 + 10); // 1010 string
// console.log(username2 - 10); //0 number

// // bool

// // null
// var isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

// // Object
// var user = { name: "Mali", age: 27 };
// console.log(user);
// console.log(typeof user); //object
// console.log(user.age); //27

// // Array
// // var estudiente = ["Ali", "Veli", "49", "50"];
// // console.log(estudiente); //(4) ["Ali", "Veli", "49", "50"]
// // console.log(typeof estudiente); //object
// // console.log(estudiente[1]); //Veli

// //Date

// // var date = new Date();
// // console.log(date);
// // console.log(typeof date);
// // let a = [10];
// // let b = a;
// // console.log("1 ", a, b);
// // a.push(20);
// // console.log("2 ", a, b);

// fxn

// var hii = function () {
//   console.log("Hiii");
// };
// hii();
// hii();
// merhaba();
// function merhaba() {
//   console.log("Merhaba");
// }
// merhaba();
// // execution context - hoisting

// function selam(name) {
//   console.log("selam", name);
// }
// selam("Kazım");

// var a = 10; //fnc scope
// let b = 10; //block scope
// const c = 10; //block scope

// function test() {
//   var a = 40;
//   let b = 10;
//   const c = 10;
//   console.log("function scope", a, b, c); //fnc içindeyse function scope
// }
// test();
// {
//   var a = 70;
// }
// if (true) {
//   var a = 40;
//   let b = 10;
//   const c = 10;
//   console.log("Block scope", a, b, c);
//   // var değişir ama let ve const globalde değişmez
// }
// console.log("global scope", a, b, c); //globaldeyse global scope

// //tip dönüşümleri
// var a = "test";
// console.log(a, typeof a);

// a = 5;
// console.log(a, typeof a);

// a = String(a);
// console.log(a, typeof a);

// var a = "6";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a);

// operatorler
const a = 10;
const b = 5;
let s;

//aritmetik operatörler
// console.log(a + b); //toplama operatörü
// console.log(a - b); //çıkarma operatörü
// console.log(a * b); //çarpma operatörü
// console.log(a * b); //bölme operatörü
// console.log(a % b); //mod alma operatörü
// console.log(a ** b); //üst alma operatörü

// s = Math.PI;
// s = Math.random() * 100;
// s = Math.round(3.5);
// s = Math.ceil(3.2);
// s = Math.floor(3.9);
// s = Math.pow(2, 3);
// s = Math.floor(Math.random() * 100);

// console.log(s, typeof s);


//atama operatörleri


