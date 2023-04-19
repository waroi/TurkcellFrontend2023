let value;
const numbers = [43, 56, 34, 21, 12, 23, 25, 110];
const langs = ["python", "php", "java", "C++"];

value = numbers.length; //array uzunluğu
value = numbers[0]; //array ilk
value = numbers[2]; //array üçüncü
value = numbers[numbers.length - 1]; //array son elemanı

numbers.push(1223); //sonuna eleman ekleme
// numbers.pop(); //sonuna eleman silme
// numbers.pop(); //sonuna eleman silme

// numbers.shift(); //array ilk elemanı silme
value = numbers;

value = numbers.indexOf(21); //indexini getirir
value = numbers.includes(43); // 43 değerini içerir mi?
numbers[1] = 100; //array elemanı değiştirme 

value = langs.sort(); //elemanları "alfabetik" sıraya göre sıralar 

var liste = [10, 100, 250, 30, 1, 45];
liste.sort(function (a, b) { return b - a }); //return functionunu değştirince büyükten küçüğe doğru sıralar
//sort içerisine compare function alıyor. ve her elemanı buradan gelen eleman olarak sonucu return ediyor  gelen değer pozitif oldukça sıralama yapıyor.

console.log(value);
console.log(typeof value);

// ******************* object *******************//

let res;
const user = {
  name: "ahmet",
  age: "25",
  email: "asdasd@gmail.com",
  langs: langs,
  address: {
    city: "izmir",
    street: "18",
  },
  work: function () {
    console.log("çalışıyor");
  }
}
res = user.address.city;
res = user.work();

console.log(res);

//zaman objesi

let time;
let date = new Date();

time = date.getFullYear();
time = date.getDate();
time = date.getDay();
time = date.getMonth() + 1;


time = `${date.getDate()}/${date.getMonth() + 1}${date.getFullYear()}`;
console.log(time);
console.log(date);
//date altından bir çok metot çağırabiliriz. prototype ın altında bulunan date constructorı ile birçok metodu getirir. set ve get çapırlamalarını bu constrcutor içerisinden sağlarız.


//******************** karşılaştırma operatörleri ***************/
a = 10;
b = 20;

console.log(a == b); //boolean döner 
a = "20";
b = 20;
console.log(a == b); //true döner

// == iki eşittirde değerler eşitse true döner === değerler ve veri tipi eşitse true döner 

a = "20";
b = 20;
console.log(a != b); //true döner
//  != eşit değildir değerler eşit değilse true eşitse false döner 

console.log(a !== b); //true döner
//  !== eşit değildir değerler ve veri tipi eşit değilse true eşitse false döner 

//  > büyüktür < küçüktür 
console.log(a < b);
console.log(a > b);
console.log(a >= b);

//  and (&&) operatörü
console.log(2 == 2 && 3 > 2); //true

// || or operatörü (iki değerden biri true ise true değilse false döner)
console.log(2 == 2 || 3 == 2); //true

//  not operatörü (!) (değer true ise false false ise true döner)
console.log(!(2 == 2)); //false

const numbers = [43, 56, 34, 21, 12, 23, 25, 110];
console.log(!!numbers);
// gibi bir operatörde numbersın true olup olmadığını kullanmak istediğimiz durumlarda garanti olarak true dönmesini istediğimiz alanlarda kullanabiliriz.


//***********koşul ifadeleri *********** */
// if
a = "20";
b = 20;
if (a === b) {
  console.log("eşit");
} else {
  console.log("eşit değil");
}
let a = 30;
let b = 20;
if (a < b) {
  console.log("a küçük");
} else if (a > b) {
  console.log("a b den büyük");
} else {
  console.log("a b ye eşit");
}

// *****************döngüler********************
// for döngüsü 

const langs2 = ["python", "php", "java", "C++"];

for (let i = 0; i < langs2.length; i++) {
  const element = langs2[i];
}

let x = 95;

for (let i = 0; i < array.length; i++) {
  const element = array[i];
}