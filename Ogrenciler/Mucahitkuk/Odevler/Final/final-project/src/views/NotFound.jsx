import { Container } from "react-bootstrap"
import notFound from "../assets/404done.jpg"

const NotFound = () => {
  return (
    <Container className="mt-5">
      <h3 className="text-center">404</h3>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <img src={notFound} className="img-fluid" />
      </div>
    </Container>
  )
}

export default NotFound