
let myMap = new Map(); // oluşturma


const key1 = "Behcet";
const key2 = {a:10,b:20};
const key3 = () =>2;

// Set

myMap.set(key1,"String Değer")
myMap.set(key2,"obje")
myMap.set(key3,"Fonksiyon")

// Get

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));