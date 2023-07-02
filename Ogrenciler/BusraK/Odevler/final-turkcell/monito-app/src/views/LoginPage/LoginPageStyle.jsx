import styled from "styled-components";

export const FormContainer = styled.div`
  color: var(--primary-color-dark-blue-80, #002a48);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../src/assets/cart_8.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  justify-content: left;
  padding-left: 2.5%;

  @media (max-width: 992px) {
    .button-group {
      flex-direction: column;
    }
  }
`;

export const FormContainerSignUp = styled.div`
  font-family: "svngilroy-light", sans-serif;
  color: var(--primary-color-dark-blue-80, #002a48);
  display: flex;
  justify-content: left;
  padding-left: 8%;
  padding-right: 8%;
  align-items: center;
  height: 100vh;
  background-image: url("https://img.freepik.com/free-vector/online-shopping-store-with-mobile-shopping-cart-mail-clouds-realistic-style-vector-illustration_548887-136.jpg?w=1800&t=st=1688051943~exp=1688052543~hmac=7ca2abc7ac406442e16592348a825ca9b5bd967a12bfe6de488278b8dcdc239c");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

export const Form = styled.form`
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 20px;
  width: 35vw;
  font-family: "svngilroy-bold", sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 992px) {
    width: 96vw;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  padding-bottom: 5px;
  text-align: left;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &.error-input {
    border-color: #dc3545;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const ErrorIcon = styled.span`
  margin-right: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 3.5625rem;
  background: var(--primary-color-dark-blue-40, #0078cd);
  font-family: "svngilroy-bold", sans-serif;
  padding: 10px;
  border: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: var(--primary-color-dark-blue, #003459);
  }
`;

export const PasswordToggleIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
