// Burada for in yapısı kullanılarak property kısmında tekrar hepsini kontrol etmek zorunda kalmıyoruz.

// let movies = this.getMoviesFromStorage();
// movies.forEach(function (mov) {
//   for (const property in mov) {
//     oldValue.forEach((old, i) => {
//       if (mov[property] == old) {
//         mov[property] = newValue[i];
//       }
//     });
//   }
// });

// Class Yapıları

// class Person {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     // fonksiyon burada da tanımlanabilir ama her nesnesinde tekrar oluşturmuş olur
//   }

//   showİnfo() {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.salary);
//     // prototype içerisine yazılan fonksiyon gibi oluyor
//   }
// }

// const emp1 = new Person("selim", 23, 2000);

// console.log(emp1);
// emp1.showİnfo();

// Static Method

// class Mat{
//     static cube(x) {
//         console.log(x*x*x);
//     }
// }
// // Burada eğer constructor yapıları olmayan classlar olursa
// // bunları static etiketiyle yazmamız daha kolay olur ve nesne oluşturmuş olduğunda
// // static etiketli olan fonksiyonları kullanamıyoruz

// // Direkt ojbe üretmeden erişim sağlamış oluyoruz.
// Mat.cube(3);

// Extend-kalıtım

// Super Class-base class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showİnfos() {
//     console.log(this.name);
//   }
// }

// // sub class-derived class
// class Employee extends Person {
//   constructor(name, age, salary) {
//     // this.name=name;
//     // this.age=age;
//     super(name, age);
//     this.salary = salary;
//   }

//   //showinfoyu tekrar yazarak ezebiliyoruz
//   //override
//   showİnfos() {
//     console.log(this.name, this.age, this.salary);
//   }
// }

// const emp1 = new Employee("selim", 23, 3000);

// emp1.showİnfos();
