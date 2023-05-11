
//? Prototype İle Kalıtım

// function Person(name,age,surname){
//     this.name=name;
//     this.age=age;
//     this.surname=surname;

// }
// Person.prototype.showInfos = function(){
//     console.log("isim: "+this.name+ " soyisim: "+this.surname+ " yaş: "+this.age);
// }

// const person = new Person("behcet",24);
// console.log(person);


// function Employee(name,age,salary,surname){
//     Person.call(this,name,age,surname)
//     this.salary=salary;

// }

// Employee.prototype = Object.create(Person.prototype);
// const emp = new Employee("behcet",21,4000,"yıldırım");
// emp.showInfos();

//? Class'lar ile Kalıtım

class Person { // Superclass, BaseClass
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("isim: "+this.name+ " yaş: "+this.age);
    }
}

class Employee extends Person{ // Subclass, Childclass
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age);
        super.showInfos();
        this.salary=salary;
    }
}
