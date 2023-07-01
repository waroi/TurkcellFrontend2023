import ImageGallery from "react-image-gallery";

const MyGallery = () => {
  const images = [
    {
      original: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
    },
    {
      original: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
    },  {
        original: "https://picsum.photos/200/300",
        thumbnail: "https://picsum.photos/200/300",
      },
      {
        original: "https://picsum.photos/200/300",
        thumbnail: "https://picsum.photos/200/300",
      },  {
        original: "https://picsum.photos/200/300",
        thumbnail: "https://picsum.photos/200/300",
      },
      {
        original: "https://picsum.photos/200/300",
        thumbnail: "https://picsum.photos/200/300",
      }
  ];

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default MyGallery;
