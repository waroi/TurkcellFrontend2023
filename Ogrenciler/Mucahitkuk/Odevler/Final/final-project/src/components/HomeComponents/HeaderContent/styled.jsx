import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

export const BackgroundCard = styled.div`
  background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
  width: 100%;
  height: 695px;
  border-radius: 0px 0px 40px 40px;
  position: relative;
  top: -100px;
  overflow: hidden;
  @media (max-width: 768px) { 
    height: 900px;
    top: -175px;
  }
`

export const TitleOne = styled.h1`
color: #002A48;
font-weight: 800;
line-height: 68px;
text-transform: capitalize;
font-size: 60px;
@media (max-width: 768px) { 
    font-size: 46px;
  }
`

export const TitleTwo = styled.h2`
color: #002A48;
font-size: 46px;
font-weight: 700;
line-height: 60px;
text-transform: capitalize;
@media (max-width: 768px) {
  font-size: 28px;
}
`

export const PageButton = styled(Button)`
color: #002A48;
border-radius: 41px;
border-color: #003459;
background-color: transparent;
padding: 10px 30px;
justify-content: center;
align-items: center;
gap: 8px;
a{
  color: #002A48;
  &:hover {
  color: white;
}
}
`


export const PageButtonTwo = styled(Button)`
border-radius: 41px;
border: none;
background-color: #002A48;
padding: 10px 30px;
justify-content: center;
align-items: center;
gap: 8px;
`

export const HomeUpContainer = styled(Container)`
  height: 695px;
  display: flex;
  @media (max-width: 768px) { 
    display: block;
    top: 150px;
    position: relative;
  }
`

export const HeaderImg = styled.img`
width: 900px;
height: 693px;
flex-shrink: 0;
overflow-x: hidden;
@media (max-width: 768px) { 
    width: 600px;
    height: 468px;
  }
`