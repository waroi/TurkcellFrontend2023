import "./App.css";
import Deneme from "./Deneme";

function App() {
	let name = "Aytuğ";
	return (
		<div className="App">
			<Deneme />
			<header className="App-header">
				Merhaba {name}
				<Deneme />
			</header>
		</div>
	);
}

export default App;
