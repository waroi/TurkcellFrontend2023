import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://miro.medium.com/v2/resize:fit:2400/1*WUxVZS8b9o7Uo14kErQMCg.jpeg"
            alt="First slide"
            height={500}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://www.bitcoinsistemi.com/wp-content/uploads/2022/06/ethereum-bitcoin-eth-btc.jpg"
            alt="Second slide"
            height={500}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
