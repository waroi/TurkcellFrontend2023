let value;

value = document.getElementById("todo-form");
value = document.getElementById("tasks-title");



value = document.getElementsByClassName("card-header");
value = document.getElementsByClassName("list-group-item");


value = document.getElementsByTagName("div");



value = document.querySelector("#todo-form");
value = document.querySelector("#tasks-title");
value = document.querySelector(".list-group-item");
// !---------------------------------------------------------------------

value = document.querySelector("#clear-todos");

// console.log(value.id)
// console.log(value.className)
// console.log(value.classList[1])
// console.log(value.textContent)


// !---------------------------------------------------------------------
// value = document.querySelector("#clear-todos");


// value.className= "btn btn-primary";
// value.style.color = "black"

//!----------------------------------------------------------------------

value = document.querySelector("li:nth-child(2)");
value = document.querySelectorAll("li:nth-child(odd)");
value = document.querySelectorAll("li:nth-child(even)");

value.forEach(function(el){
    el.style.background = "gray"
    el.style.color = "red"
})

// console.log(value);
// !-----------------------------------------------------
//*  DİNAMİK OLARAK ELEMENT EKLEME 
const newLink= document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com"
newLink.target = "_blank";


// newLink.textContent = "farklı sayfaya git" ---> bunu kullanmak mantıklı değil çünkü altındaki bütün childları siler ve yerine bu yazıyı verir.

newLink.appendChild(document.createTextNode("Farklı sayfaya git"));
// appendChild en sona ekler.
cardBody.appendChild(newLink)
console.log(newLink);


// !-----------------------------------------------------
//* ELEMENT DEĞİŞTİRME
const cardbody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");

newElement.className = "deneme"
newElement.id= "deneme";
newElement.textContent = "Deneme"

const eskielement = document.getElementById("tasks-title")

cardbody.replaceChild(newElement,eskielement);


console.log(newElement)

// !-----------------------------------------------------
//* DİNAMİK ATTTİBUTE DEĞİŞTİRME
const todoinput = document.querySelector("input");
let element = todoinput;

element = todoinput.classList;

/* todoinput.className = "form-control newclass"; */

/*
todoinput.classList.add("newClass");
todoinput.classList.add("newClass2");

todoinput.classList.remove("form-control");
*/

// element = todoinput.placeholder;
element = todoinput.getAttribute("placeholder");

todoinput.setAttribute("placeholder", "Naber");
todoinput.setAttribute("title", "title")


todoinput.removeAttribute("name")


element= todoinput;
console.log(element);









