import PropTypes from "prop-types";

import PostImage from "./PostImage";
import PostText from "./PostText";

import "./style.css";

const FullPost = ({ post }) => {
  return (
    <div className="postCard">
      <PostImage imageUrl={`https://picsum.photos/id/${post.id}/200/300`} />
      <PostText text={post.body} title={post.title} />
    </div>
  );
};

export default FullPost;

FullPost.propTypes = {
  post: PropTypes.object,
};
