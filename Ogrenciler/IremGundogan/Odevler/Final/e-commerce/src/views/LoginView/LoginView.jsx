import { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { setCartLength } from "../../redux/slices/cartLengthSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Container from "../../components/Container/Container";

const LoginView = () => {
  const [userData, setUserData] = useState(null);
  const currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUserData(response.data);
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogin = (values) => {
    const user = userData.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      dispatch(setUser(user));
      localStorage.setItem("userData", JSON.stringify(user));
      axios
        .get(`http://localhost:3000/carts/${user.id}`)
        .then((response) => dispatch(setCartLength(response.data.cart.length)));
      toast.success("Login successful");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <Container>
      { currentUser == null && <LoginForm onLogin={handleLogin} /> }
      <ToastContainer />
    </Container>
  );
};

export default LoginView;
