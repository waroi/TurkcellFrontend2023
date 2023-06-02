import { addTodo, changeStatusTodo } from "../../services/api";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const InputTodo = ({ setNewTodo, value, setIsEdit, isEdit, setValue }) => {
	const [todoInput, setTodoInput] = useState(value);

	useEffect(() => {
		value == null ? setTodoInput("") : setTodoInput(value.title);
	}, [value, isEdit]);

	console.log(todoInput);

	function addNewTodo() {
		if (isEdit) {
			changeStatusTodo(value.id, todoInput, value.completed);
			setNewTodo(Date.now());
			setTodoInput("");
			setIsEdit(false);
			setValue("");
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
				<button type="button" className="btn btn-primary ms-3" onClick={() => addNewTodo()}>
					{isEdit ? "Güncelle" : "Ekle"}
				</button>
			</div>
		</form>
	);
};

InputTodo.propTypes = {
	value: PropTypes.object,
	isEdit: PropTypes.bool,
	setValue: PropTypes.func,
	setCompleted: PropTypes.func,
	setIsEdit: PropTypes.func,
	setNewTodo: PropTypes.func,
};

export default InputTodo;
