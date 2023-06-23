import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="container">
            {/* add activeClassName */}
            <NavLink to={"/"}>Home</NavLink>
            <br />
            <NavLink to={"/cart"}>Cart</NavLink>
        </div>
    )
}

export default Navbar