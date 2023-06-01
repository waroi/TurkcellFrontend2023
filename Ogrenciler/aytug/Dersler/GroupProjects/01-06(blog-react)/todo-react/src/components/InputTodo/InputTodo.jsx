import { addTodo } from "../../services/api";

const InputTodo = ({ setNewTodo }) => {
	function addNewTodo(e) {
		e.preventDefault();
		const todo = document.getElementById("addNewTodo").value;
		if (todo.trim() === "") {
			alert("Todo boş olamaz");
		} else {
			document.getElementById("addNewTodo").value = "";
			addTodo(todo);
			setNewTodo(Date.now());
		}
	}
	function changeStatusTodo(e) {
		// const todo = document.getElementById("addNewTodo").value;
		// if (todo.trim() === "") {
		//   alert("Todo boş olamaz");
		// } else {
		//   document.getElementById("addNewTodo").value = "";
		//   addTodo(todo);
		// }
		e.preventDefault();
		console.log(e.target.value);
		console.log("ONCHANGE");
	}
	return (
		<form>
			<div className="mb-3 d-flex justify-content-center">
				<input type="text" className="form-control w-50" id="addNewTodo" placeholder="Todo ekleyin" />
				<button className="btn btn-primary ms-3" onClick={(e) => addNewTodo(e)}>
					Ekle
				</button>
			</div>
		</form>
	);
};

export default InputTodo;
