import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const BannerContainer = styled(Container)`
  border-radius: 20px;
  background: #003459;
  position: relative;
  overflow: hidden;
  display: flex;
`
export const BannerImg = styled.img`
height: 100%;
@media (max-width: 520px) {
  width: 300px;
 }
`


export const HomeRectangle1 = styled.div`
  width: 787.54px;
height: 787.54px;
transform: rotate(28.251deg);
flex-shrink: 0;
border-radius: 99px;
background:#002A48;
position: absolute;
top: 158px;
left: -219px;
`

export const HomeRectangle2= styled.div`
  width: 782.292px;
height: 635px;
transform: rotate(25.23deg);
flex-shrink: 0;
border-radius: 99px;
background: #FCEED5;
position: absolute;
top: -233px;
left: 640px;
@media (max-width: 768px) {
  top: -263px;
left: -329.4px;
transform: rotate(11.23deg);
}
`