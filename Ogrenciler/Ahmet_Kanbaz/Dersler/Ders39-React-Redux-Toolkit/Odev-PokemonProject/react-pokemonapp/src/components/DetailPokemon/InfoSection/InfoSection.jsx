import PropTypes from 'prop-types'
import {DetailPokemonInfo} from '../DetailPokemonStyle'
const InfoSection = ({ infoSectionValues }) => {
  const { height, weight, abilities, types } = infoSectionValues;
  return (
    <DetailPokemonInfo>
        <span className='infoName'>Height: <span className='value'>{height}m</span></span>
        <span className='infoName'>Weight: <span className='value'>{weight}kg</span></span>
      <div>
        <span className='infoName'>Abilities: </span>
        {abilities?.map((item, index) => (
          <span key={index} className='value'>{item.ability.name} </span>
        ))}
      </div>
      <div>
        <span className='infoName'>Types: </span>
        {types?.map((item, index) => (
          <span key={index} className='value'>{item.type.name} </span>
        ))}
      </div>
    </DetailPokemonInfo>
  );
};

InfoSection.propTypes = {
  infoSectionValues: PropTypes.object
}
export default InfoSection;
