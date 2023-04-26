let promptArray = [];
let score = 50;
let x = Math.floor(Math.random() * 100);

for (let i = 0; true; i++) {
  console.log(x);
  let number = prompt("1-100 arasında bir sayı giriniz.");
  if (number < x) {
    alert("tahmininiz sayıdan küçük");
    promptArray.push(number);
    score -= 10;
  } else if (number > x) {
    alert("tahmininiz sayıdan büyük");
    promptArray.push(number);
    score -= 10;
  }
  else if (number == x) {
    promptArray.push(number);
    score+= 50;
    alert(`tahmininiz doğru, deneme sayısı: ${promptArray.length} denemeleriniz: ${promptArray} score: ${score} `);
    break;
  }
}
console.log(score);


