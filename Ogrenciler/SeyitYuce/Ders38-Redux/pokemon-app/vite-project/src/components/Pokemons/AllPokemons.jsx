import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPokemons } from "../../Class/FetchPokes";
import { getPokemon } from "../../redux/slices/fetchAllPokes/fetchAllPokes";
const AllPokemons = () => {
  const allPokes = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const getPokemons = async () => {
    const res = await fetchAllPokemons();
    dispatch(getPokemon(res));
    console.log(res);
  };
  useEffect(() => {
    getPokemons();
  }, []);

  if (allPokes && allPokes.length == 0) {
    return null;
  }

  return (
    <div>
      {allPokes?.length > 0 ? (
        allPokes?.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)
      ) : (
        <div>No Pokes Found...</div>
      )}
    </div>
  );
};

export default AllPokemons;
