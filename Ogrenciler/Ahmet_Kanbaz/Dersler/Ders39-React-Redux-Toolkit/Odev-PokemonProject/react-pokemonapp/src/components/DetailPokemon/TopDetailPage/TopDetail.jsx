import PropTypes from 'prop-types'
import {TopDetailContainer} from './TopDetailStyle'
const TopDetail = ({topValues}) => {
  const {name, id} = topValues
  return (
    <TopDetailContainer>
      <h2>{name}</h2>
      <span><span>#</span>{id}</span>
    </TopDetailContainer>
  )
}

TopDetail.propTypes = {
  topValues: PropTypes.object
}

export default TopDetail