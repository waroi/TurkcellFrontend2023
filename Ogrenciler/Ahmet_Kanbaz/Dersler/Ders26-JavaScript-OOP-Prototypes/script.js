//Normal bir şekilde Object oluşturuyoruz.
//Object Literal
// const person1 = {
//   name: "Ahmet",
//   age: 24,
//   showInfo: function() {
//     console.log("Bilgiler Gösterilmektedir.");
//   }
// };

//Yeni bir Object oluşturuyoruz.
//Object Literal
// const person2 = {
//   name: "Mehmet",
//   age: 66,
//   showInfo: function() {
//     console.log("Bilgiler Gösterilmektedir.");
//   }
// };

// console.log(person1);
// console.log(person2);

//Oluşturulan her iki object de aynı değerleri taşımaktadır.
//Her iki object de aynı fonksiyonu taşımaktadır.
//Her iki object de aynı özelliği taşımaktadır.
//Aynı özellikleri taşıyan objectleri tekrar tekrar oluşturmamız gerekmektedir.
//Aynı özellikleri taşıyan her bir object için ayrı ayrı bellekte yer ayrılmaktadır.
//Bu durumda bellekte gereksiz yer kaplamaktadır.
//Aynı zamanda her bir kişiyi oluşturabilmek için aynı kodları tekrar tekrar yazmamız gerekmektedir.
//Bu durumların önüne geçmek için Constructor fonksiyonlar kullanılmaktadır.

//Bu fonksiyon Constructor Fonksiyon'a girmektedir.
//Date adında bir Constructor Fonksiyon'da bulunmaktadır.
//Bu fonksiyonu new anahtar kelimesi ile çağırdığımızda yeni bir Object oluşturulmaktadır.
//Bu fonksiyonu new anahtar kelimesi ile çağırmadığımızda ise fonksiyonun içerisindeki kodlar çalışmaktadır.
// const date = new Date();
// console.log(date.getFullYear());


//Yapıcı Fonksiyonlar - Constructor Functions
//Constructor Fonksiyonlar ile Object oluşturmak.
//Constructor oluştururken ilk harfi büyük yazılmaktadır.
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.showInfo = function() {
//     console.log("Bilgiler Gösterilmektedir.");
//   }
// }

function Person(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  // this.showInfo = function() {
  //   console.log(`
  //   İsim: ${this.name}
  //   Yaş: ${this.age}
  //   Maaş: ${this.salary}
  //   `);
  // };
}

//Constructor içerisinde bulunan this anahtar kelimesi ile oluşturulan Object'in özelliklerine erişebiliriz.
//Örneğin aşağıda oluşturulan person1 Object'inin özelliğine erişmek için this.name, this.age şeklinde kullanılmaktadır.
//this anahtar kelimesi, lexical scope içerisinde bulunduğu fonksiyonu göstermektedir.


//Yeni bir Object oluşturuyoruz.
const person3 = new Person("Ahmet", 24, 4000);
//İkinci defa yeni bir Object oluşturmak istediğimiz zaman tek yapmamız gereken new Person("Mehmet", 66) gibi yazmaktır.
const person4 = new Person("Mehmet", 66, 10000);
//Yani Constructor Fonksiyon ile Object oluşturmak için tek yapmamız gereken new anahtar kelimesi ile Constructor Fonksiyon'u çağırmaktır.
//Yani Object içerisindeki değerleri değiştirerek yeni bir Object oluşturmaktayız.

//Constructor içerisinde bulunan showInfo fonksiyonu, her bir Object için ayrı ayrı bellekte yer kaplamaktadır.
//Yani showInfo fonksiyonu her bir Object oluşturulduğunda değişmemesine rağmen yeniden oluşturulmaktadır.
//Object oluştururken showInfo fonksiyonunu çoklamış oluyoruz yine de.
//Tarayıcı belleğinde iki adet showInfo fonksiyonu bulunmaktadır.
//Aynı ve değişmeyen fonksiyonu her bir Object için ayrı ayrı bellekte tutmamız gereksizdir.
//Bu durumun önüne geçmek gerekmektedir.
//Bunun için de Prototype'lar kullanılmaktadır.
//Burada showInfo fonksiyonu Prototype içerisine taşınmaktadır.
//Prototype'lar ile bellekte yerden tasarruf edilmektedir.
//Prototype'lar ile Object oluşturulurken bellekte yerden tasarruf edilmektedir.
//Prototype'lar ile Object oluştururken Object içerisindeki fonksiyonlar tekrar tekrar bellekte yer kaplamamaktadır.
//Prototype'lar ile Object oluştururken Object içerisindeki fonksiyonlar bellekte tek bir yerde tutulmaktadır.
// Person.prototype.showInfo = function() {
//   console.log(`
//   İsim: ${this.name}
//   Yaş: ${this.age}
//   Maaş: ${this.salary}
//   `);
// };

//Person prototype'ına showInfo fonksiyonu eklemek yerine daha da aşağıya eklenebilir. Bunu da Object prototype'ına ekleyerek yapmak mümkündür.
//Object ile oluşturulan prototype'lara her yerden erişim sağlanabilmektedir.
//Object prototype'ına eklenen fonksiyon, toString() fonksiyonu gibi her yerden erişilebilen fonksiyonlar gibi çalışmaktadır.
//toString() fonksiyonunun seviyesine showInfo fonksiyonu da eklenmiştir.
Object.prototype.showInfo = function() {
  console.log(`
  İsim: ${this.name}
  Yaş: ${this.age}
  Maaş: ${this.salary}
  `);
}

const person6 = {
  name: "Varol",
  age: 37,
  salary: 10000
};

console.log(person6);
//person6 Object'i içerisinde showInfo fonksiyonu bulunmamaktadır.
//Ancak Object prototype'ı içerisinde showInfo fonksiyonu bulunmaktadır.
//Bu durumda person6 Object'i içerisinde showInfo fonksiyonu bulunmamasına rağmen Object prototype'ı içerisinde showInfo fonksiyonu bulunduğu için showInfo fonksiyonu çalışmaktadır.
//Bu durumda Object prototype'ı içerisinde bulunan showInfo fonksiyonu person6 Object'i içerisinde bulunan name, age ve salary değerlerini göstermektedir.
person6.showInfo();

// console.log(person3);
// console.log(person4);
// person3.showInfo();
// person4.showInfo();

//Constructor içerisinde default değerler verilebilmektedir.
//Bu değerleri vermek için aşağıdaki gibi yazılmaktadır.
// function Person2(name = "Bilgi Yok", age = "Bilgi Yok", salary = "Bilgi Yok") {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
// }

// const personDefault = new Person2();
// console.log(personDefault);


//Yeni bir Constructor Fonksiyon Oluşturuyoruz.
//Oluşturulan bu Constructor'daki bazı özellikler Person Constructor'ı ile aynıdır.
//Bu durumda Person Constructor'ı ile Employee Constructor'ı arasında bir bağlantı kurulmaktadır.
//Employee Constructor'ı Person Constructor'ı ile bağlantılıdır.
//Employee Constructor'ı Person Constructor'ı tarafından extend edilmektedir.
//Employee Constructor'ı Person Constructor'ı tarafından extend edildiği için Employee Constructor'ı Person Constructor'ı tarafından miras almaktadır.
//Employee Constructor'ı Person Constructor'ı tarafından miras aldığı için Employee Constructor'ı Person Constructor'ı tarafından oluşturulan Object'in özelliklerine erişebilmektedir.
//Employee Constructor'ı Person Constructor'ı tarafından miras aldığı için Employee Constructor'ı Person Constructor'ı tarafından oluşturulan Object'in fonksiyonlarına erişebilmektedir.
//Bu özellikler name ve age özellikleridir.
//Bu özelliklerin Employee Constructor'ı tarafından da kullanılabilmesi için Person Constructor'ı tarafından oluşturulan Object'in özelliklerine erişilmesi gerekmektedir.
function Employee(name, age, salary, gender, text) {
  //Burada Person Constructor'ı tarafından oluşturulan Object'in özelliklerine erişmek için call fonksiyonu kullanılmaktadır.
  //call fonksiyonu ile Person Constructor'ı tarafından oluşturulan Object'in özelliklerine erişilmektedir.
  //Bunu kullanabilmek için Object.create fonksiyonu kullanılarak fonksiyonlar bağlanmalıdır.
  Person.call(this, name, age, salary);
  this.gender = gender;
  this.text = text;
}

//Employee Constructor'ı Person Constructor'ı tarafından extend edildiği için Employee Constructor'ı Person Constructor'ı tarafından miras almaktadır.
Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Ahmet", 24, 7000, "Erkek", "Bilgiler Gösterilmektedir.");
console.log(emp1);
//Employee tarafından oluşturulan Object için de Person Object'inin prototype'ı içerisinde bulunan fonksiyonlar kullanılabilmektedir.
emp1.showInfo();