let value;
const numbers=[43,23,25,56,67,1]
// const numbers2=new Array(1,2,34,5,5,6,76);
// aynı şekilde

const langs = ["python", "java", "c", "js"];

const a = ["merhaba", 22, null, undefined, 3.14];
//uzunluk
value= numbers.length;
// indexleme
value= numbers[2];
value=numbers[numbers.length-1]
// herhangi bir değeri değiştirme

numbers[2]=1000;

//index of

value= numbers.indexOf(1000);

// arrayın sonuna değer ekleme
numbers.push(2000);
value=numbers;
//arrayin başına ekleme

numbers.unshift(3000);
value=numbers;

// sonundan değer çıkarma
numbers.pop();
value= numbers;

// başından değer çıkarma
numbers.shift();
value=numbers;

//index aralığını komple çıkarma
numbers.splice(0,3);
value=numbers;

//arrayi tam tesine çevirme

numbers.reverse();
value=numbers;



console.log(value);