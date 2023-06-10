import styled from 'styled-components';

export const CoinsContainer = styled.div `
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`

export const CustomTr = styled.tr`
      border-top: 0.5px solid rgb(50 53 70);
`

export const CustomThead = styled.thead `
    justify-content: space-between;
    background-color: #1a1a1d;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    position: sticky;
    top: 0;
    z-index: 999;
`

export const CustomTable = styled.table `
  background-color: #1a1a1d;
`
export const StyledTd = styled.td `
    color: ${({ value }) => (value < 0 ? '#ea3943' : '#16c784')};
`

export const CustomIcon = styled.img `
border-radius: 50%;
`;