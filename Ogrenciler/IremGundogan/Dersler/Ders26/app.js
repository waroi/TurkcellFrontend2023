//Class
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  showInfo() {
    console.log("İsim:" + this.name + "Yaş:" + this.age);
  }
}
