import * as S from "./PokemonListStyle";
import PropTypes from "prop-types";

const PokemonList = ({ pokemons }) => {
	return (
		<>
			<h1>POKEMONS BY BY</h1>
			<div className="row mt-5">
				{pokemons &&
					pokemons.map((pokemon) => (
						<div className="card col-3 d-flex" key={pokemon.name}>
							{console.log(pokemon)}
							<S.StyledImg
								src={pokemon.sprites.other.dream_world.front_default}
								className="card-img-top"
								alt={pokemon.name}
							/>
							<div className="card-body">
								<h5 className="card-title">{pokemon.name}</h5>
								<p>{pokemon.moves[0]?.move.name}</p>
								<a href={`/pokemons/${pokemon.name}`} className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					))}
			</div>
		</>
	);
};

PokemonList.propTypes = {
	pokemons: PropTypes.array,
};

export default PokemonList;
