import PropTypes from 'prop-types'
import "./style.css"

const Content = ({text,title}) => {
  return (
    <div className="postText">
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Content
 
Content.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
}