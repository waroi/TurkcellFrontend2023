const display = document.querySelector(".result");
const keys = document.querySelector(".calculatorKeys");

let displayValue = "0";
let firstNumber = null;
let operator = null;
let isSecondNumber = false;

updateDisplay();

function updateDisplay() {
  display.value = displayValue;
}


keys.addEventListener('click', function(e) {
  const element = e.target;
  //if içerisinde sadece butonlara tıklandığı zaman tepki vermesini istediğimiz
  //için butonları alıyoruz. Buton dışındakiler için ise tepki verilmemesini sağlamaktayız.
  if(!element.matches('button')) return;

  //Tıklanılan butonun operatör olup olmadığı kontrol edilmektedir.
  if(element.classList.contains('operator')) {
    getOperator(element.value);
    updateDisplay();
    return;
  }

  if(element.classList.contains('decimal')) {
    inputDecimal(element.value);
    updateDisplay();
    return;
  }

  if(element.classList.contains('clear')) {
    clearDisplayValue();
    updateDisplay();
    return;
  }
  
  if(element.classList.contains('delete')) {
    console.log("Delete", element.value);
    return;
  }

  inputNumber(element.value);
  updateDisplay();
});

function inputNumber(number) {
  if(isSecondNumber) {
    displayValue = number;
    isSecondNumber = false;
  }
  else {
    if(displayValue === "0") {
      displayValue = number;
    }
    else {
      displayValue += number;
    }
  }
}

function inputDecimal() {
  if(!displayValue.includes('.')) {
    displayValue += '.'
  }
}

function clearDisplayValue() {
  displayValue = "0";
}

function getOperator(otherOperation) {
  const value = parseFloat(displayValue);

  // if(operator && otherOperation) {
  //   operator = otherOperation;
  //   return;
  // }

  if(firstNumber === null) {
    firstNumber = value;
  }
  else if(operator) {
    const result = calculate (firstNumber, value, operator);

    displayValue = String(result);
    firstNumber = result;
  }

  isSecondNumber = true;
  operator = otherOperation;
}

function calculate (firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
    default:
      return secondNum;
  }
}