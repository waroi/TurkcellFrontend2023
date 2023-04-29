/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Irem");
console.log(22);

let firstName = "Mahmut";
// let first = "Irem";
// let firstNamePerson;
console.log(firstName);

//vcariable name conventions
// let 3years=3; yanlış
let irem_Mahmut = "IM";
let $function = 27;

let person = "ırem";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Student";

let job1 = "programmer";
let job2 = "Student";

console.log(myFirstJob);
*/

/*12.video
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "ırem");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 22;
age = 23;

const birthYear = 2001;
//birthYear = 2000;
// const job;

var job = "programmer";
job = "student";

lastName = "Maria";
console.log(lastName);
*/

/* 13-14.video
//math operators
const now = 2037;
const ageIrem = now - 2015;
const ageMahmut = now - 2014;
console.log(ageIrem, ageMahmut);

console.log(ageIrem * 2, ageIrem / 10, 2 ** 3);
//2**3=2^3 demektir ve 8'e eşittir.

const firstName = "Irem";
const lastName = "Gundogan";
console.log(firstName + " " + lastName);

//atama  operatörleri
let x = 10 + 5; //15
x += 10; //x=x+10 //25
x *= 4; //x_x*4= 100
x++; //x=x+1
x--; //x=x-1
x--;
console.log(x);

//karşılaştırma operatörleri
console.log(ageIrem > ageMahmut); //false
console.log(ageIrem < ageMahmut); //true  <,>, >=, <=
console.log(ageMahmut >= 18); //true
const isFullAge = ageMahmut >= 18;

console.log(now - 2015 > now - 2014);
*/

/*
const now = 2037;
const ageIrem = now - 2015;
const ageMahmut = now - 2014;
console.log(now - 2015 > now - 2014);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10
console.log(x, y);

const averageAge = (ageIrem + ageMahmut) / 2;
console.log(ageIrem, ageMahmut, averageAge);
*/
////////////////////
//Coding Challange #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).
1.Store Mark's and John's mass and height in variables
2.Calculate both their BMIs using the formula (you can even implement both versions)
3.Create a Booleanvariable 'markHigherBMI'containing information about whether Mark has a higher BMI than John.

Test data:§Data1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§Data2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// //console.log(BMIMark, BMIJohn,markHigherBMI ); */

const firstName = "irem";
const job = "student";
const birhtYear = "2001";
const year = 2023;

const irem =
  "'I'm '" +
  firstName +
  ", a " +
  (year - birhtYear) +
  " years old " +
  job +
  "!";
console.log(irem);

const iremNew = ` I'm ${firstName}, a ${year - birhtYear} year old ${job}`;
console.log(iremNew);
