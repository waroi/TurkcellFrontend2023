// const person1 = {
//   name: "Kazım",
//   age: 85,
//   showInfo: function () {
//     console.log("bilgiler yükleniyor");
//   },
// };
// const person2 = {
//   name: "Mümtaz",
//   age: 85,
//   showInfo: function () {
//     console.log("bilgiler yükleniyor");
//   },
// };

// console.log(person1);
// console.log(person2);

//Yapıcı Fxns
function Person(name, age) {
  (this.name = name), (this.age = age);
}

function Employee(name, age, salary, test) {
  Person.call(this, name, age), (this.salary = salary), (this.test = test);
}

Employee.prototype = Object.create(Person.prototype);

// Person.prototype.showInfo = function () {
//   console.log(`
//         isim:${this.name}
//         yaş:${this.age}
//         `);
// };

// const person1 = new Person("Kazım", 53);
// const person2 = new Person("Mümtaz", 56);

const emp1 = new Employee("Veli", 12, 400, "123");

console.log(emp1);
// console.log(person2);
// console.log(typeof person2); //object
