import React from 'react'
import { useSelector } from 'react-redux'


const Card = () => {
  const pokeReducer = useSelector(state => state.card);
  if(pokeReducer.pokes){
    console.log(pokeReducer.pokes);
  }
  
  return (
    <div>
      {
        pokeReducer.pokes && pokeReducer.pokes.map((item) => (
          <div>{item.name}</div>
        ))
      }
    </div>
  )
}

export default Card