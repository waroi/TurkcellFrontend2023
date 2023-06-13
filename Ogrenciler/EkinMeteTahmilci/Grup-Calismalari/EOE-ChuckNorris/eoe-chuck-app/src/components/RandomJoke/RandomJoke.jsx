import { RandomJokeCard } from './RandomJokeStyle'
import { useSelector } from 'react-redux'
const RandomJoke = () => {
  const joke = useSelector((state) => state.jokes.joke);

  return (
    <div>
      <RandomJokeCard>
        {joke}
      </RandomJokeCard>
    </div>
  )
}

export default RandomJoke