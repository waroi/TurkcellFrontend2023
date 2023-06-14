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

  const fetchPokemonİmg = async () => {
    pokemons &&
      pokemons.map((pokemon) => {
        setPokemonList(fetchPokemonList(pokemon.url));
      });
  };

  useEffect(() => {
    fetchPokemonİmg();
  }, []);

  console.log(pokemonList);

  return (
    <div>
      <h1>HomeSliderViews</h1>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <h1>{pokemon.name}</h1>
          </div>
        ))}
    </div>
  );
};

export default HomeSliderViews;
