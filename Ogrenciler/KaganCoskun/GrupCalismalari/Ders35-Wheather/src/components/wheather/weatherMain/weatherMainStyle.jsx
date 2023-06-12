import styled from 'styled-components';
const IconImg = styled.img`
    width: 50%;
    height:auto;
    `; 
const WheatherInfo = styled.div`
    width:50%;
    text-align:center;
    color: #0c4469;
    @media screen and (max-width: 992px) {
       width: 100%;
    }
    `;

const Title = styled.h1`
    font-size: 1.5rem;
    color: #0c4469;
    font-weight: 500;
    margin-bottom: 1rem;
    text-transform: capitalize;
    `;
    
const MinTemp = styled.span`
  color: #16add3;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const MaxTemp = styled.span`
  color: #f9a825;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const TempDiv = styled.div`
  margin-top: 1rem;
`;

const WeatherIcon = styled.p`
  font-size: 1.5rem;
  color: #0c4469;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

    export { IconImg,WheatherInfo,Title, MinTemp, MaxTemp, TempDiv, WeatherIcon };