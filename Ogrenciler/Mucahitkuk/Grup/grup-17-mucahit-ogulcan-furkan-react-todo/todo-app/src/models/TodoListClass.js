import Fetch from "./Fetch.js";

class TodoList extends Fetch {
   constructor(TodoList = [])
    {
    super("http://localhost:3535/todos")
    this.TodoList = TodoList;
   }
  async addTodo(todo) {
   const data = await this.post(todo)
   if(data) {
    return data
  }
   }
  async deleteTodo(id) {
   await this.delete(id)
}
  async updateTodo(id, todo) {
      await this.patch(id, todo)
    }
}
  

export default TodoList;