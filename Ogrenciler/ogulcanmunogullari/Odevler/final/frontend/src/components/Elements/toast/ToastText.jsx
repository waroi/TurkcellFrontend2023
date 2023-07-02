import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Text = styled.p`
  color: ${props => props.color};
`


const ToastText = ({ children, color }) => {
 return (
  <Text color={color}>{
   children
  }</Text>
 )
}

ToastText.propTypes = {
 children: PropTypes.node.isRequired,
 color: PropTypes.string.isRequired
}


export default ToastText