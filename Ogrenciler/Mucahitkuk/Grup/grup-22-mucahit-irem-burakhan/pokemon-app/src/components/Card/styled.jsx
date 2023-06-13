import styled from 'styled-components';

export const CustomCard = styled.div`
border: 1px solid white;
width: 200px;
`


export const CustomGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`