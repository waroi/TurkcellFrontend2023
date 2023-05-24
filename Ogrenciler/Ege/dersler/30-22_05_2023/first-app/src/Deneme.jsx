import { useState } from "react";

const Deneme = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
};

export default Deneme;
