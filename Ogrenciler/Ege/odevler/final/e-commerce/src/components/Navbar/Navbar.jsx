import { NavLink, Link, useLocation, useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
// import { searchSchema } from "../../schemas";
import { useSelector, useDispatch } from "react-redux"
import { setSearchValue } from "../../redux/slices/searchSlice";
import ButtonPrimary from "../../styledComponents/ButtonPrimary";

import StyledNavbar from "./StyledNavbar.js"
import AccountDropdown from "./AccountDropdown/AccountDropdown";

const Navbar = () => {

    const currentUser = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const initialValues = { search: '' };

    const onSubmit = (values) => {
        if (currentUser) {
            // console.log(values.search);
            if (location.pathname != "/products") navigate("/products")
            dispatch(setSearchValue(values.search))

        }
        else console.log("You need to login to use search")
    };

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues,
        // validationSchema: searchSchema,
        onSubmit
    });


    return (
        <StyledNavbar>
            <div className="container">
                <div className="brand">
                    <h1>EgeCommerce</h1>
                </div>
                <div className="navigation">
                    <NavLink to={"/"}>Home</NavLink>
                    <br />
                    <NavLink to={"/products"}>Products</NavLink>
                    <br />
                    <NavLink to={"/"}>About</NavLink>
                    <br />
                    <NavLink to={"/"}>Contact</NavLink>
                    <br />
                </div>
                <div className="searchBar">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            onChange={handleChange}
                            value={values.search}
                            placeholder="Search something here!"
                        />
                        {/* <img className="searchIcon" src={searchIcon} alt="" /> */}
                        {errors.search && <div className="error">{errors.search}</div>}
                    </form>
                </div>
                <div className="accountSection">
                    {
                        !currentUser
                            ? (
                                <Link to="/login"><ButtonPrimary >Login</ButtonPrimary></Link>
                            )
                            : (
                                <Link to="/cart"><ButtonPrimary >Cart</ButtonPrimary></Link>
                            )
                    }
                    {
                        !currentUser
                            ? (
                                <Link to="/signup"><ButtonPrimary >Sign Up</ButtonPrimary></Link>
                            )
                            : (<AccountDropdown />)
                    }


                </div>
                {/* add activeClassName */}
            </div>
        </StyledNavbar>
    )
}

export default Navbar