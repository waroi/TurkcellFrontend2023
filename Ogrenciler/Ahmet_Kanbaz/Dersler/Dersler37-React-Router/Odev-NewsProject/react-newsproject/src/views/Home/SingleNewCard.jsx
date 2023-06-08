/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom';

const SingleNewCard = ({ singleNew }) => {
  const navigate = useNavigate();

  const SingleCard = styled.div`
    width: 25%;
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

  const SingleCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
  `;

  const SingleCardBottom = styled.div`
  width: 100%;
    display: flex;
    justify-content: space-around;
  `;

  const SingleCardImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
  `;

  const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  `;

  return (
    <Link to= {`/new/${singleNew.key}`} state={{singleNew: 'singleNew'}}>
      <SingleCard>
        <SingleCardImage src={singleNew.image} alt={singleNew.name} />
        <SingleCardInfo>
          <h3>{singleNew.name}</h3>
          <Description>{singleNew.description}</Description>
          <SingleCardBottom>
            <span>{singleNew.source}</span>
            <span>08/06/2023</span>
          </SingleCardBottom>
        </SingleCardInfo>
      </SingleCard>
    </Link>
  )
}

export default SingleNewCard
