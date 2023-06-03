import PropTypes from "prop-types";

const PostImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="" />;
};

export default PostImage;

PostImage.propTypes = {
  imageUrl: PropTypes.string,
};
