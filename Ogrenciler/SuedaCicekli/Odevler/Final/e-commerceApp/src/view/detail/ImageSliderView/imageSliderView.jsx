import React, { useRef, useState, useEffect } from 'react';
import './imageSliderStyle.scss';
import icon from '../../../assets/icon/arrowRight.png';

const ImageSliderView = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const arrowIcons = document.querySelectorAll('.wrapper i');
    const firstImg = carousel.querySelector('img');

    const showHideIcons = () => {
      // showing and hiding prev/next icon according to carousel scroll left value
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
      arrowIcons[0].style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
      arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'block';
    };

    arrowIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        const firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id === 'left' ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
      });
    });

    const autoSlide = () => {
      // if there is no image left to scroll then return from here
      if (
        carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
        carousel.scrollLeft <= 0
      ) {
        return;
      }

      const valDifference = firstImg.clientWidth + 14 - Math.abs(positionDiff);
      if (carousel.scrollLeft > prevScrollLeft) {
        // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > (firstImg.clientWidth + 14) / 3 ? valDifference : -positionDiff;
      }
      // if user is scrolling to the left
      carousel.scrollLeft -= positionDiff > (firstImg.clientWidth + 14) / 3 ? valDifference : -positionDiff;
    };

    const dragStart = (e) => {
      // updatating global variables value on mouse down event
      setIsDragging(true);
      setPrevPageX(e.pageX || e.touches[0].pageX);
      setPrevScrollLeft(carousel.scrollLeft);
    };

    const dragging = (e) => {
      // scrolling images/carousel to left according to mouse pointer
      if (!isDragging) return;
      e.preventDefault();
      const currentPageX = e.pageX || e.touches[0].pageX;
      setPositionDiff(currentPageX - prevPageX);
      carousel.scrollLeft = prevScrollLeft - positionDiff;
      showHideIcons();
    };

    const dragStop = () => {
      setIsDragging(false);
      if (!isDragging) return;
      autoSlide();
    };

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('touchstart', dragStart);

    document.addEventListener('mousemove', dragging);
    carousel.addEventListener('touchmove', dragging);

    document.addEventListener('mouseup', dragStop);
    carousel.addEventListener('touchend', dragStop);

    return () => {
      // Cleanup event listeners on unmount
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('touchstart', dragStart);
      document.removeEventListener('mousemove', dragging);
      carousel.removeEventListener('touchmove', dragging);
      document.removeEventListener('mouseup', dragStop);
      carousel.removeEventListener('touchend', dragStop);
    };
  }, []);

  return (

    <div className='mt-5'>
      <div className="container">
        <h5>Preferred by influencers</h5>
        <div className="wrapper">
          <i id="left" src={icon} className="fa-solid fa-angle-right left-arrow">
            <img src={icon} alt="" className='left-icon' />
          </i>
          <div className="carousel z-index-1" ref={carouselRef}>
            <img
              src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhlcyUyMGNvbWJpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="img"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
              alt="img"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=800"
              alt="img"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="img"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1641808890181-fb0ca79e0018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="img"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1582147679065-a81ebc5e136e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="img"
              draggable="false"
            />
          </div>
          <i id="right" src={icon} className="fa-solid fa-angle-right">
            <img src={icon} alt="" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderView;
