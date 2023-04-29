const calculator = {
 firstNumber: '',
 secondNumber: 0,
 screen: '',
 process: '',
 add: function () {
  this.secondNumber += Number(this.firstNumber);
  this.firstNumber = '';
  this.process = '+';
  calculator.changeScreen(`${this.secondNumber} ${this.process}`);
 },
 subtract: function () {
  this.secondNumber -= Number(this.firstNumber);
  this.firstNumber = '';
  this.process = '-';
  calculator.changeScreen(`${this.secondNumber} ${this.process}`);
 },
 multiply: function () {
  this.secondNumber = this.secondNumber > 0 ? this.secondNumber : 1;
  this.secondNumber *= Number(this.firstNumber) || 1;
  this.firstNumber = '';
  this.process = '*';
  calculator.changeScreen(`${this.secondNumber} ${this.process}`);
 },
 divide: function () {
  this.secondNumber =
   this.secondNumber > 0 ? this.secondNumber : Number(this.firstNumber) || 1;
  this.firstNumber /= this.secondNumber;
  this.firstNumber = '';
  this.process = '/';
  calculator.changeScreen(`${this.secondNumber} ${this.process}`);
 },
 semiClear: function () {
  this.screen = '';
  this.firstNumber = '';
 },
 clear: function () {
  this.semiClear();
  this.secondNumber = 0;
  calculator_screen.innerHTML = calculator.screen;
  this.isContiniue = false;
 },
 result: function () {
  if (this.process == '+') {
   this.secondNumber = Number(this.firstNumber) + Number(this.secondNumber);
   this.screen = this.secondNumber;
  }
  if (this.process == '-') {
   this.secondNumber = Number(this.secondNumber) - Number(this.firstNumber);
   this.screen = this.secondNumber;
  }
  if (this.process == '*') {
   this.secondNumber = Number(this.firstNumber) * Number(this.secondNumber);
   this.screen = this.secondNumber;
  }
  if (this.process == '/') {
   if (isFinite(this.secondNumber / Number(this.firstNumber))) {
    this.secondNumber = Number(this.secondNumber) / Number(this.firstNumber);
    this.screen = this.secondNumber;
   } else {
    this.screen = '0 a bölünemez';
   }
  }
  calculator_screen.innerHTML = calculator.screen;
  this.semiClear();
 },
 manual: function () {
  this.clear();
  this.firstNumber = prompt(
   'Bütün işleminizi giriniz, lütfen arada boşluk bırakın',
  );
  if (this.firstNumber == null) return;
  this.firstNumber = this.firstNumber.split(' ');
  let stringCheck = this.firstNumber.filter(
   (x) => x != '+' && x != '-' && x != '*' && x != '/',
  );
  stringCheck = stringCheck.join('');
  if (!isNaN(stringCheck)) {
   this.screen = eval(this.firstNumber.join(''));
   calculator_screen.innerHTML = calculator.screen;
  } else {
   alert('Lütfen içeriye harf girmeyiniz');
  }
 },
 changeScreen: function (x, y = '') {
  this.screen = `${x} ${y}`;
  calculator_screen.innerHTML = calculator.screen;
 },
};
function numberEntry(x) {
 calculator.firstNumber += String(x);
 calculator.changeScreen(calculator.firstNumber);
 calculator_screen.innerHTML = calculator.screen;
}
// calculator_screen.innerHTML = calculator.screen;
