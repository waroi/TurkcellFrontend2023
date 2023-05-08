// let numbers=[23,21,1,42,32,56];

// let value=numbers.sort(()=>{Math.random()-0.5});

// // Burada 0.5 ile eksi ve pozitif değişimi ile gelecek indexlerin rastgele olması durumu sağlanıyor.

// Array Methods

// let numbers=[5,9,2,19,70,8,100,2,35,27];
// let langs=["python","java","C++","javascript"];

// // map method

// const map1=numbers.map((number)=>{number*2}); //genelde listeler için tekil isim yazılır


// let users=[
//     {firstname:"selim", lastname : "eminoğlu",age:23},
//     {firstname:"yavuz", lastname: "eminoğlu",age:17}
// ];

// let userNames=users.map((user)=> user.firstname);

// userNames.map((name)=> console.log(name));

// // foreach method

// langs.forEach((lang)=>{
//     console.log(lang); //`<li>${lang}</li>`
// });

// // filter method

// const result =langs.filter((lang)=> lang.length>3);

// // filter ile koşul sunup sonucunu dönebiliriz

// // reduce method

// const result2 =numbers.reduce((total,number)=>total+=number,0);

// Arrow function

// function deneme(name){
//     console.log(name);
// }

// const deneme=(name)=>console.log(name);

// function cube(x){
//     return x*x*x;
// }

// const cube=(x)=>x*x*x;

// console.log(a);
// console.log(b);
// console.log(c);

// var a=10;
// let b=20;
// const c=30;
// Burada let ve const için hoisting kapalı olduğundan dolayı hata verir ancak var undefined döndürür
// bu aşamada var değişkeni bize hata vermediği için sorunu anlamak zorlaşır

// Spread operatörü-rest operator

// let langs2=["Go","Perl"];
// let langs3=["Rust","Dart"];

// langs =[...langs2,...langs,...langs3];

// // Destruction -object

// let user= {name:"selim",age:23,isOnline:true,email:"dene@gmail.com"};

// let {name:ad,email,...geriyekalanlar}=user;

// // burada name:ad diye normalde tanım yazılır ama key ile tanım aynıysa direkt kelime yazılır.

// console.log(ad);
// console.log(email);//bu durum sıranın değil key değerini önemini gösterir
// console.log(geriyekalanlar);

// const numbers2=[1,2,3,4,5,6,7,8,9,10];

// let [a,b,...c]=numbers2;

// // Dizilerdeyse direkt olarak sıralama durumu olur burada a =1 b=2 oluyor.

// // for in

// // objectleri map gibi dönmemizi sağlıyor
// const persons={name:"selim",age:23,isonline:true,email:"dene"}

// for (let prop in persons){
//     console.log(prop,person[prop]); //hem key hem value alınıyor
// }

// for (let lang in langs){
//     console.log(langs[lang]); // array içinde kullanılır ancak map gibi fonksiyonlar daha etkili
// }

// // for of

// // objeler için kullanılamıyor
// // iterable özelliği olmaığından ötürü kullanılamıyor
// // for in durumuna göre key gibi değişkeni dönmüyor ama pek tercih edilmez.
// for (let lang of langs){
//     console.log(lang); // for of direkt verinin kendini dönmemizi sağlıyor
// }

// Map veri tipi
// bunu ararken map set gibi arayarak veri tipi olanı daha kolay bulabiliriz

// const key1="yavuz";
// const key2={
//     a:10,b:20
// }
// const key3=()=>7;

// map içerisinde keyler uniqe özellik sergilemiyor yani aynı keyleri tekrardan yazabiliyoruz 
// sadece aynı key2 değişkeni tekrar yazılırsa gibi durumlarda güncelleme yapabiliriz

// let denemeMap=new Map();

// // map veri türüne eleman ekleme kısmı
// denemeMap.set(key1,"string değer");
// denemeMap.set(key2,"object değer");
// denemeMap.set(key3,"function değer");


// console.log(denemeMap); // obje veri türünde bir değişken oluyor
// console.log(typeof denemeMap);

// // objelerden en büyük farkı key değerleri objelerde sadece string olabiliyorken
// // map veri türü içerisinde bunlar string dışında değerlerde olabilir

// // Ayrıca map veri türü iterable edilebilirler, objeler edilemezler-- önemli bir fark

// // map değerini okuma
// console.log(denemeMap.get("yavuz"));
// console.log(denemeMap.get(key2));// istersek içerik olarak ya da değişken adı ile key çağrısı yaptık

// denemeMap.foreach((value,key)=>console.log(key,value));

// const students=new Map();

// students.set("varol",90);
// students.set("selim",80);
// students.set("yavuz",70);

// console.log(students);

// students.foreach((value,key)=>console.log(key,value));

// for of ile de kullanabiliriz

// Set veri tipi (map obje içinken bunlar array için düşünülebilir)

// const mySet=new Set();
// mySet.add(50);
// mySet.add("selim");
// mySet.add([1,2,4]);

// console.log(mySet);
// console.log(typeof mySet);

// console.log(mySet.has(50)); // içinde değer var mı diye true false dönüyor

// const arr=[1,2,4,5] // bu dizi içerisinde eğer aynı değerden birden fazla varsa bunları tek yapar
// // aslında tercih edilmesinde en büyük sebeplerden biri budur
// const mySet2=new Set(arr);

// console.log(mySet2.has(11));

// mySet2.foreach((value)=>console.log(value));


// Farklı dizi methodları

// arr.every() bu method içerisindeki koşul arr dizisnde tüm elemanlar için doğruysa true döner
// arr.some() bu method ise içerisinde en az 1 tane eleman koşulu sağlıyorsa true döndürür