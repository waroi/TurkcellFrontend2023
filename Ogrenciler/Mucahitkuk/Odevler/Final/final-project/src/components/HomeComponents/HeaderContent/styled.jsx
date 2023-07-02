import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

export const BackgroundCard = styled.div`
  background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
  width: 100%;
  height: 695px;
  border-radius: 0px 0px 40px 40px;
  position: relative;
  display: flex;
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
  z-index: 10;
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

export const Rectangle7 = styled.div`
  width: 21.471px;
  height: 21.471px;
  transform: rotate(-43.005deg);
  flex-shrink: 0;
  border-radius: 6px;
  background: #002a48;
  position: absolute;
  left: 728px;
  top: 200px;
  @media (max-width: 768px) {
    left: 250px;
    top: 250px;
  }
`;

export const Rectangle6 = styled.div`
  width: 27.498px;
  height: 27.498px;
  transform: rotate(-22.85deg);
  flex-shrink: 0;
  border-radius: 9px;
  background: #f7dba7;
  position: absolute;
  left: 728px;
  top: 200px;
  @media (max-width: 768px) {
    left: 250px;
    top: 250px;
  }
`;

export const Rectangle5 = styled.div`
  width: 14.626px;
  height: 14.626px;
  transform: rotate(20.792deg);
  flex-shrink: 0;
  border-radius: 4px;
  background: #f7dba7;
  position: absolute;
  left: 757px;
  top: 148px;
  @media (max-width: 768px) {
    left: 250px;
    top: 200px;
  }
`;

export const Rectangle3 = styled.div`
  width: 67.103px;
  height: 67.103px;
  transform: rotate(25.23deg);
  flex-shrink: 0;
  border-radius: 20px;
  background: #f7dba7;
  position: absolute;
  left: 112px;
  top: 163px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Rectangle9 = styled.div`
  width: 635px;
  height: 635px;
  transform: rotate(25.23deg);
  flex-shrink: 0;
  border-radius: 99px;
  background: #f7dba7;
  position: absolute;
  left: -240px;
  top: -577px;
`;

export const Rectangle8 = styled.div`
  width: 635px;
  height: 635px;
  transform: rotate(56.47deg);
  flex-shrink: 0;
  border-radius: 99px;
  opacity: 0.4000000059604645;
  background: #f7dba7;
  position: absolute;
  top: 746px;
  left: 42px;
`;

export const Rectangle2 = styled.div`
  width: 635px;
  height: 635px;
  transform: rotate(25.23deg);
  flex-shrink: 0;
  border-radius: 99px;
  background: #f7dba7;
  position: absolute;
  top: 290px;
  left: 694px;
  @media (max-width: 768px) {
    left: 50px;
    top: 600px;
  }
  @media (min-width: 1400px){
    left: 1000px;
  }
`;

export const Rectangle1 = styled.div`
  width: 635px;
  height: 635px;
  transform: rotate(9.355deg);
  flex-shrink: 0;
  border-radius: 99px;
  background: #003459;
  position: absolute;
  top: 304px;
  left: 630px;
  @media (min-width: 1400px){
    left: 900px;
  }
  @media (max-width: 768px) {
    left: 0px;
    top: 650px;
  }
`;