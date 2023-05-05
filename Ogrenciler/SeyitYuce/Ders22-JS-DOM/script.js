let value;

// value = document; //whole html
// value = document.body; // html body
// value = document.location; //
// value = document.URL; //http://127.0.0.1:5501/Ogrenciler/SeyitYuce/Ders22-JS-DOM/index.html
// value = document.scripts; // scripts on the page
// value = document.links; //HTMLCollection(4) [a.link, a.link, a.link, a.link]
// value = document.links[1].getAttribute("class"); //link
// value = document.links[document.links.length - 1].getAttribute("class"); //link4
// value = document.links[document.links.length - 1].classList; //DOMTokenList ['link4', value: 'link4']
// value = document.links[document.links.length - 1].className; //link4

// value = document.getElementById("title");
// value = document.getElementById("title").textContent; //  Başlık Test
// value = document.getElementById("title").innerText; //Başlık Test
// value = document.getElementById("title").innerHTML; //<span>Başlık</span> <span>Test</span>
// value = document.getElementById("title").innerHTML = "Hiiii"; //Hiiii
// value = document.getElementById("title").  //
// value = document.getElementsByClassName("link"); //HTMLCollection(2) [a.link, a.link]
// value = document.getElementsByTagName("a"); //HTMLCollection(4) [a.link, a.link, a.link3, a.link4]
// value = document.querySelector("#title"); //h2#title
// document.querySelector("p").style.border = "5px solid red";
// document.querySelectorAll("p:nth-child(odd)").forEach(function (item){
//     item.style.border="5px solid blue"
// }) = "5px solid red";

const button = document.createElement("a");
button.id = "test-btn-id";
button.className = "btn btn-danger";
button.href = "https://www.youtube.com";
button.target = "_blank";
const text = document.createTextNode("Click");
button.appendChild(text);
value = document.getElementById("section");
value.appendChild(button);

value.addEventListener("click", test);
function test() {
  console.log("tıklandı");
}
console.log(value);
