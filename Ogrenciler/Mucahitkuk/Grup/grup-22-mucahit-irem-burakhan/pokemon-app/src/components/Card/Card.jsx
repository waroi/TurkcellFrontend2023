import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/slice/pokemonSlice';
import {CustomCard, CustomGrid, CustomTitle} from "./styled"

const Card = () => {

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.data);
  const loading = useSelector((state) => state.pokemons.loading);
  const error = useSelector((state) => state.pokemons.error);
  const graphics = useSelector((state) => state.pokemons.graphics);
  console.log(graphics);  

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
      <CustomCard key={pokemon.name}>
        <CustomTitle>{pokemon.name}</CustomTitle>
        <img src={graphics ? `${pokemon.data.sprites.versions['generation-v']['black-white'].animated.front_default}` : `${pokemon.data.sprites.front_default}`} />
      </CustomCard>
    ))}
  </CustomGrid>
  )
}

export default Card