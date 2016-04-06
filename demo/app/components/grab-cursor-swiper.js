import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    slidesPerView: 4,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    grabCursor: true
  }

  return(
    <Slider title="Grab Cusor" slides={props.slides} params={params} id={props.id} />
  )
};