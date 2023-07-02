import styled from "styled-components";

export const CustomInput = styled.input`
border:none;
padding:6px 20px;
&:focus{
  border:1px solid #239af0;
  outline:none;
}
&::placeholder{
  font-style:italic;
  font-size:12px;
  color:#cacaca;
}

`