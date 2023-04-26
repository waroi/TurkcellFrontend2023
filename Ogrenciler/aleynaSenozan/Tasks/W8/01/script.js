const calculatorInput = document.getElementById('calculatorInput');

let currentNumber = '';
let firstNumber = null;
let secondNumber = null;
let operator = null;

const clear = () => {
    calculatorInput.value = '';
    currentNumber = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
};

const deleteLast = () => {
    currentNumber = currentNumber.slice(0, -1);
    calculatorInput.value = currentNumber;
};

const updateDisplay = (num) => {
    currentNumber += num;
    calculatorInput.value = currentNumber;
};

const setOperator = (op) => {
    if (!currentNumber) return;
    if (!firstNumber) {
      firstNumber = parseFloat(currentNumber);
    }
    operator = op;
    if (op === '%') {
      result = percentage(firstNumber);
      calculatorInput.value = result;
      firstNumber = result;
      currentNumber = '';
      operator = null;
    } else {
      currentNumber = '';
    }
  };

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const percentage = (num1) => num1 / 100;

const calculate = () => {
    if (!firstNumber || !currentNumber || !operator) return;

    secondNumber = parseFloat(currentNumber);
    let result;


switch (operator) {
    case '+':
        result = add(firstNumber, secondNumber);
        break;
    case '-':
        result = subtract(firstNumber, secondNumber);
        break;
    case 'x':
        result = multiply(firstNumber, secondNumber);
        break;
    case '/':
        result = divide(firstNumber, secondNumber);
        break;

}

    calculatorInput.value = result;
    firstNumber = result;
    currentNumber = '';
    secondNumber = null;
    operator = null;
};

document.getElementById('clear').addEventListener('click', clear);
document.getElementById('delete').addEventListener('click', deleteLast);
document.getElementById('percentage').addEventListener('click', () => setOperator('%'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));
document.getElementById('seven').addEventListener('click', () => updateDisplay('7'));
document.getElementById('eight').addEventListener('click', () => updateDisplay('8'));
document.getElementById('nine').addEventListener('click', () => updateDisplay('9'));
document.getElementById('multiply').addEventListener('click', () => setOperator('x'));
document.getElementById('four').addEventListener('click', () => updateDisplay('4'));
document.getElementById('five').addEventListener('click', () => updateDisplay('5'));
document.getElementById('six').addEventListener('click', () => updateDisplay('6'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('one').addEventListener('click', () => updateDisplay('1'));
document.getElementById('two').addEventListener('click', () => updateDisplay('2'));
document.getElementById('three').addEventListener('click', () => updateDisplay('3'));
document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('doublezero').addEventListener('click', () => updateDisplay('00'));
document.getElementById('zero').addEventListener('click', () => updateDisplay('0'));
document.getElementById('dot').addEventListener('click', () => {
    if (!currentNumber.includes('.')) {
        updateDisplay('.');
    }
});
document.getElementById('equals').addEventListener('click', calculate);

