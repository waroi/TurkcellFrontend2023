let IndexALi;
let IndexAda;

const kgAli = 60;
const kgAda = 40;

const heightAli = 1.70;
const heightAda = 1.50;

IndexAda = (kgAda) / (heightAda*heightAda);
IndexAli = (kgAli) / (heightAli*heightAli);

console.log(IndexAda,IndexALi);

let adaHigherIndex= IndexAda>IndexAli;
let aliHigherIndex= IndexAli>IndexAda;

console.log('Ada nın kilo indeksi Ali nin kilo indeksinden daha büyüktür:'+adaHigherIndex);
console.log('Ali nın kilo indeksi Ada nin kilo indeksinden daha büyüktür:'+aliHigherIndex);

let AliZayıf = (IndexAli>0) && (IndexAli<=18.4);
let AliNormal = (IndexAli>=18.5) && (IndexAli<=24.9);
let AliKilolu = (IndexAli>=25) && (IndexAli<=29.9);
let AliSısman = (IndexAli>=30) && (IndexAli<=34.9);

console.log('Ali zayıf:'+AliZayıf);
console.log('Ali normal:'+AliNormal);
console.log('Ali kilolu:'+AliKilolu);
console.log('Ali sisman:'+AliSısman);

let AdaZayıf = (IndexAda>0) && (IndexAda<=18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
let AdaKilolu = (IndexAda>=25) && (IndexAda<=29.9);
let AdaSısman = (IndexAda>=30) && (IndexAda<=34.9);

console.log('Ada zayıf:'+AdaZayıf);
console.log('Ada normal:'+AdaNormal);
console.log('Ada kilolu:'+AdaKilolu);
console.log('Ada sisman:'+AdaSısman);





