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

function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.showInfo = function () {
  // console.log(`    isim: ${this.name}
  //   yaş: ${this.age}
  //   maaş: ${this.salary}`);
  // };
}

function Employee(name, age, salary, test) {
  Person.call(this, name, age);
  this.salary = salary;
  this.test = test;
}

Employee.prototype = Object.create(Person.prototype);

Person.prototype.showInfo = function () {
  console.log(`    isim: ${this.name}
    yaş: ${this.age}
    maaş: ${this.salary}
    deneme: ${this.test}
    `);
};

// Object.prototype.showInfo = function () {
//   console.log(`    isim: ${this.name}
//     yaş: ${this.age}
//     maaş: ${this.salary}
//     deneme: ${this.test}
//     `);
// };

Object.prototype.showInfo = function () {
  console.log(`Merhaba`);
};

// const person1 = new Person('Varol', 37, 4000);
// const person2 = new Person('Behçet', 23, 5000);

// console.log(person1);
// console.log(person2);

// person1.showInfo();
// person2.showInfo();

const emp1 = new Employee('Varol', 37, 4000, 'test');
console.log(emp1);
emp1.showInfo();
console.log(Object.create(Person.prototype))

// const person3 = {
//   name: 'Varol',
//   age: 37,
// };
// console.log(person3);
// person3.showInfo();