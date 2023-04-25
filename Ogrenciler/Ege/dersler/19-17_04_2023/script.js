// String Methods

let value;
const firstName = "Ege";
const lastName = "KARA";
const age = 25;
const department = "Yazılım";

// value = firstName + " " + lastName;
// value = firstName;
// value += " " + lastName;

// value = firstName.length;
// value = firstName.toLowerCase();
// value = firstName.toUpperCase();
// value = firstName[0];
// value = firstName[firstName.length - 1];
// value = firstName[-1] //Wrong;
// value = firstName.indexOf("g");
// value = firstName.includes("e")
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
//   "\nDepartman: " +
//   department;

// Template Literal ``
// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Yaş: ${age}
// Alan: ${department}
// `;
// value = `${firstName} ${lastName} ${age} ${department}`;

value = `<ul>
    <li>İsim: ${firstName}</li>
    <li>Soyisim: ${lastName}</li>
    <li>Yaş: ${age}</li>
    <li>Alan: ${department}</li>
</ul>
`;

document.body.innerHTML = value;

console.log(value);
