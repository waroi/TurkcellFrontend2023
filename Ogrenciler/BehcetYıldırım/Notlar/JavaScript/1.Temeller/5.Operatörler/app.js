let value;

const value1 = 10
const value2 = 4;

// aritmetik operatörler

// value= value1+value2;
// value= value1-value2;
// value= value1*value2;
// value= value1/value2;
// value= value1%value2;

value = Math.PI;

value= Math.round(3.6);// round yuvarlama yapar.
value= Math.round(3.3);

value= Math.ceil(3.2);// direkt bi üstteki sayıya yuvarlar.
value= Math.ceil(3.7);

value= Math.floor(4.2);// direkt bi alttaki sayıya yuvarlar.
value= Math.floor(4.8);

value=Math.sqrt(16);// karekkökünü alır.
value=Math.sqrt(42);

value=Math.abs(-10);// mutlak değer alır.

value=Math.pow(8,3);// üssünü alma.

value= Math.max(10,-1,100,34);
value= Math.min(10,-1,100,34);

value=Math.random();// 0 ile 1 arasında bir değer üretir.
value=Math.random()*20; // 0 ile 20 arasında değer.
value=Math.random()*20 + 1; // 1 ile 20 arasında değer.
value=Math.floor(Math.random()*20 + 1); // 1 ile 20 arasında int değer.


console.log(value);