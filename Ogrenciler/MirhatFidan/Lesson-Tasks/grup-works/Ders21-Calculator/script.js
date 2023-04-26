const screen = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let screenValue = '0';
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

updateScreen();

function updateScreen() {
    screen.value = screenValue;
}

keys.addEventListener('click', (e) => {
  const btnElement = e.target;
  
  switch (btnElement.value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      handleOperator(btnElement.value);
      break;
    case '.':
      inputDecimal(btnElement.value);
      break;
    case 'clear':
      clear();
      break;
    default:
      inputNumber(btnElement.value);
  }
  updateScreen();
});

function inputNumber(number){
  if (waitingForSecondNumber) {
    screenValue = number;
    waitingForSecondNumber = false;
  } else {
    screenValue = screenValue === '0' ? number : screenValue + number;
  } 
}

function inputDecimal(){
  if (!screenValue.includes('.')) {
    screenValue += '.';
  }
}

function clear(){
  screenValue = '0';
}

function handleOperator(Otheroperator){
  const value = parseFloat(screenValue);

  if (operator && waitingForSecondNumber) {
    operator = Otheroperator;
    return;
  }
  
  if (firstNumber === null) {
    firstNumber = value;
  }
  else if (operator) {
    const result = calculate(firstNumber, value, operator);
    screenValue = `${parseFloat(result.toFixed(7))}`;
    firstNumber = result;
  }
  waitingForSecondNumber = true;
  operator = Otheroperator;
}
function calculate(firstNumber, secondNumber, operator){
  if (operator === '+') {
    return firstNumber + secondNumber;
  }
  else if (operator === '-') {
    return firstNumber - secondNumber;
  }
  else if (operator === '*') {
    return firstNumber * secondNumber;
  }
  else  if (operator === '/') {
    return firstNumber / secondNumber;
  }
  return secondNumber;
}