import Map from './map';
import Search from './search';
import PropTypes from 'prop-types';
import style from './headerStyle.module.css';

const Header = ({ setUser, latestSearch, setLatestSearch }) => {
 return (
  <div className={style.header}>
   <Search setUser={setUser} />
   <Map setUser={setUser} latestSearch={latestSearch} setLatestSearch={setLatestSearch} />
  </div>
 );
};

export default Header;
Header.propTypes = {
 setUser: PropTypes.func.isRequired,
 setLatestSearch: PropTypes.func.isRequired,
 latestSearch: PropTypes.array.isRequired,
};
