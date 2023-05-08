

const langs = ["python","c++","java","php"];


// console.log(langs[0],langs[1],langs[2],langs[3]);


// spread
console.log(...langs);

const langs2 = ["JS","c"];

// console.log("JS","c",langs[0],langs[1],langs[2],langs[3]);

console.log(...langs,...langs2)

//---------------------------------------------------
const numbers = [1,2,3,4,5,6];

const [a,b,...numbers2] = numbers


console.log(a,b,numbers2)

//--------------------------------------------------
const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers3 = [100,200,300];

addNumbers(numbers3[0],numbers3[3],numbers3[2]);
addNumbers(...numbers);