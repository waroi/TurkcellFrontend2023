/* eslint-disable react/prop-types */
import { İmgContainer, İmage } from "./DetailTopStyle";
import version1 from "../../assets/icons/superball.png";
import version2 from "../../assets/icons/pokeballBig.png";
import gender from "../../assets/icons/gender.png";

function DetailTopViews({ pokemon }) {
  const img = pokemon.sprites.other.dream_world.front_default;

  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ";

  const title = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="row bg-white px-5">
      <h3 className="text-center">
        {title} #{pokemon.id}
      </h3>
      <div className="col-md-6">
        <İmgContainer className="img">
          <İmage src={img} alt="" />
        </İmgContainer>
      </div>
      <div className="col-md-6">
        <p className="mt-3">{description}</p>

        <div className="d-flex gap-2 align-items-center">
          <p className="m-0 fs-5">Versions: </p>
          <img src={version1} alt="" />
          <img src={version2} alt="" />
        </div>
        <div className="bg-info row p-3 mt-3">
          <div className="col-6">
            <p className="m-0 fs-5 text-light">Height:</p>
            <p className="fw-bold">{pokemon.height}</p>
            <p className="m-0 fs-5 text-light">Weight:</p>
            <p className="fw-bold">{pokemon.weight}</p>
            <p className="m-0 fs-5 text-light">Gender:</p>
            <img src={gender} alt="" />
          </div>

          <div className="col-6">
            <p className="m-0 fs-5 text-light">Category:</p>
            <ul className="list-unstyled ms-2">
              {pokemon.types.map((item) => (
                <li className="fw-bold" key={item.type.name}>
                  {item.type.name}
                </li>
              ))}
            </ul>
            <p className="m-0 fs-5 text-light">Abilities: </p>
            <ul className="list-unstyled ms-2">
              {pokemon.abilities.map((item) => (
                <li className="fw-bold" key={item.ability.name}>
                  {item.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTopViews;
