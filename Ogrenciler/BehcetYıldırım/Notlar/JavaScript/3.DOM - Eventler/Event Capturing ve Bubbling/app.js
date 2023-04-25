// Event Bubbling
// Herhangi bir child üzerinde örneğin bir tıklama yaptığımızda o child elementin parentlarına kadar 
// click eventi oluşmuş olur 

document.querySelector(".container").addEventListener("click",function(){
    console.log("Div Container");
});
document.querySelector(".card.row").addEventListener("click",function(){
    console.log("card Row");
});
document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("Card Body");
});


 // Event Capturing

 const cardbody = document.querySelectorAll(".card-body")[1];

 cardbody.addEventListener("click",run);
 
 function run(e){
     if (e.target.className === "fa fa-remove"){
         console.log("Silme İşlemi");
     }
     if (e.target.id === "filter") {
         console.log("Filtreleme İşlemi");
     }
     if(e.target.id === "clear-todos") {
         console.log("Tüm taskları silme işlemi");
         
     }
     // console.log(e.target);
 
 }