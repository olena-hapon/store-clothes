import React, { useState, useEffect } from 'react';
import './Slider.scss';
import slider2 from "../../images/Slider/slider-3.jpg";
import slider from "../../images/Slider/slider-2.jpg";
import slider3 from "../../images/Slider/slider-1.jpg";
import arrowLeft from "../../images/Slider/Arrow_left.svg";
import arrowRight from "../../images/Slider/Arrow_right.svg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {image: slider, id: 0},
    {image: slider2, id: 1},
    {image: slider3, id: 2},
  ]

  const slideLeft = () => {
    setCurrentSlide((prev) => prev === 0 ? 2 : prev - 1 )
  };

  const slideRight = () => {
    setCurrentSlide((prev) => prev === 2 ? 0 : prev + 1)
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     slideRight()
  //   }, 5000)
  // })

  return (
    <div className='slider'>
      <div className="slider__container">
          <div className="slider__images-container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.image}
                alt=""
                className='slider__image'
              />
            ))}
          </div>
        <div className="slider__buttons">
          <button
            className='slider__button slider__button--left'
            onClick={slideLeft}
          >
            <img
              src={arrowLeft}
              alt="arrowLeft"
              className='arrow'
            />
          </button>

          <button
            className='slider__button slider__button--right'
            onClick={slideRight}
          >
            <img src={arrowRight} alt="arrowRight" className='arrow'
          />
          </button>
        </div>

        <div className="slider__pagination">
          {images.map((image) => (
            <button
              key={image.id}
              className={
                image.id === currentSlide
                ? 'pagination-dot pagination-dot--active'
                 : 'pagination-dot'
              }
              onClick={() => setCurrentSlide(image.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider