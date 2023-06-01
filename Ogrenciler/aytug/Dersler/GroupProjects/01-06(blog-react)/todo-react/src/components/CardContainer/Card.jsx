import "./CardStyle.css";
import { useEffect, useState } from "react";
import { getAllTodos } from "../../services/api";
import AddTodo from "../AddTodo/AddTodo";
import InputTodo from "../InputTodo/InputTodo";

const Card = () => {
	const [todoList, setTodoList] = useState([]);
	const [completed, setCompleted] = useState("false");
	const [newTodo, setNewTodo] = useState("");

	console.log(newTodo);
	useEffect(() => {
		getTodos();
	}, [completed, newTodo]);

	const getTodos = async () => {
		const response = await getAllTodos();
		setTodoList(response);
	};

	return (
		<div className="card">
			<div className="tools">
				<div className="circle">
					<span className="red box"></span>
				</div>
				<div className="circle">
					<span className="yellow box"></span>
				</div>
				<div className="circle">
					<span className="green box"></span>
				</div>
			</div>
			<div className="card__content">
				<InputTodo setNewTodo={setNewTodo} />
				{todoList.map((todo) => (
					<AddTodo
						completed={completed}
						setCompleted={setCompleted}
						setNewTodo={setNewTodo}
						todo={todo}
						key={todo.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Card;
