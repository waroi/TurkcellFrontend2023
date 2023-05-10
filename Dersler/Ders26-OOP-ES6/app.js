// Class

// class Epmloyee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   showInfo() {
//     console.log(
//       "İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
//     );
//   }
// }

// const emp1 = new Epmloyee("Varol Maksutoğlu", 25, 4000);

// console.log(emp1);
// emp1.showInfo();

// static method
// class Mat {
//   static cube(x) {
//     console.log(x * x * x);
//   }
// }

// Mat.cube(3);

// console.log(Mat);

// Extend
// super class - base class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
  }
}

// sub class - derived class
class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  // override
  showInfos() {
    console.log(
      "İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
    );
  }
}

const emp1 = new Employee("Varol Maksutoğlu", 25, 4000);
console.log(emp1);
emp1.showInfos();
