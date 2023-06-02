import Map from './map';
import Search from './search';
import PropTypes from 'prop-types';

const Header = ({ setUser, latestSearch }) => {
 return (
  <div>
   <Search setUser={setUser} />
   <Map latestSearch={latestSearch} />
  </div>
 );
};

export default Header;
Header.propTypes = {
 setUser: PropTypes.func.isRequired,
 latestSearch: PropTypes.array.isRequired,
};
