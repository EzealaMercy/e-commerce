import React, { useEffect } from 'react';
import { brandData } from '../Data';
import Article from '../article/Article';
import './brand.css';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Brand = () => {
    useEffect(() =>{
        Aos.init({duration: 1000});
    }, [])

  return (
    <div className='brand'>
        <div data-aos='fade-up' className="brand-header">
            <h1>P-luxe entreprices</h1>
            
            <p>
                We use the best natural human hairs and cosmetics to make every lady have the most cost effective hair and skin care.
            </p> 
        </div>
        <div className="brand-info">
            {brandData.map((item) => (
                <Article 
                key = {item.id}
                image = {item.image}
                heading = {item.heading}
                desc = {item.desc}
                />
            ))}
        </div>
    </div>
  )
}

export default Brand;