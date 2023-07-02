import PropTypes from 'prop-types'
const ImageSellerWrapper = ({image}) => {
  return (
    <div className='col'>
      <img src={image} alt="seller" className='img-fluid'/>
      
    </div>
  )
}

ImageSellerWrapper.propTypes = {
  image: PropTypes.string
}

export default ImageSellerWrapper