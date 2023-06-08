import styled from 'styled-components'

export const CityCard = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem 3rem;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.1px);
  -webkit-backdrop-filter: blur(0.1px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #000000;
`;

export const CityDailyInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const CityCardAllDays = styled(CityDailyInfo)`
  gap: 1.2rem;
`;

export const CityCardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CityCardDegree = styled.span`
  font-size: 7rem;
`;

export const CityCardHumi = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  opacity: 0.8;
  font-style: italic;
`;

export const FeelsDegree = styled(CityCardHumi)`
  font-size: 1.8rem;
  font-style: normal;
`;