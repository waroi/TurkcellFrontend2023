const numberButtons = document.querySelectorAll("[data-btn-val]");
const input1 = document.getElementById("numone");
const input2 = document.getElementById("num2");
let lastActiveInput;

input1.addEventListener('focus', () => {
  lastActiveInput = input1;
});

input2.addEventListener('focus', () => {
  lastActiveInput = input2;
});

function handleButtonClick(event) {
  const buttonValue = event.target.getAttribute('data-btn-val');

  lastActiveInput.value += buttonValue;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});


function performCalculation() {

  var num1 = parseFloat(document.getElementById("numone").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operation = document.getElementById("operation").value;
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 == 0) {
        alert("Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break
  }

  document.getElementById("result").value = result;
}