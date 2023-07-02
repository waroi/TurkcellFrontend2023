import PropTypes from 'prop-types'
import {MdError} from 'react-icons/md'
import {FormErrorStyle} from './FormErrorStyle'
const FormError = ({message}) => {
  return (
    <FormErrorStyle className='position-absolute text-danger top-100 start-0'>
      <MdError /> {message}
    </FormErrorStyle>
  )
}

FormError.propTypes = {
  message: PropTypes.string
}

export default FormError