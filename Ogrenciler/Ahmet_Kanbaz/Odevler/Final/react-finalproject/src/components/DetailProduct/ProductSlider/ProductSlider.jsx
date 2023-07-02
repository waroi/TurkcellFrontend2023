import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PropTypes from "prop-types";

const ProductSlider = ({ images }) => {
  const imageItems = images.map((image, index) => ({
    original: image,
    thumbnail: image,
    originalAlt: `detailProductImage${index}`,
    thumbnailAlt: `detailProductThumb${index}`,
  }));

  const styleRenderImage = (image) => {
    return (
      <div className="image-gallery-image">
        <img
          src={image.original}
          alt={image.originalAlt}
          style={{ borderRadius: "10px", width: '100%', height: '30rem', objectFit:'contain' }}
        />
      </div>
    );
  };

  const styleThumbInnerImages = (image) => {
    return (
      <div className="image-gallery-thumnail-inner">
        <img
          src={image.thumbnail}
          alt={image.thumbnailAlt}
          style={{ borderRadius: "6px", border: "3px solid #F1D092", width: '5.875rem', height: '5.875rem', objectFit: 'cover' }}
        />
      </div>
    );
  };

  return (
    <ImageGallery
      items={imageItems}
      renderItem={styleRenderImage}
      renderThumbInner={styleThumbInnerImages}
    />
  );
};

ProductSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ProductSlider;
