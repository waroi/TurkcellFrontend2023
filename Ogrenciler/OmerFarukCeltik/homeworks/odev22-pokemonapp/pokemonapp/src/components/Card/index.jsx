import React from 'react'
import { useSelector } from 'react-redux'


const Card = () => {
  const pokeReducer = useSelector(state => state.card);
  return (
    <div>
      {
        pokeReducer.pokes && pokeReducer.pokes.map((item) => (
          <div key={item.name}>
          <div>{item.name}</div>
          </div>

        ))
      }
    </div>
  )
}

export default Card