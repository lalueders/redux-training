import React from 'react';
import { useState } from 'react';
import { ImageSliderData } from './ImageSliderData';
import { Icon } from '@iconify/react';

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageSliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ImageSliderData) || ImageSliderData.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <Icon icon='material-symbols:chevron-left' style={{ color: 'red' }} className='right-arrow' onClick={prevSlide} />
      <Icon icon='material-symbols:chevron-right' style={{ color: 'red' }} className='left-arrow' onClick={nextSlide} />
      {ImageSliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={slide.image} alt='burger' className='image' />}
          </div>
        );
      })}
    </section>
  );
};
