// array Methods

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let langs = ["Python", "Java", "C++", "JavaScript", "C#", "Go"];

// map method

// const map1 = numbers.map((number) => number * 2);

// console.log(map1);


// let users = [
//     { firstName: "Mustafa", lastName: "Kara", age: 25 },
//     { firstName: "Zeynep", lastName: "Kara", age: 25 },
//     { firstName: "Ali", lastName: "Kara", age: 25 },
// ];

// let userNames = users.map((user) => user.firstName);
// userNames.map((name) => console.log(name));

// forEach method
// langs.forEach((lang) => console.log(lang));


// filter method

// const result = langs.filter((lang) => lang.length > 2);
// console.log(result);

// reduce method
// const result = numbers.reduce((total, number) => total += number, 0);
// console.log(result);

// for in => objectlerde kullanılır

const person = {
    firstName: "Mustafa",
    lastName: "Kara",
    age: 25,
    isOnline : true,
    email : "aaaaaaa"
};

// for (let key in person) {
//     console.log(key, person[key]);
// }

// for (let lang in langs) {
//     console.log(lang, langs[lang]);
// }

//  for of=> arraylerde kullanılır

// for (let key of person) {
//     console.log(person[key]);
// } object is not iterable

// for (let lang of langs) {
//     console.log(lang);
// }

//  map data structure

// const key1 = "Mustafa";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 7;

// let denemeMap = new Map();

// denemeMap.set(key1, "String değer");
// denemeMap.set(key2, "Object literal değer");
// denemeMap.set(key3, "Function değer");

// console.log(denemeMap);
// console.log(typeof denemeMap);

// değer okuma

// console.log(denemeMap.get("Mustafa"));
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key3));

// denemeMap.forEach((value, key) => console.log(key, value));

// const students = new Map();
// students.set("Mustafa Kara",20);
// students.set("Zeynep Kara",21);
// students.set("Ali Kara",23);

// console.log(students);

// students.forEach((value,key) => console.log(key,value));

// for (let [key,value] of students) {
//     console.log(key,value);
// }


// set data structure

// const mySet = new Set();
// mySet.add(100);
// mySet.add(3.14);
// mySet.add("Mustafa");
// mySet.add(true);
// mySet.add([1, 2, 3]);

// console.log(mySet);
// console.log(typeof mySet);

const arr = [1, 2, 3, 4, 5, 5, 5, 6, 2, 1];
const myset2 = new Set(arr);
console.log(myset2);
console.log(myset2.has(1));

myset2.forEach((value) => console.log(value));

