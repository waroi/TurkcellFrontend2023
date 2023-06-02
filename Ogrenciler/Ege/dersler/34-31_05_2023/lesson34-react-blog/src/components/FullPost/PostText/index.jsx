import PropTypes from "prop-types";

const PostText = ({ text, title }) => {
  return (
    <div className="postText">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default PostText;

PostText.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};
