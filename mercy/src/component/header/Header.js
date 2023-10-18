import React, { useEffect } from 'react'
import { headerdata } from './headerData'
import './header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidelength = headerdata.length;

    const Autoscroll = true;
    let slideInterval;

    const next = () =>{
        setCurrentSlide(currentSlide === slidelength-1 ? 0:currentSlide + 1);
    };
    const prev = () =>{
        setCurrentSlide(currentSlide === 0 ? slidelength-1:currentSlide - 1);
    };

    function Auto(){
        slideInterval = setInterval(next,5000)
    }

    useEffect(() =>{
        setCurrentSlide(0);
    }, []);

    useEffect(() =>{
        if(Autoscroll){
            Auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);



  return (
    <div className='slider'>
        <div className="arrow-left">
        <i class = 'fa-solid fa-arrow-left' onClick={prev}></i>
        </div>
        <div className="arrow-right">
        <i class = 'fa-solid fa-arrow-right' onClick={next}></i> 
        </div>
        
        {headerdata.map((slide, index) => {
            return (
                <div className= {index === currentSlide ? 
                'slide current' : 'slide'} key = {index}>
                    {index === currentSlide && (
                        <>
                        <img className='slide-img' src={slide.video} />
                        <div className="slide-content">
                        <h1 className='header-heading'>{slide.heading}</h1>
                        <p className='header-desc'>{slide.desc}</p> 
                        <hr />
                        <h4><Link to= '/Signup'>Get Started<i class = 'fa-solid fa-arrow-right'></i></Link></h4>
                        </div>
                        </>
                    )}
                    
                </div>
            )
        })}
    </div>
  )
}

export default Header;