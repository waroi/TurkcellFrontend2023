//string methodlarii

let value;
const firstName = "busra";
const lastName = "kosnak";
const age = 22;
const department = "Tasarim";
//value = firstNme + " " + lastname;

// value = firstName;
// value += " " + lastName;

// value = firstName.length; //uzunlugu
// value = firstName.toLowerCase(); //butun harfler kucuk
// value = firstName.toUpperCase(); //butun harfler buyuk
// value = firstName[0]; //index degerleri sifirdan baslar ve b yi gosterir
// value = firstName[firstName.length - 1]; //son harfi verir
// value = firstName[-1];
// value = firstName.indexOf("o"); //o harfini bulur
// value = firstName.includes("a");
// value = firstName.contains("a");
// value = [firstName, lastName, age];
// value = firstName.concat(" ", lastName, " ", age); //birlestirme
// value =
//   "İsim: " +
//   firstName +
//   " " +
//   "Soyisim: " +
//   " " +
//   lastName +
//   " " +
//   " Yaş: " +
//   age +
//   " " +
//   "Bölüm: " +
//   department;  //basina \n koyarsan alt alta

// Template Literal
// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Yaş: ${age}
// Bölüm: ${department}
// `;
// value = `${firstName} ${lastName} ${age} ${department}`;

value = `
<ul>
  <li>İsminiz: ${firstName}</li>
  <li>Soyisminiz: ${lastName}</li>
  <li>Yaşiniz: ${age}</li>
  <li>Bölümünüz: ${department}</li>
</ul>
`;

document.body.innerHTML = value;

console.log(value);

console.log(value);
