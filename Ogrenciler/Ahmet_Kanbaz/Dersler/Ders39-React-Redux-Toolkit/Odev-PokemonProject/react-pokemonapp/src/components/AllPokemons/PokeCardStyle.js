import styled from 'styled-components'

export const PokeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem 0;
`;

export const PokeCard = styled.div`
  width: 25%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-color: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  img {
    transition: all .3s ease-in-out;
    width: 80%;
    max-height: 300px;
  }
  &:hover img{
    transform: scale(1.1) translateY(-10px);
  }
  .pokeWH {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  @media screen and (max-width:768px){
    width:100%
    }
`;