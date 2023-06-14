import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../utils/Request";
import DetailTopViews from "../views/DetailTopViews/DetailTopViews";
import { HomeContainer } from "../views/HomeTopViews/HomeTopStyle";

function Detail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const PokemonDetail = async () => {
    const response = await fetchPokemonDetail(name);
    setPokemon(response);
  };

  useEffect(() => {
    PokemonDetail();
  }, []);

  console.log(pokemon);

  return (
    <HomeContainer className="container bg-white px-5">
      {pokemon && <DetailTopViews pokemon={pokemon} />}
    </HomeContainer>
  );
}

export default Detail;
