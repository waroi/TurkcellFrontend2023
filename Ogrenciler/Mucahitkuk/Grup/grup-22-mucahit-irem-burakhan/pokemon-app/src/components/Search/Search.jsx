import { useState } from 'react'
import { CustomDiv} from './styled'
import { useDispatch } from 'react-redux';
import { getRTX } from '../../redux/slice/pokemonSlice';


const Search = () => {
  const dispatch = useDispatch();
  const [graphics, setGraphics] = useState(false)
  dispatch(getRTX(graphics))

  

  return (
    <CustomDiv>
      <h4 style={{color: "yellow", marginBottom:"10px"}}>Pokemon Cart Collection Ultimate</h4>
      <input style={{marginBottom: "10px"}} placeholder='Search for a pokemon'></input>
      <button onClick={() => setGraphics(!graphics)}>Change Graphics </button>
      <p>{!graphics ? "Unlost(lowest) graphics" : "RTX Graphics"}</p>
    </CustomDiv>
  )
}

export default Search