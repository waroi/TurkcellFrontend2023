// String Methodları

let value;
const firstName="selim";
const lastName="eminoğlu";
const age=37;

// value =firstName + " " + lastName;
value=firstName
value += " " + lastName;


value =firstName.length; //uzunluk bilgisi
value =firstName.toLowerCase(); //küçük harf haline gelme
value =firstName.toUpperCase();

value =firstName[0];

value =firstName[firstName.length-1];
value =firstName[-1]; // arrayde işler stringde işlemez

value=firstName.indexOf("e"); // index bulucu
value =firstName.includes("e"); // bu sorgulama yapıyor ve true-false dönüyor

value =firstName.concat("",lastName,"",age); // birleştirme

const department="yazılım";

value=firstName + ""+lastName+""+age+""+deparment; // \n ile alt satır

// template literal ile aynı örnek
value=`isim:${firstName}
soyisim: ${lastName}
yaş: ${age}
bölüm:${department}
`
// ters tırnaklar arasında nasıl yazdıysak o şekilde ekrana basılıyor

value=`
<ul>
    <li>isim:${firstName}</li>
    <li>soyisim: ${lastName}</li>
</ul>
`
document.body.innerHTML=value;

console.log(value);