import PropTypes from "prop-types"
import { Box } from "./basicBoxStyle"

const BasicBox = ({ children, bcolor }) => {
  return (
    <Box $bordercolor={bcolor}>
      {children}
    </Box>
  )
}

BasicBox.propTypes = {
  children: PropTypes.node.isRequired,
  bcolor: PropTypes.string.isRequired
}


export default BasicBox