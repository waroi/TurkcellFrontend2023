/* eslint-disable react/prop-types */

import styled from "styled-components";
import { Humidity, Max, Min, Night, Thermo } from "../../utils/Icons";

const StyledToday = ({ today }) => {
  const {
    icon,
    degree,
    description: desc,
    night,
    max,
    min,
    humidity: hum,
  } = today;

  const Today = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    padding: 1rem;
    gap: 2rem;
    img {
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr;
    }
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  `;

  const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 10px;
    p {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
    }
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  `;

  return (
    <Today>
      <img src={icon} alt="" />

      <Info>
        <h3>{desc}</h3>
        <p>
          <Thermo /> {degree}
        </p>
        <p>
          <Night />
          {night}
        </p>
        <p>
          <Max />
          {max}
        </p>
        <p>
          <Min />
          {min}
        </p>
        <p>
          <Humidity />
          {hum}
        </p>
      </Info>
    </Today>
  );
};

export default StyledToday;
