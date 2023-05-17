const merhaba = function(e){
    console.log("Merhaba")
}

merhaba();


//* Arrow Function

const Deneme = () => {
    console.log("Deneme")
}
Deneme();

const deneme2 = (firstName,lastName) =>{
    console.log("Merhaba",firstName,lastName)

} 
deneme2("behcet","yıldırım");

// Eğer fonskiyon tek parametre alırsa parantez içerisinde yazmaya gerek yok
const deneme3 = firstName => {
    console.log("merhaba",firstName)
}
deneme3("behcet");

// Eğer fonksiyon tek satı bir işlem yapıyorsa süslü parantez'e gerek yok.
const deneme4 = firstName => console.log("merhaba",firstName)

deneme4("behcet");


const cube = x => x*x*x;

console.log(cube(3))