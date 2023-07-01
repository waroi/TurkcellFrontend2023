import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { clearLoginUser, updateIsAdmin } from "../../redux/slices/loggedUser";
import { useEffect, useState } from "react";
import { NavbarLogo, Navbarul } from "./navbarStyle";
import logo from "../../assets/logo.png"
import { fetchPrivateCart } from "../../request/cartsRequest";
import { ToastContainer, toast } from "react-toastify";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userIsLog = JSON.parse(sessionStorage.getItem('loggedUser'))
  console.log("user", userIsLog)
  const loggedUser = useSelector((state) => state.setLoggedUser?.loggedUserObject);
  const [isClick, setIsClick] = useState(false)

  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const logout = () => {
    setIsClick(!isClick)
    dispatch(updateIsAdmin())
    dispatch(clearLoginUser())
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
        autoClose: 1000,
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
  return (
    <>
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
                userIsLog || loggedUser!=="noUser" && !isClick ?
                  <>
                    <li className="nav-item">
                      <Link to="/sepet" className="nav-link">
                        <div className="d-flex">
                          <i className="fa-solid fa-basket-shopping"></i>
                          Sepet
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Profil
                      </a>
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
                        <i className="fa-solid fa-user-plus"></i>
                        SignUp
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        Login
                      </Link>
                    </li>
                  </>
              }

            </Navbarul>

          </div>
        </div>
      </nav >
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
      {/* <NavBarComp className="navbar navbar-expand-md align-items-center d-flex justify-content-between ">
        <NavbarSquare />
        <div className="container position-relative">
          <Link to="/" className="navbar-brand">
            <NavbarLogo src={logo} alt="logo" className="img-fluid" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className="row ">
              <NavUl className="navbar-nav align-items-center d-flex justify-content-between">
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
                  <form className="d-flex" role="search">
                    <input className=" form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  
                  </form>
                </li>
                {
                  loggedUser != "noUser" && !isClick ?
                    <>
                      <li className="nav-item">
                        <Link to="/sepet" className="nav-link">
                          <div className="d-flex">
                            <i className="fa-solid fa-basket-shopping"></i>
                      
                          </div>

                        </Link>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Menu
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="/" onClick={logout} className="nav-link">
                              <i className="fa-solid fa-right-from-bracket"></i>
                              Exit
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
                    :
                    <>
                      <li className="nav-item">
                        <Link to="/signup" className="nav-link">
                          <i className="fa-solid fa-user-plus"></i>
                          SignUp
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          <i className="fa-solid fa-right-to-bracket"></i>
                          Login
                        </Link>
                      </li>
                    </>
                }


              </NavUl>
            </div>
          </div>
        </div>
      </NavBarComp> */}
    </>
  )
}

export default Navbar