import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { NavDropdown } from "react-bootstrap";
import {
  logout,
  setUsername,
  setLoginStatus,
} from "../../redux/slices/mainSlice";
import { updateCart, setCartItemsCount } from "../../redux/slices/cartSlice";
import image from "../../assets/logo.png";
import search from "../../assets/u_search.png";
import userImg from "../../assets/image0.jpg";
import {
  Nav,
  Ul,
  SearchInput,
  HamburgerButton,
  MobileInput,
} from "./Navbar.style";
import StButton from "../Button/Button";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.root.user);
  const isLoggedIn = useSelector((state) => state.root.isLogin);
  const [searchQuery, setSearchQuery] = useState("");
  const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);
  const [userId, setUserId] = useState("");
  const [userImage, setUserImage] = useState("");
  const fetchCartData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/carts?userId=${username}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          const uniqueItemCount = new Set(data[0].items.map((item) => item.id))
            .size;
          dispatch(updateCart({ userId, items: data[0].items }));
          dispatch(setCartItemsCount(uniqueItemCount));
        } else {
          dispatch(updateCart({ userId, items: [] }));
          dispatch(setCartItemsCount(0));
        }
      } else {
        throw new Error("Cart data fetch failed");
      }
    } catch (error) {
      toast.error("Failed to fetch cart data");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/home/${username}/products?search=${searchQuery}`);
    setSearchQuery("");
  };

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?username=${username}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setUserId(data[0].id);
            setUserImage(data[0].userImage);
          }
        } else {
          throw new Error("User ID fetch failed");
        }
      } catch (error) {
        toast.error("Failed to fetch user ID");
      }
    };

    fetchUserId();
  }, [username]);

  useEffect(() => {
    if (userId) {
      fetchCartData();
    }
  }, [userId]);

  const handleLogout = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isLogin: false }),
      });

      if (response.ok) {
        dispatch(setUsername(""));
        dispatch(setLoginStatus(false));

        dispatch(logout());
        navigate("/home");
      } else {
        throw new Error("Logout request failed");
      }
    } catch (error) {
      toast.error("Failed to logout");
    }
    toast.success("Logged out successfully");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleCart = () => {
    navigate(`/home/${username}/cart`);
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleProducts = () => {
    if (isLoggedIn) {
      navigate(`/home/${username}/products?search=${searchQuery}`, {
        replace: true,
      });
    } else {
      toast.error("Please login to continue");
      navigate("/signup");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <Nav className="navbar navbar-expand-sm navbar-bottom  ">
          <div className="container-fluid ps-2 ">
            <Link to={`/home/${username}`} className="navbar-brand">
              <img src={image} className="navbar-image" alt="Logo" />
            </Link>

            <HamburgerButton
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </HamburgerButton>

            <div
              className="collapse navbar-collapse flex-wrap"
              id="navbarSupportedContent"
            >
              <Ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => navigate(`/home/${username}`)}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={handleProducts}>
                    Category
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </Ul>

              <form
                className="d-flex ms-3"
                role="search"
                onSubmit={handleSearch}
              >
                <SearchInput
                  className="form-control "
                  type="search"
                  placeholder="Search something here!"
                  aria-label="Search"
                  style={{
                    backgroundImage: `url(${search})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "15px 12px",
                    backgroundSize: "1.25rem 1.25rem",
                    paddingLeft: "45px",
                  }}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    navigate(
                      `/home/${username}/products?search=${e.target.value}`
                    );
                  }}
                />
              </form>

              <div className="buttons ms-1 ">
                {isLoggedIn ? (
                  <>
                    <StButton
                      onClick={() => handleCart()}
                      type="dark-blue"
                      image="../../src/assets/Icon/bag-heart.svg"
                      text={`(${cartItemsCount})`}
                    />
                    <NavDropdown
                      title={
                        <img
                          src={userImage || userImg}
                          alt="Profile"
                          className="rounded-circle  "
                          style={{ width: "50px", height: "50px" }}
                        />
                      }
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item
                        onClick={() => handleLogout()}
                        className="bg-transparent"
                      >
                        <StButton
                          onClick={() => handleLogout()}
                          type="dark-blue"
                          text="logout"
                        />
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <StButton
                      onClick={() => handleLogin()}
                      type="dark-blue"
                      text="Login"
                    />
                    <StButton
                      onClick={() => handleSignup()}
                      type="dark-blue"
                      text="Signup"
                    />
                  </>
                )}
              </div>
            </div>

            <form onSubmit={handleSearch}>
              <MobileInput
                className="form-control me-2 "
                type="search"
                aria-label="Search"
                style={{
                  width: "40%",
                  backgroundImage: `url(${search})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "110px 12px",
                  backgroundSize: "1.25rem 1.25rem",
                  paddingLeft: "45px",
                }}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  navigate(
                    `/home/${username}/products?search=${e.target.value}`
                  );
                }}
              />
            </form>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default Navbar;
