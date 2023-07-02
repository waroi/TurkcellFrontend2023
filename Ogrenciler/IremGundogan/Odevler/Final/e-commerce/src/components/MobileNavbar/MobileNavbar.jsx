import MobileNavbarStyle from "./MobileNavbarStyle";
import ButtonSecondaryStyle from "../ButtonSecondry/ButtonSecondaryStyle";
import ButtonStyle from "../Button/ButtonStyle";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useFormik } from "formik";
import hamburgerMenu from "../../../assets/Hambuger.svg";
import searchIconBlack from "../../../assets/SearchBlack.svg";
import Dropdown from "../DropDown/DropDown";
import logo from "../../../assets/Navbar.png";


const MobileNavbar = () => {
  const currentUser = useSelector((state) => state.user.user);
  const [isOnSearch, setIsOnSearch] = useState(false);
  const [isOnMenu, setIsOnMenu] = useState(false);
  const cartLength = useSelector((state) => state.cartLength);
  const navigate = useNavigate();
  const initialValues = { search: "" };

  const handleOnSearch = () => {
    setIsOnSearch(!isOnSearch);
    setIsOnMenu(false);
  };

  const handleOnMenu = () => {
    setIsOnMenu(!isOnMenu);
    setIsOnSearch(false);
  };

  const onSubmit = () => {
    if (currentUser) {
      navigate("/products");
    } else navigate("/login");
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <MobileNavbarStyle>
      <div className="row justify-content-between align-items-center">
        <div className="col-2 navbarItem text-center">
          <img
            src={hamburgerMenu}
            alt="menu"
            onClick={handleOnMenu}
            className="icon"
          />
        </div>
        <div className="col-8 navbarItem text-center ">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="navbarLogo" />
          </Link>
        </div>
        <div className="col-2 navbarItem text-center">
          <img
            src={searchIconBlack}
            alt="menu"
            onClick={handleOnSearch}
            className="icon"
          />
        </div>
      </div>

      {isOnMenu && !isOnSearch && (
        <div className="row menu">
          <div className="links">
            <div className="navbarItem">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="navbarItem">
              <Link to={"/products"}>Products</Link>
            </div>
            <div className="navbarItem">
              <Link to={"/"}>About</Link>
            </div>
            <div className="navbarItem">
              <Link to={"/"}>Contact</Link>
            </div>
          </div>
          <div className="buttons">
            <div>
              {!currentUser ? (
                <Link to="/login">
                  <ButtonSecondaryStyle>Login</ButtonSecondaryStyle>
                </Link>
              ) : (
                <Link to="/cart">
                  <ButtonStyle className="button cartBtn position-relative">
                    {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 576 512"
                      >
                        <path
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z "
                          fill="#fff"
                        />
                      </svg>
                    }
                    <div className="badge">{cartLength}</div>
                  </ButtonStyle>
                </Link>
              )}
            </div>
            <div>
              {!currentUser ? (
                <Link to="/signup">
                  <ButtonSecondaryStyle>Sign Up</ButtonSecondaryStyle>
                </Link>
              ) : (
                <Dropdown />
              )}
            </div>
          </div>
        </div>
      )}
      {isOnSearch && !isOnMenu && (
        <div className="d-flex justify-content-end searchArea">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="search"
              name="search"
              onChange={(event) => {
                handleChange(event);
                sessionStorage.setItem("searchValue", event.target.value);
              }}
              value={values.search}
              placeholder="Search something here!"
            />
            {errors.search && <div className="error">{errors.search}</div>}
          </form>
        </div>
      )}
    </MobileNavbarStyle>
  );
};

export default MobileNavbar;


