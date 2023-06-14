const url = "https://pokeapi.co/api/v2/pokemon";
const url2 = "https://pokeapi.co/api/v2/evolution-chain";

export async function fetchPokemon() {
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

export async function fetchPokemonList(url) {
  const result = await fetch(url);
  const data = await result.json();

  return data;
}

export async function fetchPokemonDetail(id) {
  const result = await fetch(url + `/${id}/`);
  const data = await result.json();

  return data;
}

export async function fetchPokemonEvolution(id) {
  const result = await fetch(url2 + `/${id}/`);
  const data = await result.json();

  return data;
}
