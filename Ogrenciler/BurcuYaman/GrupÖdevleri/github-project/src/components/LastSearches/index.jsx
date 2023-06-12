import PropTypes from "prop-types";
import Styles from "./Latest.module.css"

const LastSearches = ({ lastSearches, onLastSearchClick   }) => {

 const reverse = [...lastSearches].reverse();

  return (
    <div>
      <h3>Son Aramalar</h3>
      <ul className={Styles.listGroup}>
        {reverse.map((item, index) => {
          return (
          <li className= {Styles.lastSearch} key={index} onClick={()=>onLastSearchClick(item)} >
            #{item}
          </li>
        )})}
      </ul>
    </div>
  );
};

LastSearches.propTypes = {
  lastSearches: PropTypes.array.isRequired,
  onLastSearchClick: PropTypes.func.isRequired
};

export default LastSearches;
