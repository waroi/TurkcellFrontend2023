// let numbers  = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let value = numbers.sort(() => Math.random() - 0.5);

// value = numbers.sort((a,b) => a - b);

// console.log(value);

// // 1 3 

// Array Methods

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let langs = ["Python", "Java", "C++", "Javascript"];

// map methodu

// const map1 = numbers.map((number) => number * 2);

// console.log(map1);

// let users = [
//     {firstName: "Varol", lastName: "Maksutoğlu", isOnline:true, age: 37},
//     {firstName: "Mehmet", lastName: "Maksutoğlu", isOnline:false, age: 60},
//     {firstName: "Seyit", lastName: "Maksutoğlu", isOnline:true, age: 30},
// ];

// let userNames = users.map((user) => user.firstName);

// userNames.map((name) => console.log(name));

// forEach methodu

// langs.forEach((lang) => {
//     console.log(lang); // `<li>${lang}</li>`
// });

// filter methodu

// const result = langs.filter((lang) => lang.length > 3);

// console.log(result);

// reduce methodu

// const result = numbers.reduce((total, number) => total += number , 0);
// console.log(result);


// arrow functions
// deneme("Maksutoğlu");

// function deneme(name){
//   console.log(name);
// }

// const deneme = (name) => console.log(name);

// function cube(x){
//   return x * x * x;
// }

// const cube = (x) => x * x * x;

// console.log(cube(4)*3);

// console.log(a)
// console.log(b)
// console.log(c)

// var a = 10;
// let b = 20;
// const c = 30;

// spread operator - rest operator
// let langs2 = ["Go", "Perl"];
// let langs3 = ["Rust", "Dart"];

// langs = [...langs2, ...langs, ...langs3];

// Destructing

// let user = {name: "Varol", age: 37,  isOnline: true, email: "varol@gmail.com"};

// let {name: ad, email, ...geriyeKalanlar} = user;

// console.log(ad);
// console.log(email);
// console.log(geriyeKalanlar);

// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let [a, b, ...c] = numbers2;

// console.log(a);
// console.log(b);
// console.log(c);

// const [todos, setTodos] = useState([])

// for in

// const person =  {
//     name: "Varol",
//     age: 37,
//     isOnline: true,
//     email: "XXXXXXXXXXXXXXX"
// }

// for (let prop in person){
//     console.log(prop, person[prop]);
// }

// for (let lang in langs){
//     console.log(langs[lang]);
// }

// for of
// objeler için kullanılamaz
// for (let prop of person){
//     console.log(prop);
// }

// for (let lang of langs){
//     console.log(lang);
// }

// Map veri tipi
// const key1 = "Varol";
// const key2 = {a: 10, b: 20};
// const key3 = () => 7;
// const key4 = key2;

// const person =  {
//     name: "Varol",
//     age: 37,
//     isOnline: true,
//     email: "XXXXXXXXXXXXXXX"
// }

// let denemeMap = new Map();

// denemeMap.set(key1, "String Değer");
// denemeMap.set(key2, "Object Değer");
// denemeMap.set(key3, "Function Değer");
// denemeMap.set({a: 10, b: 20}, "Object Değer");
// denemeMap.set({a: 10, b: 20}, "Object Değer");
// denemeMap.set('Varol', "String Değer 2");

// console.log(denemeMap);
// console.log(typeof denemeMap);

// // Değer Okuma

// // console.log(denemeMap.get("Varol"));
// // console.log(denemeMap.get(key2));
// // console.log(denemeMap.get(key3));

// denemeMap.forEach((value, key) => console.log(key, value));

// const students = new Map();
// students.set("Varol", 90);
// students.set("Mehmet", 80);
// students.set("Seyit", 70);

// console.log(students);

// students.forEach((value, key) => console.log(key, value));

// for (let [key, value] of students){
//     console.log(key, value);
// }

// Set veri tipi

// const mySet = new Set();
// mySet.add(50);
// mySet.add('Varol');
// mySet.add([1, 2, 3]);

// console.log(mySet);
// console.log(typeof mySet);
// console.log(mySet.has(50));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];
// const mySet2 = new Set(arr);

// console.log(mySet2);
// console.log(mySet2.has(11));

// mySet2.forEach((value) => console.log(value));