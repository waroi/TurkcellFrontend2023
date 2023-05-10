


function Person(name,age,surname){
    this.name=name;
    this.age=age;
    this.surname=surname;

}
Person.prototype.showInfos = function(){
    console.log("isim: "+this.name+ " soyisim: "+this.surname+ " yaş: "+this.age);
}

const person = new Person("behcet",24);
console.log(person);


function Employee(name,age,salary,surname){
    // this.name=name;
    // this.age=age;
    Person.call(this,name,age,surname)//name ve age'i Persondan aldık
    this.salary=salary;

}

Employee.prototype = Object.create(Person.prototype);
// Burada Employe'nin prototype'ni Person'unkine bağladık.

const emp = new Employee("behcet",21,4000,"yıldırım");
emp.showInfos();
