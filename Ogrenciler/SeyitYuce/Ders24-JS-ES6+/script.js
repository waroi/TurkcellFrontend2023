let numbers = [5, 6, 98, 12, 56];
let langs = ["Python", "C++", "JS"];

// const map1 = numbers.map((number) => number * 2);

// console.log(map1);

// let users = [
//   {
//     firstName: "Kazım",
//     lastName: "Mümtaz",
//     age: 41,
//   },
//   {
//     firstName: "AAF",
//     lastName: "AAL",
//     age: 21,
//   },
//   {
//     firstName: "BBF",
//     lastName: "BBL",
//     age: 63,
//   },
// ];
// let usernames = users.map((user) => user.firstName);

// console.log(usernames)

// langs.forEach((lang) => {
//   console.log(lang);
// });

// const result = langs.filter((lang) => lang.length > 2);
// console.log(result);

// const result = numbers.reduce((total, number) => (total += number), 0);
// console.log(result);

// function deneme(name) {
//   console.log(name);
// }

// const deneme = (name) => console.log(name);

// const cube = (x) => x * x * x;
// console.log(cube(4))

// let langs2 = ["Go", "Pearl", "C#"];
// let langs3 = ["Rust", "Dart"];

// langs = [...langs2, ...langs, ...langs3];

// console.log(langs);

// //Destructing

// let user = { name: "Kazım", lastName: "Murtaza", isOnline: true, age: 56 };

// let { name: ad, age, ...geriyeKalanlar } = user;
// console.log(ad); //Kazım
// console.log(age); //56
// console.log(geriyeKalanlar); //{lastName: 'Murtaza', isOnline: true}

// const numbers2 = [1, 2, 4, 5, 3, 6];
// let [a, b, ...c] = numbers2;

// console.log(numbers2); //(6) [1, 2, 4, 5, 3, 6]

//For loops
//for in
const person = {
  name: "Kazım",
  lastName: "Murtaza",
  isOnline: true,
  age: 56,
};
// for (let prop in person) {
//   console.log(prop); //name lastName isOnline age
// }
// for (let prop in person) {
//   console.log(prop, person[prop]); //name Kazım lastName Murtaza isOnline true age 56
// }
// for (let lang in langs) {
//   console.log(lang); //0,1,2,3
//   console.log(langs[lang]); //"Python", "C++", "JS"
// }

//for of
//objeler için kullanılmaz
// for (let prop of person) {
//   console.log(prop); //person is not iterable
// }

//Map veri tipi

// const key1 = "Kazım";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 7;

// let denemeMap = new Map();

// denemeMap.set(key1, "String Değer");
// denemeMap.set(key2, "Object Değer");
// denemeMap.set(key3, "Fnc Değer");

// console.log(denemeMap);

// console.log(denemeMap.get("Kazım"));
// console.log(denemeMap.get(key2));

// denemeMap.forEach((value, key) => console.log(key, value));

// const students = new Map();
// students.set("Kazım",98)
// students.set("Kazım1",90)
// students.set("Kazım2",80)
// students.set("Kazım3",70)

// console.log(students)

//Set array tipi

// const mySet = new Set();
// mySet.add(50);
// mySet.add("KJ");
// mySet.add([1, 2, 3]);

// console.log(mySet); //Set(3) {50, 'KJ', Array(3)}
// console.log(typeof mySet); //object

// console.log(mySet.has(50)); //true

// const arr = [1, 2, 3, 4, 5, 6];
// const mySet2 = new Set(arr);

// console.log(mySet2);
