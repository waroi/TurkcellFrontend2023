import styled from 'styled-components';


export const CustomSearch = styled.input`
 display: flex;
width: 280px;
padding: 12px 20px 12px 16px;
align-items: center;
gap: 12px;
border-radius: 46px;
border: 1px solid #FDFDFD;
background-color: white !important;
background: url(https://img.icons8.com/ios-glyphs/30/000000/search--v1.png) no-repeat 5px;
background-size: 20px;
padding-left: 30px;
`

export const MobileSearchDiv = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileSearchImage = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileSearch = styled.input`
  display: flex;
  width: 280px;
  padding: 12px 20px 12px 16px;
  align-items: center;
  gap: 12px;
  border-radius: 46px;
  border: 1px solid #FDFDFD;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  margin-top: 20px;
  pointer-events: none;
  transition: opacity 0.3s ease, max-height 0.3s ease;

  &.visible {
    opacity: 1;
    max-height: 100px;
    overflow: visible;
    pointer-events: auto;
  }
`;

