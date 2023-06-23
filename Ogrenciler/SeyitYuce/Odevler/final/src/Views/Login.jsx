import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event, user) => {
    event.preventDefault();
    fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
      .then((response) => response.json())
      .then((user) => {
        if (user.length > 0) {
          document.getElementById("signinBtn").disabled = true;
          toast.success("User signed in successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
            onClose: () => {
              navigate("/");
              dispatch(setUser(user));
            },
          });
        } else {
          if (email === "" || password === "") {
            toast.error("Please fill all fields", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "light",
            });
          } else {
            toast.error("Invalid email or password", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "light",
            });
          }
        }
        console.log(user);
      })
      .catch((error) => {
        console.error("Error:", error);
        // SingUpErrorToast();
      });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" id="signinBtn">
          Sign In
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
