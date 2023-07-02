import { Link,useNavigate } from "react-router-dom"
import logo from "../../assets/monitoLogo.png" 
import styles from "./header.module.css"
import Button from "../Shared/Button"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../../redux/slices/userInfoSlice"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { removeCookie } from "../../services/userControl"
import { setSearch } from "../../redux/slices/searchSlice"


const Header = () => {
    const user = useSelector((state) => state.userInfo);
    const basketCount = useSelector((state) => state.basketCount.basketCount);
    const dispatch = useDispatch();
    const navigate = useNavigate()

  return (
    <header className="py-3">
        
        {/* Desktop Header */}
        <nav className="container justify-content-between align-items-center d-none d-lg-flex">
            <img className={styles.logo} onClick={()=>navigate("/")} src={logo} alt="logo" />
            <div className="d-flex justify-content-evenly gap-5">
                <Link to="/">Home</Link>
                <Link to="/products">Category</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </div>
            <div className={styles.searchBox}>
                <input onChange={(e)=>dispatch(setSearch(e.target.value))} onFocus={()=>navigate("/products")} type="text" className={styles.searchInput} placeholder="Search something here!" />
            </div>
            {!user.isAuthenticated &&<Button size="m" handleClick={()=>navigate("/login")}>Login</Button>}
            {user.isAuthenticated &&<div className="dropdown">
                <Button rounded="3" className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i>{user?.userInfo?.payload?.email.split("@")[0]}<i className="fa-solid fa-angle-down"></i>
                </Button>
                <ul className="dropdown-menu w-100">
                    <li><Link className="dropdown-item d-flex justify-content-between align-items-center" to="/basket">Basket<span className="badge bg-danger">{basketCount}</span></Link></li>
                    <li><button onClick={()=>{navigate("/");dispatch(removeUser());removeCookie()}} className="dropdown-item d-flex justify-content-between align-items-center" href="#">Exit<i className="fa-solid fa-right-from-bracket"></i></button></li>
                </ul>
            </div>}

        </nav>

        {/* Mobile Header */}

        <nav className="navbar navbar-expand-lg navbar-light d-flex d-lg-none">
                <div className="container-fluid">
                    <button 
                        className={`navbar-toggler shadow-none border-0`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#hamburger" 
                        aria-controls="hamburger" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img onClick={()=>navigate("/")} src={logo} alt="logo" />
                    <button className={`navbar-toggler shadow-none  ${styles.searchMobile}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#search" 
                        aria-controls="search" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse bg-light  rounded-5" id="hamburger">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
                            <li className="nav-item border-bottom">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item border-bottom">
                                <Link className="nav-link" to="/products">Category</Link>
                            </li>
                            <li className="nav-item border-bottom">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Contact</Link>
                            </li>
                            {!user.isAuthenticated && 
                                <li className="nav-item">
                                    <Button size="m" handleClick={()=>navigate("/login")}>Login</Button>
                                </li>
                            }
                            {user.isAuthenticated &&
                                <li className="nav-item dropdown">
                                    <Button rounded="3" className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-user"></i>{user?.userInfo?.payload?.email.split("@")[0]}<i className="fa-solid fa-angle-down"></i>
                                    </Button>
                                    <ul className="dropdown-menu w-100">
                                        <li><Link className="dropdown-item d-flex justify-content-between align-items-center" to="/basket">Basket<span className="badge bg-danger">{basketCount}</span></Link></li>
                                        <li><button onClick={()=>{navigate("/");dispatch(removeUser());removeCookie()}} className="dropdown-item d-flex justify-content-between align-items-center" href="#">Exit<i className="fa-solid fa-right-from-bracket"></i></button></li>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <input onChange={(e)=>dispatch(setSearch(e.target.value))} onFocus={()=>navigate("/products")} type="text" className={styles.searchInput} placeholder="Search something here!" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        
    </header>
  );
};

export default Header;
