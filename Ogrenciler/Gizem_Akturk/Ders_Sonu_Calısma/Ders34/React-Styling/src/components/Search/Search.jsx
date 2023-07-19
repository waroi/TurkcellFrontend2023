import React, { useEffect } from "react";
import style from "./Search.module.css";

import { fetchData } from "../../services/Request";
import { addLastSearch } from "../../services/localStorage";
import { useState } from "react";

const Search = ({ setUser }) => {

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    
      const delay = setTimeout(() => {
        if (searchValue.length > 2) {
          fetchData(searchValue).then((response) => {
            setUser(response);
            addLastSearch(searchValue);
          });
        }
      }, 2000);

      return () => clearTimeout(delay);
    }, [searchValue]);

  return (
    <div>
      <input className={style.searchBox} type="text" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  );
};

export default Search;
