// // Object Literal
// const person1 = {
//   name: "Ege",
//   age: 25,
//   showInfo: function () {
//     console.log("bilgiler gösteriliyor...");
//   },
// };

// const person2 = {
//   name: "Varol",
//   age: 37,
//   showInfo: function () {
//     console.log("bilgiler gösteriliyor...");
//   },
// };

// console.log(person1);
// console.log(person2);

// // Construcor üzerinden nesne oluşturma
// const date = new Date();

// console.log(date.getFullYear());

// Yapıcı Fonksiyonlar (Constructor)

function Person(name, age /*, salary */) {
  this.name = name;
  this.age = age;
  //   this.salary = salary
  //   this.showInfo = function () {
  //     console.log(`isim: ${this.name}
  // yaş: ${this.age}
  // maaş: ${this.salary}`);
  //   };
}

function Employee(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
}

// Person.prototype.showInfo = function () {
//   console.log(`isim: ${this.name}
// yaş: ${this.age}
// maaş: ${this.salary}`);
// };

Object.prototype.showInfo = function () {
  console.log(`isim: ${this.name}
yaş: ${this.age}
maaş: ${this.salary}`);
};

// const person1 = new Person("Ege", 25, 4000);
// const person2 = new Person("Varol", 37, 8000);

// console.log(person1);
// console.log(person2);

// person1.showInfo();
// person2.showInfo();

Employee.prototype = Object.create(Person.prototype);

const employee1 = new Employee("Ege", 25, 4000);

console.log(employee1);
employee1.showInfo();
