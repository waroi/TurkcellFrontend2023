// Desturcting, arraylerin ve objelerin içinden değerleri almak için bir yol.



let number1,number2;

arr = [100,200,300,400,500];

number1 = arr[0];
number1 = arr[1];


//Destructing 

[number1,number2] = arr; // arr dizisinin 1. ve 2. değerlersini atadık.

console.log(number1,number2);

//Destructing Object

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number,c,e} = numbers;
// isimler aynı olmalı veya a:number1 diyip console'da number1'i kullanabiliriz
console.log(number,c,e);

//Destructing Function

const getLangs = () => ["python","js","c++"]
// return ["python","js","c++"]
const [lang1, lang2,lang3]= getLangs();

console.log(lang1,lang2,lang3);
