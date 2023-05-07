// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let value = numbers.sort(() => Math.random() - 0.5); // shuffle array , rastgele yenidefn düzenlemek için

// value = numbers.sort((a, b) => a - b); // sort array

// console.log(value);

//Array methods

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let langs = ["Python", "Java", "C++", "Javascript"];

// // map methodu

// // const map1 = numbers.map((number) => number * 2); // her bir elemanı 2 ile çarpıp yeni bir array oluşturur
// // console.log(map1);

// let users = [
//   { firstName: "Sueda", lastName: "Çiçekli", age: 24, isOnline: true },
//   { firstName: "Abdullah", lastName: "Çiçekli", age: 27, isOnline: false },
//   { firstName: "Elif", lastName: "Can", age: 15, isOnline: true },
// ];

// let userNames = users.map((user) => user.firstName); // her bir elemanın firstName özelliğini alıp yeni bir array oluşturur

// userNames.map((name) => console.log(name));

// forEach methodu

// langs.forEach((lang) => console.log(lang)); // her bir elemanı tek tek döner

// langs.forEach((lang) => {
//   console.log(lang); // `<li>${lang}</li>`
// })

// filter methodu

// const result = langs.filter((lang) => langs.length > 3); // koşula uyan elemanları yeni bir array olarak döner

//reduce methodu

// const result = numbers.reduce((total, number) => total += number, 0); // toplamı verir
// console.log(result);

// function deneme(name) {
//   console.log(name);
// }

// const deneme = (name) => console.log(name);

// function cuve(x) {
//   return x * x * x;
// }
// const cube = (x) => x * x * x;
// console.log(cube(4)*3)

//let ve const değişkenlerinin hoisting olmaması
// console.log(a);
// console.log(b); // "Cannot access 'b' before initialization" hatası verir
// console.log(c);
// var a = 10;
// let b = 20;
// const c = 20;
//let ve constta hoistingin olmamasından dolayı tanımlanmadan önce kullanılamazlar
//değişkenler(var) undefined olarak tanımlanır, let ve const ile tanımlanan değişkenlerin değerleri tanımlanmadan önce kullanılamaz
// let langs1 = ["Python", "Java", "C++", "Javascript"];
// let langs2 = ["Go", "Perl"];
// let langs3 = ["Rust", "Dart"];

// langs = [...langs2, ...langs1, ...langs3]; // spread operator
// console.log(langs);


// let user = { name, age: 24, isOnline: true, email: "sueda@gmail.com" };
// let { name: ad, age, ...geriyeKalanlar } = user
// console.log(ad);
// console.log(age);
// console.log(geriyeKalanlar);

// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [a, b, ...c] = numbers2;
// console.log(a);
// console.log(b);
// console.log(c); // geriye kalanı dizi olarak döner

// //useState metodu içerisinde değştirdiğimiz bir değişken getter var ve bunu değiştiren fonksiyonum setter var ve bunu kullanarak state değerini değiştirebiliyoruz 
// const [todos, setTodfos] = useState([]); // useState hooku ile state tanımlamama da yukarıdaki örnekteki mantıkla çalışır

// for in
//object için kullanımı
// const person = {
//   name: "Sueda",
//   age: 24,
//   isOnline: true,
//   email: "xxxxxxxxxxxx"
// }
// for (let prop in person) {
//   console.log(prop, person[prop]); // (key, value) , key ; name, age, isOnline, email , value ; Sueda, 24, true, xxxxxxxxxxxx

// }
//for in array için kullanımı (çok kullanışlı olmaz normal arroy methodları kullanılabilir)
// for (let lang in langs) {
//   console.log(langs[lang]);
// }

/*****************/
//for of
//objeler çünkü nesneler iterable değildir bunun  için for..of  kullanılamaz
// for (let prop of person) {
//   console.log(prop); // "person is not iterable" hatası verir
// }
// // array için kullanımı
// for (let lang of langs) {
//   console.log(lang);
// }

//Map veri tipi ( fonksiyon olan değil)

// const key1 = "Sueda"; // string
// const key2 = { a: 10, b: 20 }; // object
// const key3 = () => 7; //  function

// let denemeMap = new Map(); // map oluşturduk
// denemeMap.set(key1, "String değer"); // map'e değer atadık
// denemeMap.set(key2, "Object değer"); // map'e değer atadık
// denemeMap.set(key3, "Function değer"); // map'e değer atadık

// //maplerin objectlerden farklı mapler itteracte edilebilir yani dönülebilir
// console.log(denemeMap);
// console.log(typeof denemeMap);

// //Değer okuma
// console.log(denemeMap.get("Sueda")); // String değer veya key1 ile de okunabilir
// console.log(denemeMap.get(key2)); // Object değer 
// console.log(denemeMap.get(key3)); // Function değer 

// denemeMap.forEach((value, key) =>
//   console.log(key, value)
//   // key ve value değerlerini döner
// );

// const students = new Map();
// students.set("Sueda", 90);
// students.set("Abdullah", 100);
// students.set("Elif", 80);

// console.log(students); // Öğrencileri döneriz
// students.forEach((value, key) => console.log(key, value)); // key ve value değerlerini alt alta döner

// for (let [key, value] of students) {
//   console.log("for of methodu ile", key, value); // key ve value değerlerini alt alta döner
// }


//Set veri tipi (fonksiyon olan değil)
// const mySet = new Set();
// mySet.add(50);
// mySet.add("Sueda");
// mySet.add([1, 2, 3]);

// console.log(mySet);
// console.log(typeof mySet); // object döner
// console.log(mySet.has(50)); // 50 değeri var mı diye kontrol eder

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9]; //sete dönüştürdüğüm halde unic olmuş oluyor tekrar tekrar yazmıyor
const mySet2 = new Set(arr);

console.log(mySet2);
console.log(mySet2.has(1)); // true döner
console.log(mySet2.has(10)); // false döner

mySet2.forEach((value) => console.log(value)); // set içerisindeki değerleri döner  (1,2,3,4,5,6,7,8,9)

