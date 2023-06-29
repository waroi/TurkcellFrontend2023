import styled from "styled-components";

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 15rem 0;
`;

export const FormDiv = styled.form`
  border: 2px solid #99a2a5;
  border-radius: 10px;
  width: 600px;
  height: 450px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 0 0;
  color: #242b33;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const İnputDiv = styled.div`
  width: 449px;
  height: 20px;
  display: flex;
  padding: 14px 16px 14px 28px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #99a2a5;
`;

export const Formİnput = styled.input`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  color: #99a2a5;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border: none !important;
  &::placeholder {
    background-color: #fdfdfd;
    color: black;
  }
`;

export const FormButton = styled.button`
  display: flex;
  width: 163px;
  padding: 14px 28px 10px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 57px;
  border: 1.5px solid #003459;
  color: #003459;
  background-color: #fdfdfd;
`;

export const FormH1 = styled.h1`
  margin: 0;
`;
