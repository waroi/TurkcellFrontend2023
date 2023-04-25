// Klavye Eventleri

// Keypress (klavyede sadece harfler ve sayılar olacak şekilde tuşa bastığımızda çalışan event)

// document.addEventListener("keypress",run); // "run" çağırdığımız fonksiyon

// function run(e){
//     // console.log(e.which); // klavyede hangi tuşa bastığımızı ASCII tablosunda gösterir
//     console.log(e.key); // hangi tuşa bastığımızı gösterir
//     // console.log("naber");
// };

// // Keydown (klavyede herhangi bir tuşa bastığımızda çalışan event)

// document.addEventListener("keydown",run); 

// function run(e){
//     console.log(e.key); 
    
// };

// // Keyup (bir tane tuşu bıraktığımızda oluşan event)

// document.addEventListener("keyup",run); 

// function run(e){
//     console.log(e.key); 
    
// };
// ---------------------------------------------------------------------------------------------------------




// "Bir Todo Girin" kısmına bir yazı yazıldıktan sonra "Todo List" bölümünün de değiştirme
const header = document.querySelector(".card-header");
const input = document.querySelector("#todo");

input.addEventListener("keyup",degistir);

function degistir(e){
    header.textContent = e.target.value;
    //console.log(e.target);// burada keyup eventinin nerede oluştuğunu görüyoruz.
    //console.log(e.target.value);// eventin oluştuğu yerdeki ne oluştuğunu görüyoruz.
    
}



