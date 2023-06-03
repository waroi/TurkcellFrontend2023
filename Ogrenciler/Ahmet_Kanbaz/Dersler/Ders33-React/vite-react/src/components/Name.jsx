import PropTypes from 'prop-types';

const Name = ({isim}) => {
  return (
    <div>
      Merhaba {isim}
    </div>
  )
}

Name.propTypes = {
  isim: PropTypes.string.isRequired,
}

export default Name
