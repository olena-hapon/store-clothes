import React from 'react';
import './Slider.scss';
import banner from "../../images/Slider/black-midi-dress-varis-03.png";

const Slider = () => {
  return (
    <div className='slider'>
      <div className="slider__container">
        <div className="slider__swiper">
          <div className="slider__images-container">
            <div className="slider__img">
              <img
                src={banner}
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