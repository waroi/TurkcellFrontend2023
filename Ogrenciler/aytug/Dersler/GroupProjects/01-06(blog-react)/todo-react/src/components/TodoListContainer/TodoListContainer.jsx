const TodoListContainer = (todo) => {
	return (
		<>
			<ul>
				{todo.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</>
	);
};

export default TodoListContainer;
