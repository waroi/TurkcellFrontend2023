import styled from "styled-components";

export const CustomInput = styled.input`
border:1px solid #dadada;
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
export const StyledTextArea = styled.textarea`
border:1px solid #dadada;
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