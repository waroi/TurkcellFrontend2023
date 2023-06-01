import "./style.css";
import PropTypes from "prop-types";

const Content = ({ content }) => {
  return (
    <div >
      <h2 className="title">{content.title}</h2>
      <p className="content">{content.body}</p>
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Content;
