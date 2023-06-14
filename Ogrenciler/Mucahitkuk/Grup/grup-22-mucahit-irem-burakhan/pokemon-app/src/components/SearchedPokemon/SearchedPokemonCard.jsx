/* eslint-disable react/prop-types */
const SearchedPokemonCard = ({pokeData}) => {
  return (
    <div style={{position: 'relative', margin: '20px', backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px black', textTransform: 'capitalize'}}>
      <h3>{pokeData.name}</h3>
      <img style={{width: '150px', height: '150px'}} src={pokeData.sprites.front_default} alt={pokeData.name} />
      <h3>Type: {pokeData.types[0].type.name}</h3>
      <p>Height: {pokeData.height} <span>Weight: {pokeData.weight}</span></p>
      <p>Experience: {pokeData.base_experience}</p>
    </div>
  )
}

export default SearchedPokemonCard