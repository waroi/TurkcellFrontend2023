import PropTypes from "prop-types"
const Carousel = ({ img }) => {
    return (
        <div id="productCarouselIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#productCarouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#productCarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#productCarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img} className="d-block w-100" alt="product" />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/237/200/300" className="d-block w-100" alt="slider2" />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/217/200/300" className="d-block w-100" alt="slider3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productCarouselIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productCarouselIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    )
}

Carousel.propTypes = {
    img: PropTypes.string.isRequired
}

export default Carousel