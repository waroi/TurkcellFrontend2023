// JS'deki her bir objemizin kendi içinde bir prototype özelliği bulunmaktadır.

const object = new Object();
const object2 = new Object();
// Burada "Object" objesinden 2 adet farklı obje oluşturduk. Fakat bu iki objeninde prototypeleri aynı. 


function Employee(name,age){
    this.name = name;
    this.age = age;
    
}
// Burada fonksiyonu prototype'de oluşturarak her objede yer kaplamasını önledik. Employee ile oluşturulan her obje fonksiyonu prototype'den çekiyor.
Employee.prototype.showInfo = function(){
    console.log("İsim:"+this.name+"Yaş:"+this.age);
};


const emp1 = new Employee("behcet",24);
console.log(emp1);

console.log(emp1.showInfo())


