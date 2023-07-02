import PropTypes from "prop-types";
const ProductCarousel = ({ image }) => {
  return (
    <div className="product-carousel-container">
      <div className="position-relative d-flex flex-column">
        <div
          id="productCarousel"
          className="carousel slide d-flex align-items-center pb-5 "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image} className="product-img img-fluid" />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/500/550"
                className="product-img img-fluid"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/500/550"
                className="product-img img-fluid"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/500/550"
                className="product-img img-fluid"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/500/550"
                className="product-img img-fluid"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="carousel-controller justify-content-center  d-flex  mt-2 flex-wrap">
          <img
            src={image}
            className="img-thumbnail m-1"
            data-bs-target="#productCarousel"
            data-bs-slide-to="0"
          />
          <img
            src="https://picsum.photos/500/550"
            className="img-thumbnail m-1"
            data-bs-target="#productCarousel"
            data-bs-slide-to="1"
          />
          <img
            src="https://picsum.photos/500/550"
            className="img-thumbnail m-1"
            data-bs-target="#productCarousel"
            data-bs-slide-to="2"
          />
          <img
            src="https://picsum.photos/500/550"
            className="img-thumbnail m-1"
            data-bs-target="#productCarousel"
            data-bs-slide-to="3"
          />
          <img
            src="https://picsum.photos/500/550"
            className="img-thumbnail m-1"
            data-bs-target="#productCarousel"
            data-bs-slide-to="4"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;

ProductCarousel.propTypes = {
  image: PropTypes.string,
};
