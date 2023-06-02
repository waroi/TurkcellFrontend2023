import PropTypes from "prop-types";
import { changeStatusTodo, deleteTodo } from "../../services/api";
import { useEffect } from "react";

const AddTodo = ({ todo, setCompleted, completed, setNewTodo, setValue, setIsEdit }) => {
	// const [completed, setCompleted] = useState();

	const handleEdit = (todo) => {
		setValue(todo);
	};

	return (
		<div className="d-flex justify-content-between mt-1">
			<div className="d-flex align-items-center">
				<input
					type="checkbox"
					checked={todo.completed}
					id=""
					onChange={() => {
						changeStatusTodo(todo.id, todo.title, !todo.completed);
						setCompleted(!completed);
					}}
				/>
				<p className="text-white text-align-start m-0 ms-1">{todo.title}</p>
			</div>
			<div>
				<button className="btn btn-primary me-2" onClick={() => { handleEdit(todo); setIsEdit(true) }}>
					<i className="bi bi-pencil-square"></i>
				</button>
				<button
					className="btn btn-danger"
					onClick={() => {
						deleteTodo(todo.id);
						setNewTodo(Date.now());
					}}
				>
					<i className="bi bi-x-square"></i>
				</button>
			</div>
		</div>
	);
};

AddTodo.propTypes = {
	todo: PropTypes.object.isRequired,
	setValue: PropTypes.func.isRequired,
};

export default AddTodo;
