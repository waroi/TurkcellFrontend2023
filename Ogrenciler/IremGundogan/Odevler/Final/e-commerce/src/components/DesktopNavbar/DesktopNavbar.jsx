import logo from "../../../assets/Navbar.png";
import { Link, useNavigate } from "react-router-dom";
import ButtonStyle from "../Button/ButtonStyle";
import Dropdown from "../DropDown/DropDown";
import searchIcon from "../../../assets/search.svg";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { DesktopNavbarStyle } from "./DesktopNavbarStyle.js";
import Container from "../Container/Container";


const DesktopNavbar = () => {
  const currentUser = useSelector((state) => state.user.user);
  const cartLength = useSelector((state) =>  state.cartLength);
  const navigate = useNavigate();
  const initialValues = { search: "" };

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
    <Container>
      <DesktopNavbarStyle className=" row align-items-center">
        <div className="col-lg-6">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 navbarItem">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="navbarLogo" />
              </Link>
            </div>
            <div className="col-lg-2 navbarItem">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="col-lg-2 navbarItem">
              <Link to={"/products"}>Products</Link>
            </div>
            <div className="col-lg-2 navbarItem">
              <Link to={"/"}>About</Link>
            </div>
            <div className="col-lg-2 navbarItem">
              <Link to={"/"}>Contact</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row justify-content-center align-items-center navbar-left">
            <div className="col-lg-5">
              <div className="d-flex searchArea">
                <img src={searchIcon} alt="search" />
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
                  {errors.search && (
                    <div className="error">{errors.search}</div>
                  )}
                </form>
              </div>
            </div>
            <div className="d-flex gap-5 col-lg-7">
              <div className="col-lg-2 me-5 position-relative">
                {!currentUser ? (
                  <Link to="/login">
                    <ButtonStyle className="button">
                      Login
                    </ButtonStyle>
                  </Link>
                ) : (
                  <Link to="/cart">
                    <ButtonStyle className="button cartBtn">
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
              <div className="col-lg-2 ms-4">
                {!currentUser ? (
                  <Link to="/signup">
                    <ButtonStyle className="button">Sign Up</ButtonStyle>
                  </Link>
                ) : (
                  <Dropdown />
                )}
              </div>
            </div>
          </div>
        </div>
      </DesktopNavbarStyle>
    </Container>
  );
};

export default DesktopNavbar;
