import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";

function App() {
	return (
		<>
			<div>
				<NavBar />
				<Router />
				<Footer />
			</div>
		</>
	);
}

export default App;
