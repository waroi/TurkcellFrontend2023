import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../../redux/slice/pokemonSlice";
import { CustomCard, CustomGrid, CustomTitle } from "./styled";
import { Link } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.data);
  const loading = useSelector((state) => state.pokemons.loading);
  const error = useSelector((state) => state.pokemons.error);
  const graphics = useSelector((state) => state.pokemons.graphics);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CustomGrid>
      {pokemons.map((pokemon) => (
        <Link key={pokemon.name} to={`/Pokemonpage/${pokemon.name}`}>
          <CustomCard>
            <CustomTitle>{pokemon.name}</CustomTitle>
            <img
            className="rtxImg"
              src={
                graphics
                  ? `${pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default}`
                  : `${pokemon.data.sprites.front_default}`
              }
            />
          </CustomCard>
        </Link>
      ))}
    </CustomGrid>
  );
};

export default Card;
