import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/index";

function App() {
	const [picsum, setPicsum] = useState([]);
	const [jsonplace, setJsonPlace] = useState([]);

	useEffect(() => {
		fetch("https://picsum.photos/v2/list?page=1&limit=100")
			.then((resp) => resp.json())
			.then((data) => setPicsum(data));

		fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100")
			.then((resp) => resp.json())
			.then((data) => setJsonPlace(data));
	}, []);

	// console.log("picsum", picsum);
	// console.log("jsonplace", jsonplace);

	return (
		<>
			<ul>
				<Card picsum={picsum} json={jsonplace} />
			</ul>
		</>
	);
}

export default App;
