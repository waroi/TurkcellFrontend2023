import { PropTypes } from 'prop-types';
import style from './mapStyle.module.css';
import Fetch from '../../../models/Fetch';
const Map = ({setUser, latestSearch, setLatestSearch }) => {

 const deleteHistory = () => {
  const fetch = new Fetch();
  fetch.deleteAllLatestSearch();
  setUser("");
  setLatestSearch([]);
 }
 return (
  <>
  <div className={style.container}>
   {latestSearch.map((item, index) => {
    return <p className={style.child} onClick={() => setUser(item)} key={index}>{item}</p>;
   })}
  </div>
   {latestSearch.length > 0 && <button onClick={()=>deleteHistory()} className={style.deleteHistory}>Geçmişi Sil</button>}
  </>
 );
};

export default Map;

Map.propTypes = {
 setUser: PropTypes.func.isRequired,
 setLatestSearch: PropTypes.func.isRequired,
 latestSearch: PropTypes.array.isRequired,
};
