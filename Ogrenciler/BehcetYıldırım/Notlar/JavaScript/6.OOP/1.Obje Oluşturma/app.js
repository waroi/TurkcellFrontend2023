
// Obje Oluşturma
const emp = {
    name : "behcet",
    age : 24
};

emp.salary = 4000;

// console.log(emp);

//* Constructor ile obje oluşturma

function Employee(name,age,salary){ // Buradaki E büyük olmalı
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfo = () => console.log(name,age,salary);
}

const emp1 = new Employee("behcet",24,4000);
const emp2 = new Employee("sait",25,4000);

console.log(emp1);
console.log(emp2);

emp1.showInfo();

