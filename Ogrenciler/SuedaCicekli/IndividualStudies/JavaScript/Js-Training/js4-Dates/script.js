let now = new Date(); //Şimdiki(now) saat ve tarih bilgisini ulaştırır.

result = now;
//get methods
result = now.getDate(); // gün bilgisi , 3 verir
result = now.getMonth();// ay bilgisi 
result = now.getDay(); // gün bilgisi Pazar :0  Cumartesi :6 
result = now.getFullYear(); // 2023
result = now.getTime(); //Timestap olarak saati verir
result = now.getMinutes(); // dakika

//set methods
//Tarih değiştirme güncelleme methodları 

now.setFullYear(2025);
result = now;

console.log(result);
console.log(typeof result);