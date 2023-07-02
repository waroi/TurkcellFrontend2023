import styled from 'styled-components';

export const SignupPageContainer = styled.div`
 width: 100%;
 height: 100vh;
 display: grid;
 place-items: center;
 form{
  display: flex;
  flex-direction: column;
  font-weight: 500;
  line-height: 20px;
  &::placeholder{
   font-weight: 500;
   color:#99A2A5;
  }
 }
 label{
  color:#242B33;
  font-weight: 500;
 line-height: 20px;
 font-size: 14px;
 }
`

export const BoxSizing = styled.div`
 width: 100%;
 @media screen and (min-width: 768px) {
  width: 400px;
 }
`
export const Flex = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: start;
 gap: .5em;
 height: 110px;
`

export const EyeDiv = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 background: #fff;
 img{
  cursor: pointer;
 }
`

export const RegisterButton = styled.div`
 pointer-events: ${props => props.canclick == "false" ? "auto" : "none"};
`
