import styled from 'styled-components';

export const CustomCard = styled.div`
width: 200px;
border-radius: 5px;
border: 1px solid white;
min-height: 200px;
`


export const CustomGrid = styled.div`
  display: grid;
  max-height: 350px;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`

export const CustomTitle = styled.h3`
  text-transform: capitalize;
`
