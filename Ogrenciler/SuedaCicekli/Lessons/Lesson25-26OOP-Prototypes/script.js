// //Object Literal

// const person1 = {
//   name: "Sueda",
//   age: 24,
//   showInfo: function () {
//     console.log("Bilgiler gösteriliyor");
//   },
// };
// const person2 = {
//   name: "Abdullah",
//   age: 26,
//   showInfo: function () {
//     console.log("Bilgiler gösteriliyor");
//   },
// };

// console.log(person1);
// console.log(person2);

// //date constructurından bir obje oluşturuyorum
// const date = new Date();
// console.log(date.getFullYear());

// Yapıcı fonksiyonlar (constructur)
// ecma script 5 ile gelen bir özellik 
// show info fonksiyonu her obje için ayrı ayrı oluşturuluyor. Bu yüzden bellekte gereksiz yer kaplıyor. Bu yüzden yapıcı fonksiyonlar kullanılır.


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.salary = 8000;
//   this.showInfo = function () {
//     console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age} 
//     Maaş: ${this.salary}
//     `);
//   };
// }

// const person1 = new Person('Sueda', 24);
// const person2 = new Person('Abdullah', 26);

// console.log(person1);
// console.log(person2);

// person1.showInfo();
// person2.showInfo();



//Bu kod, önceki örnekle aynı nesneleri oluşturur, ancak showInfo fonksiyonu artık yapıcı
// fonksiyonun prototipi üzerinde tanımlanmıştır. Her nesne, bu prototip nesnesi üzerindeki showInfo 
// metodunu kullanarak fonksiyonu çağırabilir. Bu, bellekte gereksiz kopyalar oluşturmaktan kaçınır ve
//  daha verimli bir kod sağlar.

function Person(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}


// Person.prototype.showInfo = function () {
//   console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age} 
//     Maaş: ${this.salary}
//     `);
// };

// const person1 = new Person('Sueda', 24);
// const person2 = new Person('Abdullah', 26);

// console.log(person1);
// console.log(person2);

// person1.showInfo();
// person2.showInfo();

//Employeedaki bazı özellikler Person'da da var. Bu yüzden Person'dan kalıtım alabiliriz.
// bunu için Person'ı bir prototype olarak kullanabiliriz.
//

function Employee(name, age, salary, test) {
  Person.call(this, name, age, salary);
  this.test = test;

}



