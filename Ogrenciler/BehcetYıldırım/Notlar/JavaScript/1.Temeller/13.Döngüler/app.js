// While Döngüleri

let i = 0;

while(i < 3){ 

    console.log(i);
     i++; // i değişkenini arttırmazsak Sonsuz Döngü olur.
}
console.log("-------------------------------------");

// Break ve Continue
// continue yazıldığı zaman altındaki işlemlere uğramadan döngünün başına döner.
let a = 0;

while (a < 6) { // sOnsuz Döngü

    if (a == 3 || a == 4){
        a++;
        continue;
        
    }
    console.log(a);
    a++;
}
console.log("-------------------------------------");

// Do While 
// önce do'yu çalıştır sonra da koşulu kontrol et.

/* let b = 0;

do {
    console.log(b);
    b++;

}while(b < 10);*/

// FOR DÖNGÜLERİ

const langs = ["Python","Javascript","Java"];

/*let index = 0;

while(index < langs.length){

    console.log(langs[index]);

    index++;
}*/

for (let index = 0;index < langs.length;index++){

    console.log(langs[index],index);

}

// Aşağıda yazdığımız method, yukarıda yazdığımız for döngüsü ile aynı işlevde.
/* 
langs.forEach(function(lang,index){
    console.log(lang,index);

});
*/
console.log("-------------------------------------");
const users = [
    {name:"Mustafa",age:25},
    {name:"Zeynep",age:40},
    {name:"Ali",age:12}
];


const names = users.map(function(user){ 
    return user.name;
});
const ages = users.map(function(user){
    return user.age;
});
console.log(names);
console.log(ages);

// const user = {
//     name:"Mustafa",
//     age:25
// };

// for (let key in user){
//     console.log(key,user[key]);
// }
