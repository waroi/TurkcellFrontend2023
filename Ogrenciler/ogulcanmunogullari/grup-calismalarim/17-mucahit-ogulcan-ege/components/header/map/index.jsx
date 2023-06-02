import { PropTypes } from 'prop-types';
const Map = ({ latestSearch }) => {
 return (
  <>
   {latestSearch.map((item, index) => {
    return <p key={index}>{item}</p>;
   })}
  </>
 );
};

export default Map;

Map.propTypes = {
 latestSearch: PropTypes.array.isRequired,
};
