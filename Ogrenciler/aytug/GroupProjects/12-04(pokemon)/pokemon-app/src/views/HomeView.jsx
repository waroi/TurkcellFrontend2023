import { useSelector, useDispatch } from "react-redux";
import { listPokemons } from "../redux/slices/pokemonSlice";
import PokemonList from "../components/PokemonList/PokemonList";
import { useEffect } from "react";

const HomeView = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemonSlice.pokemons);

	const handleListPokemons = () => {
		dispatch(listPokemons());
	};

	useEffect(() => {
		handleListPokemons();
	}, []);

	return (
		<>
			<div>{pokemons && <PokemonList pokemons={pokemons} />}</div>
		</>
	);
};

export default HomeView;
