import styled from 'styled-components';
import PropTypes from 'prop-types';
export const Input = styled.div`
   display: flex;
  width: 100%;
  padding: 14px 16px 14px 28px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #99A2A5;
  overflow: hidden;
  background: #fff;
  input{
   width: 100%;
   border: none;
   outline: none;
    
  }
  textarea{
    width: 100%;
    border: none;
    outline: none;
    resize: none;
  }
  select{
    width: 100%;
    border: none;
    outline: none;
    appearance: none;
    -webkit-appearance: none
  }
  `

const BasicInput = ({ children }) => {
  return (
    <Input>{children}</Input>
  )
}

BasicInput.propTypes = {
  children: PropTypes.node.isRequired
}
export default BasicInput