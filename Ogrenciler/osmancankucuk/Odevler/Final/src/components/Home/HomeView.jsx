import MainPageParagraph from "./MainPageParagraph";
import MainPagePicture from "./MainPagePicture";
import HomeAddBanner from "./HomeAddBanner";
import HomePetSellers from "./HomePetSellers";
import {
  HomeContainer,
  HomeBackground,
  HomeBottomBox,
  InputContainer,
  DropdownMenu,
  DropdownPp,
  BuyButton,
  IncDecButtons,
} from "./HomeStyle";
import HomeWhatsNew from "./HomeWhatsNew";
import { Navbar, NavLinks, NavInput, NavBox } from "../Header/HeaderStyle";
import { Link } from "react-router-dom";
import Frame from "../../img/Frame.svg";
import Button from "../Button/Button";
import inputSearchIcon from "../../img/u_search.svg";
import HomeOurProduct from "./HomeOurProduct";
import HomeKnowledge from "./HomeKnowledge";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeToCart } from "../../redux/slices/cartSlices";
import { Request } from "../../requests/request";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const HomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const request = new Request();
  const [totalSum, setTotalSum] = useState(0);
  const [authUser, setUserInfo] = useState(null);
  const cart = useSelector((state) => state.cart.cart);

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const buyProducts = () => {
    setTimeout(() => {
      request.buyProducts(cart);
    }, 2000);
    toast.success("Purchase is successfull");
  };
  const setTotal = () => {
    let totalSum = 0;

    cart?.forEach((item) => {
      totalSum += item.price * item.quantity;
    });

    setTotalSum(totalSum);
  };
  const handleChange = async (event) => {
    navigate("/products");
  };

  useEffect(() => {
    setTotal();
    async function fetchUserInfo() {
      try {
        const response = await request.getUserInfo();
        setUserInfo(response);
      } catch (error) {
        // Handle error
      }
    }
    fetchUserInfo();
  }, [cart]);

  const handleLogout = async () => {
    let cart = JSON.parse(localStorage.getItem("cartItems"));
    if (cart?.length > 0) {
      await request.userPreviousCart(cart);
      localStorage.removeItem("cartItems");
      localStorage.setItem("isAuth", false);
    } else {
      localStorage.setItem("isAuth", false);
    }
    window.location.reload();
  };
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  return (
    <div>
      <HomeBackground>
        <div className="container">
          <Navbar>
            <div
              style={{ zIndex: "3" }}
              className="d-block d-lg-none position-relative"
            >
              <i className="fa-solid fa-bars fa-lg"></i>
            </div>
            <div className="row align-items-center">
              <div className="position-relative imgWrap">
                <NavBox />
                <img
                  style={{ zIndex: "2", position: "relative " }}
                  src={Frame}
                  alt=""
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="ms-5 d-none d-lg-block ">
                <NavLinks>
                  <Link to={"/"}>Home</Link>
                  <Link to={"products"}>Products</Link>
                  <Link to={"/"}>About</Link>
                  <Link to={"/contact"}>Contact</Link>
                </NavLinks>
              </div>
            </div>
            <div className=" d-none d-xl-block ">
              <div className="d-flex gap-3 justify-content-start  ">
                <InputContainer>
                  <img src={inputSearchIcon} alt="" />
                  <NavInput
                    onChange={handleChange}
                    placeholder="Search Something"
                  />
                </InputContainer>
              </div>
            </div>

            <div className=" d-none d-lg-block w-100 text-center">
              {isAuth.isOnline ? (
                <>
                  <div className="d-flex align-items-center gap-4 pe-3   justify-content-end ">
                    <Link to={"/profile"}>
                      <Button
                        color={"#FDFDFD"}
                        background={"#003459"}
                        title={"Profile"}
                      />
                    </Link>
                    <DropdownMenu
                      className="dropdown"
                      onClick={handleDropdownClick}
                    >
                      <button
                        className="w-100 me-4 btn btn-secondary dropdown-toggle cartButton d-flex justify-content-between align-items-center gap-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <DropdownPp
                          className="img-fluid"
                          src={authUser?.image}
                          alt=""
                        />
                        <div className="d-flex">
                          <div className="me-1">{authUser?.name} </div>
                          <div>
                            {cart?.length > 0 ? `[${cart.length}]` : ""}
                          </div>
                        </div>
                      </button>

                      <ul className="dropdown-menu custom-dropdown-menu">
                        {cart?.map((item) => (
                          <div key={item.id}>
                            <div className="row m-auto">
                              <div className="col-4 ">
                                <img
                                  className="m-auto"
                                  width={"100px"}
                                  src={item?.image}
                                  alt=""
                                />
                              </div>
                              <div className="col-8" key={item}>
                                <li>{item.title}</li>
                                <li className=" d-flex align-items-center mt-1">
                                  <span className="opacity-75 fs-8">
                                    Quantity:
                                  </span>
                                  <IncDecButtons className="pt-1">
                                    <button
                                      onClick={() =>
                                        dispatch(removeToCart(item))
                                      }
                                    >
                                      -
                                    </button>

                                    {item?.rating.count !== item.quantity ? (
                                      <button
                                        onClick={() =>
                                          dispatch(addToCart(item))
                                        }
                                      >
                                        +
                                      </button>
                                    ) : (
                                      <button disabled>+</button>
                                    )}
                                  </IncDecButtons>
                                  {item.quantity}
                                </li>
                                <li className=" fw-bold mt-1">
                                  {(item.price * item.quantity).toFixed(2)}₺
                                </li>
                              </div>
                            </div>

                            <hr />
                          </div>
                        ))}

                        <li className="d-flex flex-column align-items-center gap-1 ">
                          {cart?.length > 0 ? (
                            <BuyButton
                              onClick={buyProducts}
                              className=" w-50 d-flex justify-content-center gap-2 align-items-center"
                            >
                              <i className="fa-solid fa-cart-shopping"></i>
                              Buy it
                              {totalSum > 0 && (
                                <div>
                                  <span
                                    style={{ color: "#fdfdfd" }}
                                    className="fw-bold"
                                  >
                                    {`[${totalSum.toFixed(2)} ₺]`}
                                  </span>{" "}
                                </div>
                              )}
                            </BuyButton>
                          ) : (
                            <button className="btn btn-success w-50 d-none">
                              Buy it
                            </button>
                          )}

                          <button
                            className="btn btn-danger w-50"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex align-items-center gap-4 pe-3 justify-content-end">
                    <Link to={"/login"}>
                      <Button
                        color={"#fdfdfd"}
                        background={"#003459"}
                        title={"Login"}
                      />
                    </Link>
                    <Link to={"/signup"}>
                      <Button
                        color={"#003459"}
                        border={"2px solid #fdfdfd"}
                        background={"transparent"}
                        title={"SignUp"}
                      />
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div className="d-block d-lg-none">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </div>
          </Navbar>
          <HomeContainer className="row align-items-center">
            <div className="col-lg-5">
              <MainPageParagraph />
            </div>
            <div className="col-lg-7">
              <MainPagePicture />
            </div>
          </HomeContainer>
        </div>
        <HomeBottomBox />
      </HomeBackground>
      <HomeWhatsNew />
      <HomeAddBanner />
      <HomeOurProduct />
      <HomePetSellers />
      <HomeKnowledge />
    </div>
  );
};

export default HomeView;
