import  { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from '../../redux/slices/cardSlice';
import Card from '../Card';
const Section = () => {
const [count,setCount] = useState(0);
const [pokes, setPokes] = useState([]);
const dispatch = useDispatch()
useEffect(() => {
   async function fetchData(item) {
    const url = item == 0 ? `https://pokeapi.co/api/v2/pokemon` : `https://pokeapi.co/api/v2/pokemon/?offset=${20*count}&limit=20`
    fetch(url).then((res) => res.json()).then((res) => setPokes(res.results));
    await console.log(pokes);
    await dispatch(getPokemons([...pokes,pokes]))
  }
  fetchData(count);
  }
,[count])

  return (
    <>
      <button onClick={() => setCount(count+1)}>click me</button>
      <Card/> 
    </>
  )
}

export default Section