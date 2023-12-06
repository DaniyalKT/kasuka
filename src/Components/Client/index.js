import React, { Component} from "react";
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
      cssEase: "linear",
    };

    const clientsLogo = [
      {
        img: "/sliders/client-1.png",
      },
      {
        img: "/sliders/client-2.png",
      },
      {
        img: "/sliders/client-3.png",
      },
      {
        img: "/sliders/client-4.png",
      },
      {
        img: "/sliders/client-5.png",
      },
      {
        img: "/sliders/client-6.png",
      },
      {
        img: "/sliders/client-7.png",
      },
      {
        img: "/sliders/client-8.png",
      },
    ];

    return (
      <div className="client-component">
        <Slider {...settings}>
          {clientsLogo.map((item) => {
            return (
              <div className="slider-component">
                <img src={item.img} alt="logo" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Client;
