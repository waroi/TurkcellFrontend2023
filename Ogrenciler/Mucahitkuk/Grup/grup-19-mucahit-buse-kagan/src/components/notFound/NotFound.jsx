import {ErrorText} from "./notFoundStyled.jsx"
import PropTypes from 'prop-types';

const NotFound = ({error}) => {
  return (
    <ErrorText error={error}>Geçerli bir konum giriniz!</ErrorText>
  )
}

NotFound.propTypes = {
  error: PropTypes.string.isRequired,
};
export default NotFound

