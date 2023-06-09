import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate();
  const NotFoundDiv = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(
    to bottom,
    rgba(0,0,0, .1),
    rgba(0,0,0, .2)
  ),url('/images/bgNotFound.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #FFFFFF;
    h1{
      font-size: 5rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    button{
      padding: 10px 20px;
      border: none;
      background-color: #FFFFFF;
      color: #000000;
      font-size: 1.2rem;
      font-weight: 700;
      border-radius: 7px;
      cursor: pointer;
      transition: all .3s ease-in-out;
      &:hover {
        background-color: #b1b1b1;
      }
    }
  `;
  return (
    <NotFoundDiv>
      <h1>404 Not Found</h1>
      <button onClick={() => navigate('/')}>AnaSayfaya Git</button>
    </NotFoundDiv>
  )
}

export default NotFound
