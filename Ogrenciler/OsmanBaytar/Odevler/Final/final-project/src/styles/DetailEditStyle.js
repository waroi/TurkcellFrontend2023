import styled from "styled-components";

export const DetailEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const DetailEditTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const DetailEditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetailEditInput = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  
  &:focus {
    outline: none;
     border: 1px solid #000;
      `;

export const DetailEditButton = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
`;

export const DetailEditSelect = styled.select`
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const DetailEditOption = styled.option`
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const DetailEditTextArea = styled.textarea`
  width: 300px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  resize: none;
  &:focus {
    outline: none;
     border: 1px solid #000;
     `;
