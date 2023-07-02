import { Link, useLocation, useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
import { useSelector, useDispatch } from "react-redux"
import { setSearchValue } from "../../redux/slices/searchSlice";
import ButtonPrimary from "../../styledComponents/ButtonPrimary";
import { NavbarPC, NavbarMobile, StyledNavbar } from "./StyledNavbar";
import searchIcon from "../../assets/Search_Magnifying_Glass_Gray.svg"
import searchIconBlack from "../../assets/Search_Magnifying_Glass_Black.svg"
import hamburgerMenu from "../../assets/Hamburger_LG.svg"
import { useState } from "react"
import AccountDropdown from "./AccountDropdown/AccountDropdown";
import logo from "../../assets/Logo.svg"
import cartIcon from "../../assets/Shopping_Bag.svg"

const Navbar = () => {

    const currentUser = useSelector(state => state.user.user)
    const cartLength = useSelector(state => state.cartLength)
    const [isOnSearch, setIsOnSearch] = useState(false)
    const [isOnMenu, setIsOnMenu] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const initialValues = { search: '' };

    const handleOnSearch = () => {
        setIsOnSearch(!isOnSearch)
        setIsOnMenu(false)
    }

    const handleOnMenu = () => {
        setIsOnMenu(!isOnMenu)
        setIsOnSearch(false)
    }

    const onSubmit = (values) => {
        if (currentUser) {
            if (location.pathname != "/products") navigate("/products")
            dispatch(setSearchValue(values.search))

        }

    };

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues,
        onSubmit
    });


    return (
        <div className="container py-3">
            <NavbarPC>
                <StyledNavbar>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-4 navbarItem navbarLogo">
                                    <Link to={"/"}>
                                        <img src={logo} alt="logo" />
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
                                <div className="col-lg-6">
                                    <div className="d-flex searchArea">
                                        <img src={searchIcon} alt="search" />
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                type="text"
                                                id="search"
                                                name="search"
                                                onChange={handleChange}
                                                value={values.search}
                                                disabled={currentUser ? false : true}
                                                placeholder={currentUser ? "Search something here!" : "You need to login."}
                                            />

                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    {
                                        !currentUser
                                            ? (
                                                <Link to="/login"><ButtonPrimary className="fw-bold" >Login</ButtonPrimary></Link>
                                            )
                                            : (
                                                <Link to="/cart"><ButtonPrimary className="d-flex fw-bold" ><img src={cartIcon} alt="cart" /> {cartLength}</ButtonPrimary></Link>
                                            )
                                    }

                                </div>
                                <div className="col-lg-3">
                                    {
                                        !currentUser
                                            ? (
                                                <Link to="/signup"><ButtonPrimary className="fw-bold" >Sign Up</ButtonPrimary></Link>
                                            )
                                            : (<AccountDropdown />)
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </StyledNavbar>
            </NavbarPC>

            <NavbarMobile>
                <StyledNavbar>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-4 navbarItem text-center">
                            <img src={hamburgerMenu} alt="menu" onClick={handleOnMenu} />
                        </div>
                        <div className="col-4 navbarItem text-center ">
                            <Link to={"/"}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="col-4 navbarItem text-center">
                            <img src={searchIconBlack} alt="menu" onClick={handleOnSearch} />

                        </div>
                    </div>

                    {(isOnMenu && !isOnSearch) && (
                        <div>

                            <div className="d-flex justify-content-between">
                                <Link className="navbarItem" to={"/"}>Home</Link>
                                <Link className="navbarItem" to={"/products"}>Products</Link>
                                <Link className="navbarItem" to={"/"}>About</Link>
                                <Link className="navbarItem" to={"/"}>Contact</Link>
                            </div>

                            <div className="d-flex mt-3 justify-content-center gap-3">
                                <div >
                                    {
                                        !currentUser
                                            ? (
                                                <Link to="/login"><ButtonPrimary >Login</ButtonPrimary></Link>
                                            )
                                            : (
                                                <Link to="/cart"><ButtonPrimary className="d-flex" ><img src={cartIcon} alt="cart" /> {cartLength}</ButtonPrimary></Link>
                                            )
                                    }

                                </div>
                                <div >
                                    {
                                        !currentUser
                                            ? (
                                                <Link to="/signup"><ButtonPrimary >Sign Up</ButtonPrimary></Link>
                                            )
                                            : (<AccountDropdown />)
                                    }

                                </div>
                            </div>
                        </div>
                    )}
                    {(isOnSearch && !isOnMenu) && (
                        <div className="d-flex justify-content-center searchArea">
                            <img src={searchIcon} alt="search" />
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    id="search"
                                    name="search"
                                    onChange={handleChange}
                                    value={values.search}
                                    disabled={currentUser ? false : true}
                                    placeholder="Search something here!"
                                />
                                {errors.search && <div className="error">{errors.search}</div>}
                            </form>

                        </div>
                    )}

                </StyledNavbar>
            </NavbarMobile>
        </div>
    )
}

export default Navbar