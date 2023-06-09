import { useState, useEffect } from "react";
import { Button } from "./components/style";
import Portal from "./components/Portal";

import "./App.css";

function App() {
  const [portal, showPortal] = useState(document.body);

  function changeLocationOfPortal() {
    const target = document.body
      .querySelector("#root")
      .querySelector("#portalSec");
    showPortal(target);
  }

  return (
    <>
      <div id="portalSec"></div>
      <Button size="30">Merhaba</Button>
      <button
        onClick={() => {
          changeLocationOfPortal();
        }}
      >
        asd
      </button>
      <Portal text="deneme" target={portal} />
    </>
  );
}

export default App;
