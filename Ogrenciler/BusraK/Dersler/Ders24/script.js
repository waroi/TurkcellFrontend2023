let value;
value = document;
value = document.body;
value = document.head;
value = document.location;
value = document.URL;
value = document.scripts;
value = document.links;
value = document.links[1];
value = document.links[1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].className;
value = document.links[document.links.length - 1].classList;

//ID ile seçme

value = document.getElementById("title");
value = document.getElementById("title").textContent;
value = document.getElementById("title").innerText;
value = document.getElementById("title").innerHTML;
value = document.getElementById("title").innerText = "Merabayin";
value = document.getElementById("title").classList;
value = document.getElementById("title").className;

//class ile element seçme
value = document.getElementsByClassName("link");
value = document.getElementsByClassName("link")[0];

//tag ile seçme
value = document.getElementsByTagName("a");

//query selector
value = document.querySelector("#title");
value = document.querySelector(".link");
value = document.querySelectorAll(".link");

document.querySelectorAll("p:nth-child(even)").forEach(function (item) {
  item.style.border = "5px solid red";
});
document.querySelector("p").style.border = "5px solid blue";

//element oluşturma
const button = document.createElement("a");
button.id = "test-button-id";
button.className = "btn btn-danger";
button.href = "https://www.google.com/";
button.target = "_blank";
const text = document.createTextNode("buraya tıklarlar");
button.appendChild(text);
value = document.getElementById("section");
value.appendChild(button);

value = document.getElementById("testButton");

value.addEventListener("click", testFonk);

function testFonk() {
  console.log("tikladiin", e.target);
}

button.console.log(value);
