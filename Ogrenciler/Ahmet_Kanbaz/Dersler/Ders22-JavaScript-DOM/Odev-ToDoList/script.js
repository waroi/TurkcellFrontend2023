const addTaskForm = document.getElementById('addTask');
const addTaskInput = document.getElementById('taskName');

const taskList = document.getElementById('taskList');
const deleteAllTask = document.getElementById('deleteAll');

addEventListener();

function addEventListener() {
  addTaskForm.addEventListener('submit', addNewToDoTask);
}

function addNewToDoTask(e) {
  if(addTaskInput.value === '') {
    alert('Lütfen New Task İnput Kısmını Doldurunuz!!!');
  }

  else {
    const newItemLi = document.createElement('li');
    newItemLi.className = 'list-group-item list-group-item-secondary';
    const itemContext = document.createTextNode(addTaskInput.value);
    newItemLi.appendChild(itemContext);
    const itemDeleteIcon = document.createElement('a');
    itemDeleteIcon.className = 'deleteButton float-end';
    itemDeleteIcon.href = '#';
    const itemDeleteSpan = document.createElement('span');
    itemDeleteSpan.className = 'fa-solid fa-xmark';
    itemDeleteIcon.appendChild(itemDeleteSpan);
    newItemLi.appendChild(itemDeleteIcon);
    taskList.appendChild(newItemLi);
    addTaskInput.value = '';
  }
  
  e.preventDefault();
}

let a = "I love React".split("").reverse().join("");
console.log(a);