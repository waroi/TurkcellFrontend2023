import axios from "axios";

export const fetchPokemonsDetail = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const fetchPokemons = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=91&limit=21');
  return response.data.results;
}