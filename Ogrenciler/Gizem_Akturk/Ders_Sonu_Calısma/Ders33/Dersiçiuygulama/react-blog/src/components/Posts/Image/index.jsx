import React from 'react'
import PropTypes from 'prop-types'
import "./style.css"

const Image = ({imgUrl}) => {
  return (
  <img src={imgUrl} alt="post" />
  )
}

export default Image

Image.propTypes = {
    imgUrl: PropTypes.string,
}