// Class

class Epmloyee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  showInfo() {
    console.log(
      "İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
    );
  }
}

const emp = new Epmloyee("Varol Maksutoğlu", 25, 4000);

console.log(emp);
emp.showInfo();

// static method
class Mat {
  static cube(x) {
    console.log(x * x * x);
  }
}

Mat.cube(3);

console.log(Mat);

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

class User{
  constructor(country, city, neighborhood, street){
    this.country = country;
    this.city = city;
    this.neighborhood = neighborhood;
    this.street = street;
  }
  showInfos(){
    console.log(`Ülke: ${this.country} Şehir: ${this.city} Mahalle: ${this.neighborhood} Sokak: ${this.street}`)
  }
}

class Admin extends User{
  constructor(name, age, country, city, neighborhood, street){
    super(country, city, neighborhood, street);
    this.name = name;
    this.age = age;
  }
  showInfos(){
    console.log(`İsim: ${this.name} Yaş: ${this.age} Ülke: ${this.country} Şehir: ${this.city} Mahalle: ${this.neighborhood} Sokak: ${this.street}`)
  }
}

const admin1 = new Admin("Varol Maksutoğlu", 25, "Türkiye", "Giresun", "Kurtuluş", "Kurtuluş Sokak");

console.log(admin1);
admin1.showInfos();
