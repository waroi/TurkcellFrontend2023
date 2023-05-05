
const todoinput = document.querySelector("#todo");

let element;
element = todoinput;
element = todoinput.classList;

// todoinput.className = "form-control newclass";

// todoinput.classList.add("newclass");
// todoinput.classList.add("newclass2");
// todoinput.classList.remove("form-control");


element = todoinput;
element = todoinput.placeholder;
// element = todoinput.getAttribute("placeholder"); --> bu şekilde de kullanılabilir.
todoinput.setAttribute("placeholder", "Naber"); // değiştireceğimiz özelliği ve ne yazacağımızı yazıyoruz.

todoinput.setAttribute("title","deneme"); // yeni özellik ekledik.

todoinput.removeAttribute("name"); // name özelliğini kaldırdık.


element = todoinput;

console.log(element);