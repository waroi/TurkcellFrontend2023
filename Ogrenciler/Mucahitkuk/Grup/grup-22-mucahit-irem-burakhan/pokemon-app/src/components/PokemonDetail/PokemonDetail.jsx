import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardSection } from "./styled.jsx";
import baseBg from "../../assets/image10.png"
import "./style.css"
const PokemonDetail = () => {
  let imgSrc;
  const { name } = useParams();
  const pokemons = useSelector((state) => state.pokemons.data);
  const pokemon = pokemons.find((pokemon) => pokemon.name == name);
  console.log(pokemon);
  console.log(name);
  
  const typeBackgrounds = {
    fire: '../../assets/image7.png',
    water: '../../assets/image5.png',
    grass: '../../assets/image9.png',
    electric: '../../assets/image8.png',
    poison: '../../assets/image11.png',
    flying: '../../assets/image6.png',
    rock: '../../assets/image10.png',
    steel: '../../assets/image10.png',
  }
  return (
    <CardSection>
      <div className="container">
        <div>
          <img className="wrapperImgClass"
           src={typeBackgrounds[pokemon.data.types[0].type.name] ? typeBackgrounds[pokemon.data.types[0].type.name] : baseBg} alt="" />
          <img
            className="imgClass"
            src={
              `${pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default}`
            }
          />
        </div>
        <div className="mainCardDetail">
        <div className="PokeDetailHeader">
          <div>
            <div className="textItem">
              Name: {pokemon.data.name}
            </div>
            <div className="textItem">
              BaseEXP: {pokemon.data.base_experience}
            </div>
          </div>
          <div>
            <div className="textItem">
              Height: {pokemon.data.height}
            </div>
            <div className="textItem">
              Weight: {pokemon.data.weight}
            </div>
          </div>
        </div>
        <div className="d-flex statArea"> <div className=" typeContent"> Types:</div>
          {
            pokemon.data.types.map((item,i) => <span key={i} className="textItem">{item.type.name}</span>)
          }
        </div>
        <div>
         <div className="textItem statArea"> Stats:</div>
         <div className="d-flex">
          {
            pokemon.data.stats.slice(0,3).map((item,i) => (
              <div key={i} className="StatContent">
                <span className="StatText">{item.stat.name} </span>
                <span className="textItem">{item.base_stat} </span>
              </div>
            ))
          }
          </div>
        </div>
        </div>
      </div>
    </CardSection>
  );
};

export default PokemonDetail;
