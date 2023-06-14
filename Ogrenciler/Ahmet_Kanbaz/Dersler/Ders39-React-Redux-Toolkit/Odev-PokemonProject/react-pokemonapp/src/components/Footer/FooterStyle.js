import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 2rem 0;
  background-color: silver;
  
`;

export const FirstFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const FirstFooterUL = styled(FirstFooter)`
  gap: 0.7rem;
`;

export const FooterSocialsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  font-size: 1.4rem;
  align-items: center;
  margin: 2rem 0;
`;


export const FooterEndContainer = styled(FirstFooter)`
  gap: 1.2rem;
  .footerEnd {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
   
    }
    @media screen and (max-width:768px){
      img{
       width:45%
      } 
  }
`;