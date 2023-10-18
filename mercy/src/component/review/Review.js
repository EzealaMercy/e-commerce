import React from 'react';
import { RevData } from '../Data';
import './review.css';
import { useState, useEffect } from 'react';
import Aos from 'aos';

const Review = () => {
  const [current, setcurrent] = useState(0);
  const slidelength = RevData.length;


  const autoscroll = true;
  let slideinterval;

  const next = () => {
    setcurrent(current === slidelength-1 ? 0:current+1)
  };
  const prev = () => {
    setcurrent(current === 0? slidelength-1 : current-1)
  };

  function auto(){
    slideinterval = setInterval(next, 3000)
  }
  useEffect(() => {
    setcurrent(0);
  }, []);

  useEffect(()=>{
    if(autoscroll){
      auto()
    }
    return () => clearInterval (slideinterval);
  }, [current])

  return (
      <div className="hero">
        <div className="rev-heading">
          <h2>Reviews</h2>
          <p>We have
             built our reputation upon offering people safe, reliable products that respects our environment. These are some of our reviews from customer
          </p>
        </div>
        <div className="revbox">
          <div className="rev-slide">
            {RevData.map((slide, index) => {
              
            return(
              <article className={index === current? 'active' : 'slide'} >
                {index === current && (
                  <div className="profile">
                    <div className="img">
                      <img src={slide.image} alt= 'person' />
                    </div>
                    <div className="rev-text">
                      <h3>{slide.header}</h3>
                      <p>{slide.desc}</p>
                    </div>
                  </div> 
                )}  
              </article>
            )
            })}
          </div>
        </div>
        <div className="box">
          <div className="rev-slide">
            {RevData.map((slide, index) => {
              
            return(
              <article className= 'rev' >
                  <div className="profile">
                    <div className="img">
                      <img src={slide.image} alt= 'person' />
                    </div>
                    <div className="rev-text">
                      <h3>{slide.header}</h3>
                      <p>{slide.desc}</p>
                    </div>
                  </div> 
              </article>
            )
            })}
          </div>
        </div>
      </div>

  )
}

export default Review