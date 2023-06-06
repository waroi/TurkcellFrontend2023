/* eslint-disable react/prop-types */
import StyledToday from "./StyledToday";
import StyledWeekday from "./StyledWeekday";
import styled from "styled-components";

const StyledWeather = ({ today, weekday }) => {
  const Weather = styled.div`
    display: flex;
    gap: 2rem;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      width: 100%;
    }
  `;
  const Weekdays = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
  `;
  return (
    <Weather>
      {today.day && <StyledToday today={today} />}
      <Weekdays>
        {weekday.length > 0 &&
          weekday.map((day) => <StyledWeekday key={day.date} day={day} />)}
      </Weekdays>
    </Weather>
  );
};

export default StyledWeather;
