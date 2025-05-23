import LocalInfo from "../LocalInfo";
import Today from "./WeatherDays/Today";
import Weekly from "./WeatherDays/Weekly";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WeatherShow = ({ today, weekly }) => {
  return (
    <Container>
      <LocalInfo today={today} />

      <Today today={today} />

      <Weekly weekData={weekly} />
    </Container>
  );
};
export default WeatherShow;
