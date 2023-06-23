import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const uuid = self.crypto.randomUUID();
  const SingUpErrorToast = () =>
    toast.error("Signing up failed", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/users?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          toast.error(
            <div>
              Email already exists. Please <Link to="/login"> Login</Link>
            </div>,
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "light",
            }
          );
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
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: uuid,
                username,
                email,
                password,
                cart: [],
                role: "user",
              }),
            })
              .then((response) => {
                if (response.status === 201) {
                  document.getElementById("signupBtn").disabled = true;
                  toast.success("User signed up successfully, redirecting", {
                    onSubmit: () => {},
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    onClose: () => {
                      navigate("/login");
                    },
                  });
                } else {
                  toast.error("Signing up failed", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        SingUpErrorToast();
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
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
        <button type="submit" id="signupBtn">
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
