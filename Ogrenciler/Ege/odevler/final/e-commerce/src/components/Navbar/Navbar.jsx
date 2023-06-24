import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
import { searchSchema } from "../../schemas";
import { useSelector, useDispatch } from "react-redux"
import { setSearchValue } from "../../redux/slices/searchSlice";
const Navbar = () => {

    const currentUser = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const initialValues = { search: '' };

    const onSubmit = (values) => {
        if (currentUser) {
            dispatch(setSearchValue(values.search))
            // console.log(values.search);
            if (location.pathname != "/products") navigate("/products")
        }
        else console.log("You need to login to use search")
    };

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues,
        // validationSchema: searchSchema,
        onSubmit
    });


    return (
        <div className="container">
            {/* add activeClassName */}
            <NavLink to={"/"}>Home</NavLink>
            <br />
            <NavLink to={"/cart"}>Cart</NavLink>
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="search"
                    name="search"
                    onChange={handleChange}
                    value={values.search}
                />
                {errors.search && <div className="error">{errors.search}</div>}
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Navbar