import { useState,useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getPokeDetail } from '../../redux/slices/cardSlice';
import DetailCard from '../DetailCard';
const Header = () => {
  const [pokeName, setPokeName] = useState();
  const [pokeData,setPokeData] = useState();
  const ref = useRef(0);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
      await fetch(url).then((res) => res.json()).then((res) => setPokeData(res));
      await dispatch(getPokeDetail(pokeData))
    }
    fetchData();
  },[pokeName])
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        setPokeName(ref.current.value);
      }}>
      <input type="text" ref={ref}/>
      <button type='submit'>asdas</button>
      </form>
      { pokeName && <DetailCard/> }
    </div>
  )
}

export default Header