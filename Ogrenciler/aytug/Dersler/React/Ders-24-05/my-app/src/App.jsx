import "./App.css";
// import Deneme from "./components/Deneme";
import ListItem from "./components/ListItem";

function App() {
	// let name = "React";
	// let surName = "Library";
	// let age = 12;
	const langs = [
		"JavaScript",
		"PHP",
		"Python",
		"C++",
		"C#",
		"Go",
		"Swift",
		"TypeScript",
		"SQL",
		"HTML",
		"CSS",
		"XML",
		"JSON",
	];

	return (
		<div className="App">
			<header className="App-header">
				{/* <Deneme name={name} surName={surName} age={age} /> */}
				<ul>
					{langs.map((lang, index) => (
						<ListItem key={index} langs={lang} />
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
