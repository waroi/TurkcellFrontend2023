import styled from 'styled-components';
import { StyledCard } from '../../ProductCard/styled';

export const NewsCard = styled(StyledCard)`
  width: 27rem;
  padding: 10px;
  @media (max-width: 768px) {
    width: 20rem;
  }
`