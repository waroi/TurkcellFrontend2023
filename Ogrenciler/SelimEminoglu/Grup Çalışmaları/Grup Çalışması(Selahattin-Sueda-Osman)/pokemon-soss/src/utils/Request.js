const url = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon() {
  const result = await fetch(url);
  const data = await result.json();

  return data;
}

export async function fetchPokemonDetail(id) {
  const result = await fetch(url + `/${id}/`);
  const data = await result.json();

  return data;
}
