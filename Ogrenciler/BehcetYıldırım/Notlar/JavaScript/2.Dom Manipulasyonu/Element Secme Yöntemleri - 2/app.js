const element = document.querySelector("#clear-todos");

// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// Style ve Element Özelliklerini Değiştirme

element.className = "btn btn-primary";
element.style.color = "black";
element.style.marginLeft = "50px";
element.href = "https://www.google.com.tr"
element.target="_blank";

element.textContent = "Silin";
element.innerHTML = "<span style = 'color:white'>Silin</span>";


//***************************************************************** */

const temp = document.querySelectorAll(".list-group-item");

temp.forEach(function(tp){
    tp.style.background="#eee";
});

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");

element2 = document.querySelectorAll("li:nth-child(odd)"); // tek sayıları seçer
element2 = document.querySelectorAll("li:nth-child(even)"); // çift sayıları seçer

element2.forEach(function(tem){
    tem.style.background = "#ccc";
    tem.style.color = "red";
})
console.log(element2)




