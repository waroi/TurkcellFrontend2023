let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector("li:nth-child(2)");
const cardrow = document.querySelector(".card.row");
value=todoList;
value=todo;
value=cardrow;

// Child Nodes (Bunu kullandığımız zaman text dahil hepsini sayıyor.)
// Text'ler ise örneğin bir <li> 'nin bitiminden sonra bir aşağı satırda yenisini yazarsak
// aradaki kalan kısmı text olarak sayıyor. Eğer biri bitince hemen yanına yenisini açarak yazarsak
// arada text olarak bir kısım saymaz.

value = todoList.childNodes;
value = todoList.childNodes[0];

// Children özelliği (sadece element olanları alır)

value = todoList.children; // 4 adet çıkardı. 
value = todoList.children[1];
value = todoList.children[todoList.children.length-1];
value = todoList.children[2].textContent = "Değişti"

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children;// cardrow'un 2.çocuğunun çocuklarını seçtik
value = cardrow.children[2].children[1].textContent="Burası da değişti.";


value = cardrow;
value = cardrow.parentElement;// ebeveynini buluruz.
value = cardrow.parentElement.parentElement;

// Element kardeşlerini bulma

value= todo;
value= todo.previousElementSibling;// Bir önceki kardeş elemente git.
value= todo.nextElementSibling;// Bir sonraki kardeş elemente git. 



console.log(value);