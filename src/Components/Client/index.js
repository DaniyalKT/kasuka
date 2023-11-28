import React, { Component, useState } from "react";
import "./Client.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Client extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    };

    return (
      <div className="client-component">
        <Slider {...settings}>
          <div className="slider-component">
            <img src="/sliders/client-1.png" alt="logo" />
          </div>
          <div className="slider-component">
            <img src="/sliders/client-2.png" alt="logo" />
          </div>
          <div className="slider-component">
            <img src="/sliders/client-3.png" alt="logo" />
          </div>
          <div className="slider-component">
            <img src="/sliders/client-4.png" alt="logo" />
          </div>
          <div className="slider-component">
            <img src="/sliders/client-5.png" alt="logo" />
          </div>
          <div className="slider-component">
            <img src="/sliders/client-6.png" alt="logo" />
          </div>
          <div className="slider-component">
            <img src="/sliders/client-7.png" alt="logo" />
          </div>
          <div className="slider-component">
            <img src="/sliders/client-8.png" alt="logo" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Client;
