import React, {useEffect} from 'react';
import './article.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Article = ({image, heading, desc}) => {
      useEffect(() =>{
        Aos.init({duration: 1000});
    }, [])
  return (
          <div className="image">
            <img data-aos='zoom-in-up' data-aos-duration='1200' className='brand-img' src={image} alt='brand' />
            <div data-aos='fade-up-left' className="article-info">
              <h2>{heading}</h2>
              <p>{desc}</p>
            </div>
          </div>
  )
}

export default Article;