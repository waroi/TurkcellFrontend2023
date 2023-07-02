import { Link, useNavigate } from "react-router-dom";
import logoMonito from "../../assets/logoMonito.svg";
import { Nav } from "./NavbarStyle";
import Button from "../../common/Button/Button";
import { setSearchQuery } from "../../redux/slices/filterSlice/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../common/Toast/Toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { setUser } from "../../redux/slices/usersSlice/userSlice";
import { clearCart } from "../../redux/slices/cartSlice/cartSlice";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.user.user);
  const loginUserCart = useSelector((state) => state.cart.cart);
  const [navBackgroundColor, setNavBackgroundColor] = useState(false);
  const [displayInput, setDisplayInput] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavBackgroundColor(true);
    } else {
      setNavBackgroundColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (Object.keys(loginUser).length === 0) {
        Toast({
          message:
            "Girmiş olduğunuz ifadeye göre ürün araması yapabilmek için lütfen giriş yapınız.",
          type: "warning",
        });
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } else {
        navigate("/products");
      }
      e.preventDefault();
    }
  };

  const handleToastAllProducts = () => {
    Object.keys(loginUser).length === 0 &&
      Toast({
        message: "Tüm ürünleri görüntüleyebilmek için lütfen giriş yapınız.",
        type: "warning",
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    dispatch(setUser({}));
    dispatch(clearCart());
    document.getElementById("searchInput").value = "";
    dispatch(setSearchQuery(""));
    Toast({
      message:
        "Başarılı bir şekilde çıkış yaptınız. Anasayfa'ya yönlendiriliyorsunuz.",
      type: "success",
    });
    navigate("/");
  };

  return (
    <Nav
      className="navbar navbar-expand-lg fixed-top py-3"
      navbackgroundcolor={navBackgroundColor.toString()}
    >
      <div className="container">
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
        <Link to={"/"} className="navbar-brand">
          <img src={logoMonito} alt="" />
        </Link>
        <div className="d-lg-none d-block">
          <div className="position-relative">
            <BsSearch
              size="1.2rem"
              onClick={() => setDisplayInput(!displayInput)}
            />
            {displayInput && (
              <div className="position-absolute end-0 displayInput d-block">
                <input
                  className="form-control w-100 rounded-pill shadow-none border-0"
                  type="search"
                  placeholder="Search something here!"
                  onChange={handleSearch}
                  onKeyDown={handleEnter}
                />
              </div>
            )}
          </div>
        </div>
        <div
          className="collapse navbar-collapse ps-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 me-5 mb-lg-0 gap-lg-4 gap-md-3">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={
                  Object.keys(loginUser).length !== 0
                    ? "/products"
                    : "/auth/login"
                }
                className="nav-link"
                onClick={handleToastAllProducts}
              >
                Category
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="row gap-3 w-100 gap-lg-0 justify-content-between align-items-center mb-2 mb-lg-0">
            <div className="col-12 col-lg-6 d-none d-lg-block">
              <form role="search">
                <input
                  id="searchInput"
                  className="form-control rounded-pill shadow-none border-0 searchNavbar"
                  type="search"
                  placeholder="Search something here!"
                  onChange={handleSearch}
                  onKeyDown={handleEnter}
                />
              </form>
            </div>
            {Object.keys(loginUser).length === 0 ? (
              <div className="d-flex justify-content-evenly gap-2 col-12 col-lg-6">
                <Button
                  padding="0.275rem 1.75rem"
                  buttonText="Login"
                  color="#FDFDFD"
                  backgroundcolor="#003459"
                  onClick={() => navigate("/auth/login")}
                />
                <Button
                  padding="0.275rem 1.75rem"
                  buttonText="Sign Up"
                  color="#003459"
                  backgroundcolor="transparent"
                  onClick={() => navigate("/auth/register")}
                />
              </div>
            ) : (
              <div className="d-flex justify-content-evenly col-12 col-lg-6">
                {/* <Button
                  padding="0.275rem 1.75rem"
                  buttonText="Cart"
                  color="#FDFDFD"
                  icon={<AiOutlineShoppingCart size="1.2rem" />}
                  iconPosition="right"
                  backgroundcolor="#003459"
                  onClick={() => navigate("/cart")}
                /> */}
                <Button
                  color="#FDFDFD"
                  icon={
                    <div className="d-flex align-items-center">
                      <AiOutlineShoppingCart size="1.2rem" />
                      <span className="cartCount">{loginUserCart.length}</span>
                    </div>
                  }
                  iconPosition="center"
                  backgroundcolor="#003459"
                  onClick={() => navigate(`/cart/${loginUser?.id}`)}
                />
                <div className="dropdown">
                  <Button
                    padding="0.275rem 1.75rem"
                    className="dropdown-toggle"
                    backgroundcolor="#FDFDFD"
                    buttonText={loginUser?.userName}
                    dataBsToggle="dropdown"
                  />
                  <ul className="dropdown-menu bg-transparent border-0">
                    <li>
                      <Button
                        className="dropdown-item"
                        type="button"
                        buttonText="Logout"
                        backgroundcolor="#FDFDFD"
                        color="#003459"
                        icon={<IoLogOutOutline size="1.2rem" />}
                        iconPosition="right"
                        onClick={handleLogout}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
