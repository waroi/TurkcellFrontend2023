import { useState, useEffect } from "react"
import axios from "axios"
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginView = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

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
            setLoggedIn(true);
            console.log('Login successful');
        } else {
            console.log('Invalid email or password');
        }
    };

    return (
        <div>
            {!loggedIn ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <h1>Welcome to the App!</h1>
            )}
        </div>
    )
}

export default LoginView