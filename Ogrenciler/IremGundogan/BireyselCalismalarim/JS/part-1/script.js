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

/* 17.video
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

const iremNew = ` I'm ${firstName}, a ${year - birhtYear} year old ${job}!`;
console.log(iremNew);

console.log(`just a regular string...`);

console.log("string with \n multiple \n lines");

console.log(`String 
multiple 
lines`);
*/

/* 18.video
const age = 15;

if (age >= 18) {
  console.log("Mahmut can start driving license ");
} else {
  const yearsLeft = 18 - age;
  console.log(`Mahmut is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2021;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);*/

//////////////////////////

// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1.Print a nice output to the console, saying who has the higher BMI. The message iseither "Mark's BMI is higher than John's!"or "John's BMI is higher than Mark's!"
// 2.Use a template literal to include the BMI values in the outputs. Example: "Mark'sBMI (28.3) is higher than John's (23.9)
// !"Hint:Use an if/elsestatement😉
// GOOD LUCK 😀

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's!(${BMIMark})`);
// }
///////////////////////////

/*20.ders
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Mahmut"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("ı am" + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log(typeof "23", typeof 23);
console.log(+"23" + "23");

let n = "1" + 1; //11
n = n - 1; //10
console.log(n);

console.log(2 + 3 + 4 + "5"); //95

console.log("10" - "4" - "3" - 2 + "5"); //15 
*/

// 5 falsy values : 0, '' , undefined, null, NaN

/* 21.ders
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("mahmut"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(1 - 1)); //false

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("you should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}*/

/* 22.video
const age = "18";
if (age === 18) console.log("You just became an adult (strict)");

if (age === 18) console.log("You just became an adult"(loose));

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("!");
} else {
  console.log("?");
}
if (favorite == 23) {
  console.log("Cool! 23 is an amazing number!");
}

if (favorite !== 23) console.log("Why not 23?");
*/

// && = and
// ||= or

/* 23.ders
const hasDriversLcense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLcense && hasGoodVision);
console.log(hasDriversLcense || hasGoodVision);
console.log(!hasDriversLcense);

// if (hasDriversLcense && hasGoodVision) {
//   console.log("Mahmut is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; //C
console.log(hasDriversLcense && hasGoodVision && !isTired);

if (hasDriversLcense && hasGoodVision) {
  console.log("Mahmut is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

////////////////
//Challange-3
// There are two gymnastics teams, Dolphinsand Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1.Calculate the average score for each team, using the test data below
// 2.Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3.Bonus1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint:Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4.Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// §Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// §Data Bonus1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// §Data Bonus2: Dolphins score 97, 112 and101. Koalas score 109, 95 and 106

// GOOD LUCK 😀

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 106;

// const dolphinsAvarageScore =
//   (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// console.log(dolphinsAvarageScore);

// const koalasAvarageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(koalasAvarageScore);
// const dolphinsAvarageScore = (96 + 108 + 89) / 3;
// const koalasAvarageScore = (88 + 91 + 110) / 3;
// if (dolphinsAvarageScore > koalasAvarageScore) {
//   console.log("Winner Dolphins");
// } else if (dolphinsAvarageScore === koalasAvarageScore) {
//   console.log("Congratulations you both won!");
// } else {
//   console.log("Winner Koalas");
// }

// //BONUS1
// const dolphinsAvarageScore = (96 + 108 + 89) / 3;
// const koalasAvarageScore = (88 + 91 + 110) / 3;
// console.log(dolphinsAvarageScore, koalasAvarageScore);
// if (dolphinsAvarageScore > koalasAvarageScore && dolphinsAvarageScore > 100) {
//   console.log("Winner Dolphins");
// } else if (dolphinsAvarageScore === koalasAvarageScore) {
//   console.log("Congratulations you both won!");
// } else if (
//   koalasAvarageScore > dolphinsAvarageScore &&
//   koalasAvarageScore > 100
// ) {
//   console.log("Winner Koalas");
// } else {
//   console.log("No one wins the trophy...");
// }

//Ders 26
const day = "monday";
switch (day) {
  case "monday":
    console.log("Plan course Structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
  case "wednesday":
  case "thursay":
    console.log("Write code examples");
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
}
