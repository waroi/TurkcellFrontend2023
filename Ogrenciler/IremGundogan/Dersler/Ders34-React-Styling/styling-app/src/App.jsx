// import { useState } from "react";
import "./App.css";
import styles from "./CustomStyle.module.css";

function App() {
  return (
    <>
      <h1 className="title">Styling</h1>
      <button className={styles.customButton}>Bana tıkla</button>
    </>
  );
}

export default App;
