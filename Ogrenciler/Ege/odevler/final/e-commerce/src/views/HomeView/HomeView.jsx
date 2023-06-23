import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";
const HomeView = () => {
    const currentUser = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>HomeView</h1>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">SignUp</Link>
            <br />
            <Link to="/products">Products</Link>
            {
                currentUser ? (
                    <div>
                        <h2>You are logged in {currentUser.name}</h2>
                        <button onClick={() => dispatch(setUser(null))}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2>You are not logged in</h2>
                        <Link to={"/login"}>Login</Link>
                    </div>
                )
            }
        </div>
    )
}

export default HomeView