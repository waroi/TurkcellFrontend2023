let name = "Sueda";
let surname = "Çiçekli";
let age = 24;
let city = "Ankara";

let message = 'Benim adım ' + name + ' ' + surname + ' ' + age + ' yaşındayım. ' + city + '\'da yaşıyorum.'
//Back tick
mesaj = `Benim adım ${name} ${surname} ${age} yaşındayım. ${city}'da yaşıyorum. Emekliliğe ${65 - age} yılım kaldı.`

//Ternary operators
let pension = (65 - age > 0) ? "Emekliliğe " + (65 - age) + " yıl kaldı." : "Zaten emekli oldunuz.";

console.log(message)
console.log(mesaj)
console.log(pension)


let course = "  Web Geliştirme Eğitimi"; // baştaki ve sondaki  boşlukları trim ile kaldırabiliriz
let result;
result = course.toLowerCase();
result = course.toUpperCase();
result = course.length;
result = course[0]; // 0. indexteki bilgi geldi
result = course.slice(0, 14); // 0'dan itibaren 14. indexi dahil etmeden alır
result = course.slice(15);// ikinci bir değer vermediğimiz için verilen değerden sonrasını alır.
result = course.slice(-10); // sondan başa doğru
result = course.substring(0, 14); // slice ile aynı method
result = course.replace("Eğitimi", "Kursu");
result = course.trim(); // sol ve sağdaki boşluklar kalktı
result = course.trimStart();
result = course.indexOf("Geliştirme"); // başlangıç index numarasını verir
result = course.split(" "); //boşluklardan ayırıp ve içindekileri dizi olarak verir
result = course.split(" ")[3]; //3. indextekini verir
result = course.includes("Geliştirme"); //boolean değer olarak döner

console.log(result);

// uygulama

let url = "https://www.suedacicekli.com";
let webSite = "Papatya Atolyem";

//1- url kaç karakterlidir?
console.log("Url ", url.length, " Karakterden oluşur.")
//2- web site adı kaç kelimeden oluşmaktadır?
console.log(webSite.split(" ").length)

//3- url https ile mi başlıyor ?
console.log(url.includes("http"))
console.log(url.startsWith("https")) // mantıklı olan çözüm
//4- siteadı içerisinde Papatya kelimesi var mı ?
console.log(webSite.includes("Papatya"));
//5- url ve webSite değişkenlerini kullanarak aşağıdaki string bilgiyi oluştur.
//https://www.suedacicekli.com/papatyaatolyem-design
let newUrl = webSite.replace(" ", "").toLowerCase().concat("-design");
console.log(url.concat("/" + newUrl))

