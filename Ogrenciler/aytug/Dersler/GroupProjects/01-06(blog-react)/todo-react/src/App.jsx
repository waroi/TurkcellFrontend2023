import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [todo, setTodo] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/")
			.then((resp) => resp.json())
			.then((data) => setTodo(data));
	}, []);
	return <></>;
}

export default App;
