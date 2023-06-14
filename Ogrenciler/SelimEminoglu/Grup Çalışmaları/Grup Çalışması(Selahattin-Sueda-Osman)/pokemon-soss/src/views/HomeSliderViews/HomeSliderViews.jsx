import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../redux/slice/pokemonSlice";
import { fetchPokemonList } from "../../utils/Request";

const HomeSliderViews = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.pokemon);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  console.log(pokemons);

  const fetchPokemonImages = async () => {
    const updatedPokemons = await Promise.all(
      pokemons.map(async (pokemon) => {
        const response = await fetchPokemonList(pokemon.url);
        return response;
      })
    );
    setPokemonList(updatedPokemons);
  };

  useEffect(() => {
    if (pokemons.length > 0) {
      fetchPokemonImages();
    }
  }, [pokemons]);

  const img = pokemonList.map((pokemon) => pokemon.sprites.front_default);

  console.log(img);

  return (
    <div>
      <h1>HomeSliderViews</h1>
      {pokemons &&
        pokemons.map((pokemon, index) => (
          <div key={pokemon.id}>
            <h1>{pokemon.name}</h1>
            <img src={img[index]} alt="" />
          </div>
        ))}
    </div>
  );
};

export default HomeSliderViews;
