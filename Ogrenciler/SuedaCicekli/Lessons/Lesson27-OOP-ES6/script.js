//ES6'dan sonra gelene Class yapısı
//class

// class Employee {
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

// const emp1 = new Employee("Sueda", 24, "4000");

// console.log(emp1);
// emp1.showInfo();


// class Mat {
//   cube(x) {
//     console.log(x * x * x);
//   }
// }

// const math = new Mat();
// math.cube(3);


//static ile class'a bağlı kalmadan fonksiyonu çağırabiliriz 
// fakat obje ürezinden çağıramayız çünkü static obje üretmeden çağırıyoruz
// static methodlar obje üretmeden çağırılır
// Static 
// class Mat {
//   static cube(x) {
//     console.log(x * x * x);
//   }
// }
// Mat.cube(3);
// //staticte consturctura ihtiyaç olmadığını göstermek için
// // staticde obje üzerinden değil class üzerinden erişebiliriz yani burada constructur'a bağlı kalmadan çağırabiliriz
// class Matt {
//   constructor(a) {
//     this.a = a;
//   }
//   static cube(x) {
//     console.log(x * x * x);
//   }
// }


//Extend 
//super class - base class

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
    // this.name = name; almama gerek kalmıyor çünkü super ile base class'ın constructur'ını çağırıyoruz
    // this.age = age;
    super(name, age);
    this.salary = salary; // ekstra geleen özelliği ekleyebilirim
  }
  showInfos() {
    //override
    // miras aldığım yerdeki özelliği override edebilirim yani ezebilirim
    console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
  }
}

const emp1 = new Employee("Sueda", 24, 4000);
console.log(emp1);
emp1.showInfos();