import PropTypes from 'prop-types'
import './singlecard.css'

const SingleCard = ({a}) => {
  return (
    <div className='singleCards'>
      {}
      {console.log(a)}
    </div>
  )
}

SingleCard.propTypes = {
  a: PropTypes.string
}

export default SingleCard
