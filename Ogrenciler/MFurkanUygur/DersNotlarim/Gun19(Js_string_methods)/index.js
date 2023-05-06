// String Methodları

let value;
const firstName = "Furkan uygur";
const lastName = "UYGUR";
const age = "37";
const department = "Bilişim";

value = firstName + " " + lastName;
value = firstName;
value += " " + lastName;

value = firstName.length;
value = lastName.toLowerCase();
value = firstName.toUpperCase();
value = firstName[0];
value = firstName[firstName.length - 1];
value = firstName[-1];

value =
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

value = firstName.includes("a");//var mı yok mu kontrolü
value = firstName.concat(" ", lastName, " ", age); //birleştirme
value = firstName.charAt(5) // 5. indexteki karakteri verir.
value = firstName.charCodeAt(4) // 5. indexteki karakterin ASCII tablosuna göre karşılığını verir. => a == 97
value = firstName.endsWith("n", 6) // şununla bitiyor mu kontrolü?.
value=String.fromCharCode(97) //ASCII'yi normale dönderir.
value = firstName.indexOf("a"); //bulunduğu indexi verir
value = firstName.lastIndexOf("a"); //Sondan başa doğru kontrol eder =>4
value = firstName.repeat(3);//FurkanFurkanFurkan
value = firstName.replace("an","iş"); //İlk eşleşmeyi bulur ve değiştirir.
value = firstName.replaceAll("an","iş");//Tüm eşleşmeleri bulur ve değiştirir.
value = firstName.slice(-6,-1);//İstenilen indexten sonrası ya da aralığı alır 
value = firstName.split("");//İfadeyi, istenilen karaktere rastladıkça böler(şu an karakterlere böler)
value = firstName.trim();//Baştaki ve sondaki boşlukları siler

// Template Literal
// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Yaş: ${age}
// Bölüm: ${department}
// `;
// value = `${firstName} ${lastName} ${age} ${department}`;

// value = `
// <ul>
//   <li>İsim: ${firstName}</li>
//   <li>Soyisim: ${lastName}</li>
//   <li>Yaş: ${age}</li>
//   <li>Bölüm: ${department}</li>
// </ul>
// `;

// document.body.innerHTML = value;

console.log(value);
