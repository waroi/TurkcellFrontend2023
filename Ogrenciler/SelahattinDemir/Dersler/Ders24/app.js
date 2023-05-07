let numberss = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sortMath = numberss.sort(() => Math.random() - 0.5);

console.log("sortMathRandom", sortMath);

sort = numberss.sort((a, b) => a - b);

console.log("sort", sort);

// 1 3

// Array Methods

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let langs = ["Python", "Java", "C++", "Javascript"];

// map methodu

const map1 = numbers.map((number) => number * 2);

console.log("map1", map1);

let users = [
  { firstName: "Varol", lastName: "Maksutoğlu", isOnline: true, age: 37 },
  { firstName: "Mehmet", lastName: "Maksutoğlu", isOnline: false, age: 60 },
  { firstName: "Seyit", lastName: "Maksutoğlu", isOnline: true, age: 30 },
];

let userNames = users.map((user) => user.firstName);

userNames.map((name) => console.log("user.firstName", name));

// forEach methodu

langs.forEach((lang) => {
  console.log("langforEach", lang); // `<li>${lang}</li>`
});

langs.forEach((lang) => {
  document.querySelector("#langs").innerHTML += `<li>${lang}</li>`;
});

// filter methodu

const result = langs.filter((lang) => lang.length > 3);
console.log("result", result);

const ul = document.createElement("ul");
ul.setAttribute("id", "langs_filter");
// ul.id = "langs_filter";
console.log("ul", ul);

const h3 = document.createElement("h3");
h3.textContent = "Langs Filter";

const div = document.querySelector("#langsfilter");
div.appendChild(ul);
div.insertBefore(h3, ul);

// result.forEach((lang) => {
//   console.log("lang", lang);
//   ul.appendChild(document.createElement("li")).textContent = lang;
// });

result.map((lang) => {
  console.log("lang", lang);
  ul.innerHTML += `<li>${lang}</li>`;
});

// reduce methodu

const result1 = numbers.reduce((total, number) => (total += number), 0);
console.log("reduce", result1);

// arrow functions
denemeFunc("Maksutoğlu");

function denemeFunc(name) {
  console.log("Function", name);
}

// denemeArrow("Maksutoğlu");
const denemeArrow = (name) => console.log("Arrow Function", name);
denemeArrow("Maksutoğlu");

function cubeFunc(x) {
  return x * x * x;
}

console.log("cubeFunc", cubeFunc(4));

const cubeArrow = (x) => x * x * x;

console.log("cubeArrow", cubeArrow(4) * 3);

// console.log(a);
// console.log(b);
// console.log(c);

// var a = 10;
// let b = 20;
// const c = 30;

// spread operator - rest operator
let langs2 = ["Go", "Perl"];
let langs3 = ["Rust", "Dart"];

langsnew = [...langs2, ...langs, ...langs3];

console.log("spread operator", langsnew);

// Destructing

let user = { name: "Varol", age: 37, isOnline: true, email: "varol@gmail.com" };

let { name: ad, email, ...geriyeKalanlar } = user;

console.log("DestructingObj1", ad);
console.log("DestructingObj2", email);
console.log("DestructingObj3", geriyeKalanlar);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [a, b, ...c] = numbers2;

console.log("DestructingArray1", a);
console.log("DestructingArray2", b);
console.log("DestructingArray3", c);

// const [todos, setTodos] = useState([])

// for in

const person = {
  name: "Varol",
  age: 37,
  isOnline: true,
  email: "XXXXXXXXXXXXXXX",
};

for (let prop in person) {
  console.log("for_in_Obj", prop, person[prop]);
}

for (let lang in langs) {
  console.log("for_in_Array", langs[lang]);
}

// for of
// objeler için kullanılamaz

// for (let prop of person) {
//   console.log("for_of_Obj", prop);
// }

for (let lang of langs) {
  console.log("for_of_Array", lang);
}

// Map veri tipi
const key1 = "Varol";
const key2 = { a: 10, b: 20 };
const key3 = () => 7;
const key4 = key2;

// const person = {
//   name: "Varol",
//   age: 37,
//   isOnline: true,
//   email: "XXXXXXXXXXXXXXX",
// };

let denemeMap = new Map();

denemeMap.set(key1, "String Değer");
denemeMap.set(key2, "Object Değer");
denemeMap.set(key3, "Function Değer");
denemeMap.set({ a: 10, b: 20 }, "Object Değer");
denemeMap.set({ a: 10, b: 20 }, "Object Değer");
denemeMap.set("Varol", "String Değer 2");

console.log("Map_veri_tipi", denemeMap);
console.log("Map_veri_tipi_typeof", typeof denemeMap);

// Değer Okuma

console.log("Map_veri_değerokuma1", denemeMap.get("Varol"));
console.log("Map_veri_değerokuma2", denemeMap.get(key2));
console.log("Map_veri_değerokuma3", denemeMap.get(key3));

denemeMap.forEach((value, key) =>
  console.log("Map_veri_değerlerine_ulaşma", key, value)
);

const students = new Map();
students.set("Varol", 90);
students.set("Mehmet", 80);
students.set("Seyit", 70);

console.log("Map2", students);

students.forEach((value, key) =>
  console.log("Map_veri_değerlerine_ulaşma_forEach", key, value)
);

for (let [key, value] of students) {
  console.log("Map_veri_değerlerine_ulaşma_for", key, value);
}

// Set veri tipi

const mySet = new Set();
mySet.add(50);
mySet.add("Varol");
mySet.add([1, 2, 3]);

console.log("Set_veri_tipi", mySet);
console.log("Set_veri_tipi_typeof", typeof mySet);
console.log("Set_veri_tipi_has", mySet.has(50));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];
const mySet2 = new Set(arr);

console.log("Arrayi_set_veri_tipi_yapma", mySet2);
console.log("Arrayi_has_ile_kontrol_etme", mySet2.has(11));

mySet2.forEach((value) => console.log("Set_veri_tipi_forEach", value));
