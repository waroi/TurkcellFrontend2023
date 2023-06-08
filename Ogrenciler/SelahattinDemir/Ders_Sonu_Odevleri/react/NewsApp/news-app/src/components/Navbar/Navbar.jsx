/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Navbar = ({ country, setCountry }) => {
  console.log(country);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sport">Sports</Link>
        </li>
        <li>
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/politics">Politics</Link>
        </li>
      </ul>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="tr">TR</option>
        <option value="de">DE</option>
        <option value="fr">FR</option>
      </select>
    </nav>
  );
};

export default Navbar;
