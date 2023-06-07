import PropTypes from 'prop-types'

const UsingUseRef = ({defaultRef}) => {
  return (
    <div ref={defaultRef}>
      Using UseRef Componenti
    </div>
  )
}

UsingUseRef.propTypes = {
  defaultRef: PropTypes.object
}

export default UsingUseRef
