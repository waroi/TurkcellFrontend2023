/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledWeekday = ({ day }) => {
  const Weekday = styled.div`
    padding: 2rem;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    font-size: 20px;
    transition: 0.3s all;
    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 35%;
    }
    .desc {
      display: flex;
      align-items: center;
      font-size: ${(props) =>
        props.desc.split(" ").length > 2 ? "16px" : "20px"};
    }
    .night {
      font-size: 18px;
      opacity: 0.8;
    }
    @media screen and (max-width: 700px) {
      padding: 0.5em;
      font-size: 16px;
      .desc {
        font-size: ${(props) =>
          props.desc.split(" ").length > 2 ? "13px" : "16px"};

        min-height: 35px;
      }
      .night {
        font-size: 14px;
      }
    }
  `;
  return (
    <Weekday desc={day.description}>
      <p>{day.date}</p>
      <p>{day.day}</p>
      <img src={day.icon} alt="" />
      <p className="desc">{day.description}</p>
      <p>{day.degree} C°</p>
      <p className="night">{day.night} C°</p>
    </Weekday>
  );
};

export default StyledWeekday;
