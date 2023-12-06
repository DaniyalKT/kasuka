import React, { useState } from "react";
import "./Testimonials.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Testimonials() {
  const showSlides = [
    {
      img: "/employees/testimonials-3.jpg",
      name: "ینا کارلیس",
      title: "صاحب فروشگاه",
      description:
        "زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهمزیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم",
    },
    {
      img: "/employees/testimonials-1.jpg",
      name: "ساول گودمن",
      title: "مدیرعامل : پایه گذار",
      description:
        "زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهمزیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم",
    },
    {
      img: "/employees/testimonials-2.jpg",
      name: "مت براندون",
      title: "فریلنسر",
      description:
        "زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهمزیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم",
    },
    {
      img: "/employees/testimonials-5.jpg",
      name: "جان لارسون",
      title: "کارآفرین",
      description:
        "زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهمزیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم",
    },
  ];

  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === showSlides.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? showSlides.length - 1 : slide - 1);
  };
  return (
    <div className="tes-container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={nextSlide}
      ></BsArrowLeftCircleFill>

      {showSlides.map((item, i) => {
        return (
          <div className={slide === i ? "slide" : "slide slide-hidden"}>
            <img src={item.img} alt={item.name} className="img-tes" />
            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        );
      })}

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={prevSlide}
      ></BsArrowRightCircleFill>

      <span className="indicators">
        {showSlides.map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={
                slide === i ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}
