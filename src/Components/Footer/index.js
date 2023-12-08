import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-up"></div>
      <div className="footer-bottom">
        <div className="copyright">
          <strong>
            <span> Kasuka </span>
          </strong>       
          همه حقوق محفوظ است
        </div>
        <div className="credits">
          طراحی شده توسط 
          <a href='#'> Danial K-Tehrani</a>
        </div>
      </div>
    </div>
  )
}
