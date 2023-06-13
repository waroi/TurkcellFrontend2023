import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { listPokemons } from "./redux/slices/pokemonSlice";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";

function App() {
	return (
		<>
			<div>
				<NavBar />
				<Router store={useSelector} dispatch={useDispatch} listPokemons={listPokemons} />
				<Footer />
			</div>
		</>
	);
}

export default App;
