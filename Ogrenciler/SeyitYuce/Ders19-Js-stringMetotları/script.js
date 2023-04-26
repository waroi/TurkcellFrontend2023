// String Metotları
let value;
const firstName = "Kazım";
const lastName = "Murtaza";
const age = 26;

//KazımMurtaza
// value = firstName + lastName;

//Kazım Murtaza
// value = firstName;
// value += " " + lastName;

//kazım
// value = firstName.toLowerCase();
//KAZIM
// value = firstName.toUpperCase();

//K
// value = firstName[0];
//m
// value = firstName[firstName.length - 1];
// undefined;
// value = firstName[-1];
//K
// value = firstName.charAt(0);
//1
// value = firstName.indexOf("a");
//true
// value = firstName.includes("a");
//false
// value = firstName.includes("ka");
// Kazım Murtaza 26
// value = firstName.concat(" ", lastName, " ", age);

// Kazım Murtaza 26
// value = firstName + " " + lastName + " " + age;

//
// value ="First Name " firstName + " " +"Lastname"+ lastName + " " + age;
// value ="First Name " firstName + " " +"/nLastname"+ lastName + " " + age;

// template literal

// FirstName: Kazım
// lastName: Murtaza
// value = `FirstName: ${firstName}
// lastName: ${lastName}
// `;

value = `
<ul>
<li> İsim: ${firstName}</li>
<li> Soyisim: ${lastName}</li>
</ul>
`;

document.body.innerHTML = value;

console.log(value);
