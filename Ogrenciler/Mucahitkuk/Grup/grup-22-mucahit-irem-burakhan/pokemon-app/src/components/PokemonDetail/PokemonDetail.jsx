import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardSection } from "./styled.jsx";
import {typeAssets} from "../PokemonBg/PokemonBg.jsx";

import "./style.css"
const PokemonDetail = () => {
  const { name } = useParams();
  const pokemons = useSelector((state) => state.pokemons.data);
  const pokemon = pokemons.find((pokemon) => pokemon.name == name);
  let imgSrc = typeAssets[pokemon.data.types[0].type.name];


  return (
    <CardSection>
      <div className="container">
        <div>
          <img className="wrapperImgClass"
           src={imgSrc} alt="" />
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
