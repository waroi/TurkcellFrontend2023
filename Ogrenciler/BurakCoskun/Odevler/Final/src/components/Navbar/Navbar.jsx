import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../redux/slices/userSlice";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (query === "") {
        return;
      }
      navigate(`/products?query=${query}`);
      setQuery("");
    }
  };

  const handleMenuToggle = () => {
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen);
    }, 200);
  };

  return (
    <div>
      <div className="position-absolute w-100 top-0">
        <nav className="navbar container navbar-expand-lg mt-3 px-lg-5">
          <div className="container-fluid  ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              onClick={handleMenuToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand m-0" href="/">
              <img src="/logo.png" alt="logo" className="img-fluid" />
            </a>
            <img
              src="/icons/Vector.svg"
              alt="Search Icon Vector"
              className="img-fluid d-block d-lg-none"
              onClick={() => setShowSearch(!showSearch)}
            />
            <div
              className="collapse navbar-collapse ms-2"
              id="navbarNavAltMarkup"
            >
              <ul className="navbar-nav ">
                <li
                  className="nav-item nav-link text-primary fw-bold fs-6 me-2 me-xl-4 "
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className="nav-item nav-link text-primary fw-bold fs-6 me-2 me-xl-4"
                  onClick={() => navigate("/products")}
                >
                  Category
                </li>
                <li className="nav-item nav-link text-primary fw-bold fs-6 me-2 me-xl-4 ">
                  About
                </li>
                <li className="nav-item nav-link text-primary fw-bold fs-6">
                  Contact
                </li>
                {!user && (
                  <div className="d-block d-lg-none">
                    <li
                      className="nav-item nav-link text-primary fw-bold fs-6"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </li>
                    <li
                      className="nav-item nav-link text-primary fw-bold fs-6"
                      onClick={() => navigate("/signup")}
                    >
                      SignUp
                    </li>
                  </div>
                )}

                {user && (
                  <div className="d-block d-lg-none">
                    <li
                      className="nav-item nav-link text-primary fw-bold fs-6"
                      onClick={() => {
                        dispatch(clearUser());
                        navigate("/login");
                      }}
                    >
                      Logout
                    </li>
                    <li
                      className="nav-item nav-link text-primary fw-bold fs-6  "
                      onClick={() => navigate("/cart")}
                    >
                      Shopping Cart
                    </li>
                  </div>
                )}
              </ul>
            </div>
            <div className="d-none d-lg-block">
              <img
                src="/icons/input-search.svg"
                alt="Search Icon"
                className="img-fluid"
              />
              <input
                type="text"
                placeholder="Search something here!"
                className="me-3 border-0 bg-transparent"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              {!user && (
                <>
                  <Button
                    text="Login"
                    onClick={() => navigate("/login")}
                    bgColor="primary"
                  />

                  <Button
                    text="SignUp"
                    onClick={() => navigate("/signup")}
                    bgColor="primary"
                  />
                </>
              )}
              {user && (
                <>
                  <Button
                    text="Logout"
                    onClick={() => {
                      dispatch(clearUser());
                      navigate("/login");
                    }}
                    bgColor="primary"
                  />
                  <div className="dropdown d-inline-block">
                    <img
                      src={user.image}
                      alt="User"
                      className="img-fluid dropdown-toggle rounded-circle "
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="/cart">
                          Shopping Cart
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
      {isMenuOpen && <div className="menu-overlay d-block d-lg-none"></div>}
      {showSearch && (
        <div className="search-overlay d-block d-lg-none pt-5">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center bg-secondary rounded px-4 py-2">
                  <img
                    src="/icons/input-search.svg"
                    alt="Search Icon"
                    className="img-fluid"
                  />
                  <input
                    type="text"
                    placeholder="Search something here!"
                    className="me-3 border-0 bg-transparent"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearch}
                  />
                  <img
                    src="/icons/Close_SM.png"
                    alt="Close Icon"
                    className="img-fluid"
                    onClick={() => setShowSearch(!showSearch)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
