import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=141dcce43a0bfa88a38f0ee8b4656f6ed686c5af-8564680-images-thumbs&n=13"
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
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=141dcce43a0bfa88a38f0ee8b4656f6ed686c5af-8564680-images-thumbs&n=13"
          alt="Second slide"
          height={500}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=141dcce43a0bfa88a38f0ee8b4656f6ed686c5af-8564680-images-thumbs&n=13"
          alt="Third slide"
          height={500}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;