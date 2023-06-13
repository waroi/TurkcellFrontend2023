import {useSelector, useDispatch} from 'react-redux'
import {fetchLimitFunction} from '../../redux/slices/fetchLimit/fetchLimit'
import { useEffect } from 'react'
import SinglePokemon from './SingleLimitPokemon'
import {AllPokemonsContainer} from './LimitPokemonStyle'
import { fetchSingle } from '../../redux/slices/fetchSinglePokemon/fetchSinglePokemon'

const AllPokemons = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchLimitFunction())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const datas = useSelector((state) => state.fetchLimit.data)

  useEffect(() => {
    datas.map((data) => dispatch(fetchSingle(data.name)))
  }, [])

  const singlePokemon = useSelector((state) => state.fetchSinglePokemon.data)
  console.log(singlePokemon)
  return (
    <AllPokemonsContainer>
      {
        datas && datas.map((data) => <SinglePokemon key={data.name} data = {data}/>)
      }
    </AllPokemonsContainer>
  )
}

export default AllPokemons
