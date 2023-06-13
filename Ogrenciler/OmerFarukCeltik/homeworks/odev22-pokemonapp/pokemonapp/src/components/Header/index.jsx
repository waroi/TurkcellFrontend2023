import { useState,useRef, useEffect } from 'react'

const Header = () => {
  const [pokeName, setPokeName] = useState();
  const [pokeData,setPokeData] = useState();
  const ref = useRef(0);
  useEffect(() => {
    async function fetchData() {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
      fetch(url).then((res) => res.json()).then((res) => setPokeData(res.results));
      await console.log(pokeData);
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
    </div>
  )
}

export default Header