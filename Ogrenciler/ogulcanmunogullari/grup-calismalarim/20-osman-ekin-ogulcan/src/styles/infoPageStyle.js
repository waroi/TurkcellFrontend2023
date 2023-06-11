import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2em;
  width: 100%;
  .loading {
    font-size: 2rem;
    text-align: center;
    width: 100%;
  }
`;

export const Part = styled.div`
  min-height: 650px;
  border-radius: 15px;
  padding: 1rem;
  background-color: ${(props) =>
    props.theme == "light" ? "#eae7e775" : "#2a292978"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    padding: 1em 0;
  }
  .icon {
    width: 1.5em;
    height: 1.5em;
    overflow: hidden;
    display: inline-block;

    img {
      width: 100%;
    }
  }
  .d-flex {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: 1.5em;
    .symbol {
      color: ${(props) => (props.theme == "light" ? "#00000075" : "#ffffff78")};
    }
  }
  a {
    color: ${(props) => (props.theme == "light" ? "black" : "white")};
    background-color: ${(props) =>
      props.theme == "light" ? "#d3d0d075" : "#8c8a8a78"};
    padding: 1em;
    border-radius: 10px;
    &:hover {
      background-color: ${(props) =>
        props.theme == "light" ? "#adaaaa78" : "#3c3b3b75"};
    }
  }
  .links {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
  }
  .price {
    display: flex;
    gap: 16px;
    font-weight: bold;
    font-size: 1.6rem;
    align-items: center;
    span {
      font-size: 1rem;
    }
  }
  .infoSpan {
    font-size: 0.9rem;
    color: ${(props) => (props.theme == "light" ? "#00000075" : "#ffffff78")};
  }
`;

export const CalculateBackgroundColor = styled.span`
  color: white;
  background-color: ${(props) => (props.number > 0 ? "#16c784" : "#ea3943")};
  padding: 0.5em;
  border-radius: 10px;
`;

export const Part2 = styled.div`
  min-height: 650px;
  border-radius: 15px;
  padding: 1rem;
  background-color: ${(props) =>
    props.theme == "light" ? "#eae7e775" : "#2a292978"};
  display: flex;
  align-items: center;
  .chart {
    width: 100%;
    height: 100%;
  }
`;
