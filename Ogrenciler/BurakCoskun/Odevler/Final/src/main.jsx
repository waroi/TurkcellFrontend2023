import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/main.css";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
