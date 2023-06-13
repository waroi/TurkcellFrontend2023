import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, setData, setError } from '../../redux/slices/pokeSlice/pokeSlice';
import { fetchPokemons } from '../../class/fetchPokemons';
import SinglePokemon from './SinglePokemon';

const AllPokemons = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.pokemon);

  const getPokemons = async () => {
    dispatch(setLoading());
    try {
      const response = await fetchPokemons();
      dispatch(setData(response));
    } catch (error) {
      dispatch(setError(error));
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.length > 0 ? (
        data.map((pokemon) => <SinglePokemon key={pokemon.name} singleItem={pokemon} />)
      ) : (
        <div>No pokemons found.</div>
      )}
    </div>
  );
};

export default AllPokemons;
