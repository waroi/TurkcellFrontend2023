import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Router from "./router/router";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "./redux/slice/pokemonSlice";

function App() {
  const pokemonArr = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <Router />
      <button onClick={() => dispatch(getPokemons())}>Göster</button>
    </>
  );
}

export default App;
