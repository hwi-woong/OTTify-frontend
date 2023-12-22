import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../CSS/SlidePoster.css'

import poster from '../img/poster.jpg';
import favorite from '../img/favorite.png';
import arrow from '../img/arrow.png';

const NextArrow = ({ onClick }) => (
  <button onClick={onClick} type='button' id="nextBtn" className="sliderBtn">
    <img src={arrow} alt="Next" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} type='button' id="prevBtn" className="sliderBtn">
    <img src={arrow} alt="Prev" />
  </button>
);

const SlidePoster = () => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>, // 화살표 버튼을 커스텀해서 사용
		prevArrow: <PrevArrow/>
  });

  return (
    <div>
      <Slider {...sliderSettings}>
        <div className = "like_slider">
          <img src = {poster} className='poster_img_like'></img>
          <img src = {favorite} className='poster_favorite'></img>
        </div>
        <div className = "like_slider">
          <img src = {poster} className='poster_img_like'></img>
          <img src = {favorite} className='poster_favorite'></img>
        </div>
        <div className = "like_slider">
          <img src = {poster} className='poster_img_like'></img>
          <img src = {favorite} className='poster_favorite'></img>
        </div>
        <div className = "like_slider">
          <img src = {poster} className='poster_img_like'></img>
          <img src = {favorite} className='poster_favorite'></img>
        </div>
        <div className = "like_slider">
          <img src = {poster} className='poster_img_like'></img>
          <img src = {favorite} className='poster_favorite'></img>
        </div>
        <div className = "like_slider">
          <img src = {poster} className='poster_img_like'></img>
          <img src = {favorite} className='poster_favorite'></img>
        </div>
        <div className = "like_slider">
          <img src = {poster} className='poster_img_like'></img>
          <img src = {favorite} className='poster_favorite'></img>
        </div>
        <div className = "like_slider">
          <img src = {poster} className='poster_img_like'></img>
          <img src = {favorite} className='poster_favorite'></img>
        </div>
      </Slider>
    </div>
  );
};



export default SlidePoster;
