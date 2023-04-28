import { todoFunc } from './todoComponent.js';
let selectedTodo = null;
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let todo = {};
let filter = '';
todoScreen();
addTodo.addEventListener('click', function () {
 todo = {
  id: Math.floor(Math.random() * 1_000_000_000),
  text: addTodoInput.value,
  isCompleted: false,
 };
 if (todo.text != '') {
  todos = [...todos, todo];
  todoScreen();
  addTodoInput.value = '';
 }
});
searchInput.addEventListener('input', function (e) {
 filter = e.target.value.toLocaleLowerCase();
 todoScreen();
});
function todoScreen() {
 todoContainer.innerHTML = todos
  .filter((todo) => todo.text.toLocaleLowerCase().includes(filter))
  .map((todo) => todoFunc(todo))
  .join('');
 localStorage.setItem('todos', JSON.stringify(todos));
}
todoContainer.addEventListener('click', function (event) {
 event.target.classList.contains('delete') &&
  (todos = todos.filter((todo) => {
   return todo.id != event.target.parentElement.id;
  }));
 if (event.target.classList.contains('change')) {
  let todo = todos.find((todo) => {
   return todo.id == event.target.parentElement.id;
  });
  selectedTodo = todo;
  addTodoInput.value = todo.text;
  addTodo.classList.add('d-none');
  changedTodoButton.classList.remove('d-none');
 }
 if (event.target.classList.contains('label-fc')) {
  let todo = todos.find((todo) => {
   return todo.id == event.target.parentElement.id;
  });
  todo.isCompleted = !todo.isCompleted;
 }
 todoScreen();
});
clearAllTodos.addEventListener('click', function (e) {
 e.preventDefault();
 todos = [];
 todoScreen();
});
changedTodoButton.addEventListener('click', function (e) {
 e.preventDefault();
 selectedTodo.text = addTodoInput.value;
 selectedTodo.isCompleted = false;
 addTodo.classList.remove('d-none');
 changedTodoButton.classList.add('d-none');
 addTodoInput.value = '';
 selectedTodo = null;
 todoScreen();
});
