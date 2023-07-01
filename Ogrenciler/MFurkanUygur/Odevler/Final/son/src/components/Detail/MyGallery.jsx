import ImageGallery from "react-image-gallery";

const MyGallery = () => {
    const images = [
        {
            original: "https://picsum.photos/id/42/500",
            thumbnail: "https://picsum.photos/id/42/500",
            originalHeight: "500px",
            originalWidth: "500px",
            thumbnailHeight: "100px",
            thumbnailWidth: "100px"
        },
        {
            original: "https://picsum.photos/200/300",
            thumbnail: "https://picsum.photos/200/300",
        }, {
            original: "https://picsum.photos/200/300",
            thumbnail: "https://picsum.photos/200/300",
        },
        {
            original: "https://picsum.photos/200/300",
            thumbnail: "https://picsum.photos/200/300",
        }, {
            original: "https://picsum.photos/200/300",
            thumbnail: "https://picsum.photos/200/300",
        },
        {
            original: "https://picsum.photos/200/300",
            thumbnail: "https://picsum.photos/200/300",
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

export default MyGallery;
