import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "nav-container active" : "nav-container"}>
      <div className="start">
        <button className="start-btn">شروع</button>
      </div>

      <nav className="nav-section">
        <ul>
          <li>
            <a href="#" className="link active-link">
              خانه
            </a>
          </li>
          <li>
            <a href="#" className="link">
              درباره ما
            </a>
          </li>
          <li>
            <a href="#" className="link">
              خدمات
            </a>
          </li>
          <li>
            <a href="#" className="link">
              نمونه کارها
            </a>
          </li>
          <li>
            <a href="#" className="link">
              تیم
            </a>
          </li>
          <li>
            <a href="#" className="link">
              لیست کشویی
            </a>
          </li>
          <li>
            <a href="#" className="link">
              تماس با ما
            </a>
          </li>
        </ul>
      </nav>
      {/* 
      <a href="#" className='open-nav'>
        <img src={OpenSVG} alt="" />
      </a> */}



      <div className="logo">
      <img src="./logo.png" alt="logo" className="logo-img" />

        <h1>KASUKA </h1>
      </div>


      <nav className="mobile">
        <input type="checkbox" id="toggle" hidden />

        <label htmlFor="toggle" className="lable-line">
          <span className="line line-top"></span>
          <span className="line line-mid"></span>
          <span className="line line-bottom"></span>
        </label>

        <ul>
          <li>
            <a href="#" className="link-mobile active-link">
              خانه
            </a>
          </li>
          <li>
            <a href="#" className="link-mobile">
              درباره ما
            </a>
          </li>
          <li>
            <a href="#" className="link-mobile">
              خدمات
            </a>
          </li>
          <li>
            <a href="#" className="link-mobile">
              نمونه کارها
            </a>
          </li>
          <li>
            <a href="#" className="link-mobile">
              تیم
            </a>
          </li>
          <li>
            <a href="#" className="link-mobile">
              لیست کشویی
            </a>
          </li>
          <li>
            <a href="#" className="link-mobile">
              تماس با ما
            </a>
          </li>
        </ul>

      </nav>
    </div>
  );
}
