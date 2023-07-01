import { useState } from "react";
import {
  HeaderItem,
  HeaderLogo,
  HeaderInput,
  HeaderButton,
  HeaderComputer,
  HeaderMobile,
  HeaderSpan,
  HeaderDropdown,
  HeaderSearch,
} from "../styles/HeaderStyle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addLogin, deleteLogin } from "../redux/slices/loginSlice";
import { useEffect, useRef } from "react";
import { basketRequest } from "../utils/Request";
import { addInput } from "../redux/slices/inputSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileInput, setIsMobileInput] = useState(false);
  const [loginCount, setLoginCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("login") ? true : false
  );
  const [firstButton, setFirstButton] = useState("");
  const [secondButton, setSecondButton] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);
  const [basketData, setBasketData] = useState([]);
  const [uniqueBasketData, setUniqueBasketData] = useState([]);
  const inputArea = useRef();
  const inputMobileArea = useRef();
  const basketCount = useSelector((state) => state.basketAdd.count);
  const currentUser = useSelector((state) => state.login.login);

  function warningToast() {
    toast.warning("Log in required", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  useEffect(() => {
    setTimeout(() => {
      basketRequest.get().then((data) => {
        setBasketData(data);
      });
    }, 2000);
  }, [basketCount]);
  // console.log(basketData);
  console.log(uniqueBasketData);

  useEffect(() => {
    setTimeout(() => {
      setUniqueBasketData([]);
      basketData.map((data, index) => {
        if (data.username == currentUser.username) {
          setUniqueBasketData((prev) => [...prev, data]);
        }
      });
    }, 2000);
  }, [basketData]);

  const dispatch = useDispatch();

  if (loginCount === 0) {
    let login = "";
    if (localStorage.getItem("login")) {
      login = JSON.parse(localStorage.getItem("login"));
      dispatch(addLogin(login));
      setIsLoggedIn(true);
    }
    setLoginCount(1);
  }

  useEffect(() => {
    if (currentUser.length !== 0) {
      setIsLoggedIn(true);
    }
  }, [currentUser]);

  useEffect(() => {
    if (isLoggedIn) {
      setFirstButton("Basket");
      setSecondButton(currentUser.username);
    } else {
      setFirstButton("Log In");
      setSecondButton("Sign Up");
    }
  }, [isLoggedIn]);

  const handleMobile = () => {
    setIsMobile(!isMobile);
    setIsMobileInput(false);
  };

  const handleMobileInput = () => {
    setIsMobileInput(!isMobileInput);
    setIsMobile(false);
  };

  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/SignUp");
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToProducts = () => {
    if (currentUser != "") {
      navigate("/Products");
    } else if (currentUser.length == 0) {
      warningToast();
    }
  };

  const goToLogIn = () => {
    navigate("/LogIn");
  };

  const goToBasket = () => {
    navigate("/Basket");
  };

  function firstButtonFunction() {
    if (isLoggedIn) {
      goToBasket();
    } else {
      goToLogIn();
    }
  }

  function secondButtonFunction() {
    if (isLoggedIn) {
      setIsDropdown(!isDropdown);
    } else {
      goToSignUp();
    }
  }

  function logOut() {
    localStorage.removeItem("login");
    dispatch(deleteLogin());
    setIsLoggedIn(false);
    setIsDropdown(false);
    goToHome();
  }

  function handleInput() {
    if (currentUser != "") {
      dispatch(addInput(inputArea.current.value));
      goToProducts();
    } else if (currentUser.length == 0) {
      warningToast();
    }
  }

  function handleMobileArea() {
    if (currentUser != "") {
      dispatch(addInput(inputMobileArea.current.value));
      goToProducts();
    } else if (currentUser.length == 0) {
      warningToast();
    }
  }

  return (
    <div className="container-xl py-3">
      <HeaderComputer>
        <div className="row">
          <div className="col-lg-6">
            <div className="row justify-content-center flex-row align-items-center">
              <div className="col-lg-3">
                <HeaderItem onClick={() => goToHome()}>
                  <HeaderLogo src="../../public/Frame.png" />
                </HeaderItem>
              </div>
              <div className="col-lg-2">
                <HeaderItem onClick={() => goToHome()}>Home</HeaderItem>
              </div>
              <div className="col-lg-2">
                <HeaderItem onClick={() => goToProducts()}>Category</HeaderItem>
              </div>
              <div className="col-lg-2">
                <HeaderItem>About</HeaderItem>
              </div>
              <div className="col-lg-2">
                <HeaderItem>Contact</HeaderItem>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="row justify-content-center align-items-center flex-row"
              style={{ height: 40 }}
            >
              <div className="col-lg-4">
                <div className="d-flex flex-row align-items-center">
                  <HeaderSearch className="fa-solid fa-magnifying-glass"></HeaderSearch>

                  <HeaderInput
                    ref={inputArea}
                    onChange={handleInput}
                    type="text"
                    placeholder="Search something here!"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <HeaderButton onClick={firstButtonFunction}>
                  {firstButton}
                  {isLoggedIn && (
                    <HeaderSpan>{uniqueBasketData.length}</HeaderSpan>
                  )}
                </HeaderButton>
              </div>
              <div className="col-lg-4">
                <HeaderButton onClick={secondButtonFunction}>
                  {secondButton}
                </HeaderButton>
                {isDropdown && (
                  <HeaderDropdown onClick={logOut}>Log Out</HeaderDropdown>
                )}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </HeaderComputer>
      <HeaderMobile>
        <div className="row justify-content-between align-items-center">
          <div className="col-4">
            <HeaderItem>
              <i className="fa-solid fa-bars fs-2" onClick={handleMobile}></i>
            </HeaderItem>
          </div>
          <div className="col-4">
            <HeaderItem onClick={() => goToHome()}>
              <HeaderLogo src="../../public/Frame.png" />
            </HeaderItem>
          </div>
          <div className="col-4">
            <HeaderItem>
              <i
                className="fa-solid fa-magnifying-glass my-auto float-end fs-2"
                onClick={handleMobileInput}
              ></i>
            </HeaderItem>
          </div>
        </div>

        {isMobile && !isMobileInput && (
          <div className="row mt-3">
            <HeaderItem onClick={() => goToHome()}>Home</HeaderItem>
            <HeaderItem onClick={() => goToProducts()}>Category</HeaderItem>
            <HeaderItem>About</HeaderItem>
            <HeaderItem>Contact</HeaderItem>
            <div className="mt-3">
              <HeaderButton onClick={firstButtonFunction}>
                {firstButton}{" "}
                {isLoggedIn && (
                  <HeaderSpan>{uniqueBasketData.length}</HeaderSpan>
                )}
              </HeaderButton>
            </div>
            <div className="mt-1">
              <HeaderButton onClick={secondButtonFunction}>
                {secondButton}
              </HeaderButton>
              {isDropdown && (
                <HeaderDropdown onClick={logOut}>Log Out</HeaderDropdown>
              )}
            </div>
          </div>
        )}
      </HeaderMobile>

      {isMobileInput && !isMobile && (
        <div className="row mt-3">
          <HeaderInput
            ref={inputMobileArea}
            onChange={handleMobileArea}
            type="text"
            placeholder="Search something here!"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
