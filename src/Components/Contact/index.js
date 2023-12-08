import React from "react";
import "./Contact.css";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Contact() {
  // const defaultProps = {
  //   center: {
  //     lat: 35.7381576,
  //     lng: 51.5065778
  //   },
  //   zoom: 10
  // };

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h2>تماس با ما</h2>
        <p>با ما تماس بگیرید </p>
      </div>

      <div className="map" >
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={35.7381576}
          lng={51.5065778}
          text="My Marker"
        />
      </GoogleMapReact> */}
      </div>

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
              <p>09013313341</p>
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
