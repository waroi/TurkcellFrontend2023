import { useState, useEffect } from "react"
import axios from "axios"
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../redux/slices/userSlice";
import { setCartLength } from "../../redux/slices/cartLengthSlice"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";

const LoginView = () => {

    const [userData, setUserData] = useState(null);
    const currentUser = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await axios.get('http://localhost:3000/users');
            setUserData(response.data);

        };

        fetchUserData();
    }, []);

    const handleLogin = (values) => {
        const user = userData.find(
            (user) => user.email === values.email && user.password === values.password
        );

        if (user) {
            dispatch(setUser(user))
            localStorage.setItem("userData", JSON.stringify(user))
            axios.get(`http://localhost:3000/carts/${user.id}`)
                .then(response => dispatch(setCartLength(response.data.cart.length)))

            navigate("/")
        } else {
            toast.error("Invalid email or password")
        }
    };

    return (
        <div className="container">
            {currentUser == null ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <div>
                    <h1>Login successfull {currentUser.name}</h1>
                    <Link to={"/"}>Go back to HomeView</Link>
                </div>
            )}
            <ToastContainer />
        </div>
    )
}

export default LoginView