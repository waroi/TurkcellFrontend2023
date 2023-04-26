const add = (numOne, numTwo) => numOne + numTwo;
const mul = (numOne, numTwo) => numOne * numTwo;
const sub = (numOne, numTwo) => numOne - numTwo;
const div = (numOne, numTwo) => numOne / numTwo;

let isGoing = true;
while (isGoing) {
  const numOne = selectNumber(1);
  const numTwo = selectNumber(2);
  const operation = selectOperation();

  const answer = doOperation(operation, numOne, numTwo);

  alert(`Cevap: ${answer}`);

  const shouldKeepGoing = prompt(
    "Çıkış yapmak için 'q/Q' basınız. Devam etmek için herhangi bir tuşa basınız."
  );

  if (shouldKeepGoing.toLowerCase() === "q") isGoing = false;
}

function doOperation(operation, numOne, numTwo) {
  switch (operation) {
    case "+":
      return add(numOne, numTwo);
    case "*":
      return mul(numOne, numTwo);
    case "-":
      return sub(numOne, numTwo);
    case "/":
      return div(numOne, numTwo);

    default:
      break;
  }
}

function selectNumber(n) {
  let number = Number(prompt(`${n}. sayıyı seçiniz`));
  while (isNaN(number)) {
    number = Number(
      prompt(`Yanlış değer girdiniz ${n}. sayıyı tekrar seçiniz`)
    );
  }
  return number;
}

function selectOperation() {
  let operations = ["+", "*", "-", "/"];
  let operation = prompt(`Ìşlem Seçiniz
  + Toplama
  - Çıkarma
  * Çarpma
  / Bölme`);
  while (!operations.includes(operation)) {
    operation = prompt(`Hatalı Olmayan Ìşlem Seçiniz
    + Toplama
    - Çıkarma
    * Çarpma
    / Bölme`);
  }

  return operation;
}
