import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Day = styled.div`
  font-weight: bold;
`;

const Temperature = styled.div`
  margin-top: 5px;
`;

const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;

const Description = styled.h4`
  margin-top: 5px;
`;

const AllDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Weekly({ weekData }) {
  return (
    <Container>
      {weekData.map((data) => (
        <AllDay key={data.key}>
          {data.key === 0 ? <Day>Today</Day> : <Day>{data.day}</Day>}

          <WeatherIcon
            src={`https://openweathermap.org/img/w/${data.icon}.png`}
            alt={data.icon}
          />
          <Temperature>
            {data.lTemp}°C - {data.hTemp}°C
          </Temperature>
          <div>{data.main},</div>
          <Description>{data.desc}</Description>
        </AllDay>
      ))}
    </Container>
  );
}

export default Weekly;
