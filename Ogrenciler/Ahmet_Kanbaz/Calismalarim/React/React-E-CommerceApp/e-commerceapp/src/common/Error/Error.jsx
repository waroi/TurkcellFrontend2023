import PropTypes from 'prop-types'
const Error = ({reduxValues}) => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger" role="alert">
              {reduxValues.error}
            </div>
          </div>
        </div>
      </div>
  )
}

Error.propTypes = {
  reduxValues: PropTypes.object
}

export default Error