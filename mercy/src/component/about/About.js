import React, {useEffect} from 'react';
import './about.css';
import Brand from '../brand/Brand';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = ({cart}) => {
  useEffect(() =>{
    Aos.init({duration: 1500});
  }, [])
  return (
    <div className="about-all">
      <div className='about'>
      <div className="items">
        <h5>ABOUT US</h5>
        <h2 data-aos='fade-down'>Bloom your beauty in every scene of life with best hair and skin products.</h2>
        <p data-aos='fade-up'>We Use the best natural human hair to make every girl have the most cost effective hair, and also Maximize your skin potential with our enhancing skill products, which works in synergy to give your beautiful skin.</p>
        <button><Link to= '/Cart'>Shop Now</Link></button>
      </div>
      <div className="img">
        <img data-aos='fade-up' src='images/p-luxe-team.jpg' loading='lazy' alt='team' />
      </div>
      </div>
      <div className="mission">
        <div className="img">
          <img src='images/abt.jpg' alt='team' loading='lazy'/>
        </div>
        <div data-aos='fade-up' className="mis-items">
          <h2>Who We Are</h2>
          <p>For years we have inspired everyone to improve there look and beauty routine. We sell and distribute innovative and trend driven product to beauty lovers all over the world and offer them a unique possibility to be part of the world of beauty</p>
        </div>
      </div>
      <div className='abt'>
      <div className="items">
        <h5>HISTORY</h5>
        <h2  style={{width: '80%', fontSize: '33px'}}>How we started with growing our business</h2>
        <p>We started with just hair business in 2020, grew our business buy adding more products to store, from weavon we added attachements, hair cosmetics and every other thing that has to do with hair. One year later we patnered wwith oriflame ad Bismid for quality skin care products.</p>
      </div>
      <div className="img">
        <img src='images/ab3.png' loading='lazy' alt='team' />
      </div>
      </div>
      <Brand />
    </div>
  )
}

export default About