import PropTypes from "prop-types";
import { KnowledgeCard } from "../Style/styled-knowledge";
const KnowledgeCards = ({ info }) => {
  return (
    <KnowledgeCard
      className="p-3 col-lg-4"
      backgroundColor={info.tag.background}
    >
      <div className="cardImage">
        <img src={info.image} alt={info.title} />
      </div>
      <span className="tag">{info.tag.text}</span>
      <div className="cardText">
        <h5>{info.title}</h5>
        <p>{info.info}</p>
      </div>
    </KnowledgeCard>
  );
};

KnowledgeCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default KnowledgeCards;
