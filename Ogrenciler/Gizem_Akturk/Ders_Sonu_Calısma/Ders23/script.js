var todoitems = [];

document.getElementById("searchtodo").addEventListener("keyup", filtertodoitem);

function loadtodos() {
  var storeditems = localStorage.getItem("todoitems");
  if (storeditems != null) {
    todoitems = JSON.parse(storeditems);
  }
}

window.onload = function () {
  loadtodos();
  displaytodos(todoitems);
};

function newElement() {
  var inputValue = document.getElementById("todos").value;

  if (inputValue === "") {
    alert("Boş bırakmayınız");
  } else {
    if (todoitems.forEach((e) => e.text === inputValue)) {
      alert("Bu eleman zaten var");
      return;
    }
    createTodoItem(inputValue);
    todoitems.push({ text: inputValue, checked: false });
    document.getElementById("todos").value = "";

    displaytodos(todoitems);
    storetolocalstorage();
  }
}

function createTodoItem(item) {
  var li = document.createElement("li");
  var text = document.createTextNode(item.text);
  li.appendChild(text);
  li.appendChild(deletelistitem());
  li.addEventListener("click", function () {
    this.classList.toggle("checked");
    storetolocalstorage();
  });
  if (item.checked) {
    li.classList.add("checked");
  }
  return li;
}

function deletelistitem() {
  var span = document.createElement("span");
  var text2 = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text2);

  span.addEventListener("click", function () {
    var div = this.parentElement;
    div.style.display = "none";
    storetolocalstorage();
  });

  return span;
}

function displaytodos(listofitems) {
  document.getElementById("myUl").innerHTML = "";
  for (var i = 0; i < listofitems.length; i++) {
    document.getElementById("myUl").appendChild(createTodoItem(listofitems[i]));
  }
}

function filtertodoitem() {
  var filterValue = document.getElementById("searchtodo").value;

  var filteredlist = todoitems.filter((item) => {
    return item.text.includes(filterValue);
  });
  document.getElementById("myUl").innerHTML = "";
  displaytodos(filteredlist);
}

function deleteall() {
  var alert = confirm("Tüm elemanları silmek istediğinize emin misiniz?");
  if (alert) {
    document.getElementById("myUl").innerHTML = "";
    todoitems.length = 0;
  }
}

function storetolocalstorage() {
  var todoobjects = checkIfChecked();
  localStorage.setItem("todoitems", JSON.stringify(todoobjects));
}

function checkIfChecked() {
  var todos = [...document.getElementsByTagName("li")];
  todos = filterDeletedItems(todos);
  var todoobjects = todos.map((item) => {
    return {
      text: item.innerText.replace("\n\u00D7", ""),
      checked: item.classList.contains("checked"),
    };
  });
  return todoobjects;
}
function filterDeletedItems(todos) {
  todos = todos.filter((item) => {
    // remove the display none items from the array
    return item.style.display != "none";
  });
  return todos;
}
