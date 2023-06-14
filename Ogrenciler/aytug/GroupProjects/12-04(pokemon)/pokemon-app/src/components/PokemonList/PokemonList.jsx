import * as S from "./PokemonListStyle";
import PropTypes from "prop-types";

const PokemonList = ({ pokemons }) => {
	return (
		<>
			<h1 className="text-center">POKEMONS BY BY</h1>
			<S.StyledDiv className="row mt-5">
				{pokemons &&
					pokemons.map((pokemon) => (
						<S.StyledCard className="card col-md-2 d-flex" key={pokemon.name}>
							{console.log(pokemon)}
							<S.StyledImg
								src={pokemon.sprites.other.dream_world.front_default}
								className="card-img-top"
								alt={pokemon.name.upper}
							/>
							<div className="card-body">
								<h5 className="card-title text-center mt-3">{pokemon.name.toUpperCase()}</h5>
								<p className="text-center">{pokemon.moves[0]?.move.name}</p>
								<div className="text-center"><a href={`/pokemons/${pokemon.name}`} className="btn btn-danger">
									Özellikler
								</a></div>
							</div>
						</S.StyledCard>
					))}
			</S.StyledDiv>
		</>
	);
};

PokemonList.propTypes = {
	pokemons: PropTypes.array,
};

export default PokemonList;
