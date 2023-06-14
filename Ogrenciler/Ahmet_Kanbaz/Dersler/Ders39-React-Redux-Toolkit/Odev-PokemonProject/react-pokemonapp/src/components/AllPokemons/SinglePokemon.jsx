/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { fetchPokemonsDetail } from "../../class/fetchPokemons";
import { PokeCard } from "./PokeCardStyle";
import { useNavigate } from "react-router-dom";

const SinglePokemon = ({ singleItem }) => {
  const navigate = useNavigate();
  const [detailPoke, setDetailPoke] = useState([]);

  const getSingle = async () => {
    const response = await fetchPokemonsDetail(singleItem.url);
    setDetailPoke(response);
  };

  useEffect(() => {
    getSingle();
  }, [singleItem.url]);

  return (
    <PokeCard
      id={detailPoke.id}
      onClick={() =>
        navigate(`/pokemon/${singleItem.name}`)
      }
    >
      <img
        src={detailPoke?.sprites?.other?.dream_world?.front_default}
        alt={detailPoke.name}
      />
      <div className="pokeWH">
        <span>{detailPoke?.height / 10}m</span>
        <span>{detailPoke.weight / 10}kg</span>
      </div>
      {singleItem.name.toUpperCase()}
      <span>#{detailPoke.id}</span>
    </PokeCard>
  );
};

export default SinglePokemon;
