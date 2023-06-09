/* eslint-disable react/prop-types */
import {
  SingleCard,
  SingleCardInfo,
  SingleCardBottom,
  SingleCardImage,
  Description,
} from "./HomeandCardStyle";
import { useNavigate } from "react-router-dom";

const SingleNewCard = ({ singleNew }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("tr-TR", options);
  };

  return (
    <SingleCard
      onClick={() => navigate(`/new/${singleNew.key}`, { state: singleNew })}
    >
      <SingleCardImage src={singleNew.image} alt={singleNew.name} />
      <SingleCardInfo>
        <h3>{singleNew.name}</h3>
        <Description>{singleNew.description}</Description>
        <SingleCardBottom>
          <span>{singleNew.source}</span>
          <span>{formatDate(singleNew.date)}</span>
        </SingleCardBottom>
      </SingleCardInfo>
    </SingleCard>
  );
};

export default SingleNewCard;
