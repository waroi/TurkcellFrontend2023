import React, { useEffect, useState } from "react";
import { fetchPokemon, fetchPokemonDetail } from "./utils/Request";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // useEffect(() => {
  //   console.log(fetchPokemon());
  //   console.log(fetchPokemonDetail(1));
  // }, []);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
