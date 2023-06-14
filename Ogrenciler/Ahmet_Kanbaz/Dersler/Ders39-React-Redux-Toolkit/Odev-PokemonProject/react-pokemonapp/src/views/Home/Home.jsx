import AllPokemons from "../../components/AllPokemons/AllPokemons"
import { Container } from "../../components/ContainerStyle"
import Slider from "../../components/Slider/Slider"

const Home = () => {
  return (
    <Container>
      <Slider />
      <AllPokemons />
    </Container>
  )
}

export default Home
