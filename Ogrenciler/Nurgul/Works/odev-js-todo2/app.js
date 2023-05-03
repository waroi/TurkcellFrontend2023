const form = document.querySelector(".todo_form");
const input = document.querySelector(".todo_input");
const todo_container = document.querySelector(".todo_container");



const startConf = () => {
   // boşken çağırmak için//
   const todos = JSON.parse(localStorage.getItem("todos"));
   if (!todos) {
      localStorage.setItem("todos", JSON.stringify([]));
   } else {
      todos.forEach(todo => {
         addHTML(todo);
      });
   } 
}
const searchTodo = () => {
    const searchTerm = document.querySelector(".todo_search").value.toLowerCase(); // arama kutusundan gelen metin küçük harfe dönüştürülür
    const todos = document.querySelectorAll(".todo"); // tüm görevleri seçer
 
    todos.forEach(todo => {
       const text = todo.querySelector(".todo_text").textContent.toLowerCase(); // her görevin metni küçük harfe dönüştürülür
       if (text.includes(searchTerm)) { // eğer metin arama terimini içeriyorsa görev gösterilir
          todo.style.display = "flex";
       } else {
          todo.style.display = "none"; // değilse görev gizlenir
       }
    });
 }
 
const addTodo = (e) => {
   e.preventDefault(); //default halini engelliyor//
   
   const inputVal = input.value;

   if (inputVal == '')  { // boş değer girilmeye çalışıyor ise hata veriyoruz
      input.style.border = '1px solid red';
      setTimeout(() => {
         input.style.borderColor = 'transparent';
      }, 2500);
      return false;
   }

   const todo = {
      text: inputVal,
      isCompleted: false,
   };

   const todos = JSON.parse(localStorage.getItem("todos"));
   todos.push(todo);
   localStorage.setItem("todos", JSON.stringify(todos));

   addHTML(todo);

   form.reset();
}

const deleteTodo = (e) => {
   const todo = e.target.parentElement.parentElement;
   const text = todo.firstChild.children[1].textContent;

   let todos = JSON.parse(localStorage.getItem("todos"));
   todos = todos.filter(td => td.text != text); //text eşit olan silinsin//
   localStorage.setItem("todos", JSON.stringify(todos));

   todo.remove();
}

const completeTodo = (e) => {
   const todo = e.target.parentElement.parentElement;
   const text = todo.firstChild.children[1].textContent;

   let todos = JSON.parse(localStorage.getItem("todos"));
   
   todos.forEach(td => {
      if (td.text === text) td.isCompleted = !td.isCompleted //texti bulduktan sonra check olunca değeri değişiyor true ise false//
   });

   localStorage.setItem("todos", JSON.stringify(todos));
}

const saveTodo = (e) => {
   const todo = e.target.parentElement.parentElement;
   const prevText = todo.firstChild.children[1].textContent; // değiştirilmeden önceki değer
   const newText = todo.firstChild.children[2].value; // editlerken girdiğimiz yeni değer

   let todos = JSON.parse(localStorage.getItem("todos"));
   
   todos.forEach(td => {
      if (td.text === prevText) td.text = newText; //text eski text ise yeni texte çevir//
   });

   localStorage.setItem("todos", JSON.stringify(todos));

   todo.firstChild.children[1].textContent = newText;  // HTML üzerindeki değerini de değiştiriyoruz

   todo.classList.remove("-edited"); // verdiğimiz classı kaldırıyoruz
}

const editTodo = (e) => {
   const todo = e.target.parentElement.parentElement;
   todo.classList.add("-edited");
}
const clearAllTodos = () => {
    localStorage.setItem("todos", JSON.stringify([])); // local storage'daki tüm görevleri sil
    todo_container.innerHTML = ""; // todo_container elemanını temizle
 }

const addHTML = (todo) => {
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");

   const todoLeft = document.createElement("div");
   todoLeft.classList.add("todo_left");
   
   const editInput = document.createElement("input");
   editInput.classList.add("todo_editInput")
   editInput.defaultValue = todo.text;

   const todoCb = document.createElement("input");
   todoCb.type = "checkbox";
   todoCb.checked = todo.isCompleted; 
   todoCb.classList.add("todo_cb");
   todoCb.addEventListener("click", completeTodo); 

   const searchInput = document.querySelector(".todo_search");
   searchInput.addEventListener("input", searchTodo);

   const todoText = document.createElement("span");
   todoText.classList.add("todo_text");
   todoText.textContent = todo.text;

   todoLeft.appendChild(todoCb); //içine ekleniyor//
   todoLeft.appendChild(todoText);
   todoLeft.appendChild(editInput);

   const todoRight = document.createElement("div");
   todoRight.classList.add("todo_right");

   const deleteBtn = document.createElement("button");
   deleteBtn.classList.add("todo_delete");
   deleteBtn.textContent = "Delete";
   deleteBtn.addEventListener("click", deleteTodo); 
   
   const editBtn = document.createElement("button");
   editBtn.classList.add("todo_edit");
   editBtn.textContent = "Edit";
   editBtn.addEventListener("click", editTodo); 
   
   const saveBtn = document.createElement("button");
   saveBtn.classList.add("todo_save");
   saveBtn.textContent = "Save";
   saveBtn.addEventListener("click", saveTodo);

   const clearBtn = document.querySelector(".todo_clearall");
   clearBtn.addEventListener("click", clearAllTodos);

   todoRight.appendChild(deleteBtn);
   todoRight.appendChild(editBtn);
   todoRight.appendChild(saveBtn);

   todoDiv.appendChild(todoLeft);
   todoDiv.appendChild(todoRight);

   todo_container.appendChild(todoDiv);
}

startConf();

form.addEventListener("submit", addTodo);