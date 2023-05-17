// Object Literal
const person = {
    name : "behcet",
    age : 24,
    showInfo: function(){
        console.log("bilgiler gösteriliyor")
    }
};


function Person(name,age){
    this.name = name;
    this.age = age;
    this.showInfo = function(){
        console.log("bilgiler gösteriliyor.")
    }
}

const person1 = new Person("behcet",24);
const person2 = new Person("sait",24);

console.log(person1);




