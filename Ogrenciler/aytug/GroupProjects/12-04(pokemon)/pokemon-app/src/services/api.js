export const getAllPokemonData = async () => {
	const response = await fetch(`${import.meta.env.VITE_URL}`);
	const data = await response.json();
	return data;
};

export const getAllPokemons = async () => {
	const response = await fetch(`${import.meta.env.VITE_URL}/pokemon`);
	const data = await response.json();
	return data.results;
};

export const getPokemonById = async (id) => {
	const response = await fetch(`${import.meta.env.VITE_URL}/pokemon/${id}`);
	const data = await response.json();
	return data;
};
