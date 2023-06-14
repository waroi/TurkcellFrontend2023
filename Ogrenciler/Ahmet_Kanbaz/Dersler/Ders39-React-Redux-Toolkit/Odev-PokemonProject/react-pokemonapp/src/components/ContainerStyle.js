import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  .footer {
    display: flex;
    justify-content: space-between;
    a {
      color: #000000;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: gold;
      }
    }
    @media screen and (max-width:768px){
      flex-direction:column;
      display:flex
    }
  }

  .bottomFooter {
    display: flex;
    margin: 1rem 0 0;
    padding: 1rem 0 0;
    justify-content: center;
    border-top: 1px solid #000000;
    a {
      color: #000000;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: gold;
      }
  }
  @media screen and (max-width:768px){
    p {
      margin: 0 0 0.5rem;
      width: 100%;
    }
  }
}
@media screen and (max-width:768px){
    width: 100%;
  }
`;
