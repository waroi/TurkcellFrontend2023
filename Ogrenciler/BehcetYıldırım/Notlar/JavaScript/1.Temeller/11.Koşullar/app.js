// Karşılaştırma operatörleri

// ==

console.log(2==2);
console.log("js" == "java");
console.log("2" == 2); // bir tarafta sayı bir tarafta string var ise 
// sayıyı string olarak algılar.

/*             ===
 değerler aynı mı ve tipleri aynı mı olarak kontrol eder. */

 //        < > <= >= !=


console.log("------------------------------------------------------")
 const error= false;

 if (error == true){

    console.log("Hata oluştu.");
 }
 else{
    console.log("Hata yok.");
 }

// Ternary Operatörü
// Eğer if else koşullarımız var ise ve bu koşulların içerisinde tek bir işlem yapıyorsak kullanılır.

const number =110;
console.log(number === 100 ? "sayı 100" : "sayı 100 değil.") ;

