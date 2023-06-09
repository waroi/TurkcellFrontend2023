import CardStyle from './cardStyle'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Card = ({ item, setPage }) => {
 const { name, description, key, image } = item
 return (
  <Link to={`/news/${key}`} onClick={() => setPage(0)}>
   <CardStyle >
    <div className='imgDIV'>
     <img src={image} alt="" />
    </div>
    <div className='mainDIV'>
     <h3>{name}</h3>
     <p>{description}</p>
    </div>
   </CardStyle>
  </Link>
 )
}
Card.propTypes = {
 item: PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
 }).isRequired,
 setPage: PropTypes.func.isRequired,
}
export default Card