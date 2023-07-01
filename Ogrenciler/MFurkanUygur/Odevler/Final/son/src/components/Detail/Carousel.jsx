/* eslint-disable react/prop-types */

const Carousel = ({ item }) => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${item?.image}`} className="d-block w-50" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/seed/picsum/400/400" className="d-block w-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/seed/picsum/400/400" className="d-block w-75" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Carousel