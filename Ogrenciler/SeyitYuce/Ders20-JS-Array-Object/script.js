// // // Array Özellikleri

// // // window -- (en genel kapsayıcı)
// // // console.log(this);

// // let value;
// // const numbers = [43, 56, 33, 23, 44, 35, 5];
// // const langs = ["Python", "Java", "C++", "Php"];

// // value = numbers.length;
// // value = numbers[0];
// // value = numbers[2]; //33
// // value = numbers[numbers.length - 1]; //5
// // numbers.push(77); //array sonuna eleman ekleme
// // numbers.pop();
// // numbers.pop(); //array sonundaki elemanı silme
// // numbers.shift(); //array başındaki elemanı silme
// // value = numbers.indexOf(33); //33 değerinin indexi
// // // value = numbers.indexOf(123); //123 değerinin indexi (-1)
// // // value = numbers.includes(33); //33 değeri var mı? true
// // numbers[1] = 100; //2. eleman =100
// // value = numbers.sort(function (a, b) {
// //   return a - b;
// // }); //küçükten büyüğe
// // value = numbers.reverse(); //arrayi ters çevir
// // value = numbers;

// // console.log(value);
// // console.log(typeof value);

// // ---------------------------------------------------------------------------------------

// // Object özellikleri

// // let value;
// // const user = {
// //   name: "Veli",
// //   age: "20",
// //   mail: "aliveli@",
// //   langs: ["en", "de", "tr", "es"],
// //   address: {
// //     city: "Esk",
// //     street: "283",
// //   },
// //   work: function () {
// //     console.log("working");
// //   },
// // };

// // value = user.address.city; //Esk
// // value = user.work(); //working
// // value = user. //working

// // console.log(value);

// //----------------------------------------------------------
// //Zaman Objesi

// // let value;
// // let date = new Date();

// // value = date; //Wed Apr 19 2023 19:28:42 GMT+0300 (GMT+03:00)
// // // value = date.getFullYear(); //2023
// // value = date.getMonth(); //3 (month -1)
// // value = date.getDay(); //3 (sunday to saturday) haftanın günü
// // value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

// // console.log(value);

// // ----------------------------------------------------------------------------
// //Karşılaştırma Operatörleri

// // a = 20;
// // b = 30;
// // a = 10;
// // b = 20;

// // console.log(a == b);
// // console.log(a === b);
// // console.log(a !== b);

// // console.log(a > b);
// // console.log(a < b);

// // a = 20;
// // b = 20;

// // console.log(a >= b);

// //and - or operatörleri

// a = 20;
// b = 20;

// console.log(2 == 2 && 4 == 3);
// TODO: console.log(2 == 2 || 4 == 3);

// const langs = ["Python", "Java", "C++", "Php"];

// for (let i = 0; i > langs.length; i++) {
//   console.log(langs[i]);
// }

let random = 20;
let guess;

for (let i = 0; true; i++) {
  guess = prompt("Sayı tut");
  if (guess == random) {
    console.log(`${i + 1}. denemede buldun`);
    if(i+1)
    break;
  } else if (guess > random) console.log(`${guess} Düş`);
  else console.log(`${guess} çık`);
}

//Switch Case

const result = 2;

switch(result){
  case 1:
    console.log("işlem 1")
    break;
  case 2:
    console.log("işlem 2")
    break;
  case 3:
    console.log("işlem 3")
    break;
  default:
    console.log("geçersiz işlem")
}