// Yeni element oluşturma

//  <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>


const newlink = document.createElement("a");
const cardbody= document.getElementsByClassName("card-body")[1];// a elementini ekleyeceğimiz 
// card-body classlarından 2.sini seçtik. 

// yeni ekleyeceğğimiz link'e özellik veriyoruz.
newlink.id="clear-todos";
newlink.className = "btn btn-danger";
newlink.href= "https://www.google.com.tr";
newlink.target = "_blank";

// newlink.textContent = "Google'a Git"
newlink.appendChild(document.createTextNode("Google'a Git")); // Yukarıdaki şekilde de oluyor.
cardbody.appendChild(newlink);



console.log(newlink);


// Element içerisindeki yazılar

// cardbody.textContent = "skjgdfgdfhd"; // Eğerki bunu kullanırsak cardbody'nin içerisindeki 
// bütün yazıların yerine bunu yazar.

// Text Node

// const text = document.createTextNode("Naber");
// cardbody.appendChild(text); // Bu şekilde text eklediğimizde en sona ekliyor. 


