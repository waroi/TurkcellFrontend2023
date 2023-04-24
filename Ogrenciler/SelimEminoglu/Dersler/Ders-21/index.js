// // Swicth Case 

// const islem=2;

// switch(islem){
//     case 1:
//         console.log("islem 1 secildi");
//         break;
//     case 2:
//         console.log("islem 2 secildi");
//         break;
//     default:
//         console.log("gecersiz islem");
//         // defaulta kullanılmasına gerek yok çünkü diğerleri sağlarsa breakler bloğu kıracak
// }

// // diğer koşullar sağlanmasa da yazılmaması için break gereklidir.

// // function

// function merhaba(){
//     console.log("merhaba");
// }

// merhaba();

// // Fonksiyonu çağırmayı öncesinde de hosting ile yapabiliyoruz.


// function faktoriyel(sayi){
//     if(sayi==1 || sayi==0){
//         return 1;
//     }
//     else{
//         return sayi*faktoriyel(sayi-1);   
//     }
// }

// function asal(sayi){
//     if(sayi==1 || sayi==0){
//         return "asal değil";
//     }

//     for(let i=2;i<sayi;i++){
//         if(sayi%i==0){
//             return "asal değil";
//         }   
//     }
//     return "asal sayı";
// }

// function even(sayi){
//     if(sayi%2==0){
//         return "çifttir";
//     }
//     else{
//         return "tektir";
//     }

// }

// function perfect(sayi){

//     let sum=0;
//     for (let i=1;i<=sayi;i++){
        
//         if(sayi%i==0){
//             sum+=i;
//         }
//     }
//     if(sum==(sayi*2)){
//         return "mükemmel sayıdır";
//     }
//     else{
//         return "mükemmel sayı değildir";
//     }
// }

// let den=true;

// while(den){
//     let value =prompt("bir sayı giriniz");
//     let islem=Number(prompt("1-faktoriyel 2-asal sayı 3-çift sayı 4-mükemmel sayı\nişlem seçeneği giriniz"));
//     if(!isNaN(islem) && !isNaN(value) && (islem<5 && islem>0)&& value>0){
//         switch (islem){
//             case 1:
//                 console.log(value+" faktöriyeli: "+faktoriyel(value));
//                 break;
//             case 2:
//                 console.log(value+" : "+asal(value));
//                 break;
//             case 3:
//                 console.log(value+" : "+even(value));
//                 break;
//             case 4:
//                 console.log(value+" : "+perfect(value));
//                 break;
//             }       
//             den=false;
//     }
//     else{
//         alert("Geçersiz bir karakter giriyorsunuz, lütfen bir pozitif tam sayı giriniz");
//     }
// }
    
// const database={
//     host:"localhost",
//     add:function(){
//         console.log("veri eklendi");
//     },
//     get:function (){
//         console.log("veri okundu");
//     },
//     update:function(){
//         console.log("veri güncellendi");
//     },
//     delete:function(){
//         console.log("veri silindi");
//     },
// };

// console.log(database.host);
// database.add();
// database.get();
// database.update();

// Arrow functions

// const kare=function(x){
//     return x*x;
// }

// tek satırda biterse direkt ok işareti ile yapılabilir
// const kare =(x)=> x*x;

// const kare=(x)=>{
//     return x*x;
// };

// console.log(kare(5));

// Arrow fonksiyonun en önemli özelliği this elementini direkt bind etmesi yani güncellemesidir diyebiliriz.

// Döngüler
// while döngüsü

// let i=0;

// while(i<10){
//     console.log("merhaba");
//     i++;
// }

// let i=0;

// while(i<10){

//     if(i==3 || i==5){
//         i++;
//         continue;
//     }
//     console.log(`deneme ${i}`);
//     i++;
// }


// Array map() methodu

// const langs=["python","java","C++","php"];

// // langs.map(function (x){
// //     console.log(x.length);
// // })

// langs.map((x)=> console.log(x));

// // map fonksiyonu for veya while dan daha hızlı çalışmaktadır.

