import "./Body.css";
import PropTypes from "prop-types";

const Body = ({body}) => {
  return (
    <div>{body}</div>
  )
}

Body.propTypes={
    body: PropTypes.string.isRequired
}

export default Body;