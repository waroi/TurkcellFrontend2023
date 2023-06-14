import PropTypes from 'prop-types'
const InfoSection = ({ infoSectionValues }) => {
  const { height, weight, abilities, types } = infoSectionValues;
  return (
    <div>
      <h2>Info Section</h2>
      <div>
        <span>Height: {height}m</span>
        <span>Weight: {weight}kg</span>
      </div>
      <div>
        <span>Abilities: </span>
        {abilities?.map((item, index) => (
          <span key={index}>{item.ability.name}</span>
        ))}
      </div>
      <div>
        <span>Types: </span>
        {types?.map((item, index) => (
          <span key={index}>{item.type.name}</span>
        ))}
      </div>
    </div>
  );
};

InfoSection.propTypes = {
  infoSectionValues: PropTypes.object
}
export default InfoSection;
