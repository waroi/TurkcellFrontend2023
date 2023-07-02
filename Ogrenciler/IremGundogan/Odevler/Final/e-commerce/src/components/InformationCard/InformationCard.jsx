import InformationCardStyle from "./InformationCardStyle";
import PropTypes from "prop-types";

const InformationCard = ({ inner }) => {
  return (
    <InformationCardStyle className="col-lg-4 col-sm-12 col-md-6 d-flex mx-auto">
      <div >

      <img className="InnerImage" src={inner.image} alt={inner.title} />
      <div className="InnerText">
        <div className="tag">
          <span>{inner.tag}</span>
        </div>
        <h5 className="paragraph">{inner.title}</h5>
        <p className="paragraph">{inner.info}</p>
      </div>
      </div>
    </InformationCardStyle>
  );
};

InformationCard.propTypes = {
  inner: PropTypes.object.isRequired,
};

export default InformationCard;
