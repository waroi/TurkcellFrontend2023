import { useState } from "react";
import Deneme from "../components/Deneme";
import ListItem from "../components/ListItem";
import "./App.css";

function App() {
	// const [count, setCount] = useState(0);
	const [name, setName] = useState("Varol");
	const students = ["Ali", "Veli", "Ahmet"];
	// const takımlar = [
	// 	{
	// 		id: 1,
	// 		name: "Beşiktaş",
	// 		color1: "black",
	// 		color2: "white",
	// 		w: "300px",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Galatasaray",
	// 		color1: "red",
	// 		color2: "yellow",
	// 		w: "250px",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Feberbahçe",
	// 		color1: "blue",
	// 		color2: "yellow",
	// 		w: "200px",
	// 	},
	// ];

	return (
		<>
			{/* <h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div> */}
			<Deneme isim={name} />
			<button onClick={() => setName("Ahmet")}>Change Name</button>
			<hr />
			<ul>
				{students.map((student, index) => (
					<ListItem key={index} name={student} />
				))}
			</ul>
		</>
	);
}

export default App;
