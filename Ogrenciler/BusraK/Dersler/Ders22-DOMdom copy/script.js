let numbers = [5, 4, 6, 7, 2, 1];
let langs = ["python", "java", "C++"];

// const map1 = numbers.map((number) => number * 2);
// console.log(map1);

// ///foreach

// langs.forEach((lang) => {
//   console.log(lang);
// });

// //filter
// // const result = langs.filter((lang) => lang.length > 3);
// // console.log(result);

// //reduce
// // const result = numbers.reduce((total, number) => (total += number), 0);
// // console.log(result);

// // function deneme(name) {
// //   console.log(deneme);
// // }

// // const deneme = (name) => console.log(name);

// // function cube(x) {
// //   return (x = x * x);
// // }

// // const cube = (x) => x * x * x;
// // console.log(cube(4) * 3);

// console.log(a);
// console.log(b);
// console.log(c);
// var a = 10;
// let b = 20; //hosting geçerli değil
// const c = 30; //hosting geçerli değil

// let langs2 = ["go", "perl"];
// let langs3 = ["rust", "dart"];

// langs = [...langs2, ...langs, ...langs3];
// console.log(langs);

// let user = { name: "büşra", age: 22, isOnline: true };

// let { name, age, ...geriyeKalanlar } = user;
// console.log(name);
// console.log(age);
// console.log(geriyeKalanlar);
//const [todos,setTodos]=useState([]);

// const person = {
//   name: "büşra",
//   age: 22,
//   isOnline: true,
// };

// for (let prop in person) {
//   console.log(prop);
//   console.log(prop, person[prop]);
// }

// const key1 = "ceyda";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 7;

// // let denemeMap = new Map();
// // console.log(denemeMap);
// // console.log(typeof denemeMap);

// let denemeMap = new Map();
// denemeMap.set(key1, "string deger");
// denemeMap.set(key2, "object deger");
// denemeMap.set(key3, "function deger");
// console.log(denemeMap);
// console.log(denemeMap.get("büşra"));
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key3));

// denemeMap.forEach((value, key) => console.log(key, value));

// const students = new Map();
// students.set("büşra", 90);
// students.set("mehmet", 49);
// students.set("ali", 20);
// students.set("aliş", 25);
// console.log(students);

// students.forEach((value, key) => console.log(key, value));

// for (let [key, value] of students) {
//   console.log(key, value);
// }

// const mySet = new Set();
// mySet.add(50);
// mySet.add("büşra");
// mySet.add([1, 2, 3]);

// console.log(mySet);
// console.log(typeof mySet);

const arr = [1, 2, 3, 4, 5];
const mySet2 = new Set(arr);

console.log(mySet2);
console.log(mySet2.has(11));

mySet2.forEach((value) => console.log(value));
