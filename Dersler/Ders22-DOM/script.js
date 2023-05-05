let value;

value = document;
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.URL;
value = document.scripts;
value = document.scripts[0];
value = document.links;
value = document.links[1];
value = document.links[1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].className;
value = document.links[document.links.length - 1].classList;

// ID ile element seçme
value = document.getElementById("title");
value = document.getElementById("title").textContent;
value = document.getElementById("title").innerText;
value = document.getElementById("title").innerHTML;
// value = document.getElementById("title").innerText = "Merhaba";
// value = document.getElementById("title").classList;
// value = document.getElementById("title").className;

// Class ile element seçme
value = document.getElementsByClassName("link");
value = document.getElementsByClassName("link")[0];

// Tag ile element seçme
value = document.getElementsByTagName("a");

// Query Selector
value = document.querySelector("#title");
value = document.querySelector(".link");
value = document.querySelectorAll(".link");
document.querySelectorAll("p:nth-child(even)").forEach(function (item) {
  item.style.border = "5px solid red";
});
document.querySelector("p").style.border = "5px solid blue";

// Element oluşturma
const button = document.createElement("a");
button.id = "test-button-id";
button.className = "btn btn-danger";
button.href = "https://www.google.com/";
button.target = "_blank";
const text = document.createTextNode("Bana Tıkla");
button.appendChild(text);
value = document.getElementById("section");
value.appendChild(button);

value = document.getElementById("testButton");

value.addEventListener("click", testFonk);

function testFonk(event) {
  console.log("Butona tıklandı", event.target);
  if (value.children[0].children[1] === event.target) {
    console.log("Başarılı");
  }
}

const textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", function () {
  console.log(textInput.value);
});
textInput.addEventListener("focus", clearValue);

function clearValue() {
  textInput.value = "";
}

console.log(value);
