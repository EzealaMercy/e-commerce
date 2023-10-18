import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer"  style={{backgroundImage: `url(${'./images/cos6.jpg'})`}}>
      <div className="foot1">
        <h2>Service center</h2>
        <div className="foot-items">
        <h3><a href=''>Terms of Service</a></h3>
        <h3><a href=''>Cookie policy</a></h3>
        <h3><a href=''>FAQ</a></h3>
          <h3><a href=''>Support</a></h3>
          </div>
      </div>
      <div className="foot1">
        <h2>Get to know us</h2>
        <div className="foot-items">
          <h3><a href=''>About us</a></h3>
          <h3><a href=''>Location</a></h3>
          <h3><a href=''>Team members</a></h3>
          <h3><a href=''>return policy</a></h3>
          </div>
      </div>
      <div className="foot1">
        <h2>Join us on</h2>
        <div className="foot-items">
          <a href='"https://wa.me/08168317293"'><i class="fa-brands fa-whatsapp"></i></a>
          <a href="https://www.facebook.com/Promise.Ezeala"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.twitter.com/Mercybliss.Ezeala"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.instagram.com/Mercybliss.Ezeala"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <p className='copryt'>Copyright <i class='fa-regular fa-copyright'></i> 2023 Embliss softwares</p>
      </div>
    </div>
  )
}

export default Footer