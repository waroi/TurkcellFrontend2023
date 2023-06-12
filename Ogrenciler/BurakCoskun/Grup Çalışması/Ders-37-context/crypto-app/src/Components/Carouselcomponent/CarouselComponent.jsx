import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/6765369/pexels-photo-6765369.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
            height={500}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
