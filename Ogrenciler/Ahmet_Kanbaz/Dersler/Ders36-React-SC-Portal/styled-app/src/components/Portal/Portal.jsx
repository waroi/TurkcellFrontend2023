import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
const Portal = ({text, target}) => {
  return ReactDOM.createPortal(
    <div>
      {text}
    </div>,
    document.getElementById(target)
  )
}

Portal.propTypes = {
  text: PropTypes.string,
  target: PropTypes.string
}

export default Portal
