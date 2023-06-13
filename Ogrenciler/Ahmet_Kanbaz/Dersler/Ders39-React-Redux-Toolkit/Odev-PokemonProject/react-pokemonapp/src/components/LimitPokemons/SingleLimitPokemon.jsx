/* eslint-disable react/prop-types */
import {SinglePokemonCard} from './LimitPokemonStyle'

const SinglePokemon = ({data}) => {
  return (
    <SinglePokemonCard>
      {data.name}
    </SinglePokemonCard>
  )
}

export default SinglePokemon
