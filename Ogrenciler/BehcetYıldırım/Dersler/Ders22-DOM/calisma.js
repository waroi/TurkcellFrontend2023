let todoText = document.getElementById("todo-ekle").value;

let todoBtn = document.getElementById("todoAddBtn")

todoBtn.addEventListener("click",testFonk);
function testFonk(){
  console.log(todoText)
}

console.log(todoText);