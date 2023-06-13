// import PokemonList from "../components/PokemonList/PokemonList";
import { useSelector, useDispatch } from "react-redux";
import { listPokemons } from "../redux/slices/pokemonSlice";

const HomeView = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemonSlice.pokemons);

	const handleListPokemons = () => {
		dispatch(listPokemons());
	};

	return (
		<>
			<div>
				<button onClick={handleListPokemons}>Pokemonları Listele</button>
				<ul>
					{pokemons.map((pokemon) => (
						<li key={pokemon.id}>{pokemon.name}</li>
					))}
				</ul>
			</div>
			{/* <PokemonList /> */}
		</>
	);
};

export default HomeView;
