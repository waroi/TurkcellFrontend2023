import styled from 'styled-components';
const HeaderComponent = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1rem 2rem;
 background-color: #fff;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 h1 {
  font-size: 4rem;
  font-weight: 700;
  text-transform: capitalize;
  background-color: red;
  padding: .25em .25em 0 .25em;
 }
 select{
  padding: .5em;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 1rem;
 }
 
`;

export default HeaderComponent;
