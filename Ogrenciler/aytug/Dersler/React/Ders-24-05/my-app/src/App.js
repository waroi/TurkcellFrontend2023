import "./App.css";
import Deneme from "./components/Deneme";

function App() {
	let name = "Varol";
	let surName = "Maksutoğlu";
	let age = 26;

	return (
		<div className="App">
			<header className="App-header">
				<Deneme name={name} surName={surName} age={age} />
			</header>
		</div>
	);
}

export default App;
