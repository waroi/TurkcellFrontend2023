import PropTypes from "prop-types"
import StyledKnowledgeCard from "./StyledKnowledgeCard"
const KnowledgeCard = ({ info }) => {
    return (
        <StyledKnowledgeCard className="p-3 col-lg-4" backgroundColor={info.tag.background}>
            <div className="cardImage">
                <img src={info.image} alt={info.title} />
            </div>
            <span className="tag">{info.tag.text}</span>
            <div className="cardText">
                <h5>{info.title}</h5>
                <p>{info.info}</p>
            </div>
        </StyledKnowledgeCard>
    )
}

KnowledgeCard.propTypes = {
    info: PropTypes.object.isRequired
}

export default KnowledgeCard