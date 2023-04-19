let ourNum = Math.floor(Math.random() * 100) + 1;
let tryingCount = 999;
let score = 100;
let stepCounter = 0;
console.log(ourNum);
let userNum = prompt("1 ile 100 arasında Bir Sayı Giriniz \n");
let warningScore = 0;

for (let i = 0; i < tryingCount; i++) {
  stepCounter++;

  if (ourNum > userNum) {
    userNum = prompt("Küçük bir sayı girdiniz. Tekrar bir Sayı Giriniz \n");
    score = score - 10;
  } else if (ourNum < userNum) {
    userNum = prompt("Büyük bir sayı girdiniz. Tekrar bir Sayı Giriniz \n");
    score = score - 10;
  } else if ((ourNum = userNum)) {
    break;
  }
}
console.log(
  "Bu kadar adımda buldunuz: " + stepCounter + "\n Puanınız: " + score
);
