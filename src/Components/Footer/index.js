import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsLinkedin,
  BsTelegram,
  BsInstagram,
  BsTwitter,
  BsCaretLeftFill  
} from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-up">
        <div className="footer-contact">
          <h3>
            <img src="/logo.png" alt="" />
            kasuka
          </h3>
          <p>
            تهران، پیروزی
            <strong>تلفن: 09013313341</strong>
            <strong>ایمیل: ktdanial76@gmail.com</strong>
          </p>
          <div className="social-links">
            <a href="#">
              <BsFacebook className="social-icons"/>
            </a>
            <a href="#">
              <BsLinkedin className="social-icons"/>
            </a>
            <a href="#">
              <BsTelegram className="social-icons"/>
            </a>
            <a href="#">
              <BsInstagram className="social-icons"/>
            </a>
            <a href="#">
              <BsTwitter className="social-icons"/>
            </a>
          </div>
        </div>
        <div className="footer-link">
          <h4>لینک های مفید</h4>
          <ul>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> خانه</a></li>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> درباره ی ما</a></li>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> خدمات</a></li>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> شرایط استفاده از خدمات</a></li>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> سیاست حفظ حریم</a></li>
          </ul>
        </div>
        <div className="footer-link">
        <h4>لینک های مفید</h4>
          <ul>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> طراحی وب سایت</a></li>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> توسعه وب</a></li>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> مدیریت تولید</a></li>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> بازار یابی</a></li>
            <li><a href="#"><BsCaretLeftFill  className="chevron-left"/> طراحی گرافیک</a></li>
          </ul>
        </div>
        <div className="footer-newslatters">
          <h4>خبرنامه ما</h4>
          <p>با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
          <form action="" className="newslatter-form">
            <input type="email" />
            <input type="submit" value="دنبال کردن" />
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <strong>
            <span> Kasuka </span>
          </strong>
          همه حقوق محفوظ است
        </div>
        <div className="credits">
          طراحی شده توسط
          <a href="#"> Danial K-Tehrani</a>
        </div>
      </div>
    </div>
  );
}
