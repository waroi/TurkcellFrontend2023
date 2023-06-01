import React from 'react';
import Counter from "./components/Counter"
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"

function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
