// // Class

// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   showInfo() {
//     console.log(
//       "isim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
//     );
//   }
// }

// const emp1 = new Employee("Kazım", 52, 5566);

// emp1.showInfo();
// console.log(emp1);

//Static Method

// class Mat {
//    cube(x) {
//     console.log(x * x * x);
//   }
// }
// const cube = new Mat();

// cube.cube(3)

// or

// class Mat {
//   constructor(a) {
//     this.a = a;
//   }

//   static cube(x) {
//     console.log(x * x * x);
//   }
// }
// const mat = new Mat(4);
// console.log(mat); //constructor

// Mat.cube(3); //static

//Extend Method
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log("İsim " + this.name);
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  //override
  showInfos() {
    console.log(
      "İsim " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
    );
  }
}

const emp1 = new Employee("Kazım", 52, 5566);

console.log(emp1);
emp1.showInfos();
