var todoitems = [];

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
    if (todoitems.includes(inputValue)) {
      alert("Bu eleman zaten var");
      return;
    }
    var li = createTodoItem(inputValue);
    todoitems.push(inputValue);
    storetolocalstorage();
  }
  document.getElementById("todos").value = "";

  displaytodos(todoitems);
}

function createTodoItem(item) {
  var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  li.appendChild(deletelistitem());
  li.addEventListener("click", function () {
    this.classList.toggle("checked");
  });
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
    var index = todoitems.indexOf(div.innerText.replace("\u00D7", ""));
    todoitems.splice(index, 1);
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
document.getElementById("searchtodo").addEventListener("keyup", filtertodoitem);

function filtertodoitem() {
  var filterValue = document.getElementById("searchtodo").value;

  var filteredlist = todoitems.filter(function (item) {
    return item.innerText.includes(filterValue);
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
  var todoobjects = todoitems.map((item) => {
    return { text: item, checked: false };
  });
  localStorage.setItem("todoitems", JSON.stringify(todoitems));
}
