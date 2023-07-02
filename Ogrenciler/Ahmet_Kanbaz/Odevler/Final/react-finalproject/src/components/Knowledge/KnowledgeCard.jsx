import PropTypes from 'prop-types'
import {KnowledgeDescription} from './KnowledgeStyle'
const KnowledgeCard = ({knowledge}) => {
  const {id, title, img, description, category} = knowledge
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card border-0 bg-white p-2">
        <img
          src={img}
          alt=""
          className='object-fit-contain rounded-3'
        />
        <div className="card-body">
          <span className="rounded-pill fw-bold">{category}</span>
          <h5 className="card-title fw-bold py-2">
            {title}
          </h5>
          <KnowledgeDescription className="card-text" id={id}>
            {description}
          </KnowledgeDescription>
        </div>
      </div>
    </div>
  );
};

KnowledgeCard.propTypes = {
  knowledge: PropTypes.object
}

export default KnowledgeCard;
