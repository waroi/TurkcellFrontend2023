import styled from 'styled-components';

export const ProductsGrid = styled.div`
margin-top: 20px;
width: 100%;
display: grid;
grid-template-columns: 1fr repeat(3, 1fr);
gap: 0.5rem;
@media (max-width: 1400px) {
  grid-template-columns: 1fr repeat(2, 1fr);
}
@media (max-width: 1200px) {
  grid-template-columns: 1fr repeat(1, 1fr); ;
}
@media (max-width: 728px) {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
`

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 1fr);
  @media (max-width: 1400px) {
    grid-template-columns: 1fr repeat(1, 1fr); ;
  }
  @media (max-width: 998px) {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
`

export const BrandImg = styled.img`
  width: 92px;
  height: 64px;
`