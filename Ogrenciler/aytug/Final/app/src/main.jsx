import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</>
);
