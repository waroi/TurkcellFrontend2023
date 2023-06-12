import "./style.css"
import PropTypes from "prop-types";

const Card = ({item, image}) => { 
  return (
    <div className="card">
      <div className="card-header">
      <img src={image.download_url} alt="" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{item.title}</h4>
        <p className='card-text'>{item.body}</p>
    </div>
    </div>
  )
}


Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number
  }), 
  image: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    download_url: PropTypes.string,
    url: PropTypes.string
  }) 
}

export default Card