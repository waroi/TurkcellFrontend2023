import { NavImg, NavbarForDesktop, NavbarForMobile, NavbarLogo, Navbarul } from "./navbarStyle";
import { clearLoginUser, updateIsAdmin } from "../../redux/slices/loggedUser";
import { DarkButtonNavbar } from "../buttons/buttonStyle";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import inspectBlack from "../../assets/inspectBlack.png"
import hamburger from "../../assets/hamburger.png"
import logo from "../../assets/logo.png"
import { fetchPrivateCart } from "../../request/cartsRequest";
import { updateCount } from "../../redux/slices/countBasket";

const Navbar = () => {
  const userIsLog = JSON.parse(sessionStorage.getItem('loggedUser'))
  const loggedUser = useSelector((state) => state.setLoggedUser?.loggedUserObject);
  const countBasket = useSelector((state) => state?.setCountBasketName?.count)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [isClick, setIsClick] = useState(false)
  const [isOnSearch, setIsOnSearch] = useState(false)
  const [isOnMenu, setIsOnMenu] = useState(false)

  useEffect(() => {
    fetchPrivateCart(userIsLog?.id).then(data =>dispatch(updateCount(data?.cartItems?.length)))
  }, [])

  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar?.classList?.add('bg-body-tertiary');
    } else {
      navbar?.classList?.remove('bg-body-tertiary');
    }
  });
  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.mobile');
    if (window.scrollY > 0) {
      navbar?.classList?.add('bg-body-tertiary');
    } else {
      navbar?.classList?.remove('bg-body-tertiary');
    }
  });
  const logout = () => {
    setIsClick(!isClick)
    dispatch(updateIsAdmin())
    dispatch(clearLoginUser())
    toast.success("Çıkış başarılı!")
  }

  const submitSearch = (e) => {
    e.preventDefault()
    if (userIsLog) {

      const searchTerm = e.target.value;
      if (searchTerm.trim() !== '') {
        navigate('/products', { state: { search: searchTerm } });
      }
    }
    else {
      toast.error("Lütfen önce giriş yapınız!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          navigate("/signup");
        },
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  const checkUserLogin = () => {
    if (loggedUser == "noUser" || userIsLog == null) {
      toast.error("Lütfen önce giriş yapınız!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          navigate("/signup");
        },
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    else {
      navigate("/products")

    }
  }

  const handleOnSearch = () => {
    setIsOnSearch(!isOnSearch)
    setIsOnMenu(false)
  }

  const handleOnMenu = () => {
    setIsOnMenu(!isOnMenu)
    setIsOnSearch(false)
  }
  return (
    <>
      <NavbarForDesktop>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container ">
            <Link to="/" className="navbar-brand">
              <NavbarLogo src={logo} alt="logo" className="img-fluid" />
            </Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <Navbarul className="navbar-nav " >
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <a onClick={() => { checkUserLogin() }} className="nav-link" href="#" >Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
                <li className="nav-item">
                  <form className="d-flex" role="search" onChange={(e) => { submitSearch(e) }}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  </form>
                </li>

                {
                  userIsLog || loggedUser !== "noUser" && !isClick ?
                    <>
                      <li className="nav-item">
                        <Link to="/sepet" className="nav-link">
                          <div className="d-flex">
                            <DarkButtonNavbar className="px-0 py-2 ">
                              <i className="fa-solid fa-basket-shopping py-1"></i>
                              {countBasket}
                            </DarkButtonNavbar>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <DarkButtonNavbar className="nav-link dropdown-toggle px-0 py-1 " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <NavImg src={userIsLog?.profile} alt="" />
                          Profile
                        </DarkButtonNavbar>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="/" onClick={logout} className="nav-link">
                              <i className="fa-solid fa-right-from-bracket"></i>
                              Çıkış
                            </Link></li>
                        </ul>
                      </li>
                    </>
                    :
                    <>
                      <li className="nav-item">
                        <Link to="/signup" className="nav-link">
                          <DarkButtonNavbar>
                            <i className="fa-solid fa-user-plus"></i>
                            SignUp
                          </DarkButtonNavbar>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          <DarkButtonNavbar>
                            <i className="fa-solid fa-right-to-bracket"></i>
                            Login
                          </DarkButtonNavbar>
                        </Link>
                      </li>
                    </>
                }

              </Navbarul>

            </div>
          </div>
        </nav >
      </NavbarForDesktop>

      <NavbarForMobile >
        <div className="mobile fixed-top py-3 ">
          <div className="row justify-content-between align-items-center">
            <div className="col-4  text-center">
              <img src={hamburger} alt="menu" onClick={handleOnMenu} />
            </div>
            <div className="col-4  text-center ">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-4  text-center">
              <img src={inspectBlack} alt="menu" onClick={handleOnSearch} />

            </div>
          </div>

          {(isOnMenu && !isOnSearch) && (
            <div className="justify-content-center d-flex">
              <ul className="navbar-nav text-center mt-3">
                <Link className=" nav-item nav-link" to={"/"}>Home</Link>
                <Link className=" nav-item nav-link" to={"/products"}>Products</Link>
                <Link className=" nav-item nav-link" to={"/"}>About</Link>
                <Link className=" nav-item nav-link" to={"/"}>Contact</Link>
                {
                  userIsLog || loggedUser !== "noUser" && !isClick ?
                    <>
                      <li className="nav-item ">
                        <Link to="/sepet" className="nav-link ">
                          <div className="d-flex  justify-content-center">
                            <DarkButtonNavbar>
                              <i className="fa-solid fa-basket-shopping"></i>
                              {countBasket}
                            </DarkButtonNavbar>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                          <DarkButtonNavbar>
                            <NavImg src={userIsLog.profile} alt="" />

                          </DarkButtonNavbar>

                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="/" onClick={logout} className="nav-link">
                              <i className="fa-solid fa-right-from-bracket"></i>
                              Çıkış
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
                    :
                    <>
                      <li className="nav-item">
                        <Link to="/signup" className="nav-link">
                          <DarkButtonNavbar>
                            <i className="fa-solid fa-user-plus"></i>
                            SignUp
                          </DarkButtonNavbar>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          <DarkButtonNavbar>
                            <i className="fa-solid fa-right-to-bracket"></i>
                            Login
                          </DarkButtonNavbar>
                        </Link>
                      </li>
                    </>
                }
              </ul>
            </div>
          )}
          {(isOnSearch && !isOnMenu) && (
            <div className="d-flex justify-content-center align-items-center mt-4">
              <img src={inspectBlack} alt="search" className="py-3 px-2" />
              <form onChange={(e) => { submitSearch(e) }}>
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="form-control"

                  placeholder="Search!"
                />

              </form>

            </div>
          )}

        </div>

      </NavbarForMobile>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </>
  )
}

export default Navbar