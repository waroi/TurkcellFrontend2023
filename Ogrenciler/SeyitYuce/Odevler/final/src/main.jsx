import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { setUser } from "./redux/slices/userSlice.js";
import Cookies from "js-cookie";

const storedUser = Cookies.get("user");
if (storedUser) {
  const user = JSON.parse(storedUser);
  store.dispatch(setUser(user));
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);
