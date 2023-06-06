/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledWeekday = ({ day }) => {
  const Weekday = styled.div`
    padding: 2rem;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    img {
      width: 30%;
    }
    @media screen and (max-width: 300px) {
      padding: 0.5em;
    }`;
  console.log(day.status);
  return (
    <Weekday>
      <p>{day.date}</p>
      <p>{day.day}</p>
      <img src={day.icon} alt="" />
      <p>{day.description}</p>
      <p>{day.degree}</p>
      <p>{day.night}</p>
    </Weekday>
  );
};

export default StyledWeekday;
