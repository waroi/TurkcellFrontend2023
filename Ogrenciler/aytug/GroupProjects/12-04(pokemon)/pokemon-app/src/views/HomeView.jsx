import { useSelector, useDispatch } from "react-redux";
import { listPokemons } from "../redux/slices/pokemonSlice";
import PokemonList from "../components/PokemonList/PokemonList";
import { useState } from "react";

const HomeView = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemonSlice.pokemons);
	const [isButtonVisible, setIsButtonVisible] = useState(true);

	const handleListPokemons = () => {
		dispatch(listPokemons());
		setIsButtonVisible(false);
	};

	return (
		<>
			<div>
				{isButtonVisible && <button onClick={handleListPokemons}>Pokemonları Listele</button>}
				{pokemons.lenght !== 0 && <PokemonList pokemons={pokemons} />}
			</div>
		</>
	);
};

export default HomeView;
