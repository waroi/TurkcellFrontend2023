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
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}

//*                                         Sayfa Yüklendiğinde Todolar Ekleme
function loadAllTodosToUI(){
    let todos = getTodoFromStorage();

    todos.forEach(function(e){
        addTodoToUI(e);
    });
}

//*                                                    LİSTEYE TODO EKLEME
function addTodo(e){
    const newTodo = todoInput.value.trim();// trim boşlukları siler.

    if(newTodo === ""){
        showAlert("danger","Lütfen bir todo girin...");
    }else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Başarılı bir şekilde giriş yapıldı...");
    }
    

    e.preventDefault();
};

//*                                Local Storage'den İtemleri Dizi Halinde Çekme
function getTodoFromStorage(){
    let todos; // Local storge'e ekleyeceğimiz veriler için bir key oluşturuyoruz.
    if(localStorage.getItem("todos")=== null){
        todos = []; // eğer ki local storage'de todos isminde bir key yok ise todos dizisini boş başlattık.
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos")) // eğer todos var ise onu local storage'den ARRAY olarak okuduk.
    }
    return todos; // Stoage'den aldığımız todos dizisini döndürüyoruz.
};

//*                                                    Local Storage'e ekleme
function addTodoToStorage(e){
    let todos = getTodoFromStorage(); // getTodoFromStorage fonksiyonundan dönen diziyi alıyoruz.
    
    todos.push(e);// fonksiyona aldığımız değeri(newTodo) todos dizisine ekliyoruz.
    
    localStorage.setItem("todos", JSON.stringify(todos)) // dizi olarak tuttuğumuz todos'u local storage'e dizi olarak ekliyoruz.
};

//*                                         Listeye eklenecek itemleri oluşturma
function addTodoToUI(e){
// String değerini list item olarak UI'a ekleyecek
   // List item oluşturma
    const listItem= document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";


    // li içerisindeki a elementini oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className= "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>"

    listItem.appendChild(document.createTextNode(e));
    listItem.appendChild(link);
    
    //ı Todo liste list item'ı ekleme
    todoList.appendChild(listItem);

    todoInput.value= "";
}


//*                                                      Uyarı Mesajı
function showAlert(type, message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 1500); // alert timeout
};

//*                                                      Listeden Todoları Silme

function deleteTodo(e){
    if(e.target.className==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);// fonksiyona silme işlemi uyygularken yukarıda aldığımız elementin içeriğini gönderiyoruz.
    }
};

//*                                             Local Storage'den Todoları Silme
function deleteTodoFromStorage(e){
    let todos = getTodoFromStorage();// Storage'de olan verileri tanımladığımız fonksiyonla çekiyoruz.

    todos.forEach(function(a,index){// çektiğimiz diziyi geziyoruz ve deleteTodoFromStorage fonksiyonuna gönderidğimiz değer ile storage'deki gezindiğimiz değer aynı ise onu siliyoruz.
        if(a === e){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));// değerler silindikten sonra local storage'yi güncelliyoruz.
};

//*                                                      Filtreleme
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(a){
        const text = a.textContent.toLowerCase();

        if(text.indexOf(filterValue)=== -1){ // id ile bulmaya çalış
            a.setAttribute("style","display : none !important");
        }else{
            a.setAttribute("style","display : block"); 
        }

    });
};

//*                                           Bütün Todoları Temizleme
function clearAllTodos(){
    if(confirm("Tümünü Silmek İstedğinizden Emin Misiniz?")){
        // Arayüzden temizleme
        // todoList.innerHTML="";
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.clear();

    }

};

