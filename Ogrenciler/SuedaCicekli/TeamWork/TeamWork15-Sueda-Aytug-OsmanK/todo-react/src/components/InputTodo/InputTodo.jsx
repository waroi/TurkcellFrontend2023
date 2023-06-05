import { addTodo, changeStatusTodo } from "../../services/api";
import { useState, useEffect } from "react";

const InputTodo = ({ setNewTodo, value, setIsEdit, setValue, isEdit }) => {
	const [todoInput, setTodoInput] = useState(value);

	useEffect(() => {
		value == null ? setTodoInput("") : setTodoInput(value.title);
	}, [isEdit]);

	const addNewTodo = (event) => {
		event.preventDefault();
		if (isEdit) {
			changeStatusTodo(value.id, todoInput, value.completed);
			setTodoInput("")
			setIsEdit(false);
			setNewTodo(Date.now());
			setValue(Date.now());
		} else {
			if (todoInput.trim() === "") {
				alert("Todo boş olamaz");
			} else {
				addTodo(todoInput);
				setNewTodo(Date.now());
				setTodoInput("");
			}
		}
	}

	return (
		<form>
			<div className="mb-3 d-flex justify-content-center">
				<input
					type="text"
					value={todoInput}
					onChange={(e) => setTodoInput(e.target.value)}
					className="form-control w-50"
					id="addNewTodo"
					placeholder="Todo ekleyin"
				/>
				<button
					className="btn btn-primary ms-3"
					onClick={addNewTodo}
				>
					{isEdit ? "Güncelle" : "Ekle"}
				</button>
			</div>
		</form>
	);
};

export default InputTodo;