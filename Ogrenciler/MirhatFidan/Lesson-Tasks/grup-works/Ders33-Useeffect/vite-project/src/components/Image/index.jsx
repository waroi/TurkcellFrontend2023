import "./Image.css";
import PropTypes from "prop-types";

const Image = ({imageUrl}) => {
  return (
    <div className="imgDiv">
        <img src={imageUrl}/>
    </div>
    
  )
}

Image.propTypes = {
    imageUrl: PropTypes.string.isRequired
}

export default Image