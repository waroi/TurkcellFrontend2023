import PropTypes from "prop-types";

const LastSearches = ({ lastSearches }) => {
  return (
    <div>
      <h3>Son Aramalar</h3>
      <ul className="list-group">
        {lastSearches.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

LastSearches.propTypes = {
  lastSearches: PropTypes.array.isRequired,
};

export default LastSearches;
