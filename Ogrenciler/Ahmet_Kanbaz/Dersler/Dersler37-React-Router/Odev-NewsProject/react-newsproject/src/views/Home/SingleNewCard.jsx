/* eslint-disable react/prop-types */
import {SingleCard, SingleCardInfo, SingleCardBottom, SingleCardImage, Description} from './HomeandCardStyle'
import { useNavigate} from 'react-router-dom';

const SingleNewCard = ({ singleNew }) => {
  const navigate = useNavigate();

  return (
    <SingleCard onClick={() => navigate(`/new/${singleNew.key}`, {state: singleNew})}>
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

  )
}

export default SingleNewCard
