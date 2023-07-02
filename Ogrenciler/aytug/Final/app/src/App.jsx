import "./css/App.css";
import "./css/main.css";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";

import { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColorPrimary};
		font-family: 'Gilroy', sans-serif;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Router />
			<ToastContainer position="bottom-right" autoClose={5000} />
			<Footer />
		</>
	);
}

export default App;
