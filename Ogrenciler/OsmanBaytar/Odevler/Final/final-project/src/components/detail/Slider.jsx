import "../../styles/Slider.css";
import { useState, useEffect } from "react";

const Slider = (props) => {
  const [currentImage, setCurrentImage] = useState();
  useEffect(() => {
    setCurrentImage(props.data.image);
  }, [props.data.image]);

  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-ride="carousel"
      align="center"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={currentImage} className="rounded" />
        </div>
      </div>
      <ol className="carousel-indicators list-inline mt-3">
        <li
          onClick={(e) => setCurrentImage(e.target.src)}
          className="list-inline-item active"
        >
          <a
            id="carousel-selector-0"
            className="selected"
            data-slide-to="0"
            data-target="#myCarousel"
          >
            <img src={props.data.image} className="img-fluid rounded" />
          </a>
        </li>
        <li
          onClick={(e) => setCurrentImage(e.target.src)}
          className="list-inline-item"
        >
          <a
            id="carousel-selector-1"
            data-slide-to="1"
            data-target="#myCarousel"
          >
            <img
              src={props.data.sliderImages[0]}
              className="img-fluid rounded"
            />
          </a>
        </li>
        <li
          onClick={(e) => setCurrentImage(e.target.src)}
          className="list-inline-item"
        >
          <a
            id="carousel-selector-2"
            data-slide-to="2"
            data-target="#myCarousel"
          >
            <img
              src={props.data.sliderImages[1]}
              className="img-fluid rounded"
            />
          </a>
        </li>
        <li
          onClick={(e) => setCurrentImage(e.target.src)}
          className="list-inline-item"
        >
          <a
            id="carousel-selector-2"
            data-slide-to="2"
            data-target="#myCarousel"
          >
            <img
              src={props.data.sliderImages[2]}
              className="img-fluid rounded"
            />
          </a>
        </li>
        <li
          onClick={(e) => setCurrentImage(e.target.src)}
          className="list-inline-item"
        >
          <a
            id="carousel-selector-2"
            data-slide-to="2"
            data-target="#myCarousel"
          >
            <img
              src={props.data.sliderImages[3]}
              className="img-fluid rounded"
            />
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Slider;
