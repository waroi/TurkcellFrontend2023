import { useEffect, useRef, useState } from 'react'
import { CustomDiv} from './styled'
import { useDispatch } from 'react-redux';
import { getRTX } from '../../redux/slice/pokemonSlice';
import SearchedPokemonCard from '../SearchedPokemon/SearchedPokemonCard';


const Search = () => {
  const dispatch = useDispatch();
  const [graphics, setGraphics] = useState(false)
  dispatch(getRTX(graphics))
  const [pokeName, setPokeName] = useState();
  const [pokeData,setPokeData] = useState();
  const ref = useRef(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error occurred while fetching data");
        }
        const data = await response.json();
        setPokeData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if(pokeName) {
      fetchData()
    }
  }, [pokeName]);

  return (
    <CustomDiv>
      <h4 style={{color: "yellow", marginBottom:"10px"}}>Pokemon Cart Collection Ultimate</h4>
      <form onSubmit={(e) => {
        e.preventDefault();
        setPokeName(ref.current.value);
      }}>
      <input type="text" ref={ref} style={{marginBottom: "10px"}} placeholder='Search for a pokemon'></input>
      <button type='submit'>Search</button>
      </form>
      <button style={{width: "160px"}} onClick={() => setGraphics(!graphics)}>Change Graphics </button>
      <p>{!graphics ? "Unlost(lowest) graphics" : "RTX Graphics"}</p>
      {pokeData && <SearchedPokemonCard pokeData={pokeData} />}
    </CustomDiv>
  )
}

export default Search