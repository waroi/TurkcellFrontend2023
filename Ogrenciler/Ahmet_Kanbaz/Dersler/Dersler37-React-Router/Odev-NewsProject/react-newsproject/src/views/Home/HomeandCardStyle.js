import styled from "styled-components";

export const AllNewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 6rem 0;
`;

export const SingleCard = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem 10px;
    margin: 10px 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
  `;

  export const SingleCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
  `;

  export const SingleCardBottom = styled.div`
  width: 100%;
    display: flex;
    justify-content: space-around;
  `;

  export const SingleCardImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
  `;

  export const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  `;