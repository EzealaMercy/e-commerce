import React, {useEffect} from 'react'
import { ctaData } from '../Data';
import { Link } from 'react-router-dom';
import './cta.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Ctas = () => {
  useEffect(() =>{
    Aos.init({duration: 1000});
}, [])
  return (
    <div className='cta-container'>
        <h2 data-aos='fade-down-left' >Why p-Luxe?</h2>
        <div className="cta-item">
          <div className="cta-text">
            {ctaData.map((item) =>{
              return(
                <div  key={item.id} className="text">
                <ul>
                  <li data-aos='fade-right'>{item.heading}</li>
                </ul>
                <p data-aos='fade-up'>{item.desc}</p>
                </div> 
              )
            })}
          </div>
          <div className="img">
            <img data-aos='flip-up' data-aos-duration='1200' src='images/shop-open.jpg' alt='hair'></img>
            <button><Link to= '/Signup'>Get Started</Link></button>
          </div>
        </div>
    </div>
  )
}

export default Ctas;