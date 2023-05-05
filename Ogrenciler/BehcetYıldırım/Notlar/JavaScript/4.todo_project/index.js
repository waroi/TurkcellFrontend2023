//* TÜM ELEMENTLERİ SEÇME
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter= document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ // Tüm event listener'lar
    form.addEventListener("submit",addTodo);

    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
}
//* LİSTEYE TODO EKLEME
function addTodo(e){
    const newTodo = todoInput.value.trim();// trim boşlukları siler.

    if(newTodo === ""){
        showAlert("danger","Lütfen bir todo girin...");
    }else{
        addTodoToUI(newTodo);
        showAlert("success","Başarılı bir şekilde giriş yapıldı...");
    }
    

    e.preventDefault();
};

//* Listeye eklenecek itemleri oluşturma
function addTodoToUI(e){
// String değerini list item olarak UI'a ekleyecek
   // List item oluşturma
    const listItem= document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";


    // li içerisindeki a elementini oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className= "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listItem.appendChild(document.createTextNode(e));
    listItem.appendChild(link);
    
    //ı Todo liste list item'ı ekleme
    todoList.appendChild(listItem);

    todoInput.value= "";
}


//* Uyarı Mesajı
function showAlert(type, message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 1500); // alert timeout
};

//* Listeden Todoları Silme

function deleteTodo(e){
    if(e.target.className==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
    }
};

//* Filtreleme
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(a){
        const text = a.textContent.toLowerCase();

        if(text.indexOf(filterValue)=== -1){
            a.setAttribute("style","display : none !important");
        }else{
            a.setAttribute("style","display : block"); 
        }

    });

    
};
// function filterTodos(e){
//     const filterValue = e.target.value.toLowerCase();
//     const listItems = document.querySelectorAll(".list-group-item");

//     listItems.forEach(function(a){
//         const text = a.textContent.toLowerCase();
//         if (text.indexOf(filterValue) === -1){
//             // Bulamadı
            
//             a.setAttribute("style","display : none !important");
//         }
//         else {
//             a.setAttribute("style","display : block");
//         }

        

//     });
// };
