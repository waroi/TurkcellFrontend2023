import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slice/loginSlice";
import { Ul, NavInput, IconWrapper, NavSpan, Nav } from "./NavbarStyle.js";
import Request from "../../utils/Request";

function Navbar() {
  const request = new Request("http://localhost:3004/users");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.loggedIn);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  console.log(JSON.parse(localStorage.getItem("user")));

  // const users = localStorage.getItem("user");
  // const user = JSON.parse(users);

  const handleLogout = () => {
    const updatedUser = {
      ...user,
      login: false,
    };
    request.put(user.id, updatedUser);

    dispatch(logout());
    localStorage.removeItem("user");

    setUser(updatedUser);
  };

  console.log(user);

  return (
    <div>
      <Nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand me-5">
            <img src="src/assets/Frame.svg" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarSupportedContent"
          >
            <Ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  <NavSpan>Home</NavSpan>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className="nav-link" href="#">
                  <NavSpan>Category</NavSpan>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavSpan>About</NavSpan>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavSpan>Contact</NavSpan>
                </a>
              </li>
            </Ul>
            <form className="d-flex align-items-center " role="search">
              <IconWrapper>
                <i className="bi bi-search"></i>
              </IconWrapper>
              <NavInput
                className="form-control me-2"
                type="search"
                placeholder="Search something here!"
                aria-label="Search"
              />
            </form>
            <div className="d-flex gap-2 align-items-center ">
              {isLoggedIn ? (
                <Link
                  to={`/carts/${user.id}`}
                  className="btn-nav"
                  type="submit"
                >
                  <i className="bi bi-cart-check fs-4"></i>
                  <span className="badge bg-success">{user.carts.length}</span>
                </Link>
              ) : (
                <Link to="/login" className="btn-nav me-3" type="submit">
                  Login
                </Link>
              )}

              {isLoggedIn ? (
                <div className="dropdown ">
                  <button
                    className="btn-nav dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle fs-4"></i>
                  </button>
                  <ul className="dropdown-menu border-0 w-auto ">
                    <li>
                      <Link
                        to="/login"
                        className="btn-nav dropdown-item"
                        type="submit"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="btn-nav dropdown-item mt-2"
                        type="submit"
                      >
                        {user.username}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/register" className="btn-nav" type="submit">
                  Signup
                </Link>
              )}
            </div>
          </div>
        </div>
      </Nav>
    </div>
  );
}

export default Navbar;
