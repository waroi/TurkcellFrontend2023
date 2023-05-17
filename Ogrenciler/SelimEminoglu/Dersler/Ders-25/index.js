// // object literal

// const person1={
//     name:'selim',
//     age:23,
//     showInfo:function (){
//         console.log('gösterildi');
//     }
// };

// // const date= new Date(); örnek yapıcı fonk


// // Yapıcı fonksiyonlar

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.showİnfo=function(){
//         console.log('gösterildi');
//     };
// }

// const person1=new Person("selim",23);
// const person2=new Person("yavuz",17);

// shoinfo fonksiyonunu farklı olarak tanımlamak ve farklı nesnelerde tekrar kopyalamamak için

// Person.prototype.showİnfo=function (){
//     console.log("deneme");
// }

// inheritance

// function person(name,age){
//     this.name=name;
//     this.age=age;
// }

// function employee(name,age,salary,test){
//     person.call(this,name,age); bu sadece değişkenleri aktarma için kullanılıyor.
//     this.salary=salary;
//     this.test=test;
// }

// burası prototype ile zincir yapar , miras alma için
// employee.protoype=Object.create(person.prototype);

// prototype ile window veya document kısmına fonksiyon ekleme
// window.prototype.showİnfo=function (){
//     console.log("etettete");
// }

// prototype ile object nesnelerine fonk ekleme

// Object.prototype.showİnfo=function (){
//     console.log("deneme");
// }

// Aslında prototype zinciri gibi kullanıyoruz yani object nesnesi açılırken showinfo fonksiyonu olmuş olacak
// ama var olan bir fonku ezmek için tanımladığımız nesnelerin prototype ı içerisinde tekrar aynı isimle tanım yapabiliriz
// bu sayede nesneden önce kendi atasının prototype ına bakar sonrasında yoksa daha kapsayıcı olana bakar
