import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CurrentCard, CardSection, BgImg } from "./styled.jsx";
import background from "../../assets/card.png";

const PokemonDetail = () => {
  const { name } = useParams();
  const pokemons = useSelector((state) => state.pokemons.data);
  const pokemon = pokemons.find((pokemon) => pokemon.name == name);
  console.log(pokemon);
  console.log(name);
  const graphics = useSelector((state) => state.pokemons.graphics);

  return (
    <CardSection>
      <CurrentCard>
        <img src="../../assets/card.png" alt="" />
        <img
          src={
            graphics
              ? `${pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default}`
              : `${pokemon.data.sprites.front_default}`
          }
        />

        <div className="card-context"></div>
      </CurrentCard>
    </CardSection>
  );
};

export default PokemonDetail;
