import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide, SlideH3, SlideImg, SliderContainer, SlideTextWrap } from './CarrouselElements';

const img1 = require('../../img/carrousel/1.jpeg').default;
const img2 = require('../../img/carrousel/2.jpeg').default;
const img3 = require('../../img/carrousel/3.jpeg').default;
const img4 = require('../../img/carrousel/4.jpeg').default;
const img5 = require('../../img/carrousel/5.jpeg').default;
const img6 = require('../../img/carrousel/6.jpeg').default;
const img7 = require('../../img/carrousel/7.jpeg').default;
const img8 = require('../../img/carrousel/8.jpeg').default;



const index = () => {
  const settings = {
    arrows: true,
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <SliderContainer>
    <Slider {...settings}>
      <Slide>
        <SlideImg src={img1}/>
        <SlideTextWrap>
          <SlideH3>
            Albañilería
          </SlideH3>
        </SlideTextWrap>
      </Slide>
      <Slide>
        <SlideImg src={img2}/>
        <SlideTextWrap>
          <SlideH3>
          Albañilería
          </SlideH3>
        </SlideTextWrap>
      </Slide>
      <Slide>
        <SlideImg src={img3}/>
        <SlideTextWrap>
          <SlideH3>
          Albañilería
          </SlideH3>
        </SlideTextWrap>
      </Slide>
      <Slide>
        <SlideImg src={img4}/>
        <SlideTextWrap>
          <SlideH3>
          Tabla roca
          </SlideH3>
        </SlideTextWrap>
      </Slide>
      <Slide>
        <SlideImg src={img5}/>
        <SlideTextWrap>
          <SlideH3>
          Plomería
          </SlideH3>
        </SlideTextWrap>
      </Slide>
      <Slide>
        <SlideImg src={img6}/>
        <SlideTextWrap>
          <SlideH3>
          Herrería
          </SlideH3>
        </SlideTextWrap>
      </Slide>
      <Slide>
        <SlideImg src={img7}/>
        <SlideTextWrap>
          <SlideH3>
          Pintura
          </SlideH3>
        </SlideTextWrap>
      </Slide>
      <Slide>
        <SlideImg src={img8}/>
        <SlideTextWrap>
          <SlideH3>
          Electricidad
          </SlideH3>
        </SlideTextWrap>
      </Slide>
    </Slider>
    </SliderContainer>
  )
}

export default index
