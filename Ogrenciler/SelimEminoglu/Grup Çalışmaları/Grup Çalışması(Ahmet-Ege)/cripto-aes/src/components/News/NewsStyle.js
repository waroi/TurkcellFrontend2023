import styled from "styled-components";

export const AllNewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.7rem;
`;

export const SingleNewCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 30%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 12px;
  padding-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme == 'light' ? '#000' : '#fff'};
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }
  p {
    font-size: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    padding: 0 20px;
  }

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: center;
  }

  .newsInfoBottom {
    display: flex;
    justify-content: space-evenly;
  }
`;
