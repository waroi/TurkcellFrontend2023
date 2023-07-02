import styled from "styled-components";

const StyledKnowledgeCard = styled.div`
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
    background-color: #00a7e7;
  }

  .cardText {
    margin-top: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;

    h5 {
      font-weight: 700;
    }
  }

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  }
`;

export default StyledKnowledgeCard;
