import { Container } from "react-bootstrap"
import NavbarComponent from "./Navbar/NavbarComponent"

const Header = () => {
  return (
    <Container style={{zIndex: "50", position: "sticky"}}>
      <NavbarComponent />
    </Container>
  )
}

export default Header