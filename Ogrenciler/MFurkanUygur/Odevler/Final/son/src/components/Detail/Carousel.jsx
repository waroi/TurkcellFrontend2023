import ImageGallery from "react-image-gallery";
import PropTypes from 'prop-types'

const Carousel = ({item}) => {
    const images = [
        {
            original: `${item?.image}`,
            thumbnail:`${item?.image}`,
            originalHeight: "500px",
            originalWidth: "500px",
            thumbnailHeight: "100px",
            thumbnailWidth: "100px"
        },
        {
            original: "https://picsum.photos/id/238/200/300",
            thumbnail: "https://picsum.photos/id/238/200/300",
            originalHeight: "500px",
            originalWidth: "500px",
            thumbnailHeight: "100px",
            thumbnailWidth: "100px"
        }, {
            original: "https://picsum.photos/200/300",
            thumbnail: "https://picsum.photos/200/300",
            originalHeight: "500px",
            originalWidth: "500px",
            thumbnailHeight: "100px",
            thumbnailWidth: "100px"
        },
        {
            original: "https://picsum.photos/id/235/200/300",
            thumbnail: "https://picsum.photos/id/235/200/300",
            originalHeight: "500px",
            originalWidth: "500px",
            thumbnailHeight: "100px",
            thumbnailWidth: "100px"
        }
    ];
    const galleryOptions = {
        showThumbnails: true,
        showFullscreenButton: false,
        showPlayButton: false,
        autoPlay: false,
    };
    return (
        <div>
            <ImageGallery items={images} {...galleryOptions} />
        </div>
    );
};

export default Carousel;

Carousel.propTypes = {
    item: PropTypes.object
}