import styled from "styled-components";

export const Knowledge = styled.div`
  /* h3 {
    color: #003459;
    font-size: 24px;
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
  } */
`;
export const KnowledgeCard = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: 0.5s all;
  border-radius: 12px;
  .cardImage {
    img {
      border-radius: 10px;
      width: 100%;
      aspect-ratio: 1.5;
    }
    margin-bottom: 10px;
  }

  .tag {
    font-size: 12px;
    font-weight: 700;
    color: white;
    border-radius: 26px;
    padding: 5px;
    background-color: ${(props) => props.backgroundColor};
  }

  .cardText {
    margin-top: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* Number of lines to display */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  }
`;
