import "./style.css";
import Content from "../Content";
import PropTypes from "prop-types";

const Card = ({ content, image }) => {
  console.log(image?.url);
  return (
    <div className="card">
      <div className="imageDiv">
        <img className="image" src={image?.download_url} alt="" />
      </div>
      <Content content={content} />
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
