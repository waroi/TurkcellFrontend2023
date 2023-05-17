// const person1 = {
//     name: "furkan",
//     age: 25,
//     showInfo: function () {
//         console.log("bilgiler geldi")
//     }
// }
// console.log(person1)

// const person2 = {
//     name: "uygur",
//     age: 26,
//     showInfo: function () {
//         console.log("bilgiler geldi")
//     }
// }
// console.log(person2)

//constuctor (yapıcı) fonksiyonlar

function Person(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    // this.showInfo = function () {
    //     console.log(`
    //         isim:${this.name}
    //         yaş:${this.age}
    //         maaş:${this.salary}
    //     `);
    // }
}
Person.prototype.showInfo = function () {
    console.log(`
        isim:${this.name}
        yaş:${this.age}
        maaş:${this.salary}
    `);
}
const person1 = new Person("furkan", 25, 4000)
person1.showInfo();
const person2 = new Person("Uygur", 26, 5000)

// console.log(person1)
// console.log(person2)


//prototype kalıtımEemploy.prototype=Object.create(Person.prototype)