import PropTypes from 'prop-types'
import './singlecard.css'

const SingleCard = ({newCard}) => {
  return (
    <div className='singleCard'>
        <div className="cardImage">
          <img src={newCard.imageUrl} alt={newCard.title} />
        </div>
      <div className="cardContent">
        <h3>{newCard.title}</h3>
        <p>{newCard.body}</p>
      </div>
    </div>
  )
}

SingleCard.propTypes = {
  newCard: PropTypes.object
}

export default SingleCard
