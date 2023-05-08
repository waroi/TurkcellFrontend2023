let value;
value = document;
value = document.all;
value = document.head;
value = document.body;
//location 
value = document.location;
value = document.location.host;
value = document.location.hostname;
value = document.URL;
value = document.scripts;
value = document.scripts[0];
value = document.links;
value = document.links[1];
//bu linkin class atributuna ulaşmak için 
value = document.links[1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].className;
//DOMtoken list olarak alabiliyoruz
value = document.links[document.links.length - 1].classList;

// ID ile element seçme
value = document.getElementById("title");
value = document.getElementById("title").id;
//içindeki spanları alt alta yazdı
value = document.getElementById("title").textContent;
//spanları yan yana yazdı , yazısınıda değişebiliyoruz 
value = document.getElementById("title").innerText = "Yeni Başlık";
value = document.getElementById("title").innerText;
//span tagları ile beraber getiriyor
value = document.getElementById("title").innerHTML;
//Bu özelliği kullanarak, getElementById() yöntemiyle belirtilen öğenin tüm sınıf adlarını içeren bir DOMTokenList nesnesi alınabilir.
// value = document.getElementById("title").classList;
// value = document.getElementById("title").className;

// Class ile element seçme 
//html collection olarak geldi
value = document.getElementsByClassName("title");
value = document.getElementsByClassName("title")[0];

// Tag ile element seçme
value = document.getElementsByTagName("a");

//query selector
value = document.querySelector("#title");
value = document.querySelector(".link");
value = document.querySelectorAll(".link"); //query selector bize nodeList gönderiyor 

//querySelectorAll nodeList gönderdiği için forEach ile dönebiliyoruz

// var evenLinks = document.querySelectorAll(".link:nth-child(even)");
// for (var i = 0; i < evenLinks.length; i++) {
//   evenLinks[i].style.border = "5px solid red";
// }

//querySelectorAll nodeList gönderdiği için forEach ile dönebiliyoruz
document.querySelectorAll("p:nth-child(even)").forEach(function (item) {
  item.style.color = "red";
});
document.querySelector("p").style.border = "2px solid blue";

//element oluşturma
const button = document.createElement("a");
button.id = "test-button-id";
button.className = "btn btn-danger";
button.href = "https://www.google.com";
button.target = "_blank";
const text = document.createTextNode("Google'a Git");
button.appendChild(text);
value = document.getElementById("section");
value.appendChild(button);

value = document.getElementById("testButton");

value.addEventListener("click", testFonk);

function testFonk(event) {
  console.log("Buttona tıklandı ", event.target);
  if (value.children[0].children[1] === event.target) {
    console.log("Başarılı");
  }
}

// const textInput = document.getElementById("text-input");
// textInput.addEventListener("keyup", function () {
//   console.log(textInput.value);
// });

// textInput.addEventListener("focus", clearValue);
// function clearValue() {
//   textInput.value = "";
// }

console.log(value);