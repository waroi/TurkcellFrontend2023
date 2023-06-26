import { useState } from "react";
import {
  Items,
  Logo,
  SearchInput,
  Button,
  Toggle,
  Container,
} from "../Style/styled-header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slice/search";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProductSearchOpen, setIsProductSearchOpen] = useState(false);

  const toggleProductSearch = () => {
    setIsProductSearchOpen(!isProductSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSearch = () => {
    if (!isSearchOpen) {
      setIsSearchOpen(true);
    } else {
      if (searchQuery.trim() !== "") {
        navigate(`/products?search=${searchQuery}`);
      }
      setIsSearchOpen(false);
    }
  };

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(setSearchValue(query));
  };
  const goToSignUp = () => {
    navigate("/signup");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };
  const goToProducts = () => {
    navigate(`/products?title=${searchQuery}`);
  };

  return (
    <div className="container py-3">
      <Container className="row">
        <div className="col-lg-6">
          <div className="row justify-content-center flex-row align-items-center">
            <div className="col-lg-3">
              <Items onClick={() => goToHome()}>
                <Logo src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_DIKEY_ERKEK_LOGO.png" />
              </Items>
            </div>
            <div className="col-lg-2">
              <Items onClick={() => goToHome()}>Home</Items>
            </div>
            <div className="col-lg-2">
              <Items onClick={() => goToProducts()}>Products</Items>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row justify-content-center align-items-center flex-row">
            <div className="col-lg-6">
              <div className="d-flex flex-row">
                <i className="fa-solid fa-magnifying-glass me-2"></i>
                {isSearchOpen ? (
                  <>
                    <div className="d-flex flex-row">
                      <SearchInput
                        type="text"
                        placeholder="Search something here!"
                        value={searchQuery}
                        onChange={handleSearchInput}
                      />
                      {isProductSearchOpen ? (
                        <FaSearch
                          onClick={goToProducts}
                          className="mt-3 ms-2"
                        />
                      ) : (
                        <FaSearch
                          onClick={toggleProductSearch}
                          className="mt-3 ms-2"
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <FaSearch onClick={toggleSearch} />
                )}
              </div>
            </div>
            <div className="col-lg-3">
              <Button onClick={() => goToLogin()}>Log In</Button>
            </div>
            <div className="col-lg-3">
              <Button onClick={() => goToSignUp()}>Sign Up</Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="row d-lg-none">
        <div className="col">
          <Toggle onClick={() => toggleMenu()}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </Toggle>

          <Logo src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_DIKEY_ERKEK_LOGO.png" />

          {isMenuOpen && (
            <div className="row">
              <div className="col">
                <Items onClick={() => goToHome()}>Home</Items>
              </div>
              <div className="col">
                <Items onClick={() => goToProducts()}>Products</Items>
              </div>
              <div className="col">
                <Button onClick={() => goToLogin()}>Log In</Button>
              </div>
              <div className="col">
                <Button onClick={() => goToSignUp()}>Sign Up</Button>
              </div>
            </div>
          )}

          {isSearchOpen ? (
            <>
              <SearchInput
                type="text"
                placeholder="Search something here!"
                value={searchQuery}
                onChange={handleSearchInput}
              />
              <FaSearch onClick={toggleSearch} />
            </>
          ) : (
            <FaSearch onClick={toggleSearch} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
