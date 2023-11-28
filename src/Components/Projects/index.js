import React from "react";
import "./Project.css";

export default function Project() {
  return (
    <div className="project-container">
      <div className="project-title">
        <h2>نمونه کار ها</h2>
        <p>نمونه کار ها ما را بررسی کنید </p>
      </div>

      <div className="project-nav">
        <ul>
          <li className="project-title active-nav">همه</li>
          <li className="project-title">برنامه</li>
          <li className="project-title">محصول</li>
          <li className="project-title">اینترنت</li>
        </ul>
      </div>

      <div className="project-section">
      
        <img src="/Projects/portfolio-1.jpg" alt=""  className="protfilio img-1"/>
        <img src="/Projects/portfolio-2.jpg" alt=""  className="protfilio img-2"/>
        <img src="/Projects/portfolio-3.jpg" alt=""  className="protfilio img-3"/>
        <img src="/Projects/portfolio-4.jpg" alt="" className="protfilio img-4" />
        <img src="/Projects/portfolio-5.jpg" alt=""  className="protfilio img-5"/>
        <img src="/Projects/portfolio-6.jpg" alt=""  className="protfilio img-6"/>
        <img src="/Projects/portfolio-7.jpg" alt=""  className="protfilio img-7"/>
        <img src="/Projects/portfolio-8.jpg" alt=""  className="protfilio img-8"/>
        <img src="/Projects/portfolio-9.jpg" alt=""  className="protfilio img-9"/>
      </div>
    </div>
  );
}
