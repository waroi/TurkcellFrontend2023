var customerName = 'Buse';
var customerLastName = 'Türkmen';

var customerId = '123456789';

var total = 310.5;

var customerGender = 'Kadın';

var address = {
    city : 'İstanbul',
    district : 'Cekmeköy'
}

var hobbies = ['Movies','Book','Sport'];

console.log(customerName + customerLastName);
console.log(customerId);
console.log(customerGender);
console.log(address);
console.log(hobbies);



var order1= Number('100.8');
var order2= Number('150.5');
var totalOrder= order1+order2;
console.log(totalOrder);

var order1= parseInt('100.5');
var order2= parseInt('150.5');
var totalOrder= order1+order2;
console.log(totalOrder);



const yearOfBirth = 2000;
console.log(new Date().getFullYear()-yearOfBirth)

var course = 'JavaScripts Eğitimi';
console.log(course.length);