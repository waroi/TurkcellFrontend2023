import Router from "./router/Router";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<>
			<div className="body-bg"> 
				<Link to="/"><i class="bi bi-house-fill"></i> Go to HomePage</Link>
				<Router />
				<div className="d-flex flex-column g-4">
					<a href="https://github.com/mfurkanuygur">M. Furkan Uygur</a>
					<a href="https://github.com/aytugyesilyurt">Aytuğ Yeşilyurt</a>
					<a href="https://github.com/omerceltikk">Ömer Çeltik</a>
				</div>
			</div>
		</>
	);
}

export default App;
