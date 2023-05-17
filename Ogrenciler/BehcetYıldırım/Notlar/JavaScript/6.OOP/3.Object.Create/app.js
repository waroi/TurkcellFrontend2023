//? Bir objenin prototype'ni başka bir objeden almak istiyorsak bu metodu kullanırız.


const obj = {
    test1 : function(){
        console.log("test 1")
    },
    test2 : function(){
        console.log("test 2")
    }
}

// console.log(obj)

const emp = Object.create(obj);

emp.test1();
emp.name = "behcet"

// console.log(emp)


function Person(){

}

Person.prototype.test3= function(){
    console.log("test 3")
}
Person.prototype.test4= function(){
    console.log("test 4")
}

function Employee(name,age){
    this.name=name;
    this.age=age;
}

Employee.prototype = Object.create(Person.prototype);
// Burada Employee'nin prototype'i Person'un prototype'inden oluşsun diyoruz.Yani Person'un prototype'ini miras alsın diyoruz.Ve test1 ve test2'yi almış oluyoruz.

const emp1 = new Employee("behcet",25);

console.log(emp1);

emp1.test3();




