import PropTypes from "prop-types";

const LastSearches = ({ lastSearches, onLastSearchClick   }) => {
  return (
    <div>
      <h3>Son Aramalar</h3>
      <ul className="list-group">
        {lastSearches.map((item, index) => (
          <li className="list-group-item" key={index} onClick={()=>onLastSearchClick(item)} >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

LastSearches.propTypes = {
  lastSearches: PropTypes.array.isRequired,
  onLastSearchClick: PropTypes.func.isRequired
};

export default LastSearches;
