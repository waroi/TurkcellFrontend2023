import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/">Ana Sayfa</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>

        <li>
          <Link to="/news/spor">Spor</Link>
        </li>
        <li>
          <Link to="/news/magazin">Magazin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
