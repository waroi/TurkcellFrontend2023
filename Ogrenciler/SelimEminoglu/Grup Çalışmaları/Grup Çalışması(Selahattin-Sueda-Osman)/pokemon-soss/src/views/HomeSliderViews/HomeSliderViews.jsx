import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../redux/slice/pokemonSlice";
import { fetchPokemonList } from "../../utils/Request";
import { BoxContainer, Box, İmage, İmgContainer } from "./HomeStyle.js";

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

  console.log(pokemonList);

  const img = pokemonList.map(
    (pokemon) => pokemon.sprites.other.dream_world.front_default
  );

  return (
    <BoxContainer>
      {pokemons &&
        pokemons.map((pokemon, index) => (
          <div key={pokemon.id}>
            <Box>
              <h3 className="display-5 fw-bold p-2">{pokemon.name}</h3>
              <Link to={`/detail/${pokemon.name}`}>
                <İmgContainer>
                  <İmage src={img[index]} className="img-fluid" alt="icon" />
                </İmgContainer>
              </Link>
            </Box>
          </div>
        ))}
    </BoxContainer>
  );
};

export default HomeSliderViews;
