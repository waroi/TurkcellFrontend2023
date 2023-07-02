import PropTypes from "prop-types"
import Guarantees from "../Guarantees/Guarantees"
import Share from "../Share/Share"
import shareAndroid from "../../../assets/Share_Android.svg"
import StyledTextShare from "../../../styledComponents/StyledTextShare"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
const Carousel = ({ img }) => {

    const images = [
        {
            original: img,
            thumbnail: img,
            originalHeight: "500px",
            originalWidth: "500px",
            thumbnailHeight: "100px",
            thumbnailWidth: "100px"
        },
        {
            original: "https://picsum.photos/id/12/500",
            thumbnail: "https://picsum.photos/id/12/500",
            originalHeight: "500px",
            originalWidth: "500px",
            thumbnailHeight: "100px",
            thumbnailWidth: "100px"
        },
        {
            original: "https://picsum.photos/id/32/500",
            thumbnail: "https://picsum.photos/id/32/500",
            originalHeight: "500px",
            originalWidth: "500px",
            thumbnailHeight: "100px",
            thumbnailWidth: "100px"
        },
        {
            original: "https://picsum.photos/id/42/500",
            thumbnail: "https://picsum.photos/id/42/500",
            originalHeight: "500px",
            originalWidth: "500px",
            thumbnailHeight: "100px",
            thumbnailWidth: "100px"
        },
    ];

    const galleryOptions = {
        showThumbnails: true,
        showFullscreenButton: false,
        showPlayButton: false,
        autoPlay: false,
    };

    return (
        <div>
            <ImageGallery items={images} {...galleryOptions}></ImageGallery>
            <div className="d-none d-lg-block">
                <Guarantees />
                <div className="d-flex">
                    <StyledTextShare>
                        <img src={shareAndroid} alt="share" />
                        Share:
                    </StyledTextShare>
                    <Share />
                </div>
            </div>
        </div>
    )
}

Carousel.propTypes = {
    img: PropTypes.string
}

export default Carousel