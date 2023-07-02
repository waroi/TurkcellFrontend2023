import AllPokemons from "../../components/AllPokemons/AllPokemons"
import { Container } from "../../components/ContainerStyle"
import HomeTopCards from "../../components/HomeTopCards/HomeTopCards"
import Slider from "../../components/Slider/Slider"

const Home = () => {
  return (
    <Container>
      {/* <HomeTopCards /> */}
      <AllPokemons />
      <Slider />
    </Container>
  )
}

export default Home
