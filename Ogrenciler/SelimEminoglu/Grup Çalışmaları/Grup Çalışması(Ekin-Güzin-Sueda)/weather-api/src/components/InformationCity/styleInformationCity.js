import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  padding: 10px;
`;

export const Dflex = styled.div`
  display: flex;
  justify-content: center;
`;


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
`;


export const WeatherIcon = styled.img`
  margin-top: 1rem;
  width: 200px;
  height: 200px;
  animation: moveUpDown 2s infinite alternate ease-in-out;
  
  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(20px);
    }
  }
`;


export const CityNameArea = styled(Dflex)`
  justify-content: space-between;
  display: flex;
  align-items: center;
  
`;

export const CityName = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  
  &::first-letter {
    text-transform: capitalize;
  }
`;


export const DateforDay = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;


