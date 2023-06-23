import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../../Components/Login/Login";

const LoginView = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUserData(response.data);
      } catch {}
    };

    fetchUserData();
  }, []);

  const handleLogin = (values) => {
    const user = userData.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      setLoggedIn(true);
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div>
      {!loggedIn ? <Login onLogin={handleLogin} /> : <h1>Welcome Home</h1>}
    </div>
  );
};

export default LoginView;
