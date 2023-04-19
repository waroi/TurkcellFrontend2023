// String Methodları

let value;
const firstName = "Varol";
const lastName = "Maksutoğlu";
const age = 37;
const department = "Bilişim";

// value = firstName + " " + lastName;
// value = firstName;
// value += " " + lastName;

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

// Template Literal
// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Yaş: ${age}
// Bölüm: ${department}
// `;
// value = `${firstName} ${lastName} ${age} ${department}`;

value = `
<ul>
  <li>İsim: ${firstName}</li>
  <li>Soyisim: ${lastName}</li>
  <li>Yaş: ${age}</li>
  <li>Bölüm: ${department}</li>
</ul>
`;

document.body.innerHTML = value;

console.log(value);
