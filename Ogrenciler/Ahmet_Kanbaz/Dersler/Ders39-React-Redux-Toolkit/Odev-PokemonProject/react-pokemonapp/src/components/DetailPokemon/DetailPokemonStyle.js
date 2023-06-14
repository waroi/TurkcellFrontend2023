import styled from "styled-components";

export const DetailPokemonContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  gap: 1rem;
`;

export const DetailPokemonImage = styled.img`
  width: 100%;
`;

export const DetailPokemonName = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
`;

export const DetailPokemonTypes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
