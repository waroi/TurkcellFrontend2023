//Stirng Methodları

let value;
const firstName = "Sueda";
const lastName = "Cicekli";
const age = 24;
const department = "Bilişim";

// value = firstName + "" + lastName;
// value = firstName;
// value += "" + lastName;

// value = firstName.length;
// value = firstName.toLowerCase();
// value = firstName.toUpperCase();
// value = firstName[0];
// value = firstName[firstName.length - 1];
// value = firstName[-1];
// value = firstName.indexOf("a");
// value = firstName.includes("a");
// value = firstName.concat(" ", lastName, " ", age);
// value =
//   "İsim: " +
//   firstName +
//   " " +
//   "\nSoyisim: " +
//   lastName +
//   " " +
//   "\nYaş: " +
//   age +
//   " " +
//   "\nBölüm: " +
//   department;


//Template Literals
// value = "My name is " + firstName + " " + lastName + " and I am " + age;
// value = `
// isim: ${firstName}
// soyisim:${lastName}
// Yaş: ${age}
// `;
// value = `${firstName} ${lastName} ${age}`;

value = `
<ul>
<li>isim: ${firstName}</li>
<li>soyisim: ${lastName}</li>
<li>Yaş: ${age}</li>
<li>Yaş: ${department}</li>
</ul>
`;
document.body.innerHTML = value;


console.log(value);