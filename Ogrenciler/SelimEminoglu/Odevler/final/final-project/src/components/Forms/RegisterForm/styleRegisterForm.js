import styled from "styled-components";

export const RegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 15rem 0;
`;

export const RegisterFormDiv = styled.form`
  border: 2px solid #99a2a5;
  border-radius: 10px;
  width: 600px;
  height: 600px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ErrorDiv = styled.div`
  display: flex;
`;

export const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 0 0;
  color: #ff564f;
  font-size: 12px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
