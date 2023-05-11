
// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;

// }

// Employee.prototype.showInfo= function(){
//     console.log("Merhaba "+this.name);
// }

// const emp = new Employee("behcet",24,200);


//?  Syntatic Sugar
// Yukarı ile aynı işlevi yapar.
class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    showInfos(){
     console.log("Merhaba "+this.name);
    }
}

const emp = new Employee("behcet",24,2000);

console.log(emp);
emp.showInfos();