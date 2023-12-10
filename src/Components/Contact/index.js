import React from "react";
import "./Contact.css";
import Title from "../../shared/Title";

export default function Contact() {
  return (
    <div className="contact-container">
      <Title title="تماس با ما" description="با ما تماس بگیرید" />

      <div className="contact-section">
        <div className="info-contact">
          <div className="info address">
            <img src="/contact/geo-alt.svg" className="svg-contact" alt="" />
            <div className="infos">
              <h4>مکان:</h4>
              <p>تهران، پیروزی </p>
            </div>
          </div>
          <div className="info email">
            <img src="/contact/envelope.svg" className="svg-contact" alt="" />
            <div className="infos">
              <h4>ایمیل:</h4>
              <p>ktdanial76@gmail.com</p>
            </div>
          </div>
          <div className="info phone">
            <img src="/contact/phone.svg" className="svg-contact" alt="" />
            <div className="infos">
              <h4>شماره تماس:</h4>
              <p>09013538679</p>
            </div>
          </div>
        </div>

        <div className="form-contact">
          <input className="name" type="text" name="" placeholder="نام" id="" />
          <input
            className="email"
            type="email"
            name=""
            placeholder="ایمیل"
            id=""
          />
          <input
            className="title"
            type="text"
            name=""
            placeholder="عنوان"
            id=""
          />
          <textarea
            className="message"
            name=""
            id=""
            placeholder="پیام"
            cols="30"
            rows="10"
          ></textarea>
          <button>ارسال پیام</button>
        </div>
      </div>
    </div>
  );
}
