import PropTypes from 'prop-types'
const TopDetail = ({topValues}) => {
  const {name, id} = topValues
  return (
    <div>
      <h2>{name}</h2>
      <h4><span>#</span>{id}</h4>
    </div>
  )
}

TopDetail.propTypes = {
  topValues: PropTypes.object
}

export default TopDetail