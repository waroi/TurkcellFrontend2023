// String Methodları

let value;
let value1;
let value2;
const firstName = "Varol";
const lastName = "Maksutoğlu";
const age = 37;
const department = "Bilişim";

value = firstName + " " + lastName;
value1 = firstName;
value2 += " " + lastName;

console.log("value", value);
console.log("value1", value1);
console.log("value2", value2);

let length;
let lowerCase;
let upperCase;
let firstCharacter;
let lastCharacter;
let lastCharacter1;
let indexOf;
let includes;
let concat;
let template;

length = firstName.length;
lowerCase = firstName.toLowerCase();
upperCase = firstName.toUpperCase();
firstCharacter = firstName[0];
lastCharacter = firstName[firstName.length - 1];
lastCharacter1 = firstName[-1];
indexOf = firstName.indexOf("a");
includes = firstName.includes("a");
concat = firstName.concat(" ", lastName, " ", age);
template =
  "İsim: " +
  firstName +
  " " +
  "\nSoyisim: " +
  lastName +
  " " +
  "\nYaş: " +
  age +
  " " +
  "\nBölüm: " +
  department;

console.log("length", length);
console.log("lowerCase", lowerCase);
console.log("upperCase", upperCase);
console.log("firstCharacter", firstCharacter);
console.log("lastCharacter", lastCharacter);
console.log("lastCharacter1", lastCharacter1);
console.log("indexOf", indexOf);
console.log("includes", includes);
console.log("concat", concat);
console.log("template", template);

// Template Literal
let templateLiteral;
let list;

templateLiteral = `İsim: ${firstName}
Soyisim: ${lastName}
Yaş: ${age}
Bölüm: ${department}
`;
templateLiteral = `${firstName} ${lastName} ${age} ${department}`;

console.log("templateLiteral", templateLiteral);

list = `
<ul>
  <li>İsim: ${firstName}</li>
  <li>Soyisim: ${lastName}</li>
  <li>Yaş: ${age}</li>
  <li>Bölüm: ${department}</li>
</ul>
`;

document.body.innerHTML = list;

console.log("list", list);
