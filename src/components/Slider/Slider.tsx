import React from 'react';
import './Slider.scss';

const Slider = () => {
  return (
    <div className='slider'>
      <div className="slider__container">
        <div className="slider__swiper">
          <div className="slider__images-container">
            <div className="slider__img">
              <img
                src="/images/Slider/NEW-recommended-desktop-gifts-lds-podstrona-872x491px-151223.jpg"
                alt=""
                className='image'
              />
            </div>
            <div className="slider__img"></div>
            <div className="slider__img"></div>
          </div>
        </div>
        <div className="slider__button">

        </div>
        <div className="slider__pagination">

        </div>
      </div>
    </div>
  )
}

export default Slider