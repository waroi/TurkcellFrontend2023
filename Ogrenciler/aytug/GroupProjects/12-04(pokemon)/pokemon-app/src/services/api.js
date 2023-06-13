export const getAllPokemonData = async () => {
	const response = await fetch(`${import.meta.env.VITE_URL}`);
	const data = await response.json();
	return data;
};

export const getAllPokemons = async () => {
	const response = await fetch(`${import.meta.env.VITE_URL}/pokemon?limit=100&offset=0`);
	const data = await response.json();
	const updatedPokemons = await Promise.all(
		data.results.map(async (pokemon) => {
			const pokemonData = await getPokemonByName(pokemon.name);
			return { ...pokemon, ...pokemonData };
		})
	);

	return updatedPokemons;
};

export const getPokemonByName = async (name) => {
	const response = await fetch(`${import.meta.env.VITE_URL}/pokemon/${name}`);
	const data = await response.json();
	return data;
};
