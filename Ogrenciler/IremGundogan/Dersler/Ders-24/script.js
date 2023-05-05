// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let value = numbers.sort(() => Math.random() - 0.5);
// console.log(value);
// // value = numbers.sort((a, b) => a - b);
// // console.log(value);

//Array Methods

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let langs = ["Python", "Java", "C++", "Javascript"];

//map methodu
const map1 = numbers.map((number) => number * 2);
console.log(map1);

let users = [
  { firstName: "Varol", lastName: "Maksutoğlu", isOnline: true, age: 37 },
  { firstName: "Mehmet", lastName: "Maksutoğlu", isOnline: false, age: 60 },
  { firstName: "Seyit", lastName: "Maksutoğlu", isOnline: true, age: 30 },
];

let userNames = users.map((user) => user.firstName);

userNames.map((name) => console.log(name));

//forEach mwthodu
langs.forEach((lang) => {
  console.log(lang);
});
