class Todo  {
    constructor(title, id = Math.floor(Math.random() * 1000000), priority = "green", checked = false) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.checked = checked;
    }
}

export default Todo;