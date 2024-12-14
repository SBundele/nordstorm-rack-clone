import React from 'react'
import Slider from "react-slick";
import sale1 from '../../assets/images/sale-1.webp'
import sale2 from '../../assets/images/sale-2.webp'
import sale3 from '../../assets/images/sale-3.webp'

function FadeCorousel() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        <div className='img-div'>
          <img src={sale1} />
        </div>
        <div className='img-div'>
          <img src={sale2} />
        </div>
        <div className='img-div'>
          <img src={sale3} />
        </div>
      </Slider>
    </section>
  );
}

export default FadeCorousel
