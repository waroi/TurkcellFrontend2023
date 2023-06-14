import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { listPokemons } from "../../redux/slices/pokemonSlice";

const PokemonDetail = () => {
	const { name } = useParams();
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemonSlice.pokemons);

	const handlePokemonDetail = () => {
		dispatch(listPokemons());
	};

	useEffect(() => {
		handlePokemonDetail();
	}, []);

	const pokemon = pokemons?.find((pokemon) => pokemon.name == name);
	console.log(pokemon);

	return (
		<>
			{pokemon && (
				<div className="card my-5">
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={pokemon.sprites.other.dream_world.front_default}
								className="img-fluid rounded-start"
								alt={pokemon.name}
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional content. This
									content is a little bit longer.
								</p>
								<div className="row">
									<div className="col-6">
										<ul>
											<h6>Yetenekler</h6>
											{pokemon.abilities.map((ability) => (
												<li key={ability.ability.name}>{ability.ability.name}</li>
											))}
										</ul>
										<ul className="mt-3">
											<h6>Türleri</h6>
											{pokemon.types.map((type) => (
												<li key={type.type.name}>{type.type.name}</li>
											))}
										</ul>

										<h6>Ağırlık : {pokemon.weight} kg</h6>
									</div>
									<div className="col-6">
										<table className="table table-info table-striped">
											<thead>
												<tr>
													<th>#</th>
													<th>Özellik</th>
													<th>Gücü</th>
												</tr>
											</thead>
											<tbody>
												{pokemon.stats.map((stat, i) => (
													<tr key={stat.stat.name}>
														<td>{i + 1}</td>
														<td>{stat.stat.name}</td>
														<td>{stat.base_stat}</td>
														{/* <td>
														{stat.stat.name} : {stat.base_stat}
													</td> */}
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PokemonDetail;
