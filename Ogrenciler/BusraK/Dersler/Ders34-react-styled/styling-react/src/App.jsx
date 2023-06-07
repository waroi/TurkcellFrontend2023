import { useState } from "react";
import styles from "./CustomStyle.module.css";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Vite + React + styling</h1>
      <button className={styles.customButton}>Click me</button>
    </>
  );
}

export default App;
