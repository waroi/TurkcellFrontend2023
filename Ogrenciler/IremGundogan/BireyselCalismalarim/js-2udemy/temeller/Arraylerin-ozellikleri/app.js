let value;

const numbers = [43, 56, 35, 48, 2, 23, 78];
// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);
const langs = ["Python", "Java", "C++", "JavaScript"];
const a = ["Merhaba", 22, null, undefined, 3.14];
//uzunluk
value = numbers.length;

//indexleme
value = numbers[0];
value = numbers[2];
value = numbers[6]; //=value=numbers[numbers.length-1];

//Herhangi bir indexdeki değeri değiştirme
numbers[2] = 1000;
value = numbers;

//ındex of
value = numbers.indexOf(1000);

//Arrayin sonuna değer ekleme .push
numbers.push(2000);
value = numbers;

//arrayn başına değer ekleme .unshift
numbers.unshift(3000);
value = numbers;

//sonundan değer atmak
numbers.pop();
value = numbers;

//başından eleman atmak
numbers.shift();
value = numbers;
//belli bir kısmını atma
numbers.splice(0, 3);
value = numbers;

//reverse tam tersine çevirme
numbers.reverse();
value = numbers;

//arrayi sırlama
numbers.sort();

value = numbers.sort(function () {
  //küçükten büyüğe doğru sıralama
  return x - y;
});
value = numbers.sort(function () {
  //byükten küçüğe doğru sırlama
  return y - x;
});

console.log(value);
