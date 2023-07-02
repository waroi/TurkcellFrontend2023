import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";

export const Container = styled.div`
  max-width: 340px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CustomTitle = styled.h1`
  text-align: center;
  color: #003459;
`;

export const StyledField = styled(Field)`
  display: flex;
  width: auto;
  padding: 7.794px;
  align-items: center;
  gap: 7.71px;
  border-radius: 6.168px;
  outline: none;
  border: 1px solid #99a2a5;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #ff564f;
  font-size: 14px;
`;

export const StyledButton = styled(Button)`
  border-radius: 41px;
  background-color: #003459;
  border: none;
`;
