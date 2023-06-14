import Router from "./router/Router";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<>
			<div className="body-bg">
				<Link className="text-dark" to="/">
					<i className="bi bi-house-fill fs-3"></i>
				</Link>
				<Router />
				<div className="d-flex flex-column g-4">
					<a className="text-dark" href="https://github.com/mfurkanuygur">
						M. Furkan Uygur
					</a>
					<a className="text-dark" href="https://github.com/aytugyesilyurt">
						Aytuğ Yeşilyurt
					</a>
					<a className="text-dark" href="https://github.com/omerceltikk">
						Ömer Çeltik
					</a>
				</div>
			</div>
		</>
	);
}

export default App;
