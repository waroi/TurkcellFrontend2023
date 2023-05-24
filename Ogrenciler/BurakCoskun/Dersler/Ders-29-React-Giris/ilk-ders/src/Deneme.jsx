import React, { useEffect, useState } from "react";

const Deneme = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
      <button onClick={() => setCount(0)}>Resetle</button>
    </>
  );
};

export default Deneme;
