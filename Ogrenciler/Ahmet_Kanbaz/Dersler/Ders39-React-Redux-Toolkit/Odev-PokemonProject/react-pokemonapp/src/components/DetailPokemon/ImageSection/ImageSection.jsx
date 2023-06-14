import PropTypes from 'prop-types'
import {DetailPokemonImage} from '../DetailPokemonStyle'
const ImageSection = ({imageSectionValues}) => {
  const {image} = imageSectionValues
  return (
    <DetailPokemonImage src={image} alt="pokemon" />
  )
}

ImageSection.propTypes = {
  imageSectionValues: PropTypes.object
}

export default ImageSection