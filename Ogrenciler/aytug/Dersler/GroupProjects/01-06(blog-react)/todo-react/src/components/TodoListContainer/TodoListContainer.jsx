const TodoListContainer = (todo) => {
	return (
		<>
			{todo.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</>
	);
};

export default TodoListContainer;
