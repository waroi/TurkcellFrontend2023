import { useSelector, useDispatch } from "react-redux";
import { listPokemons } from "../redux/slices/pokemonSlice";
import { useEffect } from "react";

const HomeView = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemonSlice.pokemons);
	const isLoading = useSelector((state) => state.pokemonSlice.isLoading);

	const handleListPokemons = () => {
		dispatch(listPokemons());
	};

	useEffect(() => {
		if (!pokemons) {
			dispatch(listPokemons());
		}
		console.log(pokemons);
	}, [dispatch, pokemons]);

	if (isLoading) {
		return <div>Loading...</div>; // Veriler yükleniyor ise yükleme durumu gösterin
	}

	return (
		<>
			<div>
				<button onClick={handleListPokemons}>Pokemonları Listele</button>
				<ul>{pokemons && pokemons.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)}</ul>
			</div>
		</>
	);
};

export default HomeView;
