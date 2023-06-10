import React, { useEffect, useState } from "react";
import { getAllCoins } from "../../service/api";

const Home = () => {
  const [allCoins, setAllCoins] = useState([]);
  useEffect(() => {
    getAllCoins().then((data) => setAllCoins(data));
  }, []);

  if (allCoins.length === 0) {
    return <p>Loading...</p>;
  } else {
    console.log(allCoins.coins[0].id);
  }

  return (
    <div>
      {allCoins.coins.length > 0 ? (
        allCoins.coins.map((coin) => (
          <div key={coin.id}>
            <h1>{coin.name}</h1>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
