import React from "react";
import { BsInstagram, BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";
import "./Team.css";

export default function Team() {
  const teamImages = [
    {
      img: "/Team/team-1.jpg",
      name: "والتر وایت",
      title: "مدیر ارشد اجرایی",
    },
    {
      img: "/Team/team-2.jpg",
      name: "سارا جونسون",
      title: "مدیر تولید",
    },
    {
      img: "/Team/team-3.jpg",
      name: "ویلیام اندرسون",
      title: "CTO",
    },
    {
      img: "/Team/team-4.jpg",
      name: "آماندا جپسون",
      title: "حسابدار",
    },
  ];

  return (
    <div className="taem-container">
      <div className="team-title">
        <h2>تیم</h2>
        <p>تیم ما را بررسی کنید </p>
      </div>

      <div className="team-section">
        {teamImages.map((item) => {
          return (
            <div className="member">
              <div className="member-img">
                <img src={item.img} alt={item.name} />
                <div className="social">
                  <a href="#">
                    <BsInstagram />
                  </a>
                  <a href="#">
                    <BsLinkedin />
                  </a>
                  <a href="#">
                    <BsTelegram />
                  </a>
                  <a href="#">
                    <BsTwitter />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>{item.name}</h4>
                <span>{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
