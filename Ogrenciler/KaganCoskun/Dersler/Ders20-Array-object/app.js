// let value;
// const numbers = [43,56,56,33,23,44,35,5];
// const langs = ["Python","Java","C++","Php"];

// value = numbers.length;
// value = numbers[0];
//  value = numbers[2];
// value = numbers[numbers.length - 1];
// numbers.push(777)
// numbers.pop();
// numbers.shift(); // ilk elemanı siler
// value = numbers.indexOf(33); // 33 değerinin index numarasını verir
// value =numbers.includes(33); // 33 değerinin varlığını kontrol eder
// numbers[1]=100

// value=langs.sort(); // alfabetik sıralama yapar
// value= numbers.sort(); // alfabetik sıralama yapar
// value= numbers.sort(function(a,b){ return a-b})// küçükten büyüğe sıralama yapar a-b
// value= numbers.sort(function(a,b){ return b-a})// büyükten küçüğe sıralama yapar b-a




// // value= numbers

// console.log(value);
// console.log(typeof value);

// ================================================================================================
// let value;
// const user = {
//     name: "Kagan",
//     secondName: "Coskun",
//     age: 23,
//     email: "kagancoskun32@gmail.com",
//     langs: ["english","german","turkish"],
//     address: {
//         city: "Antalya",
//         street: "Konyaaltı"
//     },
//     work: function(){
//         return "is working";
//     }
// }

// value = user.address.city;
// value = user?.work();
// value = `${user?.name} ${user.work()} at ${user?.address?.city}`;

// console.log(value)

// ================================================================================================

// let value;
// let date = new Date();

// value = date.getFullYear();

// value = date.getMonth()+1;

// value = date.toLocaleDateString();
// // value = date.getDate();


// console.log(value)
// console.log(date)

// ===================Karşılaştrıma Operatörleri=============================================================================

// == eşittir değerler aynı mı?

// a = 10;
// b = "10"; //true

// a=10;
// b=10; //true

// console.log(a==b); // true

// === eşittir değerler aynı mı ve türleri aynı mı?

// a=10;
// b="10"; //false

// a=10;
// b=10; //true

// console.log(a===b); 

// != değildir değerler aynı değil?

// a=10;
// b=20; 

// console.log(a!=b); //true

// a=10;
// b="10";

// console.log(a!=b); //false

// !== değildir değerler aynı değil ve türleri aynı değil?

// a=10;
// b="10";

// console.log(a!==b); //true

// a=10;
// b=10;

// console.log(a!==b); //false

// > büyüktür

// a=10;
// b=20;
// console.log(a>b); //false

// < küçüktür

// a=10;
// b=20;
// console.log(a<b); //true

// >= büyük eşittir

// a=10;
// b=20;
// console.log(a>=b); //false

// <= küçük eşittir

// a=20;
// b=20;

// console.log(a<=b); //true

// ===================Mantıksal Operatörler=============================================================================

// && and operatörü 2 değer true ise true değilse false döner

// console.log(2===2 && 3===3); //true
// console.log(2===2 && 2===3); //false

// || or operatörü 2 değerden biri true ise true değilse false döner

// console.log(2===2 || 3===3); //true
// console.log(2===2 || 2===3); //true
// console.log(2===3 || 3===3); //false

// ! not operatörü değeri tersine çevirir

// console.log(!(2===2)); //false

// const numbers = [43,56,56,33,23,44,35,5];
// console.log(!!numbers) // arrayın ya da objenin içi doluysa kendisini değil tru dönmesini sağlamak için !! kullanılır

let value =prompt("Lütfen bir sayı giriniz");


