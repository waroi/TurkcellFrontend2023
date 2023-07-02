import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Toasted = styled.div`
  position: fixed;
  padding: 10px 20px;
  border: 1px solid ${props => props.bcolor};
  border-radius: 5px;
  animation: slideTop 2.9s 1 ;
  @keyframes slideTop {
   0% {
    bottom: 30px;
    right: 30px;
    opacity: 1;
   }
   100% {
    bottom: 300px;
    right: 30px;
    opacity: 0;
   }
  }

`


const Toast = ({ children, bcolor }) => {
 return (
  <Toasted bcolor={bcolor}>
   {children}
  </Toasted>
 )
}

Toast.propTypes = {
 children: PropTypes.node.isRequired,
 bcolor: PropTypes.string.isRequired
}


export default Toast