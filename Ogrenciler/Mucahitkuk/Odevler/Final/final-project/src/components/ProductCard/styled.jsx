import styled from 'styled-components';
import Card from 'react-bootstrap/Card';


export const StyledCard = styled(Card)`
  border-radius: 12px;
  border: none;
  &:hover {
    transition: all ease 0.3s;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
`

export const StyledCardImage = styled(Card.Img)`
  border-radius: 12px;
  border: none; 
  height: 225px;
  aspect-ratio: 1/1;
  margin: 0 auto;
`