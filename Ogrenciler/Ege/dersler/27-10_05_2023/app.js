// // Class

// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   showInfo() {
//     console.log(`İsim: ${this.name} Yaş: ${this.age} Maaş: ${this.salary}`);
//   }
// }

// const emp1 = new Employee("Ege", 25, 15000);

// console.log(emp1);
// emp1.showInfo();

// static method
class EgeMath {
  static cube(x) {
    console.log(x * x * x);
  }
}

EgeMath.cube(3);

// Extend
// super class - base class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log(`İsim: ${this.name} Yaş: ${this.age}`);
  }
}

// sub class - derived class
class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  showInfos() {
    console.log(`İsim: ${this.name} Yaş: ${this.age} Maaş: ${this.salary}`);
  }
}

const emp1 = new Employee("Ege", 25, 15000);
console.log(emp1);
emp1.showInfos();
