import { Link } from "react-router-dom";
import { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../redux/slice/loginSlice";
import { fetchProducts } from "../../redux/slice/productsSlice";
import { Ul, NavInput, IconWrapper, NavSpan, Nav } from "./NavbarStyle.js";
import Request from "../../utils/Request";
import SearchResults from "./SearchResults";

function Navbar() {
  const request = new Request("http://localhost:3004/users");
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);
  const isLoggedIn = useSelector((state) => state.login.loggedIn);
  const { products } = useSelector((state) => state.products);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState();
  const [filterFocus, setFilterFocus] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  console.log(isSearchOpen);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const fetchUser = useCallback(async () => {
    try {
      const response = await request.get();
      const loggedInUser = response.find((user) => user.login === true);
      setUser(loggedInUser);
    } catch (error) {
      toast.error("Error fetching user.");
    }
  }, [request, setUser]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleSearch = (event) => {
    event.preventDefault();
    let filter = [...products].filter((item) => {
      if (event.target.value === "" || event.target.value === null) return [];
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    if (filter.length === 0) {
      toast.error("No results found.");
      return;
    }

    if (event.target.value.length > 0) {
      setSearchOpen(true);
    } else {
      setSearchOpen(false);
    }

    setSearchQuery(filter);
  };

  const handleLogout = () => {
    const updatedUser = {
      ...user,
      login: false,
    };
    request.put(user.id, updatedUser);

    dispatch(logout());
    localStorage.removeItem("user");
  };

  return (
    <div>
      <Nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Link
              to="/"
              className="navbar-brand me-5 order-1 ms-5 ps-3 ps-lg-0 ms-lg-0"
            >
              <img src="src/assets/Frame.svg" alt="logo" />
            </Link>
            <form
              className={`d-flex d-lg-none align-items-center order-2 ${
                isSearchOpen ? "open" : ""
              }`}
              role="search"
            >
              <IconWrapper
                onClick={() => setSearchOpen(!isSearchOpen)}
                className={isSearchOpen ? "open" : ""}
              >
                <i className="bi bi-search fs-3 ms-5"></i>
              </IconWrapper>
              <NavInput
                ref={searchInputRef}
                className={`form-control mx-2 nav-input ${
                  isSearchOpen ? "open" : ""
                }`}
                type="search"
                placeholder="Search something here!"
                aria-label="Search"
                onChange={handleSearch}
                onFocus={() => setFilterFocus(true)}
                onBlur={() => setTimeout(() => setFilterFocus(false), 200)}
              />
              {filterFocus && searchQuery?.length > 0 && (
                <SearchResults searchQuery={searchQuery} />
              )}
            </form>
            <button
              className="navbar-toggler order-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarSupportedContent"
          >
            <Ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <NavSpan>Home</NavSpan>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className="nav-link">
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
            <form
              className="d-none d-lg-flex align-items-center "
              role="search"
            >
              <IconWrapper>
                <i className="bi bi-search"></i>
              </IconWrapper>
              <NavInput
                className="form-control mx-2"
                type="search"
                placeholder="Search something here!"
                aria-label="Search"
                onChange={handleSearch}
                onFocus={() => setFilterFocus(true)}
                onBlur={() => setTimeout(() => setFilterFocus(false), 200)}
              />
              {filterFocus && searchQuery?.length > 0 && (
                <SearchResults searchQuery={searchQuery} />
              )}
            </form>
            <div className="d-flex gap-2 align-items-center ">
              {isLoggedIn ? (
                <Link
                  to={`/carts/${user?.id}`}
                  className="btn-nav"
                  type="submit"
                >
                  <i className="bi bi-cart-check fs-4"></i>
                  <span className="badge bg-success">
                    {user?.carts?.length}
                  </span>
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
                        {user?.username}
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
