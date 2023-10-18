import React from 'react';
import './info.css';

const Info = () => {
  return (
    <div className='info-max'>
                <div className= 'info-container'>
                    <div className="info-texts">
                        <i class='fa-solid fa-droplet'></i>
                        <h2>Skin Care</h2>
                        <p>Maximize your skin potential with our enhancing skill products, which works in synergy to give your beautiful skin</p>
                    </div>
                    <div  className="img">
                    <img src='images/skin-care.jpg' alt='skin-care' loading='lazy'/> 
                    </div>
                    <div className="info-texts">
                        <i class='fa-solid fa-helmet-safety'></i>
                        <h2>Quality Hair</h2>
                        <p>Use the best natural human hair to make every girl have the most cost effective and preety hair.</p>
                    </div>
                    <div className="img">
                    <img src='images/quality-hair.jpg' alt='hair' loading='lazy'/> 
                    </div>
                    <div className="info-texts">
                        <i class='fa-brands fa-gg-circle'></i>
                        <h2>Other brands</h2>
                        <p>bloom your beauty in every scene of life and be yourself confidently, and with these, create most effective result.</p>
                    </div>
                    <div className="img">
                    <img src='images/brands.jpg' alt='other brands' loading='lazy'/> 
                    </div>
                </div>
    </div>
  )
}

export default Info