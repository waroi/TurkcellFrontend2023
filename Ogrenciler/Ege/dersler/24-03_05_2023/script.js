// #region Shuffle an array - Bir Dizi Karıştırma
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let value = numbers.sort(() => Math.random() - 0.5);

// console.log(value);
//#endregion

// #region Array Methods

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let langs = ["Python", "Java", "C++", "JavaScript"];

// #region map Methodu
// const map1 = numbers.map((number) => number * 2);
// console.log(map1);

// let users = [
//   { firstName: "Ege", lastname: "KARA", age: 25, isOnline: true },
//   { firstName: "Ali", lastname: "BALAT", age: 33, isOnline: false },
//   { firstName: "Candeğer", lastname: "YILMAZ", age: 61, isOnline: true },
// ];

// let userNames = users.map((user) => user.firstName);
// userNames.map((name) => console.log(name));

//#endregion

//#region forEach Methodu
// langs.forEach((lang) => console.log(lang));
//#endregion
//#region filter Methodu
// const result = langs.filter((lang) => lang.length > 5);
// console.log(result);

//#endregion

//#region reduce Methodu
// const result = numbers.reduce((total, number) => (total += number), 0);
// console.log(result);
//#endregion

//#endregion

//#region Arrow Functions

// deneme("Ege");
// denemeArrow("Ege");

// function deneme(name) {
//   console.log(name);
// }

// const denemeArrow = (name) => console.log(name);

// function cube(x) {
//   return x * x * x;
// }

// const cubeArrow = (x) => x * x * x;

// console.log(cubeArrow(4) * 3);

//#endregion

//#region spread/rest operator

// let langs2 = ["Go", "Perl"];
// let langs3 = ["Rust", "Dart"];

// langs = [...langs2, ...langs, ...langs3];

// console.log(langs);

// // #region Destructing

// let user = { fName: "Ege", age: 25, isOnline: true, email: "ege@kara.com" };

// let { fName, email, ...geriyeKalanlar } = user;

// console.log(fName);
// console.log(email);
// console.log(geriyeKalanlar);

// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let [a, b, ...c] = numbers2;
// console.log(a);
// console.log(b);
// console.log(c);

// //#endregion
//#endregion

//#region for in

// const person = {
//   name: "Ege",
//   age: 25,
//   isOnline: true,
//   email: "ege@kara.com",
// };

// for (let prop in person) {
//   console.log(prop, person[prop]);
// }

// for (let lang in langs) {
//   console.log(lang, langs[lang]);
// }

//#endregion

// #region for of
// objeler için kullanılamaz
// for (let prop of person) {
//   console.log(prop);
// }

// for (let lang of langs) {
//   console.log(lang);
// }

//#endregion

//#region Map veri tipi
// const key1 = "Ege";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 7;

// const person = {
//   name: "Ege",
//   age: 25,
//   isOnline: true,
//   email: "ege@kara.com",
// };

// let denemeMap = new Map();
// denemeMap.set(key1, "String Değer");
// denemeMap.set(key2, "Object Değer");
// denemeMap.set(key3, "Function Değer");
// denemeMap.set({ a: 10, b: 20 }, "Object Değer");
// denemeMap.set({ a: 10, b: 20 }, "Object Değer");
// denemeMap.set(key2, "Object Değer 2");

// console.log(denemeMap);
// console.log(typeof denemeMap);

// // Değer Okuma
// console.log(denemeMap.get("Ege"));
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key3));

// // Iterate Etme
// denemeMap.forEach((value, key) => console.log(key, value));

// const students = new Map();
// students.set("Ege", 100);
// students.set("Ali", 90);
// students.set("Candeğer", 80);

// console.log(students);

// students.forEach((value, key) => console.log(key, value));

// for (let [key, value] of students) {
//   console.log(key, value);
// }
//#endregion

//#region Set veri tipi

// const mySet = new Set();
// mySet.add(100);
// mySet.add("Ege");
// mySet.add([1, 2, 3]);

// console.log(mySet);
// console.log(typeof mySet);
// console.log(mySet.has(100));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];
// const mySet2 = new Set(arr);

// console.log(mySet2);
// console.log(mySet2.has(11));

// mySet2.forEach((value) => console.log(value));

//#endregion
