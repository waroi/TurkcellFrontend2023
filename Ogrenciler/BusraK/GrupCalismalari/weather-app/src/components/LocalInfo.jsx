import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);

  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 200px;
  min-width: 200px;
  text-align: center;
`;
function LocalInfo({ today: { date } }) {
  return <CardContainer>{date}</CardContainer>;
}

export default LocalInfo;
