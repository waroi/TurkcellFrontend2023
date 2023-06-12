import { useState } from "react";
// import { useEffect } from "react";
import "./App.css";
import SearchCity from "./components/SearchCity/SearchCity";
import ActiveCity from "./components/ActiveCity/ActiveCity";

function App() {
	const [activeCity, setActiveCity] = useState();

	return (
		<>
			<SearchCity setActiveCity={setActiveCity} />
			{activeCity && <ActiveCity activeCity={activeCity} />}
		</>
	);
}

export default App;
