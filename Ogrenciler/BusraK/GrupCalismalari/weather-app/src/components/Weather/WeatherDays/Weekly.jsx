import React from "react";
import styled from "styled-components";

import d10 from "../../../icons/01d.svg";
import n10 from "../../../icons/01n.svg";
import d20 from "../../../icons/02d.svg";
import n20 from "../../../icons/02n.svg";
import d30 from "../../../icons/03d.svg";
import n30 from "../../../icons/03n.svg";
import d40 from "../../../icons/04d.svg";
import n40 from "../../../icons/04n.svg";
import d90 from "../../../icons/09d.svg";
import n90 from "../../../icons/09n.svg";
import d01 from "../../../icons/10d.svg";
import n01 from "../../../icons/10n.svg";
import d31 from "../../../icons/13d.svg";
import n31 from "../../../icons/13n.svg";
import d05 from "../../../icons/50d.svg";
import n05 from "../../../icons/50n.svg";

const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
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
  color: #fff;
  background: rgba(0, 53, 102, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.2px);
  margin: 10px;
  padding: 10px;
  max-width: 150px;
  min-width: 150px;
  max-height: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background: rgba(0, 53, 102, 0.31);
    scale: 1.1;
  }
`;

function Weekly({ weekData }) {
  return (
    <Container>
      {weekData.map((data) => {
        let icon;

        if (!data.icon) {
        } else if (data.icon[1] === "1") {
          icon = data.icon[2] === "d" ? d10 : n10;
        } else if (data.icon[1] === "2") {
          icon = data.icon[2] === "d" ? d20 : n20;
        } else if (data.icon[1] === "3") {
          icon = data.icon[2] === "d" ? d30 : n30;
        } else if (data.icon[1] === "4") {
          icon = data.icon[2] === "d" ? d40 : n40;
        } else if (data.icon[1] === "9") {
          icon = data.icon[2] === "d" ? d90 : n90;
        } else if (data.icon[1] === "0") {
          icon = data.icon[2] === "d" ? d01 : n01;
        } else if (data.icon[1] === "3") {
          icon = data.icon[2] === "d" ? d31 : n31;
        } else if (data.icon[0] === "5") {
          icon = data.icon[2] === "d" ? d05 : n05;
        }

        return (
          <AllDay key={data.key}>
            {data.key === 0 ? <Day>Today</Day> : <Day>{data.day}</Day>}

            <WeatherIcon src={icon} alt={data.icon} />
            <Temperature>
              {data.lTemp}°C - {data.hTemp}°C
            </Temperature>
            <div>{data.main},</div>
            <Description>{data.desc}</Description>
          </AllDay>
        );
      })}
    </Container>
  );
}

export default Weekly;
