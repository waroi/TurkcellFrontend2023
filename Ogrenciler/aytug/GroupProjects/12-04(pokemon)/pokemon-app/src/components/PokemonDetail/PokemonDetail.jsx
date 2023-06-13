import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PokemonDetail = () => {
	const { name } = useParams();
	const pokemons = useSelector((state) => state.pokemonSlice.pokemons);

	console.log(pokemons);
	const pokemon = pokemons.find((pokemon) => pokemon.name == name);
	console.log(pokemon);

	return <div>{name}</div>;
};

export default PokemonDetail;
