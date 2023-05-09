// let name = "Sueda";
// let surname = "Çiçekli";
// let age = 24;
// let city = "Ankara";

// let message = 'Benim adım ' + name + ' ' + surname + ' ' + age + ' yaşındayım. ' + city + '\'da yaşıyorum.'
// //Back tick
// mesaj = `Benim adım ${name} ${surname} ${age} yaşındayım. ${city}'da yaşıyorum. Emekliliğe ${65 - age} yılım kaldı.`

// //Ternary operators
// let pension = (65 - age > 0) ? "Emekliliğe " + (65 - age) + " yıl kaldı." : "Zaten emekli oldunuz.";

// console.log(message)
// console.log(mesaj)
// console.log(pension)


// let course = "  Web Geliştirme Eğitimi"; // baştaki ve sondaki  boşlukları trim ile kaldırabiliriz
// let result;
// result = course.toLowerCase();
// result = course.toUpperCase();
// result = course.length;
// result = course[0]; // 0. indexteki bilgi geldi
// result = course.slice(0, 14); // 0'dan itibaren 14. indexi dahil etmeden alır
// result = course.slice(15);// ikinci bir değer vermediğimiz için verilen değerden sonrasını alır.
// result = course.slice(-10); // sondan başa doğru
// result = course.substring(0, 14); // slice ile aynı method
// result = course.replace("Eğitimi", "Kursu");
// result = course.trim(); // sol ve sağdaki boşluklar kalktı
// result = course.trimStart();
// result = course.indexOf("Geliştirme"); // başlangıç index numarasını verir
// result = course.split(" "); //boşluklardan ayırıp ve içindekileri dizi olarak verir
// result = course.split(" ")[3]; //3. indextekini verir
// result = course.includes("Geliştirme"); //boolean değer olarak döner

// console.log(result);

// // uygulama

// let url = "https://www.suedacicekli.com";
// let webSite = "Papatya Atolyem";

// //1- url kaç karakterlidir?
// console.log("Url ", url.length, " Karakterden oluşur.")
// //2- web site adı kaç kelimeden oluşmaktadır?
// console.log(webSite.split(" ").length)

// //3- url https ile mi başlıyor ?
// console.log(url.includes("http"))
// console.log(url.startsWith("https")) // mantıklı olan çözüm
// //4- siteadı içerisinde Papatya kelimesi var mı ?
// console.log(webSite.includes("Papatya"));
// //5- url ve webSite değişkenlerini kullanarak aşağıdaki string bilgiyi oluştur.
// //https://www.suedacicekli.com/papatyaatolyem-design
// let newUrl = webSite.replace(" ", "").toLowerCase().concat("-design");
// console.log(url.concat("/" + newUrl))


/****************************************** */
//NUMBERS

let result;
result = 10; // number
result = "10"; //string
result = Number("10"); //string to number 
result = parseInt("10.6"); // tam sayı olarak int çevirir
result = parseFloat("10.6") // ondalıklı sayı olarak verir
result = parseInt("10a"); // bulabildiği kadar rakamı int verir
result = parseInt("a10"); //NaN yani Not a Number , veri number değildir.
result = isNaN("10a");
result = isNaN(10);
// console.log(typeof result);
// console.log(result)
// numbers method
let number = 15.12455667;

result = number.toPrecision(5); //basamak sayısı , yuvarlama yapar
result = number.toFixed(2); //ondalıklı kısmın basamağını belirler 
result = Math.round(2.3); // 2,2ye yuvarlar
result = Math.round(2.7); //3'e yuvarlar
result = Math.ceil(2.3); // yukarıya yuvarlar yani 3
result = Math.floor(2.7); //aşağıya yuvarlar yani 2
result = Math.sqrt(25); // karekök alır
result = Math.pow(2, 3); //üs alır
result = Math.abs(-10); //mutlak değer
result = Math.min(4, 6, 1, 5, 9)// min sayıyı getirir
result = Math.max(4, 6, 1, 5, 9)// max sayıyı getirir
result = Math.random();// 0 ile 1 arası sayı üretir
result = Math.floor(Math.random() * 10); // 0 ile 9 arasında tam sayı
result = Math.floor(Math.random() * 10) + 1; //1 ile 10 arasında
result = Math.floor(Math.random() * 100) + 1; //1 ile 100 arasında bir sayı elde ederiz


console.log(number)
console.log(typeof result);
console.log(result)