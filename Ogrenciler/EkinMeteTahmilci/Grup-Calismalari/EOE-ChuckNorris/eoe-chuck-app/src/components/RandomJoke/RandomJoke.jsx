import { RandomJokeCard } from './RandomJokeStyle'
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
const RandomJoke = () => {

  const joke = useSelector(state => state.randomJoke)


  return (
    <div>
      <RandomJokeCard>
        {joke}
      </RandomJokeCard>
    </div>
  )
}

export default RandomJoke