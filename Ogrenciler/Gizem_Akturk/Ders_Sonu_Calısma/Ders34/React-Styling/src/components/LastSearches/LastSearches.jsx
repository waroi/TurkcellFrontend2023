import React, { useEffect } from "react";
import style from "./LastSearches.module.css";
import { useState } from "react";

const LastSearches = () => {
  const [lastSearches, setLastSearches] = useState([]);

  useEffect(() => {
    const lastSearches = JSON.parse(localStorage.getItem("last"));
    setLastSearches(lastSearches);
  }, []);

  return (
    <div>
      <h1>Last Searches</h1>
      <div className={style.lastSearchs}>
      {lastSearches?.map((search) => (
        <div className={style.search}>{search}</div>
      ))}
      </div>
    </div>
  );
};

export default LastSearches;
