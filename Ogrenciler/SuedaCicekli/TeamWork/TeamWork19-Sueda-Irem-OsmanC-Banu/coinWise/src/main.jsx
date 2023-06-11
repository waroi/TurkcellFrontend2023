import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { FetchProvider } from "./context/FetchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FetchProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FetchProvider>
  </React.StrictMode>
);
