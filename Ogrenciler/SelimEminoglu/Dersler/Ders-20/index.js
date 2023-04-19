// // Array özellikleri

// console.log(this); //en genel kapsayıcıyı getirir,window objesini alıyor burada eğer araba olsa başka bir obje olabilir.

// let value;

// const numbers =[43,56,33,23,44,35,5];
// const langs=["python","java","C++","php"];

// value=numbers.length; // array uzunluğu
// value=numbers[0]; // array ilk eleman
// value=numbers[2]; // array üçüncü eleman
// value=numbers[-1]; // array son eleman javada son eleman vermez
// value=numbers[numbers.length-1]; // array son eleman
// numbers.push(77);// array eleman ekleme
// numbers.pop(); //array sonundan eleman silme,sadece sondan yapabilir
// numbers.shift(); //array ilk eleman silme
// value=numbers.indexOf(33);// aradığın değerin indexini getirir,eğer içinde yazılan değer yoksa -1 döner ve false olarak algılanır
// value=numbers.includes(33);// buda değer var mı yok mu diye true-false değeri verir
// numbers[1]=100;// array elemanı değiştirme
// value=numbers;

// value=langs.sort(); // elemanları alfabetik olarak sıralar
// value=numbers.sort(); // yine alfabetik sıraya göre, sayılarda da dahil
// value=numbers.sort(function (a,b){
//     return a-b;
// }); // bu fonksiyon ile küçükten büyüğe sıralama yapabiliyoruz. Burada sort içerisinde fonksiyon alabilir.

// value=numbers.sort(function (a,b){
//     return b-a;
// }); // bu fonksiyon ile büyükten küçüğe sıralama yapabiliyoruz. Burada sort içerisinde fonksiyon alabilir.

// value=numbers.reverse();//elemanları tersten sıralama yapabiliyoruz

// console.log(value);
// console.log(typeof value);

// -------------------------------------------
// Objects Özellikleri

// let value;

// const user={
//     name:"selim eminoğlu",
//     age:23,
//     email:"selim@gmail.com",
//     langs:["python","react"],
//     adress:{
//         city:"izmir",
//         street:"6180.sk"
//     },
//     work:function(){
//         console.log("çalışıyor");
//     },
// }

// value =user.adress.city; // elemana erişim sağlama
// value =user.work(); //return olmadığı için undefined değeri dönüyor, parantezleri olmazsa direkt fonksiyonu alırız

// console.log(value);

// const user = new Object(); // boş obje tanımlama

// // -----------------------------------

// // Zaman Objesi

// let value;
// let date= new Date(); // günü obje olarak alıyoruz

// value =date.getFullYear();
// value =date.getMonth()+1;// bir eksik verdiği için böyle ekleniyor
// value =date.getDate();
// value =date.getDay();// haftanın kaçıncı günde olduğu bilgisini verir

// value =`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;


// console.log(value);
// console.log(date);// objenin kendisi

// // api den gelen bilginin olup olmadığını anlamak için kullanabiliriz (?)
// // objelerde çok popüler bir kullanımı var

// console.log(user?.adress?.street); // buradaki ? leri onların var olup olmadığını sorgulamak için kullanılır

// TODO: Switch Case Gelecek

// Kullanıcıdan değer almak



let num=Math.floor(Math.random()*100);
let say=0;
console.log(num);
let puan;
let value =prompt("değer girin");

for(;;){
    console.log(parseInt(num));
    if(value>num){
        console.log("değeriniz büyük");
        value=prompt("tekrar");
        say+=1;
    }
    else if(value == num){
        console.log("değeriniz doğru");
        say+=1;

        if(say>0 && say<=3){
           puan=100;
           alert("tebrikler knks "+ say +" denemenizde bildiniz " + puan+ " kazandınız");
        }
        else if(say>3 && say<=5){
            puan=80;
            alert("tebrikler knks "+ say +" denemenizde bildiniz " + puan+ " kazandınız");
        }
        else{
            puan=30;
           alert("şansına küs "+ say +" denemenizde bildiniz " + puan+ " kazandınız");
        }

        break;
    }
    else if(value<num){
        console.log("değeriniz küçük");
        value=prompt("tekrar");
        say+=1;
    }
}