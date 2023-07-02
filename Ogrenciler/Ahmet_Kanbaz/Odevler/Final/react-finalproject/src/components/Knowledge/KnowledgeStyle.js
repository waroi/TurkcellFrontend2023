import styled from "styled-components";

export const KnowledgeContainer = styled.div`
  .card {
    box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
    border-radius: 0.75rem;
    img {
      height: 15.1875rem;
    }
    span {
      color: #fdfdfd;
      font-size: 0.625rem;
      padding: 0.125rem 0.625rem;
      line-height: 1rem;
      background-color: #00a7e7;
    }
    .card-title {
      color: #00171f;
      line-height: 1.5rem;
    }
    .card-text {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      color: #242b33;
      text-overflow: ellipsis;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

export const KnowledgeDescription = styled.p`
  -webkit-line-clamp: ${(props) => (props.id == 2 ? "4" : "3")};
`;
