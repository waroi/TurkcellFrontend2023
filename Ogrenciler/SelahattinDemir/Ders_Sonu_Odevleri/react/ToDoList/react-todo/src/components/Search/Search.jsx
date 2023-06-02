/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const Search = ({ todos, handleOriginal, setTodos }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      handleOriginal();
    } else {
      setTodos(
        todos.filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
      );
      console.log(todos);
      console.log(search);
    }
  }, [search]);

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
