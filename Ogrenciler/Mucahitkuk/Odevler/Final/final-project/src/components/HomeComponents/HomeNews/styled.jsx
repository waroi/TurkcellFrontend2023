import styled from 'styled-components';
import { StyledCard } from '../../ProductCard/styled';

export const NewsCard = styled(StyledCard)`
  width: 27rem;
  padding: 10px;
  @media (max-width: 768px) {
    width: 20rem;
  }
`

export const InfoHeader = styled.div`
width: 111px;
height: 20px;
font-size: 10px;
display: flex;
padding: 2px 10px;
align-items: flex-start;
gap: 10px;
border-radius: 28px;
background: #00A7E7;
align-content: center;
align-items: center;
color: white;
`