import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signupSuccess,
  signupFailure,
  addNewUser,
} from "../../redux/slices/mainSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import {
  FormContainerSignUp,
  Form,
  Title,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  ErrorIcon,
  SubmitButton,
} from "../LoginPage/LoginPageStyle";

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const emailSchema = yup
    .string()
    .email("Enter a valid email address")
    .required("Email address is required");

  const passwordSchema = yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase, and numbers"
    )
    .required("Password is required");

  const imageSchema = yup
    .string()
    .url("Geçerli bir resim URL'si girin")
    .required("Resim URL'si gereklidir");

  const handleEmailBlur = () => {
    emailSchema
      .validate(email)
      .then(() => {
        setEmailError("");
      })
      .catch((error) => {
        setEmailError(error.message);
        toast.error(error.message);
      });
  };

  const handlePasswordBlur = () => {
    passwordSchema
      .validate(password)
      .then(() => {
        setPasswordError("");
      })
      .catch((error) => {
        setPasswordError(error.message);
        toast.error(error.message);
      });
  };

  const handleImageUrlBlur = () => {
    imageSchema
      .validate(imageUrl)
      .then(() => {
        setImageUrlError("");
      })
      .catch((error) => {
        setImageUrlError(error.message);
        toast.error(error.message);
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !password || !email) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (emailError) {
      toast.error("Enter a valid email address.");
      return;
    }

    if (passwordError) {
      toast.error("Meet password requirements.");
      return;
    }

    if (imageUrlError) {
      toast.error("Enter a valid image url.");
      return;
    }

    const isRegistered = await isEmailRegistered(email);
    if (isRegistered) {
      setRegistrationError("This email address is already registered.");
      toast.error("This email address is already registered.");
      return;
    }

    const userImage = imageUrl;

    const userData = {
      username,
      password,
      email,
      role: "user",
      isLogin: true,
      userImage,
    };

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const newUser = await response.json();
        dispatch(signupSuccess(newUser));
        dispatch(addNewUser(newUser));
        toast.success("User added successfully!");
        navigate(`/Home/${newUser.username}`);
      } else {
        let error;
        try {
          error = await response.json();
        } catch (err) {
          error = "An unexpected error has occurred";
        }
        dispatch(signupFailure(error));
        toast.error("Error adding user: " + error);
      }
    } catch (error) {
      dispatch(signupFailure(error));
      toast.error("Error adding user: " + error.message);
    }
  };

  const isEmailRegistered = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?email=${email}`
      );
      if (response.ok) {
        const users = await response.json();
        return users.length > 0;
      } else {
        throw new Error("An unexpected error has occurred");
      }
    } catch (error) {
      toast.error(
        "An error occurred while querying the user: " + error.message
      );
      return false;
    }
  };

  return (
    <FormContainerSignUp className="d-flex">
      <Form onSubmit={handleSignup}>
        <Title>SignUp</Title>

        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
            className={passwordError ? "error-input" : ""}
            placeholder="Password"
          />
          {passwordError && (
            <ErrorMessage>
              <ErrorIcon>
                <img src="../../src/assets/Icon/error-circle.png" alt="Error" />
              </ErrorIcon>
              {passwordError}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            className={emailError ? "error-input" : ""}
            placeholder="Email Address"
          />
          {emailError && (
            <ErrorMessage>
              <ErrorIcon>
                <img src="../../src/assets/Icon/error-circle.png" alt="Error" />
              </ErrorIcon>
              {emailError}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="imageUrl">Resim URL'si</Label>
          <Input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            onBlur={handleImageUrlBlur}
            className={imageUrlError ? "error-input" : ""}
            placeholder="Resim URL'sini Girin"
          />
          {imageUrlError && (
            <ErrorMessage>
              <ErrorIcon>
                <img src="../../src/assets/Icon/error-circle.png" alt="Hata" />
              </ErrorIcon>
              {imageUrlError}
            </ErrorMessage>
          )}
        </FormGroup>

        {registrationError && <ErrorMessage>{registrationError}</ErrorMessage>}
        <SubmitButton type="submit">SignUp</SubmitButton>
      </Form>
      <ToastContainer />
    </FormContainerSignUp>
  );
};

export default SignUpPage;
