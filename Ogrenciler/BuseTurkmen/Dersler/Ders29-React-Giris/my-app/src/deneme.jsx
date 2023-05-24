import { useState } from "react";

const Deneme = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
    </div>
  );
};

export default Deneme;