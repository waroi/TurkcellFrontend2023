import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 0.2rem 0;
  background-color: silver;
  position: sticky;
  top: 0;
  z-index: 2;
  .headerSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 120px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: translateX(1rem);
      }
    }
  }
  @media screen and (max-width:768px){
    .headerSection{
      flex-direction:column;
      justify-content:center;
    }
  }
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
      cursor: pointer;
      color: #000000;
      transition: all .3s ease-in-out;
      &:hover {
        color: gold;
      }
    }
    @media screen and (max-width:768px){
      a{
        font-size:12px
      }
    } 
`;
