import React from 'react';
import './style.css'

const Slider = ({ newsArr }) => {
  console.log(newsArr);
  const newsSlice = newsArr.slice(0, 3);

  return (
    <div className="my-5">
      <div className='d-flex justify-content-center container slider-mt'>
        <div id="carouselExampleCaptions" className="carousel slide w-75" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            {newsSlice.map((news, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={news.image} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block mb-5 ">
                  <h5>{news.name}</h5>
                  <p className='mb-5'>{news.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div></div>
  );
};

export default Slider;
