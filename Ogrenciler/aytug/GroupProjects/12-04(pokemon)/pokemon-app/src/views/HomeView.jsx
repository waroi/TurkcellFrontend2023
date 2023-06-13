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
	}, [dispatch, pokemons]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div>
				<button onClick={handleListPokemons}>Pokemonları Listele</button>
				<div className="row mt-5">
					{pokemons &&
						pokemons.map((pokemon) => (
							// {{getPokemonByName(pokemon.name)}}
							<div className="card col-3" key={pokemon.name}>
								<img src={pokemon.name} className="card-img-top" alt={pokemon.name} />
								<div className="card-body">
									<h5 className="card-title">{pokemon.name}</h5>

									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default HomeView;
