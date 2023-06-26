import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const BannerContainer = styled(Container)`
  border-radius: 20px;
  background: #003459;
`
export const BannerImg = styled.img`
height: 100%;
@media (max-width: 520px) {
  width: 300px;
 }
`
