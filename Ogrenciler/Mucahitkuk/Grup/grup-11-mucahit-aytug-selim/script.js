
const todoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-todo');
const todoList = document.querySelector('#todo-list');
const removeBtn = document.querySelector('#delete-todo');
addBtn.addEventListener('click', addTodo);
removeBtn.addEventListener('click', clearTodoList);


let list = document.getElementById('todo-list');

function addTodo() {
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  list.appendChild(newTodo);
}

function clearTodoList() {
  list.remove('todo-list');
}




































// // Selectors
// const todoInput = document.querySelector('#todo-input');
// const addBtn = document.querySelector('#add-btn');
// const todoList = document.querySelector('#todo-list');

// // Event listeners
// addBtn.addEventListener('click', addTodo);
// todoList.addEventListener('click', deleteTodo);

// // Functions
// function addTodo() {
//   // Create new list item
//   const newTodo = document.createElement('li');
//   newTodo.innerText = todoInput.value;
  
//   // Add delete button
//   const deleteBtn = document.createElement('button');
//   deleteBtn.innerText = 'Delete';
//   newTodo.appendChild(deleteBtn);
  
//   // Add new todo to list
//   todoList.appendChild(newTodo);
  
//   // Clear input field
//   todoInput.value = '';
// }

// function deleteTodo(e) {
//   if (e.target.tagName === 'BUTTON') {
//     e.target.parentElement.remove();
//   }
// }
