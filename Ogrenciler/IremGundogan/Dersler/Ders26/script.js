// //Object Literal
// const person1 = {
//   name: "irem",
//   age: "22",
//   showInfo: function () {
//     console.log("bilgiler gösteriliyor...");
//   },
// };
// const person2 = {
//   name: "mahmut",
//   age: "23",
//   showInfo: function () {
//     console.log("bilgiler gösteriliyor...");
//   },
// };
// console.log(person1);
// console.log(person2);

const { prototype } = require("events");

// const date = new Date();
// console.log(date.getFullYear());

//Yapıcı Fonksiyonlar
function Person(name, age) {
  this.name = name;
  this.age = age;
  //   this.salary = 4000;
  //   this.showInfo = function (`isim:${this.name
}
function Employee(name, age, salary, test) {
  Person.call(this, name, age);
  this.salary = salary;
  this.test = test;
}
Employee.prototype = object.create(Person, prototype);
// //     yaş:${this.age}
// //     maaş:${this.salary}`) {
//     console.log(`
//     `);
//   };
// }
// Person.prototype.showInfo = function (test) {
//   console.log(`isim:${this.name}
//     yaş:${this.age}
//     maaş:${this.salary}
//     deneme:{test}`);
// };
object.prototype.showInfo = function () {
  console.log(`isim:{this.name}
    yaş:$`);
};
// const person1 = new Person("irem", "22", "4000");
// const person2 = new Person("mahmut", "23", "5000");

// console.log(person1);
// console.log(person2);

// person1.showInfo();
// person2.showInfo();

const emp1 = new Employee("irem", 22, 4000);
