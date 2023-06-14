import styled from "styled-components";



export const DetailPokemonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 2rem 0;
  
  @media screen and (max-width:768px){
    flex-direction:column;
    width:auto;
    margin:0 50px
  }
`;

export const DetailPokemonImage = styled.img`
  background-color: #f2f2f2;
  padding: 2rem;
  border-radius: 12px;
  width: 300px;
  height: 300px;
  // object-fit: cover;
  @media screen and (max-width:768px){
    padding: 0rem;

    width:100%
  }
`;

export const DetailPokemonInfo = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 0 2rem;
  background-color: #30A7D7;
  border-radius: 12px;
  .infoName {
    color: #FFFFFF;
  }
  .value {
    color: #000000;
  }
  @media screen and (max-width:768px){
    padding: 1rem 0 ;

    width:100%
  }
`;
