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
      animation: imgAnim 2.5s linear infinite;
    }
    @keyframes imgAnim {
      0%{
        transform: translateY(0);
      }

      50%{
        transform: translateY(20px);
      }

      100%{
        transform: translateY(0);
      }
    }
    @media screen and (max-width: 700px) {
      gap: 0 ;
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
    padding: 1rem 0;
    font-size: 20px;
    text-align: center;
    p {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      text-align: left;
      padding: 0 2rem;
      width: 100%;
      gap: 1rem;
    }
    @media screen and (max-width: 700px) {
      padding: .75rem;
  }

    h3{
      text-transform: capitalize;
    }
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  `;

  return (
    <Today>
      <img src={icon} alt="" />

      <Info>
        <h3>{desc}</h3>
        <p>
          <Thermo  size={22} color={"#ff6347"}/> {degree} C°
        </p>
        <p>
          <Night size={22} color={"#FEFCD7"} />
          {night} C°
        </p>
        <p>
          <Max size={22} color={"#dc143c"} />
          {max} C°
        </p>
        <p>
          <Min size={22} color={"#4f86f7"} />
          {min} C°
        </p>
        <p>
          <Humidity size={22} color={"#1e90ff"} />
          {hum} %
        </p>
      </Info>
    </Today>
  );
};

export default StyledToday;
