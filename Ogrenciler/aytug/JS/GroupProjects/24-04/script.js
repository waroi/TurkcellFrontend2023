const getNumbers = () => {
	const num1 = Number(document.getElementById("num1").value);
	const num2 = Number(document.getElementById("num2").value);
	return { num1: num1, num2: num2 };
};

const result = (resultNumber) => {
	document.getElementById("result").innerHTML = `${resultNumber}`;
};

const sum = () => {
	const numbers = getNumbers();
	result(numbers.num1 + numbers.num2);
};

const sub = () => {
	const numbers = getNumbers();
	result(numbers.num1 - numbers.num2);
};

const divide = () => {
	const numbers = getNumbers();
	result(numbers.num1 / numbers.num2);
};

const multi = () => {
	const numbers = getNumbers();
	result(numbers.num1 * numbers.num2);
};
const power = () => {
	const numbers = getNumbers();
	result(Math.pow(numbers.num1, numbers.num2));
};
const root = () => {
	const numbers = getNumbers();
	result(Math.pow(numbers.num1, 1 / numbers.num2));
};

const reset = () => {
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
	document.getElementById("result").innerHTML = "";
};
