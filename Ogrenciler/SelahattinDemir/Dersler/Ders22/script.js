valuedocument = document;
console.log("valuedocument :>> ", valuedocument);

valuebody = document.body;
console.log("valuebody :>> ", valuebody);

valuehead = document.head;
console.log("valuehead :>> ", valuehead);

valuelocation = document.location;
console.log("valuelocation :>> ", valuelocation);

valuehostname = document.location.hostname;
console.log("valuehostname :>> ", valuehostname);

valueurl = document.URL;
console.log("valueurl :>> ", valueurl);

valuescripts = document.scripts;
console.log("valuescripts :>> ", valuescripts);

valuescriptsfirstname = document.scripts[0];
console.log("valuescriptsfirstname :>> ", valuescriptsfirstname);

valuelinks = document.links;
console.log("valuelinks :>> ", valuelinks);
valuelinks[1] = document.links[1];
console.log("valuelinks[1] :>> ", valuelinks[1]);

valueclass = document.links[1].getAttribute("class");
console.log("valueclass :>> ", valueclass);

valuelastnameclass =
  document.links[document.links.length - 1].getAttribute("class");
console.log("valuelastnameclass :>> ", valuelastnameclass);

valuelastclassname = document.links[document.links.length - 1].className;
console.log("valuelastclassname :>> ", valuelastclassname);

valuelastclasslist = document.links[document.links.length - 1].classList;
console.log("valuelastclasslist :>> ", valuelastclasslist);

// ID ile element seçme
valueById = document.getElementById("title");
console.log("valueById :>> ", valueById);

valueByIdtext = document.getElementById("title").textContent;
console.log("valueByIdtext :>> ", valueByIdtext);

valueByIdinnertext = document.getElementById("title").innerText;
console.log("valueByIdinnertext :>> ", valueByIdinnertext);

valueByIdinnerhtml = document.getElementById("title").innerHTML;
console.log("valueByIdinnerhtml :>> ", valueByIdinnerhtml);

valueByIdinnertextadd = document.getElementById("title").innerText = "Merhaba";
console.log("valueByIdinnertextadd :>> ", valueByIdinnertextadd);

valueByIdclasslist = document.getElementById("title").classList;
console.log("valueByIdclasslist :>> ", valueByIdclasslist);

valueByIdclassname = document.getElementById("title").className;
console.log("valueByIdclassname :>> ", valueByIdclassname);

// Class ile element seçme
valueByClass = document.getElementsByClassName("link");
console.log("valueByClass :>> ", valueByClass);

valueByClassfirst = document.getElementsByClassName("link")[0];
console.log("valueByClassfirst :>> ", valueByClassfirst);

// Tag ile element seçme
valueByTag = document.getElementsByTagName("a");
console.log("valueByTag :>> ", valueByTag);

// Query Selector
valuequerySelectorId = document.querySelector("#title");
console.log("valuequerySelectorId :>> ", valuequerySelectorId);

valuequerySelectorClass = document.querySelector(".link");
console.log("valuequerySelectorClass :>> ", valuequerySelectorClass);

valuequerySelectorAllClass = document.querySelectorAll(".link");
console.log("valuequerySelectorAllClass :>> ", valuequerySelectorAllClass);

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
let value;
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
  console.log("textInput.value", textInput.value);
});
textInput.addEventListener("focus", clearValue);

function clearValue() {
  textInput.value = "";
}

console.log(value);
