import { StaticOrderComponentButtonDark } from "../styles/StaticOrderComponent";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpSuccessfulViewContainer = styled.div`
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-top: 125px;
`;

const SignUpSuccessfulViewWrapper = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 50px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #dee2e6;
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-bottom: 125px;
`;

const SignUpSuccessfulView = () => {
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }

  function successToast() {
    toast.success("Sign up succesful", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  setTimeout(() => {
    successToast();
  }, 2000);

  return (
    <>
      <SignUpSuccessfulViewContainer className="container text-center">
        <SignUpSuccessfulViewWrapper className="container text-center">
          <h1>Sign Up Successful</h1>
          <StaticOrderComponentButtonDark
            className="mx-auto mt-5"
            onClick={goToHome}
          >
            Go To Home
          </StaticOrderComponentButtonDark>
        </SignUpSuccessfulViewWrapper>
      </SignUpSuccessfulViewContainer>
      <ToastContainer />
    </>
  );
};

export default SignUpSuccessfulView;
