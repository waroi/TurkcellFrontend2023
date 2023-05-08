let numbers = [5,9,3,19,70,8,100,2,35,27];
let langs = ["Python","Java", "C++", "Javascript"];

//  map methodu

const map1 = numbers.map((number) => {
  // number+2;
  number*2;
});
console.log(map1);

let users = [
  {
    firstName :"aaa", lastname: "bbb", age:45, isOnline:true
  },
  {
    firstName :"ca", lastname: "zzb", age:35, isOnline :false
  }
]

let userNames = users.map((user) => user.firstName);

userNames.map((name) => console.log(name));
// foreach
langs.forEach((lang) => {
  console.log(lang); `<li>${lang}</li>`
});

// filter
const result = langs.filter((lang) => lang.length>5);
console.log(result);

// reduce

const result2 = numbers.reduce((total,number) => total += number,0);
// her indeksli elemanı total içersine toplayarak gider
console.log(result2);

//spread operatır -rest operator 
let langs2 = ["Go","Perl"];
let langs3 = ["Rust","Dart"];

langs2 = [...langs2, ...langs, ...langs3];  

// Destructing
let user = {name: "aaa", age:35, isOnline:true, email:"asdfasd@gmail.com"};

let {name,age, ...geriyeKalanlar} = user;

console.log(name);
console.log(age);
console.log(geriyeKalanlar);

// for in 
const person = {
  name: "asdas",
  age: 45,
  isOnline: true,
  email:"aaaaaaaa"
}

for (let prop in person){
  console.log(prop, person[prop]);
}

for (let lang in langs){
  console.log(lang);
  console.log(langs[lang]);
}
// object içi verileri bu şekilde for in ile dönüyoruz 


// for of
// objeler için kulllanılamaz iterable değildir
// for (let prop of person){
//   console.log(prop);
// }
for (let lang of langs){
  console.log(lang);
}

//  Map veri tipi

const key1 = "mustafa";
const key2 = {a:10, b:20};
const key3 = () => {return 10};

let denemeMap = new Map();

denemeMap.set(key1, "String Değer");
// burada mustaf key string değer value döner 
denemeMap.set(key2, "Object Değer");
denemeMap.set(key3, "Function Değer");

console.log(denemeMap);
console.log(typeof denemeMap);

// değer okuma 
console.log(denemeMap.get(key1));
console.log(denemeMap.get("mustafa"));
console.log(denemeMap.get(key2));

denemeMap.forEach((value,key) => {
  console.log(key,value);  
});


const students = new Map();
students.set("Varol", 90);
students.set("aa", 20);
students.set("bb", 60);

students.forEach((value,key) => console.log(key,value));


// set veri tipi 

const mySet = new Set();
mySet.add(50);
mySet.add("uçak");
mySet.add([1,2,3]);

console.log(mySet);
console.log(typeof mySet);
console.log(mySet.has(50));

const arr = [1,2,3,4,5,6,7,8,9,9,10];
// 2 adet 9 yazdırmaz unique hale getirir
const mySet2 = new Set(arr);

mySet2.forEach((value) => console.log(value));

