import { useState, useEffect } from "react"
import axios from "axios"
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../redux/slices/userSlice";

const LoginView = () => {

    const [userData, setUserData] = useState(null);
    const currentUser = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUserData(response.data);
            } catch (error) {
                console.error('An error occurred while fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleLogin = (values) => {
        const user = userData.find(
            (user) => user.email === values.email && user.password === values.password
        );

        if (user) {
            dispatch(setUser(user))
            console.log(currentUser)
            console.log('Login successful');
        } else {
            console.log('Invalid email or password');
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

        </div>
    )
}

export default LoginView