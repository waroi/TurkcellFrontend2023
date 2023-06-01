import "./Title.css";
import PropTypes from "prop-types";

const Title = ({title}) => {
  return (
    <div className="titleDiv">{title}</div>
  )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title