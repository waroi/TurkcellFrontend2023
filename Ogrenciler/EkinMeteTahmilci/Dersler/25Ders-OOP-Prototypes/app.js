// Object Literal
// const person1 = {
//   name: 'Varol',
//   age: 37,
//   showInfo: function () {
//     console.log('bilgiler gösteriliyor...');
//   },
// };

// const person2 = {
//   name: 'Behçet',
//   age: 23,
//   showInfo: function () {
//     console.log('bilgiler gösteriliyor...');
//   },
// };

// console.log(person1);
// console.log(person2);

// const date = new Date();
// console.log(date.getFullYear());

// Yapıcı Fonksiyonlar (Constructor)

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
  // this.showInfo = function () {
  // console.log(`    isim: ${this.name}
  //   yaş: ${this.age}
  //   maaş: ${this.salary}`);
  // };
// }

// function Employee(name, age, salary, test) {
//   Person.call(this, name, age);
//   this.salary = salary;
//   this.test = test;
// }

// Employee.prototype = Object.create(Person.prototype);

// Person.prototype.showInfo = function () {
//   console.log(`    isim: ${this.name}
//     yaş: ${this.age}
//     maaş: ${this.salary}
//     deneme: ${this.test}
//     `);
// };

// Object.prototype.showInfo = function () {
//   console.log(`    isim: ${this.name}
//     yaş: ${this.age}
//     maaş: ${this.salary}
//     deneme: ${this.test}
//     `);
// };

// Object.prototype.showInfo = function () {
//   console.log(`Merhaba`);
// };

// const person1 = new Person('Varol', 37, 4000);
// const person2 = new Person('Behçet', 23, 5000);

// console.log(person1);
// console.log(person2);

// person1.showInfo();
// person2.showInfo();

// const emp1 = new Employee('Varol', 37, 4000, 'test');
// console.log(emp1);
// emp1.showInfo();
// console.log(Object.create(Person.prototype))

// const person3 = {
//   name: 'Varol',
//   age: 37,
// };
// console.log(person3);
// person3.showInfo();


// function Person(name, surname, age){
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }

// function Employee(name, surname, salary){
//   Person.call(this, name, surname);
//   this.salary = salary;
// }

// Person.prototype.ShowInfo = function(){
//   console.log(this.name);
// }

// Employee.prototype = Object.create(Person.prototype);

// const Ekin = new Employee("ekin","tahmilci",4000);

// Ekin.ShowInfo();

// const Mete = new Person("mete", "tahmilci", "25");

// Mete.ShowInfo();

// Object.prototype.ekinFunc = function(){
//   console.log(`${this.name}
//   ${this.surname}`);
// }

// Ekin.ekinFunc(); 


// const key1 = {
//   name: "ekin",
//   age: 25
// }


// let mapExample = new Map();
// mapExample.set("key0", "slmslm");
// mapExample.set(key1, "Ekin Mete");
// mapExample.set("key2", "naber kanka");

// let eq = mapExample.get("key2");
// // console.log(eq);
// // console.log(mapExample);

// mapExample.forEach((value, key) => console.log(key, value));


// function a(){
//   function b(){
//     function c(){
//       console.log(`c function called ${x}`);
//     }
//     var x = 3;
//     c();
//     console.log(`b function called ${x}`);
//   }
//   var x =2;
//   b();
//   console.log(`a function called ${x}`);
// }

// var x = 1;
// a();
// console.log(`main function called ${x}`);

const user ={
  name:'ekin',
  sayHello: function(){
    const me = this;
    console.log(me);
  }
}

user.sayHello();