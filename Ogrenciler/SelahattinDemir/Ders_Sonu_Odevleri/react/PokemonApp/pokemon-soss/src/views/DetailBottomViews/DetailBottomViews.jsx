import { useState, useEffect } from "react";
import { fetchPokemonEvolution } from "../../utils/Request";

const DetailBottomViews = ({ pokemon }) => {
  const [evolution, setEvolution] = useState([]);
  console.log(pokemon);
  const fetchPokemonEvolutionId = async () => {
    const updatedPokemons = await fetchPokemonEvolution(pokemon.id);
    console.log(pokemon.id);

    setEvolution(updatedPokemons);
  };

  useEffect(() => {
    fetchPokemonEvolutionId();
  }, [pokemon]);

  console.log(evolution);

  return (
    <div>
      <h2>Evolutions</h2>
      <div className="row"></div>
    </div>
  );
};

export default DetailBottomViews;
